import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "./CardComponent.css";

const CardComponent = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (store.people.length === 0) {
      actions.loadPeople();
    }
    if (store.planets.length === 0) {
      actions.loadPlanets();
    }
    if (store.vehicles.length === 0) {
      actions.loadVehicles();
    }
  }, [
    actions,
    store.people.length,
    store.planets.length,
    store.vehicles.length,
  ]);

  const handleShowDetails = (type, id) => {
    navigate(`/${type}/${id}`);
  };

  if (
    !store.people ||
    store.people.length === 0 ||
    !store.planets ||
    store.planets.length === 0 ||
    !store.vehicles ||
    store.vehicles.length === 0
  ) {
    return (
      <div
        className="d-flex justify-content-center"
        style={{ height: "30vh", alignItems: "center" }}
      >
        <div className="text-center">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <h4 className="mt-3">Cargando personajes, planetas y vehículos...</h4>
        </div>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-center mb-4">PERSONAJES</h2>
      <div className="container-fluid">
        <div className="d-flex flex-row flex-nowrap overflow-auto">
          {store.people.map((person) => (
            <div
              key={person.uid}
              className="card card-block mx-2"
              style={{ minWidth: "18rem" }}
            >
             
              <img
                src={person.image || "path_to_default_image"}
                className="card-img-top"
                alt={person.name}
              />
              <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <p className="card-text">
                  Gender: {person.gender || "N/A"}
                  <br />
                  Hair Color: {person.hair_color || "N/A"}
                  <br />
                  Eye-Color: {person.eye_color || "N/A"}
                </p>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => actions.addFavorite(person)}
                  >
                    <i className="fas fa-heart" style={{ color: "yellow" }}></i>
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleShowDetails("people", person.uid)}
                  > 
                    Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-center my-4">PLANETAS</h2>
      <div className="container-fluid">
        <div className="d-flex flex-row flex-nowrap overflow-auto">
          {store.planets.map((planet) => (
            <div
              key={planet.uid}
              className="card card-block mx-2"
              style={{ minWidth: "18rem" }}
            >
          
              <img
                src={planet.image || "path_to_default_planet_image"}
                className="card-img-top"
                alt={planet.name}
              />
              <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <p className="card-text">
                  Population: {planet.population}
                  <br />
                  Terrain: {planet.terrain}
                </p>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => actions.addFavorite(planet)}
                  >
                    <i className="fas fa-heart" style={{ color: "yellow" }}></i>
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => {

                      /* MANEJO DE DETALLES*/
                    }}
                  >
                    Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-center my-4">VEHÍCULOS</h2>
      <div className="container-fluid">
        <div className="d-flex flex-row flex-nowrap overflow-auto">
          {store.vehicles.map((vehicle) => (
            <div
              key={vehicle.uid}
              className="card card-block mx-2"
              style={{ minWidth: "18rem" }}
            >
              <img
                src={vehicle.image || "path_to_default_vehicle_image"}
                className="card-img-top"
                alt={vehicle.name}
              />
              <div className="card-body">
                <h5 className="card-title">{vehicle.name}</h5>
                <p className="card-text">
                  Model: {vehicle.model || "N/A"}
                  <br />
                  Manufacturer: {vehicle.manufacturer || "N/A"}
                  {/* FALTA AGREGAR detalles  */}
                </p>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => actions.addFavorite(vehicle)}
                  >
                    <i className="fas fa-heart" style={{ color: "yellow" }}></i>
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      /* MANEJO DE DETALLES */
                    }}
                  >
                    Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardComponent;
