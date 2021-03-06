 
import './App.css';
import './component/add.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './component/home';
import Contact from './component/contact';
import Student from './component/student';
import Navigation from './component/navigation';
import AddStudent from './component/addstudent';
import StudentEdit from './component/studentEdit';
function App() {
  return (
    <div className="App">
<BrowserRouter>
 
      <Navigation/>
<Routes>
<Route path="/home" element={<Home/>}/> 
<Route path="/contact" element={<Contact/>}/> 
<Route path="/student" element={<Student/>}/> 
<Route path="/addstudent" element={<AddStudent/>}/> 
<Route path="/studentEdit" element={<StudentEdit/>}/> 
 </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
