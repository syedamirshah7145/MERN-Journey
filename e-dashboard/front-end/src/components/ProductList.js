import React, { useEffect } from 'react';

const ProductList = () => {
    const [product, setProducts] = React.useState([]);
    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setProducts(result);
    }
    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:5000/product/${id}`,{
            method: "Delete"
        });
        result = await result.json();
        if(result){
            getProducts;
        }
    }
    return (
        <div className='product-listing'>
            <h3>Product Listing</h3>
            <ul>
                <li>Product Name</li>
                <li>Product Price</li>
                <li>Product Category</li>
                <li>Operations</li>
            </ul>
            {product.map((element) =>
                <ul>
                    <li>{element.name}</li>
                    <li>{element.price}</li>
                    <li>{element.category}</li>
                    <button onClick={() => deleteProduct(element._id)}>delete</button>
                </ul>
            )}
        </div>
    )
}

export default ProductList;