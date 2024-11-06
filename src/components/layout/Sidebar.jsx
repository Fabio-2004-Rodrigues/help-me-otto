import React, { useContext } from 'react'
import { AuthEmailPasswordContext } from '../../context/authEmailPassword';

function Sidebar() {

  const { user, handleSignOut } = useContext(AuthEmailPasswordContext);

  return (
    <div className="sidebar d-flex flex-column align-items-center justify-content-between h-100 py-3" style={{ width: '105px', backgroundColor: '#1F2225' }}>
      <div className="logo">
        <img src="assets/img/logo.jpg" alt="logo" className="rounded-circle" width={60} height={60} />
      </div>

      <div className="pages d-flex flex-column align-items-center gap-3">
        <a href="#inicio" className="nav-link text-center text-white text-decoration-none fs-2">
          <i className="bi bi-house"></i>
          <p className="mb-0" style={{ fontSize: '12px' }}>Início</p>
        </a>

        <a href="#cursos" className="nav-link text-center text-white text-decoration-none fs-2">
          <i className="bi bi-book"></i>
          <p className="mb-0" style={{ fontSize: '12px' }}>Cursos</p>
        </a>

        <a href="#ranking" className="nav-link text-center text-white text-decoration-none fs-2">
          <i className="bi bi-trophy"></i>
          <p className="mb-0" style={{ fontSize: '12px' }}>Ranking</p>
        </a>

        <a href="#certificados" className="nav-link text-center text-white text-decoration-none fs-2">
          <i className="bi bi-award"></i>
          <p className="mb-0" style={{ fontSize: '12px' }}>Certificados</p>
        </a>

        <a href="#social" className="nav-link text-center text-white text-decoration-none fs-2">
          <i className="bi bi-people"></i>
          <p className="mb-0" style={{ fontSize: '12px' }}>Social</p>
        </a>
      </div>

      <div className="info d-flex flex-column gap-2">

        <i className="bi bi-bell-fill" style={{ color: 'white', fontSize: '30px' }}></i>
        <i className="bi bi-gear" style={{ color: 'white', fontSize: '30px' }}></i>

        <div className="dropend">
          <i
            className="bi bi-person-circle"
            style={{ color: 'purple', fontSize: '30px', cursor: 'pointer' }}
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></i>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <button onClick={handleSignOut} className="dropdown-item btn btn-danger">
                Sair
              </button>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;
