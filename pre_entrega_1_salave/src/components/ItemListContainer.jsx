import { useState } from "react";

export const cantidad = 3
export const juan = cantidad



const ItemListContainer = (greeting) => {

  const [cantidad, setCantidad] = useState(0)
  
  const agregarCart = () => {
    setCantidad(prevCantidad => prevCantidad + 1)
  }
  const quitarCart = () => {
    setCantidad(prevCantidad => prevCantidad - 1)
  }

  return (
    <>
      <h1 className="text-light text-center m-5 text-warning">{greeting.message}</h1>
      <h2 className="text-light text-center text-warning">Cantidad : {cantidad}</h2>
      <div className="d-grid gap-2 col-1 mx-auto">
        <button onClick={agregarCart} type="button" className="btn btn-outline-warning btn-sm"> Agregar </button>
        <button onClick={quitarCart} type="button" className="btn btn-outline-warning btn-sm"> Quitar </button>
      </div>
    </>
  );
};

export default ItemListContainer