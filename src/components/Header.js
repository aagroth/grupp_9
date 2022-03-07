import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingBasket } from 'react-icons/fa'
import Styling from './Header.module.css'

function Header({ tasks, setTasks }) {

    function showShoppingBag(e) {
        e.target.style.background = "green";

        const shoppingList = tasks.map((task) => (
            showShoppingBag === <p>{task.url}{task.title}{task.price}</p>
        ))
            setTasks(shoppingList)
            console.log(shoppingList)
    }

    function dontShowShoppingBag(e) {
        e.target.style.background = ""
    }


    return (
        <div>
            <nav>
                <div className={Styling.nav_box}>
                    <span className={Styling.links}>
                        <Link to="/">Products</Link>     <Link to="/Checkout">Checkout</Link>
                    </span>
                    <div>
                        <span className={Styling.shoppingBagOne}>
                            <FaShoppingBasket onMouseOver={showShoppingBag} onMouseLeave={dontShowShoppingBag} />

                        </span>
                        <span className={Styling.shoppinBagTwo}>
                            {/* {tasks.length} */}
                        </span>
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