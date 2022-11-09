import Cards from "../Card";
import Button from "../Card/Button"
import "./App.css";

function App() {
  return <Cards>
    <img alt="soc" width={"100%"} src={ "https://i.ytimg.com/vi/hHwblpw3grg/maxresdefault.jpg" } />
    <h3>Test Title</h3>
    <p> Most important test paragraph... </p>
    <Button color="red"/>
    <Button color="blue"/>
  </Cards>;
}

export default App;


// - A title :

//   `<h3> props goes here </h3>`

// - text description :

//   `<p> props goes here </p>`

// - An Image :

//   `<img alt="soc" width={"100%"} src={ url props goes here } />`