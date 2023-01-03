// import { Routes , Route} from "react-router-dom";
import React from 'react'
import Secondpage from './Secondpage/second'
import Firstpage from "./Secondpage/Firstpage";

import {
  BrowserRouter as Router,
  Routes ,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// export const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route  path="/" element={<Firstpage />}>
//       <Route path="/content" element={<Secondpage />} />
//       {/* ... etc. */}
//     </Route>
//   )
// );



const App = () => {
  return (
  < Router>
  <Routes>
     <Route exact path="/" element ={<Firstpage/>} />
     <Route exact path="/content" element ={<Secondpage/>} />
     </Routes>
  </ Router>
  
  )
}

export default App