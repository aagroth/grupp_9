import React from 'react'
import { Link } from 'react-router-dom'
import Styling from './Header.module.css'
import Cart from './Cart'
import { FaSearch } from 'react-icons/fa'

function Header(props) {
    const imSorry = () => {
        alert("This item is out of stock, please try again later!")
    }

    return (
        <div>
            <nav>
                <div className={Styling.nav_box} style={{ textTransform: 'uppercase' }}>
                    <span>
                        <Cart tasks={props.tasks} setTasks={props.setTasks} addProduct={props.addProduct} />
                    </span>

                    <input className={Styling.inputField} type="text" placeholder="Seach product .."></input>
                    <FaSearch className={Styling.FaSearch} onClick={imSorry} />
                    <div className={Styling.lands}>
                        <Link to="/" style={{textDecoration: 'none',color: 'black', fontWeight: 'bold'}}>Products</Link>   /    <Link to="/Checkout" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold'}}>Checkout</Link>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header


/* 
  const addToCart = (products) => {
    setCart([...cart, products]);
    console.log(cart)
  };
  
  <button className={Styling.addToCartBtn} onClick={() => addToCart(products)}> ADD TO CART </button>
  



                        const [isShown, setIsShown] = useState(false);
                          <span className={Styling.shoppingBagOne}>
                            <FaShoppingBasket onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} />
                            {
                                isShown && (<div> HELLOOOOO OVER KORGEN </div>)
                            }
                        </span>
                        <span className={Styling.shoppinBagTwo}>
                            {cart.length}
                        </span>



                        <FaShoppingBasket onMouseOver={showShoppingBag} onMouseLeave={dontShowShoppingBag}/>
                            {
                                showShoppingBag == true
                                ? <article><img src={props.products.url} alt={props.products.title}></img>
                                    {props.products.title}
                                    {props.products.price} :- </article>
                                :''
                            }
  



                                function showShoppingBag(e) {
        e.target.style.background = "green";

        const shoppingList = tasks.map((task) => (
            showShoppingBag === <p>{task.url}{task.title}{task.price}</p>
        ))
            setTasks(shoppingList)
            console.log(shoppingList)
    }
  */