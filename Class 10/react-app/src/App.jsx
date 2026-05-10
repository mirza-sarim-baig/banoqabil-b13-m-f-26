import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import MainArea from "./component/contentArea";
import Button from "./component/button/Button";
import { useRef, useState } from "react";
import MyComp from "./component/myComp";

function App() {
  const [count, setCount] = useState(0);
  const [isDisplay, setIsDisplay] = useState(false);

  const [name, setName] = useState("");
  // const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    // console.log(inputRef.current.value);
  };
  return (
    <>
      <MainArea />

      {/* <Header />
      <MyComp name={39} age="kajsdflkj" />

      {isDisplay ? <Button count="helo" /> : <h1>Display is Off</h1>}

      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setIsDisplay(!isDisplay)}>Toggle Display</button>
      <Footer /> */}
      {/* <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input type="text" ref={inputRef} />
        </label>
        <input type="submit" value="Submit" />
      </form> */}
    </>
  );
}

export default App;
