import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Textarea from "./components/Textarea";


const alizarin  = '#e74c3c';
const pomegranate = '#c0392b';
const clouds = '#ecf0f1';
const silver = '#bdc3c7';

function App() {
  return (
    <div className="form">
      <Input />
      <Textarea />
      <Button icon='user'  label="Log in" bgColor={alizarin} color={clouds} />
    </div>
  );
}

export default App;
