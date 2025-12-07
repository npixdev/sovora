import '../styles/ProductListItem.css'
import { Link } from 'react-router-dom'

type ProductListItemProps = {
    cover: string;
    name: string;
    price: number;
};

function ProductListItem ({ cover, name, price }: ProductListItemProps) {
    return (
        <Link to={`/product?name=${name}`}>
            <li>
                <img src={cover}></img>
                <h1>{name}</h1>
                <p>{price}€</p>
            </li>
        </Link>
    )
}

export default ProductListItem