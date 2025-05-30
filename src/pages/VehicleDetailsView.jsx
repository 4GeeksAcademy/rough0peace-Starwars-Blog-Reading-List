import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const VehicleDetailsView = () => {
  const { store, dispatch } = useGlobalReducer();
  const [vehicle, setvehicle] = useState({});
  const { uid } = useParams();

  useEffect(() => {
    const getVehicle = async () => {
      const response = await fetch(`https://www.swapi.tech/api/vehicles/${uid}`);
      let data = await response.json();
      setvehicle(data.result.properties);
      console.log(data.result.properties);
      return data;
    };
    getVehicle();
  }, []);

  return (
    <div className="container border-1 solid">
      <div className="d-flex">
        <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/vehicles/${uid}.jpg?raw=true`} className="img-fluid" alt="..."/>
        <div className="col">
          <h1>{vehicle?.name}</h1>
          <div className="bio">Lorum ipsum</div> 
        </div>
      </div>
      <div className="details d-flex row">
        <div className="col">model: {vehicle?.model}</div>
        <div className="col">vehicle class: {vehicle?.vehicle_class}</div>
        <div className="col">pilots: {vehicle?.pilots}</div>
        <div className="col">passengers: {vehicle?.passengers}</div>
        <div className="col">manufacturer: {vehicle?.manufacturer}</div>
      </div>
    </div>
  );
};