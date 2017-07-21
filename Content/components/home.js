import * as React from "react";

const Home = () => (
  <div>
    <h1>Hello!</h1>
    <p>Welcome to a Weather SPA:</p>
    <ul>
      <li>See the current weather in 3 different cities</li>
      <li>See historic weather data</li>
      <li>See fancy graphs</li>
    </ul>
    <p>To get started, hit the button below</p>
    <button
      className="btn btn-primary"
    >
      Get Started!
    </button>
  </div>
);

export default Home;
