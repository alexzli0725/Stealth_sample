import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Launchpad from "./pages/Launchpad";
import NFT from "./pages/NFT";
import Create from "./pages/Create";
import Locker from "./pages/Locker";
import Bot_Yard from "./pages/Bot_Yard";
import Ethereum from "./pages/Ethereum";
import Connect from "./pages/Connect";
function App() {
  return (
    <Router>
      <div className="text-white flex flex-col bg-gradient-to-t from-black to-gray-900 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/launchpad" Component={Launchpad} />
          <Route path="/nft" Component={NFT} />
          <Route path="/create" Component={Create} />
          <Route path="/locker" Component={Locker} />
          <Route path="/botyard" Component={Bot_Yard} />
          <Route path="/ethereum" Component={Ethereum} />
          <Route path="/connect" Component={Connect} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
