import ContextProvider from "./components/Component.jsx";
import StudentList from "./pages/StudentList.jsx";
import FavList from "./pages/FavList.jsx";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter >
        <ContextProvider>
          <Routes>
            <Route path={"/"} element={<StudentList />}>
              {" "}
            </Route>
            <Route path={"/favlist"} element={<FavList />}></Route>
            <Route path={"*"} element={<Navigate to={"/"}></Navigate>}></Route>
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
