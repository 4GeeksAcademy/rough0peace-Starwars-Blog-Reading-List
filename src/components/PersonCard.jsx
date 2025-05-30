// make people card, once it works to some degree make a mock up of people card and then work on store
// api calls in store
// go back to people card, get functionality working including learn more
// people details learn more, whole other component for this

// onClick go here favorite button and the learn more
// going to use ID's functionality inside store and global reducer
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const PersonCard = ({ person, uid, id }) => {
  const { store, dispatch } = useGlobalReducer();

  // This checks to see if this person is already a favorite
  const isFavorite = store.favorites.some(
    (favorite) => favorite.uid === uid && favorite.type === "person"
  );

  return (
    <div className="card text-align" style={{ width: "18rem" }}>
      <img
        src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${uid}.jpg?raw=true`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{person?.name}</h5>
        <div className="card-text">
          <p>gender: {person?.gender}</p>
          <p>eye color: {person?.eye_color}</p>
          <p>hair color: {person?.hair_color}</p>
        </div>
        <div className="card-footer">
          <Link to={`/person/${uid}`}>Learn more</Link>
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
                  name: person?.name,
                  type: "person"
                }
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
