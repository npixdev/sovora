import { useProducts } from '../datas/productList.js';
import { useOutletContext } from 'react-router-dom'
import ProductListItem from '../components/ProductListItem.tsx'
import '../styles/products.css'

function Products() {
    const {search} = useOutletContext<{ search: string }>();
    
    const products = useProducts()

    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );
    
    return (
        <>
            <ul>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(({ id, name, price, images }) => {
                        const cover = images.find((img: any) => img.is_main)?.image_url

                        return (
                            <div key={id} className='productListItem'>
                                <ProductListItem 
                                    cover={`http://localhost:8081${cover}`}
                                    name={name}
                                    price={price}
                                />
                            </div>
                        )
                    })
                ) : (
                    <p>Aucun produit trouvé</p>
                )}
            </ul>
        </>
    )
}

export default Products
