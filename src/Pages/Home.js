import Autoplayswipeableviews from "../Components/Autoplayswipeableviews";
import Moreprojectssection from "../Components/Moreprojectssection";
import Productssection from "../Components/Productssection";
import Button from "@mui/material/Button";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <h1>INICIO</h1>
      <Autoplayswipeableviews />
      <Productssection />
      <Moreprojectssection />
    </div>
  );
}

export default Home;
