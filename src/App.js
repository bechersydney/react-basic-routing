import { Navigate, Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./components/ProductDetail";
import Product from "./components/Products";
import Welcome from "./components/Welcome";

const App = () => {
    return (
        <>
            <MainHeader />

            <Routes>
                {/* used when accept all path start with welcome and much usable in nested routes
                 */}
                <Route path="/welcome/*" element={<Welcome />}>
                    <Route path="new-user" element={<p>Welcome new user</p>} />
                </Route>

                <Route path="/products" exact element={<Product />} />

                <Route
                    path="/products/:productId"
                    element={<ProductDetail />}
                />
                <Route path="/" element={<Navigate to="/welcome" replace />} />
            </Routes>
        </>
    );
};

export default App;
