import Cardcreate from "./Cardcreate";
import Usefetch from "./Usefetch";

function Carddata() {
  const [courses, Dummy, error, setData, setDummy] = Usefetch(
    "http://localhost:3000/courses"
  );


  function Deletefunc(id) {
    const newCourse = courses.filter((course) => course.id != id);
    setData(newCourse);
  };

  
  if (!courses) {
    return (
      <>
        {!error && <img src="data\assets\loadanim.gif"></img>}
        {error && <h2> {error} </h2>}
      </>
    );
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
