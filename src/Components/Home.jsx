import React from "react";
import { Link } from "react-scroll";
import Button from "../layouts/Button";

const Home = () => {
  const backgroundColor = `bg-brightColor`;
  return (
    <div>
      <div>
        <h1>Discover the Best Destination</h1>
        <p>
          With TripVista you can experience new travel and the best tourist
          destination the we have to offer
        </p>
        <div>
          <Link>
            <Button title="Destinations" backgroundColor={backgroundColor} />
          </Link>
        </div>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Home;
