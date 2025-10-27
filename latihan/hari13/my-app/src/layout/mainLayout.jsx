import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <nav className="navbar-center bg-base-100 shadow-sm">
        <ul>
          <li className="btn btn-ghost text-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="btn btn-ghost text-xl">
            <Link to="/movie">Movies</Link>
          </li>
          <li className="btn btn-ghost text-xl">
            <Link to="/category">Categories</Link>
          </li>
          <li className="btn btn-ghost text-xl">
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

