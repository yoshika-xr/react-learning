import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to={"/login"}>home</Link>
    </div>
  );
}

export default Home;
