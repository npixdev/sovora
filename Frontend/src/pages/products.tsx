import { useOutletContext } from 'react-router-dom'
import { products } from '../datas/productList.js'
import ProductListItem from '../components/ProductListItem.tsx'
import '../styles/products.css'

function Products() {
    const {search} = useOutletContext<{ search: string }>();

    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <ul>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(({ id, cover, name, price }) => (
                        <div key={id} className='productListItem'>
                            <ProductListItem 
                                cover={cover}
                                name={name}
                                price={price}
                            />
                        </div>
                    ))
                ) : (
                    <p>Aucun produit trouvé</p>
                )}
            </ul>
        </>
    )
}

export default Products
