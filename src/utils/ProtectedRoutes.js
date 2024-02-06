import { Route, redirect } from "react-router-dom";

const ProtectedRoutes = ({ children, ...rest }) => {
  let auth = { token: false };
  return (
    <Route {...rest}>
      {auth.token
        ? children
        : // <redirect to="/login" />}
          children}
    </Route>
  );
};

export default ProtectedRoutes;
