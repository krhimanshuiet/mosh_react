import { useState, useReducer } from "react";

function reducer(BoxArray: any, action: any) {
  switch (action.type) {
    case "changeTheBool":
      BoxArray.forEach((item: any) => {
        item.isColored = false;
        if (item.value === action.payload) {
          item.isColored = true;
        }
      });
      return [...BoxArray];
    default:
      return [...BoxArray];
  }
}

const BoxColor = () => {
  const [BoxArray, dispatch] = useReducer(reducer, [
    { value: 1, isColored: false },
    { value: 2, isColored: false },
    { value: 3, isColored: false },
    { value: 4, isColored: false },
    { value: 5, isColored: false },
    { value: 6, isColored: false },
    { value: 7, isColored: false },
    { value: 8, isColored: false },
    { value: 9, isColored: false },
    { value: 10, isColored: false },
    { value: 11, isColored: false },
    { value: 12, isColored: false },
  ]);

  const [value, setValue] = useState<any>(0);
  const [alert, setAlert] = useState<any>(false);

  const handleClick = () => {
    const index: any = BoxArray.find(item => item.value === parseFloat(value))
    if (index === undefined) {
      setAlert(true);
    } else {
      setAlert(false);
    }
    dispatch({ type: "changeTheBool", payload: parseInt(value) });

    
  };

  return (
    <div className="grid grid-cols-2 p-4 gap-x-4">
      <div className="bg-green-400 flex flex-col items-center justify-center gap-2">
        <div>
          <h1 className="text-lg font-bold">
            Please Enter the Number to colore the Box
          </h1>
          <input
            type="text"
            className="p-2 rounded"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <button
          onClick={handleClick}
          className="bg-yellow-300 p-2 shadow-md rounded-lg  font-bold text-md text-center"
        >
          Color the Box
        </button>

        {alert && (
          <p className="bg-orange-400 border-white border shadow-md p-2 rounded">
            Please Enter Value in range from 1 to 9
          </p>
        )}
      </div>
      <div className="bg-red-300 grid grid-cols-3 gap-2 p-2">
        {BoxArray.map((item: any, index: number) => {
          return (
            <div
              className={` ${
                item.isColored === true ? "bg-green-400" : "bg-white"
              } border-2 border-slate-950 p-4`}
              key={index}
            >
              {item.value}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BoxColor;
