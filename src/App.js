import './App.css';
import 'react-tooltip/dist/react-tooltip.css';
import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom';
import { Login } from './pages/login';
import{Dashboard} from './pages/dashboard'
import { Tambah } from './pages/tambah';
import { Tabel } from './pages/tabel';
import { User } from './pages/user';
import Layout from './component/layout';
import { Category } from './pages/category';
import { Detail } from './pages/detailarsip';
import { TambahUser } from './pages/tambahuser';
import { useEffect } from 'react';
import { Update } from './pages/updatearsip';
import { UpdateUser } from './pages/updateuser';
import { Profile } from './pages/profile';
import { Pimpinan } from './pages/pimpinan';
import Layoutpim from './component/layoutpim'

// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';


function App() {
 
  //const navigate = useNavigate();

  // useEffect(() => {
  //   // Redirect pengguna ke halaman login saat komponen utama dimuat
  //   window.location.href = '/login';
  // }, []);


  return (
<BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Layout/>}>
            <Route index element={<Dashboard/>} />
          </Route>
          <Route path='/tambah' element={<Layout/>}>
            <Route index element={<Tambah/>} />
          </Route>
          <Route path='/tabel' element={<Layout/>}>
            <Route index element={<Tabel/>} />
            <Route path='/tabel/detail/' element={<Detail/>}/>
          </Route>
          <Route path='/updatearsip' element={<Layout/>}>
            <Route index element={<Update/>} />
          </Route>
          <Route path='/updateuser' element={<Layout/>}>
            <Route index element={<UpdateUser/>} />
          </Route>
          <Route path='/user' element={<Layout/>}>
            <Route index element={<User/>} />
            <Route path='/user/tambahuser' element={<TambahUser/>}/>
          </Route>
          <Route path='/category' element={<Layout/>}>
            <Route index element={<Category/>} />
          </Route>
          <Route path='/profile' element={<Layout/>}>
            <Route index element={<Profile/>} />
          </Route>
          <Route path='/pimpinan' element={<Layoutpim/>}>
            <Route index element={<Pimpinan/>} />
            <Route path='/pimpinan/tabel' element={<Tabel/>}/>
            <Route path='/pimpinan/category' element={<Category/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
