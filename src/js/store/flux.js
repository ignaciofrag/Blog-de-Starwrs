const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      planets: [],
      people: [],
      vehicles: [],
      favorites: [],
    },
    actions: {
      loadPeople: () => {
        fetch("https://www.swapi.tech/api/people/")
          .then((response) => response.json())
          .then((data) => {
            const peoplePromises = data.results.map((person) => {
              return fetch(person.url)
                .then((response) => response.json())
                .then((detailsData) => {
                  const characterId = detailsData.result.uid;
                  const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;
                  return {
                    ...detailsData.result.properties,
                    uid: characterId,
                    image: imageUrl,
                  };
                });
            });

            Promise.all(peoplePromises)
              .then((people) => {
                setStore({ people });
              })
              .catch((error) => {
                console.error("Error fetching people details:", error);
              });
          })
          .catch((error) => {
            console.error("Error loading people:", error);
          });
      },

      loadPlanets: () => {
        fetch("https://www.swapi.tech/api/planets/")
          .then((response) => response.json())
          .then((data) => {
            const planetsPromises = data.results.map((planet) => {
              return fetch(planet.url)
                .then((response) => response.json())
                .then((detailsData) => {
                  const planetId = detailsData.result.uid;
                  const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`;
                  return {
                    ...detailsData.result.properties,
                    uid: planetId,
                    image: imageUrl,
                  };
                });
            });
            Promise.all(planetsPromises)
              .then((planets) => {
                setStore({ planets });
              })
              .catch((error) => {
                console.error("Error fetching planets details:", error);
              });
          })
          .catch((error) => {
            console.error("Error loading planets:", error);
          });
      },

      loadVehicles: () => {
        fetch("https://www.swapi.tech/api/vehicles/")
          .then((response) => response.json())
          .then((data) => {
            const vehiclesPromises = data.results.map((vehicle) => {
              return fetch(vehicle.url)
                .then((response) => response.json())
                .then((detailsData) => {
                  const vehicleId = detailsData.result.uid;
                  const imageUrl = `https://starwars-visualguide.com/assets/img/vehicles/${vehicleId}.jpg`;
                  return {
                    ...detailsData.result.properties,
                    uid: vehicleId,
                    image: imageUrl,
                  };
                });
            });
            Promise.all(vehiclesPromises)
              .then((vehicles) => {
                setStore({ vehicles });
              })
              .catch((error) => {
                console.error("Error fetching vehicles details:", error);
              });
          })
          .catch((error) => {
            console.error("Error loading vehicles:", error);
          });
      },
      // Handle favorites
      addFavorite: (item) => {
        const store = getStore();
        setStore({ favorites: [...store.favorites, item] });
      },
	  removeFavorite: (uid) => {
		const store = getStore();
		const newFavorites = store.favorites.filter((item) => item.uid !== uid);
		setStore({ favorites: newFavorites });
	  },
    },
  };
};

export default getState;
