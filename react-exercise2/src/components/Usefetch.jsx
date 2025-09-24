import react, { useState, useEffect } from "react";
 function Usefetch(url) {
  const [Data, setData] = useState(null);

  const [Dummy, setDummy] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      // console.log("runnning the useEffect");
      // console.log(Dummy);

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error("can't retrive the data");
          }
          console.log(response);
          return response.json();
        })
        .then((data) => setData(data))
        .catch((error) => {
          setError(error.message);
        });
    }, 1000);
  }, []);
  return [Data,setData, error, Dummy];
};
export default Usefetch;
