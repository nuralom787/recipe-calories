import PropTypes from "prop-types";
import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({ recipe, handleWantToCook }) => {
    const { recipe_name, recipe_image, description, Ingredients, preparing_time, calories } = recipe;
    return (
        <div>
            <div className="card bg-base-100 w-full border border-gray-400">
                <figure className="px-6 pt-6">
                    <img
                        src={recipe_image}
                        alt="Shoes"
                        className="rounded-xl w-full h-60" />
                </figure>
                <div className="card-body items-left text-left space-y-3">
                    <h2 className="card-title font-semibold text-xl text-[#282828]">{recipe_name}</h2>
                    <p className="font-normal text-base text-[#878787]">{description}</p>
                    <div className="border-t-2 pt-4">
                        <p className="mb-5 font-medium text-lg text-[#282828]">Ingredients: {Ingredients.length}</p>
                        {
                            Ingredients.slice(1, 4).map((ingredient, idx) => <li
                                key={idx}
                                className="font-normal text-lg text-[#878787]"
                            >
                                {ingredient}
                            </li>)
                        }
                    </div>
                    <div className="flex justify-between items-center border-t-2 py-4">
                        <span className="flex items-center gap-2 font-normal text-base text-[#282828CC]">
                            <CiClock2></CiClock2>
                            {preparing_time}
                        </span>
                        <span className="flex items-center gap-2 font-normal text-base text-[#282828CC]">
                            <AiOutlineFire></AiOutlineFire>
                            {calories}
                        </span>
                    </div>
                    <div className="card-actions">
                        <button onClick={() => handleWantToCook(recipe)} className="bg-[#0BE58A] px-5 py-3 rounded-full font-medium text-lg text-[#150B2B]">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleWantToCook: PropTypes.func.isRequired
}

export default Recipe;