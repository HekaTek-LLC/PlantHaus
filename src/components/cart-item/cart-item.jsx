import React, { useContext, useState, useEffect } from 'react'
import { TfiClose } from 'react-icons/tfi'
import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi'
import shopTitle from '../../utils/shopTitle.utils'
import { CartContext } from '../../contexts/cart.context'

import './cart-item.styles.scss'

const CartItem = ({ cartItem }) => {
  const { name, quantity, thumbnailUrl, price, size } = cartItem
  console.log('cart item inside cart item', cartItem)

  const { clearAllItemsFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext)

  const clearItemsHandler = () => clearAllItemsFromCart(cartItem)
  const addItemHandler = () => addItemToCart(cartItem, size)
  const removeItemHandler = () => removeItemFromCart(cartItem, size)

  // const selectedItem = price.find((amount) => amount.size === size)
  // const thumb = thumbnailUrl && thumbnailUrl.thumb1

  return (
    <>
      <div className="cart-item-line-container">
        <div className="cart-item-container">
          <div className="cart-item-image">
            <img src={thumbnailUrl} alt={`${name}`} />
          </div>
          <div className="cart-item-details-container">
            <div className="cart-item-details-row">
              <div className="cart-item-details">
                <div className="cart-item-name">{name}</div>
                {/* <div className="cart-item-size">Size: {size}</div> */}
                <div className="cart-item-size">Size: {shopTitle(size)}</div>
              </div>
              <div className="x-btn">
                <TfiClose onClick={clearItemsHandler} className="closeX" />
              </div>
            </div>
            <div className="counter-price-container">
              <div className="counter-container">
                <HiOutlineMinus
                  onClick={removeItemHandler}
                  className="cart-item-icon"
                />
                {quantity}
                <HiOutlinePlus
                  onClick={addItemHandler}
                  className="cart-item-icon"
                />
              </div>
              <div className="cart-item-price">${price}</div>
            </div>
          </div>
        </div>
        <div className="styled-line"></div>
      </div>
    </>
  )
}

export default CartItem
