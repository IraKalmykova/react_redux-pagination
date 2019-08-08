import React from 'react';
import PropTypes from 'prop-types';
import './UserList.css';
import { connect } from 'react-redux';

const UserList = ({ users }) => (
  <div className="users-list">
    <h1 className="users-list__title">User List</h1>
    {users.map(user => (
      <div className="user" key={user.id}>
        {user.name}
        &nbsp;
        {user.surname}
      </div>

    ))}
  </div>
);

const mapStateToProps = state => ({
  users: state.shownUsers,
  activeUserDesc: state.activeUserDesc,
});

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(UserList);
