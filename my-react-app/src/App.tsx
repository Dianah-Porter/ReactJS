import HelloMessage from "./HelloMessage";
import Great from "./Great";
import Mapc from "./components/Mapc";
import Calculate from "./components/JsxE";
import Props from "./components/props";
import Cars from "./components/Destructuring"


function Footer (){
  return (<h2>footer</h2>)
}
const x = [1999, 2034, 2045];
const y = {brand: 'Mustang', year: 2006};

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <HelloMessage/>
      <Great/>
      <Footer/>
      <Mapc/>
      <Calculate/>
      <Props years={x} info={y}/>
      <Cars color="Red" brand="Mustang" year={1969} model="Suzuki" />
    </div>
  );
}

export default App;