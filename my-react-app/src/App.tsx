import HelloMessage from "./HelloMessage";
import Great from "./Great";
import Mapc from "./components/Mapc";
import Calculate from "./components/jsxE";


function Footer (){
  return (<h2>footer</h2>)
}
function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <HelloMessage/>
      <Great/>
      <Footer/>
      <Mapc/>
      <Calculate/>

    </div>
  );
}

export default App;