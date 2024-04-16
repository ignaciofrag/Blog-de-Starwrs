import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/3.jpg"; // Ajuste de la ruta relativa
import { Context } from "../store/appContext";
import "../../styles/navbar.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const handleRemoveFavorite = (uid, event) => {
    event.preventDefault();
    actions.removeFavorite(uid);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-black bg-white mb-3">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Logo" style={{ height: "100px" }} />
      </Link>
      <div
        className="d-flex justify-content-end w-100"
        style={{ paddingRight: "70px" }}
      >
        {" "}
        {/* Añade padding derecho al contenedor */}
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-success position-relative dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favoritos
            {store.favorites.length > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {store.favorites.length} {/* Muestra el número de favoritos */}
                <span className="visually-hidden">favoritos</span>
              </span>
            )}
          </button>
          <ul
            className="dropdown-menu"
            style={{ position: "absolute", right: 0 }}
          >
            {store.favorites.map((favorite, index) => (
              <li key={index}>
                <a className="dropdown-item" href="#">
                  {favorite.name}
                  <span
                    onClick={(e) => handleRemoveFavorite(favorite.uid, e)}
                    className="badge bg-danger ml-2"
                    style={{ cursor: "pointer" }}
                  >
                    <i
                      className="fas fa-trash-alt"
                      style={{ color: "white" }}
                    ></i>
                  </span>
                </a>
              </li>
            ))}
            {store.favorites.length === 0 && (
              <li className="dropdown-item text-center">No hay favoritos</li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
