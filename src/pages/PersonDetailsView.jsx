import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PersonDetailsView = () => {
  const { store, dispatch } = useGlobalReducer();
  const [person, setPerson] = useState({});
  const { uid } = useParams();

  useEffect(() => {
    const getPerson = async () => {
      const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);
      let data = await response.json();
      setPerson(data.result.properties);
      console.log(data.result.properties);
      return data;
    };
    getPerson();
  }, []);

  return (
    <div className="container border-1 solid">
      <div className="d-flex">
        <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${uid}.jpg?raw=true`} className="img-fluid" alt="..."/>
        <div className="col">
          <h1>{person?.name}</h1>
          <div className="bio">Lorum ipsum</div> 
        </div>
      </div>
      <div className="details d-flex row">
        <div className="col">gender: {person?.gender}</div>
        <div className="col">eye color: {person?.eye_color}</div>
        <div className="col">hair color: {person?.hair_color}</div>
        <div className="col">height: {person?.height}</div>
        <div className="col">mass: {person?.mass}</div>
      </div>
    </div>
  );
};
