import { useState } from "react";

function MealsDetails({ meal, handleClick }) {
  console.log(meal);
  const [show, setShow] = useState(null);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <button onClick={handleShow} className="text-yellow-700">
        Show Details
      </button>
      {show && (
        <div>
          <h2 className="text-teal-950 text-justify">
            <b>Instruction</b>:{" "}
            <small> {meal.strInstructions.slice(0, 100)}</small>
          </h2>
          <a href={meal.strYoutube} className="text-blue-800">
            Tutorial
          </a>{" "}
          <br />
          <a href={meal.strSource} className="text-red-700">
            Source
          </a>
        </div>
      )}
    </>
  );
}

export default MealsDetails;
