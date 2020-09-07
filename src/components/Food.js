import React from 'react';

const Food = ({title,posterImg, foodIngredients, getUrl}) => {

    return(
    <div className = "card">
    <img className="card--img"
     src={posterImg}
     alt="images" />
     <div className = "card--content">
     <h1>{title}</h1> 
     <ul>
          {foodIngredients.map((ingredients, id) => 
          <li key={id}>{ingredients.text}</li>
          )}
     </ul>
     <div className="link"><a href={getUrl}><i>Ckeck here to see the full recipe</i></a></div>
    </div>
        </div>
    )
  
}

export default Food;



  /*
*/
  
/*
  const updateMovies= (e) => {
    e.preventDefault();
    setQuery(e.target.value);

    const Api_key = "6b00a02116b6c9fb27ad808ea1eaedbd";
      
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&page=1&include_adult=false`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
  }
*/
  /*
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }
  */

  /*

  */