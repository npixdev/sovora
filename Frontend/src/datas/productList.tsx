import { useState, useEffect } from "react"

export function useProducts() {
    interface ProductImage {
        id: number
        image_url: string
        is_main: boolean
    }

    interface Product {
        id: number
        name: string
        description: string
        price: number
        images: ProductImage[]
    }

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        fetch('http://localhost:8081/products')
        .then(res => res.json())
        .then(products => setProducts(products))
        .catch(err => console.log(err))
    }, [])   

    return products
}

