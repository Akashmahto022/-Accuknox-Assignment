import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="font-sans mb-4">
      <Navbar/>
      <div className="pt-14">
      <Dashboard />
      </div>
    </div>
  );
}

export default App;
