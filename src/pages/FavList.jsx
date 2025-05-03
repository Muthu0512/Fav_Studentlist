import { useContext } from "react";
import { StudentContext } from "../components/Component";

const FavList = () => {
  const { stdList,setStdList,favStd, setFavStd } = useContext(StudentContext);

  function handleRemove(fav) {
    let tempArr = favStd.filter((student, index) => {
      return student.name !== fav.name;
    });
    setFavStd(tempArr);

    const updatedStdList=stdList.map((checking)=>{
       return checking.name===fav.name?{...checking,isFavorite:false}: checking
    })
    setStdList(updatedStdList)
  }
  return (
    <div >
      {favStd.map((fav, idx) => {
        return (
          <div
            key={idx}
            className="grid align-middle justify-start
                    grid-cols-[200px_400px_300px] text-3xl mx-5 my-10 "
          >
            <h2>{idx + 1}</h2>
            <h2>{fav.name}</h2>
            <button
              onClick={() => {
                handleRemove(fav);
              }}
              className="bg-red-700 text-white p-2 border rounded-lg hover:bg-red-900"
            >
              Remove Favorite
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default FavList;
