import { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./recipe";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const APP_ID = "33984007";
  const APP_KEY = "09c4ee846a7944daf79aea1b497f7eab";
  const requestExample = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  

  // const [counter, setCounter] = useState(0);

  // Effect runs every time something rerenders ie button click
  // for use effect to run once the array below is added making it not run again
  // in the array you can add the state to make it run ie counter

  // make an async in below useEffect
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(requestExample);
    const data = await response.json(); // data request
    console.log(data.hits);

    setRecipes(data.hits);

    //Using .then promises:
    // fetch(tps://api.edamam.com)
    // .then(response =>{
    //   response.json...
    // })
  };

  //   const onClickButton = ((event) =>{
  //   event.preventDefault();
  //   setCounter(counter + 1);
  // });

  const updateSearch = (e) =>{
    setSearch(e.target.value);
    
  }

  const getSearch = (e) =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map((recipe,i) => (
        <Recipe
          key={i}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}        
        />
      ))}
    </div>
  );
};

export default App;
