import react from "react";
import Cardcreate from "./Cardcreate";
import html from "../assets/html.jpeg"
import css from "../assets/Css.jpeg";
import js from  "../assets/js.png";

function Carddata() {
  const courses = [
    {
      img: html,
      name: "Html",
      price: "$199",
      rate: "4",
    },
    {
      img: css,
      name: "Css",
      price: "$199",
      rate: "4.5",
    },
    {
      img: js,
      name: "JS",
      price: "299",
      rate: "4.8",
    }
]
  const courselist = courses.map((course) => (
    <Cardcreate
      name={course.name}
      price={course.price}
      rate={course.rate}
      img={course.img}
    />
  ));

  return (
    <>
    {courselist}
    </>
  );
}

export default Carddata;
