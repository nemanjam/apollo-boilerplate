# Fullstack Apollo React Hooks MongoDB boilerplate

[![Build Status](https://travis-ci.org/the-road-to-graphql/fullstack-apollo-react-boilerplate.svg?branch=master)](https://travis-ci.org/the-road-to-graphql/fullstack-apollo-react-boilerplate) [![Slack](https://slack-the-road-to-learn-react.wieruch.com/badge.svg)](https://slack-the-road-to-learn-react.wieruch.com/) [![Greenkeeper badge](https://badges.greenkeeper.io/the-road-to-graphql/fullstack-apollo-react-boilerplate.svg)](https://greenkeeper.io/)

This is updated Robin Wieruch's fullstack boilerplate with hooks instead render props Apollo API and functional instead class components.

## Links to original repos

Client Applications:

- [React Client](https://github.com/the-road-to-graphql/fullstack-apollo-react-boilerplate)

Server Applications:

- [Node.js with Express + MongoDB](https://github.com/the-road-to-graphql/fullstack-apollo-express-mongodb-boilerplate)

## Features of Client + Server

- React (create-react-app) with Apollo Client
  - Queries, Mutations, Subscriptions
- Node.js with Express and Apollo Server
  - cursor-based Pagination
- MongoDB
  - entities: users, messages
- Authentication
  - powered by JWT and local storage
  - Sign Up, Sign In, Sign Out
- Authorization
  - protected endpoint (e.g. verify valid session)
  - protected resolvers (e.g. e.g. session-based, role-based)
  - protected routes (e.g. session-based, role-based)
- performance optimizations
  - example of using Facebook's dataloader
- E2E testing

## Installation

- `git clone git@github.com:nemanjam/apollo-boilerplate.git`
- `cd apollo-boilerplate/client`
- `cd apollo-boilerplate/server`
- `npm install`
- `npm start`
- visit `http://localhost:3000 for client and http://localhost:8000 for server`
