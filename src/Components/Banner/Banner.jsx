import banner from '../../assets/Images/banner.jpg';


const Banner = () => {
    return (
        <div style={{ backgroundImage: `url('${banner}')` }} className={`bg-no-repeat bg-center bg-cover text-white text-center py-44 rounded-3xl space-y-10`}>
            <h1 className='text-5xl font-bold'>Discover an exceptional cooking <br /> class tailored for you!</h1>
            <p className='text-lg font-normal'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
            <div className='space-x-8'>
                <button className='bg-[#0BE58A] text-[#150B2B] font-semibold text-xl px-6 py-3 rounded-full'>Explore Now</button>
                <button className='bg-transparent border border-white font-semibold text-xl px-6 py-3 rounded-full'>Our Feedback</button>
            </div>
        </div>
    );
};

export default Banner;