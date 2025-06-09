import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const VehicleCard = ({ vehicle, uid, id }) => {
  const { store, dispatch } = useGlobalReducer();

  // This checks to see if this vehicle is already a favorite 
  const isFavorite = store.favorites.find((favorite) => favorite.type === "vehicle" && favorite.uid == uid);

  return (
    <div className="card text-align border-warning m-2" style={{ width: "18rem", height: "auto" }}>
      <img
        src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/vehicles/${uid}.jpg?raw=true`}
        className="card-img-top"
        style={{ height: "17rem" }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{vehicle?.name}</h5>
        <div className="card-text" style={{ height: "10rem" }}>
          <p>model: {vehicle?.model}</p>
          <p>crew: {vehicle?.crew}</p>
          <p>manufacturer: {vehicle?.manufacturer}</p>
        </div>
        <Link to={`/vehicle/${uid}`}>Learn more</Link>
        <button
          className={`btn ms-2 ${isFavorite ? "btn-warning" : "btn-outline-warning"}`}
          onClick={() =>
            dispatch({
              type: "toggle_favorite",
              payload: { 
                id: id,
                name: vehicle?.name, 
                uid: uid,
                type: "vehicle"
              },
            })
          }
        >
          Favorite
        </button>
      </div>
    </div>
  );
};
