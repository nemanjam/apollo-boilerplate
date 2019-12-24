import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import ErrorMessage from '../Error/Error';
import { CREATE_MESSAGE } from '../../graphql/mutations';

class MessageCreate extends Component {
  state = {
    text: '',
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = async (event, createMessage) => {
    event.preventDefault();

    try {
      await createMessage();
      this.setState({ text: '' });
    } catch (error) {}
  };

  render() {
    const { text } = this.state;

    return (
      <Mutation
        mutation={CREATE_MESSAGE}
        variables={{ text }}
        // Not used anymore because of Subscription

        // update={(cache, { data: { createMessage } }) => {
        //   const data = cache.readQuery({
        //     query: GET_ALL_MESSAGES_WITH_USERS,
        //   });

        //   cache.writeQuery({
        //     query: GET_ALL_MESSAGES_WITH_USERS,
        //     data: {
        //       ...data,
        //       messages: {
        //         ...data.messages,
        //         edges: [createMessage, ...data.messages.edges],
        //         pageInfo: data.messages.pageInfo,
        //       },
        //     },
        //   });
        // }}
      >
        {(createMessage, { data, loading, error }) => (
          <form
            onSubmit={event => this.onSubmit(event, createMessage)}
          >
            <textarea
              name="text"
              value={text}
              onChange={this.onChange}
              type="text"
              placeholder="Your message ..."
            />
            <button type="submit">Send</button>

            {error && <ErrorMessage error={error} />}
          </form>
        )}
      </Mutation>
    );
  }
}

export default MessageCreate;
