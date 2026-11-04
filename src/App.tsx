import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main id="home" className="min-h-screen bg-background text-text-primary">
      <Navbar />
      {/* We'll extract the Hero section into its own component next */}
      <Outlet />
    </main>
  );
}

export default App;