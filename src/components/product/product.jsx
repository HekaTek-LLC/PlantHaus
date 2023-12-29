import React, { useState, useContext, useEffect } from 'react'
import { CartContext } from '../../contexts/cart.context'
import Button from '../button/Button'
import './product.styles.scss'

const Product = ({ product }) => {

  const {
    name,
    price,
    imageUrl,
    description,
    care,
    icons,
    pro_tip,
    size_description,
    thumbnailUrl,
    latin_binomial,
  } = product

  const { addItemToCart } = useContext(CartContext)
  const addProductToCart = () => addItemToCart(product)

  const [selectedImage, setSelectedImage] = useState(imageUrl.img1)

  const handleThumbnailClick = (clickedThumbnail) => {

    const thumbnailKey = Object.keys(thumbnailUrl).find(
      (key) => thumbnailUrl[key] === clickedThumbnail
    )
    const imgMatch = thumbnailKey.match(/(\d+)(?=(?:-thumb)?\.[^.]*$|$)/)

    if(thumbnailKey === undefined) {
      console.error('thumbnail key not found:', clickedThumbnail)
    }

    const lastNumber = imgMatch[1];
    const fullSizeImageKey = Object.keys(imageUrl).find(
      (key) => key.includes(lastNumber) 
    );
    const fullSizeImage = imageUrl[fullSizeImageKey];

    setSelectedImage(fullSizeImage)
    
  }

  useEffect(() => {

  }, [selectedImage]);

  return (    <div className="product-container">
      <div className="product-img-container">
        <div className="product-thumb-col">
          {thumbnailUrl &&
            Object.entries(thumbnailUrl).map(
              ([thumbnailKey, thumbnail], index) => (
             
                <div
                  className="product-thumb-container"
                  key={index}
                  onClick={() => handleThumbnailClick(thumbnail) }
                  >
                  <img src={thumbnail} alt={`${name}`} loading='lazy'/>
                </div>
                
              )
            )}
        </div>
        <div className="product-img-col">
          <img src={selectedImage} alt={`${name}`} />
        </div>
      </div>
      <div className="product-info-container">
        <div className="product-header">
          <div className="product-name">{name}</div>
       
          <div className="product-price">${price && price.small}</div>
        </div>
        <div className="product-size">
          Size Description:
          {size_description &&
            Object.entries(size_description).map(([size, value]) => (
              <div key={size}>{`${value}`}</div>
            ))}
        </div>
        <div className="product-cart-add">
          <Button buttonType="inverted" onClick={addProductToCart}>
            Add to cart
          </Button>
        </div>
        <div className="styled-line"></div>
     
        <div className="product-icons-row">
          {icons &&
            icons.map((icon) => (
              <div className="plant-care-icons-container" >
                <div className='plant-care-icon-container' key={icon.id}>
                <img src={icon.imageUrl} className='plant-care-icon' alt={icon.name} />
                </div>
                
                <div className='plant-care-icon-name'>{icon.name}</div>
              </div>
            ))}
        </div>
        <div className="styled-line"></div>
        <div className="product-description">
          <h3>Description</h3>
          <p>{description}</p>
        </div>
        <div className="product-care">
          <h3>Care:</h3>
          <div className="product-latin">{latin_binomial}</div>
          <p>{care}</p>
          <div>
            <span className="pro-tip">Pro Tip: </span>
            {pro_tip}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
