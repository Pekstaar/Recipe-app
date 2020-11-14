import React from 'react';

const Recipe = ({title,calories,image,ingredients}) =>{
    return(
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <ol>
                <h4>Ingredients:</h4>
                {ingredients.map((ingr,i) =>(
                    <li key={i}>{ingr.text}</li>
                ))}
            </ol>
            <img src={image} alt=""/>
        </div>
    );
}

export default Recipe;