
import PropTypes from 'prop-types'

import { useEffect, useState } from "react"
import Recipe from "../Recipe/Recipe"

const RecipesList = ({handleForCook}) => {

    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        fetch("recipes.json")
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])

  return (
    <div className='w-2/3'>
       <div className="grid grid-cols-2 gap-y-6 gap-x-6"> 
        {
          recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe} handleForCook={handleForCook}></Recipe>)  
        }
       </div>
    </div>
  )
}

RecipesList.propTypes = {
    handleForCook:PropTypes.func
}

export default RecipesList