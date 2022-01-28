import React from "react";
import { Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";

const PrivateRoute = ({ children, auth: { isAuthenticated, loading } }) => {
  return isAuthenticated && !loading ? children : <Navigate to="/" />;
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
