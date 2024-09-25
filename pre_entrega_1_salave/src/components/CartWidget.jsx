import { juan } from './ItemListContainer'

export const numeroArticulos = 0

const CartWidget = () => {
  
  return (
    <>
      <i className="fa-solid fa-cart-shopping m-2"> <span className="badge text-bg-primary rounded-pill m-1"><small>{juan}</small></span></i>
    </>
  )
}

export default CartWidget