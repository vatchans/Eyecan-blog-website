import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import MyBlogs from './Components/MyBlogs';
import Create_Blog from './Components/Create_Blog';
import Edit_Blog from './Components/Edit_Blog';
import View_blog from './Components/View_blog';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/Create_Blog' element={<Create_Blog/>}/>
    <Route path="/Blogs" element={<MyBlogs/>}/>
    <Route path='/view/:id' element={<View_blog/>}/>
    <Route path='/Edit/:id' element={<Edit_Blog/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
