import { useSearchParams } from "react-router-dom";
import '../styles/ProductItem.Css'

function ProductItem() {
    const [searchParams] = useSearchParams();

    const name = searchParams.get('name');

    return (
        <div className="ProductItem">
            <h1>{name}</h1>
        </div>
    )
}

export default ProductItem