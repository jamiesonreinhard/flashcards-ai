import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative max-w-screen">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;