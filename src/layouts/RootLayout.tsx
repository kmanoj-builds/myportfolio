import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="min-h-screen border-10 border-black bg-background rounded-xl">
      <Navbar />

      <main id="main-content" className="min-h-0">
        <Outlet />
      </main>

      <Footer />

      <ScrollRestoration />
    </div>
  );
};

export default RootLayout;