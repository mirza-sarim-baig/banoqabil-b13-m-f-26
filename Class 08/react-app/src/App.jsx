import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import MainArea from "./component/contentArea";
import Button from "./component/button/Button";
import { useState } from "react";
import MyComp from "./component/myComp";

function App() {
  const [count, setCount] = useState(0);
  const [isDisplay, setIsDisplay] = useState(false);
  return (
    <>
      <Header />
      <MyComp name={39} age="kajsdflkj" />

      {isDisplay ? <Button count="helo" /> : <h1>Display is Off</h1>}

      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setIsDisplay(!isDisplay)}>Toggle Display</button>
      <MainArea />
      <Footer />
    </>
  );
}

export default App;
