import React, { useContext } from "react";

import { Context } from "../store/appContext.js"
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
  return (
		<nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="/">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png" width="100" alt="" />
  </a>
  <button className="btn btn-primary dropdown-toggle mx-2 mb-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
	Favorites  </button>
	<div className="dropdown-menu dropdown-menu-end p-2"> 
            <ul className="px-2">
              {store.favorites.map((favorite, index) => (
               <li className="navbar d-flex justify-content-between dropdown-menu-item" key={index}>
                  <div>{favorite.name}</div>
                  <div class="deleteFav mx-2" onClick={() => actions.deleteFav(favorite.name)}>X</div>
                </li>
              ))}
            </ul>
          </div>
</nav>
	);
};