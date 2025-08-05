import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Firebase/Providers/AuthProviders";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log('logged out ')
            })
    }
    const navOptions = <>
        <Link to='/' className="text-[15px] font-medium tracking-wide ml-4 mr-4 uppercase text-gray-700 cursor-pointer hover:text-primary transition duration-200">Home</Link>

        <div className="dropdown dropdown-hover">
            <div tabIndex={0} className="text-[15px] font-medium tracking-wide ml-4 mr-4 uppercase text-gray-700 cursor-pointer hover:text-primary transition duration-200">
                Scholarship
            </div>
            <ul tabIndex={0} className="dropdown-content z-[10] menu p-2 shadow-lg bg-white border border-gray-200 rounded-xl w-56">
                <li><Link to='college-scholarships' className="text-sm text-gray-600 hover:text-primary">Find Scholarship</Link></li>
                <li><Link to='/featured-scholarship' className="text-sm text-gray-600 hover:text-primary">Featured Scholarship</Link></li>
                <li><Link to='scholarship-news' className="text-sm text-gray-600 hover:text-primary">Scholarship News</Link></li>
                <li><Link to='scholarship-winner' className="text-sm text-gray-600 hover:text-primary">Scholarship Winner</Link></li>
            </ul>
        </div>

        <Link to='student-loan' className="text-[15px] font-medium tracking-wide ml-4 mr-4 uppercase text-gray-700 hover:text-primary transition duration-200">Student Loans</Link>

        <div className="dropdown dropdown-hover">
            <div tabIndex={0} className="text-[15px] font-medium tracking-wide ml-4 mr-4 uppercase text-gray-700 cursor-pointer hover:text-primary transition duration-200">
                Internship
            </div>
            <ul tabIndex={0} className="dropdown-content z-[10] menu p-2 shadow-lg bg-white border border-gray-200 rounded-xl w-56">
                <li><Link to='find-internship' className="text-sm text-gray-600 hover:text-primary">Find Internship</Link></li>
                <li><Link to='featured-internship' className="text-sm text-gray-600 hover:text-primary">Featured Internship</Link></li>
                <li><Link to='job' className="text-sm text-gray-600 hover:text-primary">Part Time Jobs</Link></li>

            </ul>
        </div>

        <div className="dropdown dropdown-hover">
            <div tabIndex={0} className="text-[15px] font-medium tracking-wide ml-4 mr-4 uppercase text-gray-700 cursor-pointer hover:text-primary transition duration-200">
                Educators
            </div>
            <ul tabIndex={0} className="dropdown-content z-[10] menu p-2 shadow-lg bg-white border border-gray-200 rounded-xl w-56">
                <li><Link to='scholarship-providers' className="text-sm text-gray-600 cursor-pointer hover:text-primary">Scholarship Providers</Link></li>

            </ul>
        </div>

        {
            user ? (<button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
                Logout
            </button>) : <div className="flex gap-3 ml-6">
                <Link to='/login' className="px-4 py-1.5 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-white transition duration-200">Log In</Link>
            </div>
        }

    </>;

    return (
        <div className="navbar bg-white border-b border-gray-200 shadow-sm px-4 lg:px-12 py-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow-lg bg-white border border-gray-200 rounded-xl w-64">
                        {navOptions}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl font-bold text-primary tracking-wide">Scholarship BD</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 items-center gap-2">
                    {navOptions}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;