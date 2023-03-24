import "./style.scss";
import Header from "./Components/Header";
import Terms from './Components/Terms';
import Button from "./Components/Button";
import { useState } from "react";
import FormSection2 from "./Components/FormSection2";
import FormSection1 from "./Components/FormSection1";

function App() {
  let[formData, setFormData] = useState({});

  const updateFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Done");
  }

  return(
    <div className="signUp">
      <Header />
      <form id="form" className="signUp--form">
        <FormSection1 func={updateFormData}/>
        <FormSection2 func={updateFormData}/>
        </form>
      <Terms />
      <Button form={"form"} text={"Sign Up"} func={submit}/>
    </div>
  ); 
}

export default App;
