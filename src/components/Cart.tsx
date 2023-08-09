

interface Props {
    cartItems:string[],
    onClear : () => void
}

const Cart = ({cartItems , onClear}:Props) => {
  return (
    <div className="bg-yellow-400 mb-10">
   <p> Cart : {cartItems.join(",")}</p>
    <button onClick={onClear} className="bg-blue-400 px-4">clear</button>
    </div>
  )
}

export default Cart
