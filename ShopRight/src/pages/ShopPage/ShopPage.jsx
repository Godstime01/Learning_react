import { useEffect, useReducer } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import FeaturedCard from "../HomePage/components/FeaturedCard";


const initialState = {
  'limit': 0,
  'products': [],
  'total': 0
}

const reducers = (initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case 'FETCH_SUCESS':
      return {
        'limit': action.payload.limit,
        'products': action.payload.products,
        'total': action.payload.total
      }
    default: break;
  }
}


const ShopPage = () => {
  const [state, dispatch] = useReducer(reducers, initialState)

  useEffect(() => {

    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => { dispatch({ type: 'FETCH_SUCESS', payload: data }) })
      .catch(err => console.log('ERROR'))
  }, [])

  console.log(state.products)
  return (
    <>
      <Navbar />
      <main className="container">
        <h2 className="text-6xl font-extrabold text-blue-100 my-6">Shop</h2>


        <div className="grid grid-cols-3 my-5 gap-5">
          {
            state.products.map(product => {
              return (
                <FeaturedCard key = {product.id} id = {product.id} title = {product.title} image = {product.thumbnail} price={product.price} />)
            })
          }
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ShopPage;