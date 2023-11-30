import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card'

import { CategoriesContext } from '../../contexts/categories.context'

import './category-page.styles.scss'

const CategoryPage = () => {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState(categoriesMap(category))

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <>
      <h2 className="category-title">{category}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  )
}
export default CategoryPage
