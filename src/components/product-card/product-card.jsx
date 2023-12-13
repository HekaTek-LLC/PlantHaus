import Button from '../button/Button'

import { Link, useNavigate } from 'react-router-dom'
import './product-card.styles.scss'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product
  const plantName = name.toLowerCase().split(' ').join('-')
  console.log('plantname', plantName)

  const navigate = useNavigate()

  const goToProduct = () => {
    navigate(`/shop/${plantName}`)
  }

  // const { addItemToCart } = useContext(CartContext)
  // const addProductToCart = () => addItemToCart(product)

  const mainImg = imageUrl.img1
  const prices = Object.values(price)
  const price1 = Math.min(...prices)
  const price2 = Math.max(...prices)
  return (
    <>
      <a href={`${plantName}`} onClick={goToProduct}>
        {/* /shop/product/url */}
        <div className="product-card-container">
          <div className="product-img">
            <img src={mainImg} alt={`${name}`} />
          </div>
          <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{`$${price1} - $${price2}`}</span>
          </div>
          {/* <Button buttonType="inverted" onClick={addProductToCart}>
          Add to cart
        </Button> */}
        </div>
      </a>
    </>
  )
}

export default ProductCard
