import { useContext } from "react";
import { StudentContext } from "../components/Component";

const StudentList = () => {
  const { stdList, setStdList, user, setUser, favStd, setFavStd } =
    useContext(StudentContext);

  function handleSubmit(e) {
    e.preventDefault();
    setStdList([...stdList, { id: stdList.length + 1, name: user }]);
    setUser("");
  }
  

  function addFav(student) {
    if (favStd.some((check) => check.name === student.name)) {
      return;
    }
    setFavStd([...favStd, { id: favStd.length + 1, name: student.name }]);
  }


  return (
    <div >
      <section>
        {stdList.map((student, index) => {
          const isfav = favStd.some((s) => s.name === student.name);
          return (
            <div
              className="grid align-middle justify-start
                         grid-cols-[100px_300px_300px] text-3xl mx-5 my-10   "
              key={index}
            >
              <h2>{student.id}</h2>
              <h2>{student.name}</h2>
              <button
         
                className={`${
                  isfav
                    ? "bg-green-900 cursor-not-allowed bg-opacity-50"
                    : "bg-green-900 hover:bg-green-700"
                } p-2 border rounded-lg text-white`}
                disabled={isfav}
                onClick={() => {
                  addFav(student);
                }}
              >
                {isfav ? "Added" : "Add to Favorite"}
              </button>
            </div>
          );
        })}
      </section>

      <form
        onSubmit={handleSubmit}
        className="flex  justify-start align-middle gap-7 mx-52 my-32 text-center   "
      >
        <label htmlFor="name" className="text-2xl underline">
          Enter Student Name :
        </label>
        <input
          className="border-solid border-2 border-black p-2  rounded-lg text-2xl"
          value={user}
          type="text"
          name="name"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <button
          type="submit"
          className="bg-sky-700 text-white text-xl border rounded-md p-2 hover:scale-90"
        >
          Add Name
        </button>
      </form>
    </div>
  );
};
export default StudentList;
