import banner from '../../assets/Images/banner.jpg';


const Banner = () => {
    return (
        <div style={{ backgroundImage: `url('${banner}')` }} className={`w-auto bg-no-repeat bg-center bg-cover text-white text-center py-16 md:py-44 mx-2 rounded-3xl space-y-4 md:space-y-10`}>
            <h1 className='text-2xl md:text-5xl font-bold'>Discover an exceptional cooking <br /> class tailored for you!</h1>
            <p className='text-sm md:text-lg font-normal'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
            <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-7 mx-6 md:mx-0'>
                <button className='w-full md:w-fit bg-[#0BE58A] text-[#150B2B] font-semibold text-xl px-6 py-3 rounded-full'>Explore Now</button>
                <button className='w-full md:w-fit bg-transparent border border-white font-semibold text-xl px-6 py-3 rounded-full'>Our Feedback</button>
            </div>
        </div>
    );
};

export default Banner;