import { Link } from "@remix-run/react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="bg-blue-500 p-4">
        <div className="flex justify-center space-x-6">
          <Link to="/home" className="text-white text-lg hover:text-gray-200">
            Home
          </Link>
          <Link to="/about" className="text-white text-lg hover:text-gray-200">
            About
          </Link>
          <Link to="/blog" className="text-white text-lg hover:text-gray-200">
            Blog
          </Link>
          <Link to="/notes" className="text-white text-lg hover:text-gray-200">
            Notes
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Layout;
