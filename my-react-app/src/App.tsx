import HelloMessage from "./HelloMessage";
import Great from "./Great";
import Mapc from "./components/Mapc";
import Calculate from "./components/JsxE";
import Props from "./components/Props";
import Cars from "./components/Destructuring";
import Parent from "./components/Pchildren";
import Football from "./components/events";
import Goal from "./components/conditionals";
import MyCars from "./components/lists";
import MyCarss from "./components/keys";
import MyForm from "./components/form"
import OnSubmit from "./components/Submit";
import TextArea from "./components/TextArea";


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
      <Parent />
      <Football />
      <Goal isGoal={false}/>
      <MyCars/>
      <MyCarss/>
      <MyForm/>
      <OnSubmit/>
      <TextArea/>
      
    </div>
  );
}

export default App;