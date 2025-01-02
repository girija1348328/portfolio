import { Link } from "@remix-run/react";
import { CiSearch } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Navbar */}
            <nav className="mx-auto w-full max-w-[210mm] bg-white shadow-md p-6 ">
                <div className="mx-auto w-full max-w-[210mm] px-4 py-4 ">
                    
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col justify-start">
                            <text className="text-2xl font-bold">Girija Sankar Mohanta</text>
                            <div className="flex flex-row justify-start space-x-4" >
                                <Link to="/home" className="text-lg hover:text-blue-500">Home</Link>
                                <Link to="/about" className="text-lg hover:text-blue-500">About</Link>
                                <Link to="/blog" className="text-lg hover:text-blue-500">Blog</Link>
                                <Link to="/notes" className="text-lg hover:text-blue-500">Notes</Link>
                            </div>
                        </div>
                        <div className="flex items-center">
                            {/* Add your end content here */}
                            <CiSearch className="text-2xl" />
                            <MdLightMode className="text-2xl ml-4" />
                        </div>
                    </div>

                </div>
            </nav>
             {/* Main content */}
             <main className="flex-grow flex justify-center items-center">
                <div className="mx-auto w-full max-w-[210mm] bg-white shadow-md p-6 ">
                    {children}
                </div>
            </main>
            {/* {footer} */}
            <footer className="mx-auto w-full max-w-[210mm] bg-white shadow-md p-6 ">
                <div className="mx-auto w-full max-w-[210mm] px-4 py-4 ">
                    
                        <div className="flex flex-row justify-between align-center">
                            <text className="text-2l font-bold">Girija Sankar Mohanta</text>
                            <div className="flex flex-row justify-start space-x-4" >
                                <Link to="/home" className="text-md hover:text-blue-500">Home</Link>
                                <Link to="/about" className="text-md hover:text-blue-500">About</Link>
                                <Link to="/blog" className="text-md hover:text-blue-500">Blog</Link>
                                <Link to="/notes" className="text-md hover:text-blue-500">Notes</Link>
                            </div>
                        </div>
                      
                   
                    </div>
            </footer>
        </div>
    );
}
