// most functionality will be here
// ID or UID
// in store, general call for people to display on home page, SWAPI.tech/etc etc
// making calls in card, for making it appear as specific people, utilize ID of that call the IDs
// learn more is a good example
// that API call is gonna look like `swapi.tech/api/people/${ID}` => people/1 or people/3

// anywhere you have to call your store, for API calls, import global reducer and make a const for that
//   const {store, dispatch} =useGlobalReducer()

// need things like instead of todos, people [], people details [{description, properties}],  favorites []
export const initialStore = () => {
  return {
    BASE_URL: "https://www.swapi.tech/api/",
    peopleList: [],
    vehiclesList: [],
    planetsList: [],
    favorites: [],
  };
};

//inside store reducer asynch and await functions

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "add_people":
      const { peopleList } = action.payload;

      return {
        ...store,
        peopleList: action.payload, 
      };

    case "add_planets": 
      const { planetList } = action.payload; 

      return {
        ...store,
        planetsList: action.payload,
      };

    case "add_vehicles":
      const { vehicleList } = action.payload;

      return {
        ...store,
        vehiclesList: action.payload,
      };

    case "toggle_favorite":

      const alreadyFavorited = store.favorites.some(
        (object) => object.id === action.payload.id
      );
      console.log("Already favorited:", alreadyFavorited);
      console.log("Payload:", action.payload);
      return {
        ...store,
        favorites: alreadyFavorited
          ? store.favorites.filter((object) => object.id !== action.payload.id)
          : [...store.favorites, action.payload],
      };
    default:
      throw Error("Unknown action.");
  }
}
