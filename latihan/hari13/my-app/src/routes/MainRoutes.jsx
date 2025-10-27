import { Routes, Route, Outlet, Link, BrowserRouter} from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import CRUDaxios from "../pages/CRUDaxios";
import CRUDcategory from "../pages/CRUDcategory";


function MainRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="movie" element={<CRUDaxios />} />
            <Route path="category" element={<CRUDcategory/>} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}




function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default MainRoutes