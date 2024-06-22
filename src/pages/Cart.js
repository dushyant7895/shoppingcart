import React, { useEffect, useState } from 'react'
import CartItem from './../components/CartItem'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const {cart} = useSelector((state)=>state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=> acc+curr,0));
  },[cart]);

  return (
    <div>
      {
        cart.length > 0 ? 
        (
          <div>
            <div>
              {
                cart.map((item,index)=>(
                  <CartItem key={item.id} item={item} itemIndex={index}/>
                ))
              }
            </div>
            <div>
              <div>
                <div>Your Cart</div>
                <div>Summary</div>
                <p>
                  <span>Total Item: {cart.length}</span>
                </p>
              </div>
              <div>
                <p>Totla Amount :${totalAmount}</p>
                <button>Check out now</button>
              </div>
            </div>
          </div>
        ):
        (
          <div>
            <h1>Cart Empty</h1>
            <NavLink to='/' >
            <button>Shop Now</button>
            </NavLink>
          </div>
        )
      }
    </div>
  )
}

export default Cart