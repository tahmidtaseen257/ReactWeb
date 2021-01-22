import React from 'react';
import '../styles/Head.css';

export default function Head(){
    return(
        <nav className="navbar navbar-expand-lg  sticky-top navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> <i class="bi bi-bag-check"></i> Go </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="bi bi-filter-right"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            &nbsp;
              <li className="nav-item">
                <a className="nav-link active btn btn-primary" aria-current="page" href="#"> <i class="bi bi-house"></i> Home </a>
              </li>
              &nbsp;
              <li className="nav-item">
                <a className="nav-link btn btn-outline-success" href="#"> <i class="bi bi-cart"></i> Your Cart </a>
              </li>
               &nbsp;
              <li className="nav-item">
                <a className="nav-link btn btn-outline-success" href="#"> <i class="bi bi-gear"></i> Settings </a>
              </li>
                &nbsp;
              <li className="nav-item">
                <a className="nav-link btn btn-outline-primary " href="#"> Sign-Up <i class="bi bi-box-arrow-in-right"></i> </a>
              </li>
                &nbsp;
              <li className="nav-item">
                <a className="nav-link btn btn-outline-info " href="#"> Sign-In <i class="bi bi-box-arrow-in-right"></i> </a>
              </li>

            </ul>

            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
}