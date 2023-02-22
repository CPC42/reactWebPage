import React from "react";

type Props = {
  title: string;
  content: string;
};

const HomePage: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <main>
        <h1></h1>
        <p></p>
      </main>
      <footer>&copy; 2022 My Site</footer>
    </div>
  );
};

export default HomePage;
