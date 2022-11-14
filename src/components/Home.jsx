import React from "react";
import vg from "../assets/2.webp";

const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>Techstar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphi cs" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem
            error earum nemo, fugit non laboriosam temporibus rem atque
            obcaecati quos neque itaque ab reprehenderit! Repellendus
            perferendis tenetur quibusdam. Quasi?
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
