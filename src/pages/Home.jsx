import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { PersonCard } from "../components/PersonCard.jsx";
import { PlanetCard } from "../components/PlanetCard.jsx";
import { VehicleCard } from "../components/VehicleCard.jsx";
import { useEffect, useState } from "react";

export const Home = () => {
  const { store, dispatch, getPeople, getPlanets, getVehicles } =
    useGlobalReducer();

  useEffect(() => {
    getPeople(dispatch);
    getPlanets(dispatch);
    getVehicles(dispatch);
  }, []);

  return (
    <div className="databaseBody mt-5 bg-secondary">
      <ul className="list-group d-flex">
        <div className="container">
          <h1 className="title d-flex justify-content-center text-warning border border-warning bg-warning-subtle m-auto" style={{ width: 200 }}>
            {" "}
            People{" "}
          </h1>
          <div className="scrollmenu d-flex overflow-x-scroll mb-5">
            {store.peopleList?.map((person, index) => {
              // console.log("person", person.properties);
              return (
                <div key={person.uid}>
                  <PersonCard
                    person={person.properties}
                    uid={person.uid}
                    id={person._id}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <br></br>
        <div className="container">
          <h1 className="title d-flex justify-content-center text-warning border border-warning bg-warning-subtle m-auto" style={{ width: 200 }}> Planets </h1>
          <div className="scrollmenu d-flex overflow-x-scroll mb-5">
            {store.planetsList?.map((planet, index) => {
              // console.log("planet", planet.properties);
              return (
                <div key={planet.uid}>
                  <PlanetCard
                    planet={planet.properties}
                    uid={planet.uid}
                    id={planet._id}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <br></br>
        <div className="container">
          <h1 className="title d-flex justify-content-center text-warning border border-warning bg-warning-subtle m-auto" style={{ width: 200 }}> Vehicles </h1>
          <div className="scrollmenu d-flex overflow-x-scroll mb-5">
            {store.vehiclesList?.map((vehicle, index) => {
              // console.log("vehicle", vehicle.properties);
              return (
                <div key={vehicle.uid}>
                  <VehicleCard
                    vehicle={vehicle.properties}
                    uid={vehicle.uid}
                    id={vehicle._id}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </ul>
    </div>
  );
};
