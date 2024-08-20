import React from 'react'
import Home from "./home/Home";
import {Route, Routes} from "react-router-dom";
import Course from "./courses/Courses";
import Signup from './components/Signup';
import Assignment from "./content/Assignments";
import Note from './content/Notes';
import More from './content/Mores';


function App() {
  return (
    <>
     <div className="">
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={<Course />} />
      <Route path="/signup" element={<Signup />} ></Route>
      <Route path="/assignments" element={<Assignment />} ></Route>
      <Route path="/notes" element={<Note />} ></Route>
      <Route path="/more" element={<More />} ></Route>
     </Routes>
     </div>
    </>
  );
}

export default App