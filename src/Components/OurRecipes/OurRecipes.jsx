import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import CookingTables from "../CookingTables/CookingTables";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OurRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [wantToCook, setWantToCook] = useState([]);
    const [currentlyCooking, setCurrentlyCooking] = useState([]);
    const [totalPreparingTime, setTotalPreparingTime] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);


    // Load Recipes JSON Data.
    useEffect(() => {
        fetch("recipes.json")
            .then(res => res.json())
            .then(data => {
                // const newData = data.slice(0, 2)
                setRecipes(data)
            })
    }, []);


    // Handle Total Preparing & Total Calories Calculation.
    useEffect(() => {
        for (const tt of currentlyCooking) {

            // Set Total Preparing Time.
            const newTTime = parseInt(tt.preparing_time);
            const newTotalPreparingTime = totalPreparingTime + newTTime;
            setTotalPreparingTime(newTotalPreparingTime);

            // Set Total Calories.
            const newTCalories = parseInt(tt.calories);
            const newTotalCalories = totalCalories + newTCalories;
            setTotalCalories(newTotalCalories);
        };
    }, [currentlyCooking]);


    // Handle Recipe Item In Want To Cook.
    const handleWantToCook = (recipe) => {
        for (const recipeItem of wantToCook) {
            if (recipeItem.recipe_id === recipe.recipe_id) {
                return toast.warning("This Recipe Item Already Exist!!", {
                    autoClose: 2000
                });
            }
        }
        const newWantCook = [...wantToCook, recipe];
        setWantToCook(newWantCook);
        toast.success(`Recipe Item "${recipe.recipe_name}" Added Successfully!`, {
            position: "top-center",
            autoClose: 2000
        });
    };


    // Handle Recipe Item In Currently Cooking.
    const handleCurrentlyCooking = (id) => {

        // Update Want To Cook Table.
        const newWantToCook = wantToCook.filter(wtc => wtc.recipe_id !== id);
        setWantToCook(newWantToCook);

        // Add Currently Cooking Data.
        const newData = recipes.find(cc => cc.recipe_id === id);
        const newCurrentlyCooking = [...currentlyCooking, newData];
        setCurrentlyCooking(newCurrentlyCooking);
    };


    return (
        <div className="text-center my-6 mx-2">
            <ToastContainer />
            <div className="space-y-6">
                <h1 className="font-semibold text-4xl text-[#150B2B]">Our Recipes</h1>
                <p className="font-normal text-base text-[#150B2B99] mx-4 lg:mx-0">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <div className="flex flex-col-reverse lg:flex-row gap-6 my-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-4/6">
                    {
                        recipes.map((recipe, idx) => <Recipe
                            key={idx}
                            recipe={recipe}
                            handleWantToCook={handleWantToCook}
                        ></Recipe>)
                    }
                </div>
                <div className="w-full lg:w-2/6">
                    <CookingTables
                        wantToCook={wantToCook}
                        handleCurrentlyCooking={handleCurrentlyCooking}
                        currentlyCooking={currentlyCooking}
                        totalPreparingTime={totalPreparingTime}
                        totalCalories={totalCalories}
                    ></CookingTables>
                </div>
            </div>
        </div>
    );
};

export default OurRecipes;