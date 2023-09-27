import { Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import {AiFillHome} from 'react-icons/ai';

function Layoutpim() {
    function handleHome(){}
  return (
    <div id="pimpinan" className="container-fluid  min-vh-100 ">
      <div className=" row d-flex bg-dark">
        <div className="container d-flex justify-content-between align-items-center py-3">
          <div className="d-flex align-items-center m-2 text-white">
            <AiFillHome className="fs-1" onClick={handleHome} />
            <h4 className="m-2 fs-2 ms-3">SIM ARSIP</h4>
          </div>
          <div className="d-flex col-3 col-md-3 bg-white rounded-pill justify-content-center m-2">
            <a
              href="/profile"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="User"
              className="p-2 d-flex align-items-center text-dark text-decoration-none"
            >
              <CgProfile className="prof" />
              <span className="ms-1 d-none d-md-block" id="username">
                DISINFOLAHTAAU
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center align-items-center mt-3 ">
        <Outlet />
      </div>
    </div>
  );
}

export default Layoutpim;
