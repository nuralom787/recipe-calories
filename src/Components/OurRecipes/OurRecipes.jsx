import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import CookingTables from "../CookingTables/CookingTables";

const OurRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [wantToCook, setWantToCook] = useState([]);
    const [currentlyCooking, setCurrentlyCooking] = useState([]);

    useEffect(() => {
        fetch("recipes.json")
            .then(res => res.json())
            .then(data => {
                // const newData = data.slice(0, 2)
                setRecipes(data)
            })
    }, []);


    const handleWantToCook = (recipe) => {
        const newWantCook = [...wantToCook, recipe];
        setWantToCook(newWantCook);
    };



    const handleCurrentlyCooking = (id) => {

        // Update Want To Cook Table.
        const newWantToCook = wantToCook.filter(wtc => wtc.recipe_id !== id);
        setWantToCook(newWantToCook);

        // Add Currently Cooking Data.
        const newData = recipes.find(cc => cc.recipe_id === id);
        const newCurrentlyCooking = [...currentlyCooking, newData]
        setCurrentlyCooking(newCurrentlyCooking);
    }


    return (
        <div className="text-center my-6">
            <div className="space-y-6">
                <h1 className="font-semibold text-4xl text-[#150B2B]">Our Recipes</h1>
                <p className="font-normal text-base text-[#150B2B99]">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <div className="flex gap-6 my-6">
                <div className="grid grid-cols-2 gap-6 w-4/6">
                    {
                        recipes.map((recipe, idx) => <Recipe
                            key={idx}
                            recipe={recipe}
                            handleWantToCook={handleWantToCook}
                        ></Recipe>)
                    }
                </div>
                <div className="w-2/6">
                    <CookingTables
                        wantToCook={wantToCook}
                        handleCurrentlyCooking={handleCurrentlyCooking}
                        currentlyCooking={currentlyCooking}
                    ></CookingTables>
                </div>
            </div>
        </div>
    );
};

export default OurRecipes;