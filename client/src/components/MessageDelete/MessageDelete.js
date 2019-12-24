import React from 'react';
import { Mutation } from 'react-apollo';
import { GET_ALL_MESSAGES_WITH_USERS } from '../../graphql/queries';
import { DELETE_MESSAGE } from '../../graphql/mutations';

const MessageDelete = ({ message }) => (
  <Mutation
    mutation={DELETE_MESSAGE}
    variables={{ id: message.id }}
    update={cache => {
      const data = cache.readQuery({
        query: GET_ALL_MESSAGES_WITH_USERS,
      });

      cache.writeQuery({
        query: GET_ALL_MESSAGES_WITH_USERS,
        data: {
          ...data,
          messages: {
            ...data.messages,
            edges: data.messages.edges.filter(
              node => node.id !== message.id,
            ),
            pageInfo: data.messages.pageInfo,
          },
        },
      });
    }}
  >
    {(deleteMessage, { data, loading, error }) => (
      <button type="button" onClick={deleteMessage}>
        Delete
      </button>
    )}
  </Mutation>
);

export default MessageDelete;
