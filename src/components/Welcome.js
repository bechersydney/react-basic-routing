import { Link, Outlet } from "react-router-dom";

const Welcome = () => {
    return (
        <>
            <h1>Welcome page!</h1>
            <Link to="new-user">Greet new user</Link>
            {/* place the template from nested routes */}
            {/* see the nested route in welcome in app.js
             */}
            <Outlet />
        </>
    );
};
export default Welcome;
