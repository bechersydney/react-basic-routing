import { Link, useNavigate } from "react-router-dom";

const Product = () => {
    const navigate = useNavigate();
    // navigate("/welcome", { replace: true });
    // navigate(-1)  go backward page or go forward
    return (
        <>
            <h1>Product page!</h1>
            <ul>
                <li>
                    <Link to="/products/1">prouduct 1</Link>
                </li>
                <li>
                    <Link to="/products/2">prouduct 2</Link>
                </li>
                <li>
                    <Link to="/products/3">prouduct 3</Link>
                </li>
            </ul>
        </>
    );
};
export default Product;
