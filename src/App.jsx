import "./index.css";
import { useEffect, useState } from "react";
import AnimalShow from "./AnimalShow";

const App = () => {
  const getRandomAnimal = () => {
    const animals = ["bird", "cat", "dog", "gator", "horse", "cow"];
    return animals[Math.floor(Math.random() * animals.length)];
  };
  const [animals, setAnimals] = useState([]);//[cats]

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
	     //    [...animals , getRandomAnimal()] [...animals,cat]  ["",cats] => [cats]
	//excution from right to left in parameters and then ...animals
    // created a new array and then stored the returned value from randomanimal function into the array
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });
  console.log(animals);
  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal and bird</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
};

export default App;
