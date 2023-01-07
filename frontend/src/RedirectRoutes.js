import { Navigate } from "react-router-dom";
import { store } from "./redux/store";

const RedirectRoute = ({ children }) => {
    const userData = store.getState().userInfo.auth;
    alert(userData);
    if (userData) {
        return <Navigate to="/" replace />;
    }
    return children;
};

export default RedirectRoute;