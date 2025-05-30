// GETs here

import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export async function getPeople(dispatch) {
  
  const response = await fetch('https://www.swapi.tech/api/people?limit=10&page=0&expanded=true')
  let data = await response.json()
    dispatch({
      type: "add_people",
      payload: data.results
    })}
  
export async function getPlanets(dispatch) {
  
  const response = await fetch('https://www.swapi.tech/api/planets?limit=10&page=0&expanded=true')
  let data = await response.json()
    dispatch({
      type: "add_planets",
      payload: data.results
    })}

export async function getVehicles(dispatch) {
  
  const response = await fetch('https://www.swapi.tech/api/vehicles?limit=10&page=0&expanded=true')
  let data = await response.json()
    dispatch({
      type: "add_vehicles",
      payload: data.results
    })}

// export async function getVehicles() {
//   const { store, dispatch } = useGlobalReducer();
//   try {
//     const response = await fetch(store.BASE_URL, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log("This is the data", data);
//     dispatch({
//       type: "add_vehicles",
//       payload: {
//         vehicleList: data.results,
//       },
//     });
//   } catch (error) {
//     console.error(error.message);
//   }
// }
// export async function getPlanets() {
//   const { store, dispatch } = useGlobalReducer();
//   try {
//     const response = await fetch('https://www.swapi.tech/api/planets/?expanded=true', {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log("This is the data", data);
//     dispatch({
//       type: "add_planets",
//       payload: {
//         planetList: data.results,
//       },
//     });
//   } catch (error) {
//     console.error(error.message);
//   }
// }
