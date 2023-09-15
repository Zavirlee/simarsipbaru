import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import { Login } from './pages/login';
import{Dashboard} from './pages/dashboard'
import { Tambah } from './pages/tambah';
import { Tabel } from './pages/tabel';
import { User } from './pages/user';
import Layout from './component/layout';
import { Category } from './pages/category';


function App() {
  return (
<BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/dashboard' element={<Layout/>}>
            <Route index element={<Dashboard/>} />
          </Route>
          <Route path='/tambah' element={<Layout/>}>
            <Route index element={<Tambah/>} />
          </Route>
          <Route path='/tabel' element={<Layout/>}>
            <Route index element={<Tabel/>} />
          </Route>
          <Route path='/user' element={<Layout/>}>
            <Route index element={<User/>} />
          </Route>
          <Route path='/category' element={<Layout/>}>
            <Route index element={<Category/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;