import PropTypes from 'prop-types';

const CurrentlyCooking = ({ cc, id }) => {
    const { recipe_name, preparing_time, calories } = cc;
    return (
        <tbody className='bg-base-200 px-4'>
            <tr>
                <th className='font-normal text-base text-[#282828B3]'>{id + 1}</th>
                <td className='font-normal text-base text-[#282828B3]'>{recipe_name}</td>
                <td className='font-normal text-base text-[#282828B3]'>{preparing_time}</td>
                <td className='font-normal text-base text-[#282828B3]'>{calories}</td>
            </tr>
        </tbody>
    );
};

CurrentlyCooking.propTypes = {
    cc: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
};

export default CurrentlyCooking;