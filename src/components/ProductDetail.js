import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const params = useParams();
    const id = params.id;
    return (
        <>
            <h1>Product {id}</h1>
            <p>Product Price</p>
        </>
    );
};
export default ProductDetail;
