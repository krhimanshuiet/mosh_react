// import { useState } from "react";
// import { useState } from "react";
// import PureComponent  from "./components/PureComponent";
import "./App.css";
import Form2 from "./ExpenseTracker/Form2";
// import NavBar from "./components/NavBar";
// import Cart from "./components/Cart";
// import { useState } from "react";
// import ExpandableText from "./components/ExpandableText";

// import Button from "./components/Button/Button";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import Message from "./Message";
// import ListGroup from "./components/ListGroup/index";
// import Like from "./components/Like";
// import  ToggleState from "./hooks/use-state";

function App(): JSX.Element {
  // const items: string[] = [
  //   "New york",
  //   "san fransisco",
  //   "delhi",
  //   "mumbai",
  //   "tokoyo",
  //   "london",
  // ];

  // const handleSelectItem = (item: string) => {
  //   console.log("item: " + item);
  // };

  // const [cartItems, setCartItems] = useState(["Product", "Product"]);
  // const handleClick = () => {
  //   setCartItems([...cartItems, "Product"]);
  // };
  // const [showAlert, setShowAlert] = useState<boolean>(false);

  return (
    <>
    <Form2/>
    {/* <ExpandableText>Lorem ipsum
    </ExpandableText> */}
      {/* <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      <NavBar
        cartItemsCount={cartItems.length}
        onClear={() => setCartItems([])}
      />
      <button
        onClick={handleClick}
        className="bg-orange-400 p-2 mt-2 shadow-lg rounded-md"
      >
        click to add items
      </button> */}
      {/* {[1,2,3].map(item => <PureComponent /> )} */}

      {/* <ToggleState /> */}
      {/* <Like onClick={() => console.info("clicked")} /> */}
      {/* <ListGroup items={items} heading="List of Cities" handleSelectItem={handleSelectItem} /> */}
      {/* <Message name = {"Himanshu singh"} /> */}
      {/* {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>
          woola!! button clicked
        </Alert>
      )}
      <Button btnClass="danger" setShowAlert={setShowAlert}>
        Primary
      </Button> */}
      {/* <Button btnClass="primary" setShowAlert={setShowAlert}>My Button</Button> */}
    </>
  );
}

export default App;
