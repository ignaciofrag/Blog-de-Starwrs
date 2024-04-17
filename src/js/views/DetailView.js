import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailView.css';

const DetailView = () => {
  const [details, setDetails] = useState(null);
  const [relatedData, setRelatedData] = useState({ films: [], vehicles: [], starships: [], residents: [] });
  const { type, id } = useParams();

  useEffect(() => {
    let apiUrl = `https://www.swapi.tech/api/${type}/${id}`;
    let imageBaseURL;

    if (type === 'people') {
      imageBaseURL = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
    } else if (type === 'planets') {
      imageBaseURL = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
    } else if (type === 'vehicles') {
      imageBaseURL = `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`;
    }

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setDetails({ ...data.result.properties, imageUrl: imageBaseURL });

        // Aquí manejaríamos la carga de datos relacionados como películas, vehículos, etc.
        // dependiendo del tipo de entidad.
        // [...]
      })
      .catch(error => console.error("Error loading details:", error));
  }, [id, type]);

  if (!details) {
    return (
      <div className="d-flex justify-content-center" style={{ height: "30vh", alignItems: "center" }}>
        <div className="text-center">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <h4 className="mt-3">Cargando detalles...</h4>
        </div>
      </div>
    );
  }

  // Renderizar contenido basado en el tipo de entidad.
  let content;
  if (type === 'people') {
    content = (
      <>
        <p>Birth Year: {details.birth_year}</p>
        <p>Species: {details.species}</p>
        <p>Height: {details.height}</p>
        <p>Mass: {details.mass}</p>
        <p>Gender: {details.gender}</p>
        <p>Hair Color: {details.hair_color}</p>
        <p>Skin Color: {details.skin_color}</p>
        <p>Eye Color: {details.eye_color}</p>
        <p>Homeworld: {details.homeworld}</p>
      </>
    );
  } else if (type === 'planets') {
    content = (
      <>
        <p>Population: {details.population}</p>
        <p>Rotation Period: {details.rotation_period}</p>
        <p>Orbital Period: {details.orbital_period}</p>
        <p>Diameter: {details.diameter}</p>
        <p>Gravity: {details.gravity}</p>
        <p>Terrain: {details.terrain}</p>
        <p>Surface Water: {details.surface_water}</p>
        <p>Climate: {details.climate}</p>
      </>
    );
  } else if (type === 'vehicles') {
    content = (
      <>
        <p>Model: {details.model}</p>
        <p>Manufacturer: {details.manufacturer}</p>
        <p>Class: {details.vehicle_class}</p>
        <p>Cost: {details.cost_in_credits}</p>
        <p>Speed: {details.max_atmosphering_speed}</p>
        <p>Length: {details.length}</p>
        <p>Cargo Capacity: {details.cargo_capacity}</p>
        <p>Minimum Crew: {details.crew}</p>
        <p>Passengers: {details.passengers}</p>
        </>
    );
  }

  return (
    <div className="detail-view-container">
      <div className="detail-image">
        <img src={details.imageUrl} alt={details.name} />
      </div>
      <div className="detail-content">
        <h1>{details.name}</h1>
        {content}
      </div>
    </div>
   );
  };

export default DetailView;
