import React from 'react';
import { users } from 'data/Users';
import UserListItem from 'components/UsersList/UserListItem/UserListItem';
import PropTypes from 'prop-types';

const UsersList = () => {
  return (
    <div>
      <ul>
        {users.map((userData) => (
          <UserListItem userData={userData} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
