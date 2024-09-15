/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types'

const UserContext = createContext();

const UserProvider = ({ children, user }) => {
  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
    user: PropTypes.shape({
        role: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired
}

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
