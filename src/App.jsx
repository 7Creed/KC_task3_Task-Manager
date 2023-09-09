import { useState } from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import Body from "../components/Section/Body";
import '../styles/global.css'
// import Test from "../components/test";

// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <div className="lg:flex">
        <Menu />
        <div className="px-5 font-inter">
          <Header />
          <Body />
        </div>
      </div>
      {/* <Test /> */}
    </>
  );
}

export default App;
