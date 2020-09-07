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
     <div className="link"><a href={getUrl}><i>Check here to see the full recipe</i></a></div>
    </div>
        </div>
    )
  
}

export default Food;



 