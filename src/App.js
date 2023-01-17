import "./App.scss";
import Button from "./components/Button";
import Input from "./components/Input";
import Textarea from "./components/Textarea";
import Header from "./components/Header";


const alizarin  = '#e74c3c';
const pomegranate = '#c0392b';
const clouds = '#ecf0f1';
const silver = '#bdc3c7';

function App() {
  return (
    <div className="form">
      <Header />
      <Input />
      <Textarea />
      <Button icon='user'  label="Zapisz się" bgColor={alizarin} color={clouds} />
    </div>
  );
}

export default App;
