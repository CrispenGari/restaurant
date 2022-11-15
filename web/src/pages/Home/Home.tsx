import React from "react";
import { Banner, Footer, Header, Main } from "../../components";
import "./Home.css";
interface Props {}
const Home: React.FC<Props> = ({}) => {
  return (
    <div className="home">
      <Header />
      <Banner />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
