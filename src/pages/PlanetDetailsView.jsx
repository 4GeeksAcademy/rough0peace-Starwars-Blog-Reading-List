import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PlanetDetailsView = () => {
  const { store, dispatch } = useGlobalReducer();
  const [planet, setplanet] = useState({});
  const { uid } = useParams();

  useEffect(() => {
    const getplanet = async () => {
      const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
      let data = await response.json();
      setplanet(data.result.properties);
      console.log(data.result.properties);
      return data;
    };
    getplanet();
  }, []);

  return (
    <div className="container border-1 solid">
      <div className="d-flex">
        <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/planets/${uid}.jpg?raw=true`} className="img-fluid" alt="..."/>
        <div className="col">
          <h1>{planet?.name}</h1>
          <div className="bio">Lorum ipsum</div> 
        </div>
      </div>
      <div className="details d-flex row">
        <div className="col">population: {planet?.population}</div>
        <div className="col">terrain: {planet?.terrain}</div>
        <div className="col">climate: {planet?.climate}</div>
        <div className="col">gravity: {planet?.gravity}</div>
        <div className="col">diameter: {planet?.diameter}</div>
      </div>
    </div>
  );
};