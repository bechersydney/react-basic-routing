import { Redirect, Route, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Product from "./components/Products";
import Welcome from "./components/Welcome";
import ProductDetail from "./components/ProductDetail";

const App = () => {
    return (
        <>
            <MainHeader />
            {/* Switch = make only one active route */}
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/welcome" />
                </Route>
                <Route path="/welcome">
                    <Welcome />
                </Route>
                <Route path="/products" exact>
                    <Product />
                </Route>
                <Route path="/products/:id">
                    <ProductDetail />
                </Route>
            </Switch>
        </>
    );
};

export default App;
