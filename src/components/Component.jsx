import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const StudentContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [stdList, setStdList] = useState([]);
  const [favStd, setFavStd] = useState([]);
  const navigate = useNavigate();

  

  return (
    <StudentContext.Provider value={{ stdList, setStdList, user, setUser,favStd,setFavStd}} >
      <section className="bg-orange-400 flex justify-start gap-40 px-10 py-5 text-3xl ">

        <button className="bg-violet-600 p-3 border rounded-lg border-none hover:bg-violet-800  hover:underline" onClick={() => navigate("/") } >StudentList</button>
        <button className="bg-emerald-600 p-3 border rounded-lg border-none hover:bg-emerald-800 hover:underline" onClick={() => navigate("/favlist")} >Favourite Students</button>
        
      </section>
      <section>{children}</section>
    </StudentContext.Provider>
  );
};

export default ContextProvider;

export { StudentContext };
