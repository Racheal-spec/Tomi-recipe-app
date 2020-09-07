import React, {useEffect,useState} from 'react';
import './App.css';
import Food from './components/Food';

const App = () => {
 
  const Api_id = "50515ca1";
  const Api_key = "4e87ad57fb8fc38ba8c7ce37e68b5113";

  const[query, setQuery] = useState('banana');
  const[search, setSearch] = useState('');
  const[foods, setFood] = useState([]);

  useEffect(() => {

  const url = `https://api.edamam.com/search?q=${query}&app_id=${Api_id}&app_key=${Api_key}`;
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
      setFood(data.hits);
      console.log(data.hits);
  })
  
}, [query]);

/*
const notFound = (data) => {
  if(!data.hits.lenght){
    return (<div>No result found</div>);
  } else {
    setFood(data.hits);
  }
}*/
  const updateRecipes = (event) => {
    setSearch(event.target.value);
  }
  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);

  }
 

  return(
    <div className= "App">
      <h1 className="heading">Tomi's Recipe App</h1>
    <form className = "search-form" onSubmit= {getSearch}>
      <input className = "search-input" name="query" type = "text" placeholder="Search your desired meal" value={search} onChange={updateRecipes} />
      <button className = "search-btn" type = "submit">search</button>
    </form>
 
    <div className = "card-overall">
    {foods.map((food, id) => (
      <Food
      key = {food.recipe.label}
      posterImg = {food.recipe.image}
      title = {food.recipe.label}
      foodIngredients = {food.recipe.ingredients}
      getUrl = {food.recipe.url}
      
      />
      ))}
     </div>
    </div>
)
    }
export default App;