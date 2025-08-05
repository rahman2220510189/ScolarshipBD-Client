import { useContext } from "react";
import { AuthContext } from "../Pages/Firebase/Providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
     if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }
  if(!user) {
    return <Navigate to = '/login' replace />
  }
    return children
};

export default PrivateRoute;