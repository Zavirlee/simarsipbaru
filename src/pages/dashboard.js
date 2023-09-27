import React from 'react';
import { TbListTree } from 'react-icons/tb';
import { HiOutlineUsers } from 'react-icons/hi2';
import { CgFileDocument } from 'react-icons/cg';
import { BsShop } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { Tabel } from './tabel';
import { useEffect } from 'react';
import { SearchTable } from '../component/search';

export const Dashboard = () => {
  const navigate = useNavigate();

  function handleJumlah() {
    navigate('/tabel');
  }

  function handleUsers() {
    navigate('/user');
  }

  function handleCategory() {
    navigate('/category');
  }

  useEffect(() => {
    document.getElementById('dash').classList.add('act');
    document.getElementById('dash').classList.remove('text-white');
  }, []);

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center align-items-center mt-3">
        <div className="col-md-4 col-lg-2 col-3 card m-3" onClick={handleJumlah}>
            <div className="card-body row d-flex justify-content-center align-items-center text-center">
                <div className="col-md-3 col-12">
                  <CgFileDocument className="fs-1" /> {/* Adjust the fs-4 class to set the desired size */}
                </div>
                <div className="col-md-9 justify-content-center align-items-center d-none d-md-block">
                  <p className="fs-6">Jumlah Arsip</p>
                  <h3 className="fs-4">120</h3>
                </div>
            </div>
        </div>
        <div className="col-md-4 col-lg-2 col-3 card m-3" onClick={handleJumlah}>
          <div className="card-body row d-flex justify-content-center align-items-center text-center">
            <div className="col-md-3 col-12">
              <BsShop className="fs-1" />
            </div>
            <div className="col-md-9 col-9 justify-content-center align-items-center d-none d-md-block">
              <p className="fs-6">Arsip Baru</p>
              <h3 className="fs-4">120</h3>
            </div>
          </div>
        </div>
        {/* <div className="col-md-4 col-lg-2 col-4 card m-3" onClick={handleUsers}>
          <div className="card-body row d-flex justify-content-center align-items-center text-center">
            <div className="col-md-3 col-12">
              <HiOutlineUsers className="fs-1" />
            </div>
            <div className="col-md-9 col-9 justify-content-center align-items-center d-none d-md-block">
              <p className="fs-6">Pengguna</p>
              <h3 className="fs-4">120</h3>
            </div>
          </div>
        </div> */}
        <div className="col-md-4 col-lg-2 col-3 card m-3" onClick={handleCategory}>
          <div className="card-body row d-flex justify-content-center align-items-center text-center">
            <div className="col-md-3 col-12">
              <TbListTree className="fs-1" />
            </div>
            <div className="col-md-9 col-9 justify-content-center align-items-center d-none d-md-block">
              <p className="fs-6">Kategori</p>
              <h3 className="fs-4">120</h3>
            </div>
          </div>
        </div>
        <div className='row d-flex justify-content-center align-items-center  '>
        <div id="tabel" className="col-12 ">
        <Tabel />
        </div>
        <div id="cariarsip" className='col-12 col-md-8 d-flex justify-content-center p-5 rounded h-100 d-none '>
          {/* Menempatkan elemen pencarian tabel di tengah */}
          <SearchTable />
        </div>

        </div>
    </div>
    </div>
  );
};
