import { Outlet } from "react-router";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div
      id="top"
      className="min-h-screen overflow-x-hidden border-x-[6px] border-[#100C05] bg-[#241605]"
    >
      <Navbar />

      <main id="main-content" className="min-h-[60vh] bg-[#241605]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;