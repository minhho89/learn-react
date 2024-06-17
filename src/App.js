
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import Navbar from "./shared/components/NavBar/Navbar";
import Authenticate from "./Authenticate/pages/Authenticate";
import UserPlaces from "./places/pages/UserPlaces";

function App() {
  return (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Users />} exact />
      <Route path="/:uid/places" element={<UserPlaces />} />
      <Route path="/places/new" element={<NewPlace />} exact />
      <Route path="/authenticate" element={<Authenticate />} exact/>
    </Routes>
  </Router>
  );
}

export default App;
