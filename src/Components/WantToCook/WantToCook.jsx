import PropTypes from 'prop-types';

const WantToCook = ({ wtc, id, handleCurrentlyCooking }) => {
    const { recipe_id, recipe_name, preparing_time, calories } = wtc;


    return (
        <tbody className='bg-base-200 px-4'>
            <tr>
                <td className='font-normal text-base text-[#282828B3]'>{id + 1}</td>
                <td className='font-normal text-base text-[#282828B3]'>{recipe_name}</td>
                <td className='font-normal text-base text-[#282828B3]'>{preparing_time}</td>
                <td className='font-normal text-base text-[#282828B3]'>{calories}</td>
                <td>
                    <button onClick={() => handleCurrentlyCooking(recipe_id)} className='font-medium text-base text-[#150B2B] bg-[#0BE58A] px-3 py-1 rounded-full'>Preparing</button>
                </td>
            </tr>
        </tbody>
    );
};

WantToCook.propTypes = {
    wtc: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    handleCurrentlyCooking: PropTypes.func.isRequired
};

export default WantToCook;