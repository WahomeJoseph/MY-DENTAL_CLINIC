/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { Navigate, useOutletContext, Outlet } from "react-router-dom";
import PropTypes from 'prop-types'

const ProtectedRoute = ({role}) => {
	const context = useOutletContext();

	console.log(context)
	if (!context.user || !context.user?.role.includes(role)) {
		return <Navigate to="/login" replace />;
	}

	return <Outlet context={context}/>;
};

ProtectedRoute.propTypes = {
  role: PropTypes.string.isRequired,
}

export default ProtectedRoute;

// import React, { Children } from 'react'
// import { Navigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'

// const ProtectedRoute = () => {
//   const token = useSelector((state) => state.token.value)
//    return token ? Children : <Navigate to="/login"/>
// }

// export default ProtectedRoute
