
import { Routes, Route, useLocation  } from "react-router-dom"
import Credentials from "./components/Credentials";
import DashboardLanding from "./components/DashboardLanding";
import Earnings from "./components/Earnings";
import Profile from "./components/Profile";
import Schedule from "./components/Schedule";
import Sessions from "./components/Sessions";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import 'animate.css';
import EditSignature from "./components/EditSignature";
import { createContext, useEffect } from "react";


function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
   
        <Routes>

          <Route exact path="/dashboard/" element={<Dashboard />} >
             <Route exact path='landing' element={<DashboardLanding />}></Route>
             <Route exact path='profile' element={<Profile />}></Route>
             <Route exact path='schedule' element={< Schedule/>}></Route>
             <Route exact path='credentials' element={<Credentials />}></Route>
              <Route exact path='sessions' element={< Sessions/>}></Route>
            <Route exact path='earnings' element={<Earnings />}></Route>
            <Route exact path='edit-signature' element={<EditSignature />}></Route>
               
        </Route>
        <Route exact path="/" element={ <Login/> } />
       
        </Routes>
    
   
  );
}

export default App;
