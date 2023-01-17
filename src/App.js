import "./App.css";
import Button from "./components/Button";


const alizarin  = '#e74c3c';
const pomegranate = '#c0392b';
const clouds = '#ecf0f1';
const silver = '#bdc3c7';

function App(element) {
  return (
    <div>
      <Button icon='user'  label="Click me" bgColor={alizarin} color={clouds} />
    </div>
  );
}

export default App;
