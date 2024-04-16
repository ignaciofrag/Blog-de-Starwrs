import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailView.css';

const DetailView = () => {
  const [details, setDetails] = useState(null);
  const [films, setFilms] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [starships, setStarships] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${id}`)
      .then(response => response.json())
      .then(data => {
        setDetails(data.result.properties);
        return Promise.all([
          ...data.result.properties.films.map(url => fetch(url).then(res => res.json())),
          ...data.result.properties.vehicles.map(url => fetch(url).then(res => res.json())),
          ...data.result.properties.starships.map(url => fetch(url).then(res => res.json())),
        ]);
      })
      .then(all => {
        const filmsData = all.slice(0, details.films.length).map(item => item.result.properties);
        const vehiclesData = all.slice(details.films.length, details.films.length + details.vehicles.length).map(item => item.result.properties);
        const starshipsData = all.slice(details.films.length + details.vehicles.length).map(item => item.result.properties);
        setFilms(filmsData);
        setVehicles(vehiclesData);
        setStarships(starshipsData);
      })
      .catch(error => console.error("Error loading details:", error));
  }, [id]);

  if (!details) {
    return <div className="loading">Cargando...</div>;
  }

  const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

  return (
    <div className="detail-view-container">
      <div className="detail-image">
        <img src={imageUrl} alt={details.name} />
      </div>
      <div className="detail-content">
        <h1>{details.name}</h1>
        <p>Birth Year: {details.birth_year}</p>
        <p>Species: {details.species}</p>
        <p>Height: {details.height}</p>
        <p>Mass: {details.mass}</p>
        <p>Gender: {details.gender}</p>
        <p>Hair Color: {details.hair_color}</p>
        <p>Skin Color: {details.skin_color}</p>
        <p>Eye Color: {details.eye_color}</p>
        <p>Homeworld: {details.homeworld}</p>

        <div className="related-content">
          <h2>Related Films</h2>
          {films.map(film => (
            <div key={film.title}>
              <p>{film.title} - {film.release_date}</p>
            </div>
          ))}

          <h2>Related Vehicles</h2>
          {vehicles.map(vehicle => (
            <div key={vehicle.name}>
              <p>{vehicle.name} - {vehicle.model}</p>
            </div>
          ))}

          <h2>Related Starships</h2>
          {starships.map(starship => (
            <div key={starship.name}>
              <p>{starship.name} - {starship.model}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailView;