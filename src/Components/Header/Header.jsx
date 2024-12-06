import profile from '../../assets/Images/user.jpg';
import { CiSearch } from "react-icons/ci";

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex="0" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 min-w-fit p-2 shadow space-y-6">
                        <div className='flex justify-between items-center gap-3 bg-[#150B2B0D] px-4 py-3 rounded-full'>
                            <CiSearch className='text-[#150B2B] font-bold text-2xl'></CiSearch>
                            <input className='bg-transparent outline-none' type="search" name="" id="" placeholder='Search..' />
                        </div>
                        <li className='font-normal text-base text-[#150B2BB3] cursor-pointer'>Home</li>
                        <li className='font-normal text-base text-[#150B2BB3] cursor-pointer'>Recipes</li>
                        <li className='font-normal text-base text-[#150B2BB3] cursor-pointer'>About</li>
                        <li className='font-normal text-base text-[#150B2BB3] cursor-pointer'>Search</li>
                    </ul>
                </div>
                <button className='font-bold text-3xl text-[#150B2B]'>Navbar</button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-16">
                    <li className='font-normal text-base text-[#150B2BB3] cursor-pointer'>Home</li>
                    <li className='font-normal text-base text-[#150B2BB3] cursor-pointer'>Recipes</li>
                    <li className='font-normal text-base text-[#150B2BB3] cursor-pointer'>About</li>
                    <li className='font-normal text-base text-[#150B2BB3] cursor-pointer'>Search</li>
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                <div className='hidden lg:flex justify-between items-center gap-3 bg-[#150B2B0D] px-4 py-3 rounded-full'>
                    <CiSearch className='text-[#150B2B] font-bold text-2xl'></CiSearch>
                    <input className='bg-transparent outline-none' type="search" name="" id="" placeholder='Search..' />
                </div>
                <button>
                    <img src={profile} alt="" />
                </button>
            </div>
        </div>


        // <div classNameName='flex justify-between items-center my-6'>
        //     <div classNameName='font-bold text-3xl text-[#150B2B] cursor-pointer'>Navbar</div>
        //     <div>
        //         <ul classNameName='flex justify-between items-center gap-16'>
        //             <li classNameName='font-normal text-base text-[#150B2BB3] cursor-pointer'>Home</li>
        //             <li classNameName='font-normal text-base text-[#150B2BB3] cursor-pointer'>Recipes</li>
        //             <li classNameName='font-normal text-base text-[#150B2BB3] cursor-pointer'>About</li>
        //             <li classNameName='font-normal text-base text-[#150B2BB3] cursor-pointer'>Search</li>
        //         </ul>
        //     </div>
        //     <div classNameName='flex justify-between items-center gap-4'>
        //         <div classNameName='flex justify-between items-center gap-3 bg-[#150B2B0D] px-4 py-3 rounded-full'>
        //             <CiSearch classNameName='text-[#150B2B] font-bold text-2xl'></CiSearch>
        //             <input classNameName='bg-transparent outline-none' type="search" name="" id="" placeholder='Search..' />
        //         </div>
        //         <button>
        //             <img src={profile} alt="" />
        //         </button>
        //     </div>
        // </div>
    );
};

export default Header;