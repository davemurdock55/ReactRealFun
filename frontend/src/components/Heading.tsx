import React, { Component } from 'react';

export default class Heading extends Component {
   render() {
      return (
         <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
               <div className="container-fluid">
                  <a className="navbar-brand" href="#">MARCH MADNESS</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarColor01">
                  <ul className="navbar-nav me-auto">
                     <li className="nav-item">
                        <a className="nav-link active" href="#teams">Teams
                        <span className="visually-hidden">(current)</span>
                           </a>
                     </li>
                  </ul>
                  <form className="d-flex">
                     <input className="form-control me-sm-2" type="search" placeholder="Search" />
                     <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                  </form>
                  </div>
               </div>
            </nav>

            <div className="mt-5 p-1"></div>
            <h1 className="mt-5 text-primary">MARCH MADNESS</h1>
            <h2 className="mt-3">High School Teams</h2>
         </>
      );
   }
}