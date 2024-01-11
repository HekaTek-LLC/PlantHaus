import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card'
import shopTitle from '../../utils/shopTitle.utils'
import { scrollToTop } from '../../utils/scrollToTop'
import { CategoriesContext } from '../../contexts/categories.context'

import './category-page.styles.scss'

const CategoryPage = () => {
  //use params gives us an object but we are goign to destructure off category only
  const { category } = useParams()

  // call categoriesMap to get the associated category
  const { categoriesMap } = useContext(CategoriesContext)
  const categoryTitle = categoriesMap
  console.log('categoryTitle', categoryTitle)

  //grab the products from the category chosen by utilizing useState
  const [products, setProducts] = useState(categoriesMap[category] || [])
  // const products = categoriesMap[category] || []

  //useeffect whenever cateogry or categoriesmap changes
  useEffect(() => {
    setProducts(categoriesMap[category] || []);
    scrollToTop();
  }, [category, categoriesMap]);
  
  return (
    <>
      <div>
        <h2 className="category-title">{shopTitle(category)}</h2>
      </div>
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
