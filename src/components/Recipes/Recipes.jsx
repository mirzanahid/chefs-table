import { useState } from "react";
import RecipeSideBar from "../RecipeSideBar/RecipeSideBar";
import RecipesList from "../RecipesList/RecipesList";
import toast from "react-hot-toast";

const Recipes = () => {
  const [wantCook, setWantCook] = useState([]);
  const [preparing, setPreparing] = useState([]);
  const [time, setTime] = useState(0);
  const [calories, setCalories] = useState(0);

  const handleForCook = (cook) => {
    const id = wantCook.find((want) => want.recipe_id === cook.recipe_id);
    if (!id) {
      const newCook = [...wantCook, cook];
      setWantCook(newCook);
      toast.success("Successfully add");
    } else {
      toast.error("This recipe already added");
    }
  };
  const handleForPreparing = (prepare) => {
    const remainingCook = wantCook.filter(
      (wantCoo) => wantCoo.recipe_id !== prepare.recipe_id
    );
    setWantCook(remainingCook);
    const newPrepare = [...preparing, prepare];
    setPreparing(newPrepare);
    if (prepare) {
      setTime(time + prepare.preparing_time);
      setCalories(calories + prepare.calories)
    }
    
    toast.success("Successfully added to Cooking");
  };
  console.log(time);
  return (
    <div className="my-[100px]">
      <div className="text-center">
        <h3 className="font-bold text-[40px] text-[#150B2B] mb-6">
          Our Recipes
        </h3>
        <p className="font-normal text-base text-[rgba(21,11,43,60%)] w-[823px] mx-auto">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.{" "}
        </p>
      </div>
      <div className="flex mt-[50px] gap-5">
        <RecipesList handleForCook={handleForCook}></RecipesList>
        <RecipeSideBar
          wantCook={wantCook}
          preparing={preparing}
          time={time}
          calories={calories}
          handleForPreparing={handleForPreparing}
        ></RecipeSideBar>
      </div>
    </div>
  );
};

export default Recipes;
