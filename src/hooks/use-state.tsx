import { useState } from "react";

const UseState = () => {
  //   const [firstName , setFirstName] = useState('himanshu')
  //   const [lastName , setlastName] = useState('singh')
  //   const [isLoading , setLoading] = useState(false)

  //   const [perosn , setPerson] = useState({
  //     firstName:'himanshu',
  //     lastName:'singh',
  //     contact:{
  //         address:{
  //             street:''
  //         }
  //     }
  //   })

  //   const fullName = firstName + ' ' + lastName;

  //   const [isVisiblity, setVisiblity] = useState(false);
  //   const handleClick = () => {
  //     setVisiblity(!isVisiblity)
  //   }
  //   console.warn(isVisiblity)
  // const [game , setGame] = useState({
  //     id:1,
  //     player:{
  //         name:'john'
  //     }

  // })

  // opdating complex state

  // const handleClick = () => {
  //     game.player.name = 'Bob'
  //     setGame({...game , player : {...game.player , name:'Bob'}})
  // }

  //   const [pizza, setPizza] = useState({
  //     name: "Spicy Pepperoni",
  //     toppings: ["Mushroom"],
  //   });

  //   const handleClick = () => {
  //     setPizza({ ...pizza, toppings: [...pizza.toppings, "periperi"] });
  //   };

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 2 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : { ...item }
      ),
    });
  };
  return (
    <div>
        {cart.items.map(item => <p key={item.id}>{item.id}  {item.title}  {item.quantity}</p>)}
      <button
        className="bg-green-400 border-2 border-black px-4 py-1 shadow-inner rounded"
        onClick={handleClick}
      >
        click me
      </button>
      {/* <button className="bg-green-400 border-2 border-black px-4 py-1 shadow-inner rounded" onClick={handleClick}>{game.player.name}</button> */}
      {/* {pizza.toppings.map((item) => (
        <h1>{item}</h1>
      ))}
      <button
        className="bg-green-400 border-2 border-black px-4 py-1 shadow-inner rounded"
        onClick={handleClick}
      >
        Click me
      </button> */}
      {/* {isVisiblity && perosn.firstName + " " + perosn.lastName}
    <button className="bg-yellow-400 px-2 border border-slate-50" onClick={handleClick}>Show</button> */}
    </div>
  );
};

export default UseState;
