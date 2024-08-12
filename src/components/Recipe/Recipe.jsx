import PropTypes from "prop-types";
import { AiOutlineFieldTime, AiOutlineFire } from "react-icons/ai";

const Recipe = ({ recipe,handleForCook }) => {
  const {
    recipe_name,
    description,
    image_url,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div className="border border-[rgba(40,40,40,20%)] p-6 rounded-2xl w-[410px]">
      <img className="rounded-2xl mb-6" src={image_url} alt="" />
      <div className="border-b border-[rgba(40,40,40,10%)] pb-4">
        <h3 className="font-semibold text-xl text-[#282828] mb-4">
          {recipe_name}
        </h3>
        <p className="font-normal text-base text-[#878787]">{description}</p>
      </div>
      <div className="border-b border-[rgba(40,40,40,10%)] py-4">
        <h4 className="font-medium text-lg text-[#282828] mb-4">
          Ingredients: {ingredients.length}
        </h4>
        <ul className="pl-[26px]">
          {ingredients.map((ingredient, idx) => (
            <li
              className="font-normal text-lg text-[#878787] list-disc"
              key={idx}
            >
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div className="py-6">
        <span className="font-normal text-base text-[rgba(40,40,40,80%)] inline-block] mr-4">
          <AiOutlineFieldTime className="inline-block text-xl mr-1" />{" "}
          {preparing_time} minutes
        </span>
        <span className="font-normal text-base text-[rgba(40,40,40,80%)] inline-block]">
          <AiOutlineFire className="inline-block text-xl mr-1" /> {calories} calories
        </span>
      </div>
      <button onClick={()=>handleForCook(recipe)} className="font-medium text-lg text-[#150B2B] bg-[#0BE58A] rounded-[50px] py-3 px-6">
        Want to Cook
      </button>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleForCook: PropTypes.func
};

export default Recipe;
