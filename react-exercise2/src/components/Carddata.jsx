import react, { useState } from "react";
import Cardcreate from "./Cardcreate";
import html from "../assets/html.jpeg";
import css from "../assets/Css.jpeg";
import js from "../assets/js.png";

function Carddata() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      img: html,
      name: "Html",
      price: 199,
      rate: "4",
    },
    {
      id: 2,
      img: css,
      name: "Css",
      price: 199,
      rate: "4.5",
    },
    {
      id: 3,
      img: js,
      name: "JS",
      price: 299,
      rate: "4.8",
    },
        {
      id: 4,
      img: js,
      name: "React JS",
      price: 999,
      rate: "4.8",
    },

  ]);
  function Deletefunc(id) {
    const newCourse = courses.filter((course) => course.id != id);
    setCourses(newCourse);
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

  return <>{courselist}</>;
}

export default Carddata;
