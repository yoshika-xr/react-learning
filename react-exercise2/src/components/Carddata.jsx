import react, { useState, useEffect } from "react";
import Cardcreate from "./Cardcreate";

function Carddata() {
  const [courses, setCourses] = useState(null);

  const [Dummy, setDummy] = useState(true);

  const [error,setError]=useState(null);
  useEffect(() => {
    console.log("runnning the useEffect");
    console.log(Dummy);

    fetch("http://localhost:3000/coursess")
      .then((response) => {
        if(!response.ok){
          throw Error("can't retrive the data");
        }
        console.log(response);
        return response.json();
      })
      .then((data) => setCourses(data))
      .catch((error) => {
        setError(error.message);
      })
  }, []);

  function Deletefunc(id) {
    const newCourse = courses.filter((course) => course.id != id);
    setCourses(newCourse);
  }
  if(!courses){
    return <>{error}</>
  }
  const courselist = courses.map((course) => (
    <Cardcreate
      key={course.id}
      name={course.name}
      price={course.price}
      rate={course.rate}
      img={course.img}
      delete={Deletefunc}
      id={course.id}
    />
  ));

  return (
    <>
      {courselist}
      <button
        onClick={() => {
          setDummy(false);
        }}
      >
        Dummy
      </button>
    </>
  );
}

export default Carddata;
