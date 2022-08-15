import React, { Component } from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/UsersListItem/UsersListItem';

console.log(users);

const UsersList = () => (
  <div>
    <ul>
      {users.map((userData) => (
        <UsersListItem userData={userData} />
      ))}
    </ul>
  </div>
);

export default UsersList;
