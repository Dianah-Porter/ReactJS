import HelloMessage from "./HelloMessage";
import Great from "./Great";
import Mapc from "./components/mapc"


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

    </div>
  );
}

export default App;