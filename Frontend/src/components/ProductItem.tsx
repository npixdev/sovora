import { useSearchParams } from "react-router-dom";
import '../styles/ProductItem.css'
import { useProducts } from "../datas/productList";
import { useState, useEffect } from "react";

function ProductItem() {
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name');
    const products = useProducts()

    const product = products.find(p => p.name === name)
    const [currentImg, setCurrentImg] = useState('')

    useEffect(() => {
        if (product) {
            const mainImg = product.images.find((img: any) => img.is_main)?.image_url
            setCurrentImg(mainImg || '')
        }
    }, [product])

    if (!product) {
        return( 
            <p>No product</p>
        )
    }

    

    return (
        <div className="ProductItem">
            <img src={`http://localhost:8081${currentImg}`}></img>
            <div className="ProductInfo">
                <h1>{product.name}</h1>
                <p className="description">{product.description}</p>
                <p className="price">{product.price}€</p>
                <form className="addCartContainer">
                    <button className="addToCart">Add to cart</button>
                    <input type="number" className="quantityInput" min={1}></input>
                </form>
                <div className="ProductGallery">
                        {product.images.map((img, id) => {
                            return (
                                    <img key={id} src={`http://localhost:8081${img.image_url}`} onClick={() => setCurrentImg(img.image_url)}></img>
                            )
                        })}
                </div>
            </div>
        </div>
    )

}

export default ProductItem