import React from "react";
import "./Cart.css"

const Cart = ({cart, toggleCart, removeFromCart}) => {
const totalPrice = cart.reduce((total, product) => total + (+product.price) ,0)
return(
    <div>
        <div>
            <button className="Zakryt" onClick={toggleCart}>Закрыть</button>
            <h2>Ваша корзина</h2>
            {cart.lenght === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <ul>
                    {cart.map((product) => (
                        <li key={product.id}>
                            <h3>{product.name}</h3>
                            <p>Цена: {product.price}</p>
                            <button className="RemoveIn" onClick={() => removeFromCart(product.id)}>Удалить</button>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Общая стоимость: {totalPrice}</h3>
        </div>
    </div>
)
}

export default Cart;