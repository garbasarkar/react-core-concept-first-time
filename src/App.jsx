import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";
import Posts from "./Posts";
function App() {
  function handerGet() {
    alert("handel click!!!");
  }
  const handelGet2 = () => {
    alert("tore dhore felechii!!!");
  };
  const perameters = (sum) => {
    alert(sum + 5);
  };
  return (
    <>
      <h3>React core concept</h3>
      <button onClick={handerGet}>Click Me</button>
      <button onClick={handelGet2}>Click Me2</button>
      <button onClick={() => alert("ak line a code sash!!!")}>
        Click third
      </button>
      <button onClick={() => perameters(5)}>Click five</button>

      <Counter></Counter>
      <Team></Team>
      <Users></Users>
      <Friends></Friends>
      <Posts></Posts>
    </>
  );
}

export default App;
