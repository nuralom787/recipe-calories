import PropTypes from 'prop-types';
import WantToCook from '../WantToCook/WantToCook';
import CurrentlyCooking from '../CurrentlyCooking/CurrentlyCooking';

const CookingTables = ({ wantToCook, handleCurrentlyCooking, currentlyCooking }) => {

    return (
        <div className='border rounded-2xl px-5 py-7 sticky top-2 overflow-y-auto max-h-screen'>
            {/* Want To Cooking Container */}
            <h1 className='font-semibold text-2xl text-[#282828] border-b mx-8 pb-3'>Want to cook: {wantToCook.length}</h1>
            <div className='overflow-x-auto mb-6'>
                {wantToCook.length ?
                    <table className="table">
                        <thead>
                            <tr>
                                <th>SN</th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        {
                            wantToCook.map((wtc, id) => <WantToCook
                                key={id}
                                id={id}
                                wtc={wtc}
                                handleCurrentlyCooking={handleCurrentlyCooking}
                            ></WantToCook>)
                        }
                    </table>
                    :
                    <p className='pt-6'>No Data Available!!</p>
                }
            </div>

            {/* Currently Cooking Container */}
            <h1 className='font-semibold text-2xl text-[#282828] border-b mx-8 pb-3'>Currently Cooking: {currentlyCooking.length}</h1>
            <div className='overflow-x-auto mb-6'>
                {currentlyCooking.length ?
                    <table className="table">
                        <thead>
                            <tr>
                                <th>SN</th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        {
                            currentlyCooking.map((cc, id) => <CurrentlyCooking
                                key={id}
                                id={id}
                                cc={cc}
                            ></CurrentlyCooking>)
                        }
                    </table>

                    :
                    <p className='pt-6'>No Data Available!!</p>
                }
            </div>
        </div>
    );
};

CookingTables.propTypes = {
    wantToCook: PropTypes.array.isRequired,
    currentlyCooking: PropTypes.array.isRequired,
    handleCurrentlyCooking: PropTypes.func.isRequired,
};

export default CookingTables;