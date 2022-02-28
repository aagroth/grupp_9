/* import React, { useState } from 'react'


function AddToCartBtn({ AddToCartBtnList }) {
    const addToCart = [];
    const [add, setAddToCart] = useState(addToCart);


    const handleChange = (e) => {
        setAddToCart(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        addToCart = (
            id: id,
            title: title,
            description: description,
            price: price,
            storage: storage
        )
        AddToCartBtnList (addToCartList)
    }

    return (
        <form id='formCartBtn' onSubmit={handleSubmit}>
            <input type="text" value={add} onChange={handleChange} />
            <button> ADD TO CART </button>
        </form>
    )
}

export default AddToCartBtn */