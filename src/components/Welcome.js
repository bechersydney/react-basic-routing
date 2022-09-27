import { Link, Route } from "react-router-dom";

const Welcome = () => {
    return (
        <>
            <h1>Welcome page!</h1>
            <Link to="/welcome/new-user">Greet new user</Link>
            <Route path="/welcome/new-user">
                <p>Welcome new user</p>
            </Route>
        </>
    );
};
export default Welcome;
