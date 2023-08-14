import { Outlet,Navigate } from "react-router-dom";

const PrivateRoute = () => {
    let loggedin = false;

    if(loggedinFalse){
        return <Outlet />
    } else {
        <Navigate to={"/register"} />
    }

}