import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const PlanetCard = ({ planet, id, uid }) => {
  const { store, dispatch } = useGlobalReducer();

  // This checks to see if this planet is already a favorite
  const isFavorite = store.favorites.some((favorite) => favorite.uid === uid && favorite.type === "planet");

  return (
    <div className="card text-align border-primary m-2" style={{ width: "18rem" }}>
      <img
        src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/planets/${uid}.jpg?raw=true`}
        className="card-img-top"
        style={{ height: "17rem" }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{planet?.name}</h5>
        <div className="card-text" style={{ height: "10rem" }}>
          <p>population: {planet?.population}</p>
          <p>climate: {planet?.climate}</p>
          <p>terrain: {planet?.terrain}</p>
        </div>
        <div className="card-footer">
          <Link to={`/planet/${uid}`}>Learn more</Link>
          <button
            className={`btn ms-2 ${
              isFavorite ? "btn-warning" : "btn-outline-warning"
            }`}
            onClick={() =>
              dispatch({
                type: "toggle_favorite",
                payload: { 
                  id: id,
                  uid: uid,
                  name: planet?.name, 
                  type: "planet"
                },
              })
            }
          >
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
};
