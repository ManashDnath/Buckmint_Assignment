import "./App.css";
import Navbar from "./Component/Navabar";
import Sidebar from "./Component/Sidebar";
import Jobpost from "./Component/Jobpost";
import Upcomming_Schedule from "./Component/Upcomming_Schedule"

function App() {
  return (
    <>
      <Navbar />

      <Sidebar />
      <Jobpost />
      <Upcomming_Schedule/>
    </>
  );
}

export default App;
