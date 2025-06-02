import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <nav className="navbar navbar-light bg-secondary">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Star Wars</span>
        </Link>
        <div className="ml-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="favoritesDropdown"
              style={{ listStyleType: "none" }}
            >
              {store.favorites.length === 0 ? (
                <li className="dropdown-item text-muted">No favorites</li>
              ) : (
                store.favorites.map((favorite, index) => (
                  <li key={favorite.uid || index} className="dropdown-item">
                    <span>{favorite.name}</span>
                    <button
                      className="btn btn-sm btn-danger ms-2"
                      onClick={e => {
                        e.stopPropagation();
                        dispatch({
                          type: "toggle_favorite",
                          payload: favorite
                        });
                      }}
                    >
                      &times;
                    </button>
                  </li>
                ))
              )}
            </ul>
          </li>
        </div>
      </div>
    </nav>
  );
};
