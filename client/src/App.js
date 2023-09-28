import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";
import ProtecdRoute from "./components/protecdRoute";
import { useSelector } from "react-redux";
import LoaderComp from "./loaders";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import TheatresforMovie from "./pages/TheatreforMovies";
import BookShow from "./pages/BookShow";
import Teachers from "./teachers";

import Addteacher from "./ccomp/addteacher";
import Addstudent from "./ccomp/addstudent";
import Students from "./ccomp/students";
import Teacheredit from "./ccomp/teacheredit";
import Studentedit from "./ccomp/studentedit";
import Teacherview from "./ccomp/teacherview";
import Studentview from "./ccomp/studentview";

function App() {
  const { loading } = useSelector((state) => state.loaders);

  return (
    <div>
      {loading && (
        <div className="loaderparent">
          <div className="loader">
            <LoaderComp />
          </div>
        </div>
      )}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtecdRoute>
                <Admin />
              </ProtecdRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <ProtecdRoute>
                <Admin />
              </ProtecdRoute>
            }
          />

          <Route
            path="/teachers"
            element={
              <ProtecdRoute>
                <Teachers />
              </ProtecdRoute>
            }
          />
          <Route
            path="/students"
            element={
              <ProtecdRoute>
                <Students />
              </ProtecdRoute>
            }
          />

          <Route
            path="/addteacher"
            element={
              <ProtecdRoute>
                <Addteacher />
              </ProtecdRoute>
            }
          />

          <Route
            path="/addstudent"
            element={
              <ProtecdRoute>
                <Addstudent />
              </ProtecdRoute>
            }
          />

          <Route
            path="/editteacher/:id"
            element={
              <ProtecdRoute>
                <Teacheredit />
              </ProtecdRoute>
            }
          ></Route>
          <Route path="/editstudent/:id" element={  <ProtecdRoute>
            <Studentedit />
              </ProtecdRoute>}></Route>

          <Route
            path="/teacher/:id"
            element={
              <ProtecdRoute>
                <Teacherview />
              </ProtecdRoute>
            }
          ></Route>
          <Route
            path="/student/:id"
            element={
              <ProtecdRoute>
                <Studentview />
              </ProtecdRoute>
            }
          ></Route>

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
