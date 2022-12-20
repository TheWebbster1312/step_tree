import BubbleComponent from "./BubbleComponent";
import Bubbles from "./Bubble";

console.log(Bubbles)

function App() {
  return (
    <div className="App">
      <BubbleComponent data={Bubbles} />
    </div>
  );
}

export default App;
