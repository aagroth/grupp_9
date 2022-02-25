import React, { useState } from 'react'


function AddToCartBtn({ AddToCartBtn }) {
    const addToCart = [];
    const [add, setAddToCart] = useState(addToCart);


    const handleChange = (e) => {
        setAddToCart(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const addToCartList = {
            id: id,
            title: title,
            description: description,
            price: price,
            storage: storage
        }
        AddToCartBtn(addToCartList)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={add} onChange={handleChange} />
            <button> ADD TO CART </button>
        </form>
    )
}

export default AddToCartBtn