import { useState } from "react";
import { produce } from "immer";
const UpdateArrayOfObj = () => {
  const [bugs, setBugs] = useState([
    { id: 1, titile: "Bug 1", fixed: "false" },
    { id: 2, titile: "Bug 2", fixed: "false" },
  ]);

  const handleClick = () => {

    // without immer
    // setBugs(
    //   bugs.map((bug) => bug.id === 1 ? { ...bug, fixed: "true" } : bug)
    // );

    // using immer

    setBugs(produce(draft => {
      const bug = draft.find(bug => bug.id === 1)
      if(bug) bug.fixed = "true"
    }))
  };
  return (
    <div>
      {bugs.map((bug) => (
        <h1>
          {bug.id} {bug.titile} {bug.fixed}
        </h1>
      ))}
      <button onClick={handleClick} className="bg-red-400 px-4 py-1 shadow-inner rounded-lg ">
        click me
      </button>
    </div>
  );
};

export default UpdateArrayOfObj;
