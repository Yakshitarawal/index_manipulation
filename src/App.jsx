import "./styles.css";
import { useState } from "react";

const intistudent = {
  name: "",
  std: "",
  age: "",
  add: "",
  isFemale: ""
};

export default function App() {
  const [student, setStudent] = useState(intistudent);
  const { name, std, age, add } = student;

  const handleChange = (e) => {
    const { type, name, value, checked } = e.target;
    console.log(checked);
    // console.log(name, type, checked);
    type === "checkbox"
      ? setStudent({
          ...student,
          [name]: checked
        })
      : setStudent({
          ...student,
          [name]: value
        });
  };

  return (
    <div className="App">
      {/* <input placeholder = "enter name" type = "text" name = "name" value = {name} onChange = {handleChange}/> */}
      <input
        placeholder="enter name"
        name="name"
        value={name}
        type="text"
        onChange={handleChange}
      />
      {""}
      <br />
      <input
        placeholder="enter std"
        name="std"
        value={std}
        type="text"
        onChange={handleChange}
      />
      {""}
      <br />
      <input
        placeholder="enter age"
        name="age"
        value={age}
        type="text"
        onChange={handleChange}
      />
      {""}
      <br />
      <input
        placeholder="enter add"
        name="add"
        value={add}
        type="text"
        onChange={handleChange}
      />
      {""}
      <br />
      <input name="isFemale" type="checkbox" onChange={handleChange} />
      <button
        onClick={() => {
          console.log(student);
        }}
      >
        Click
      </button>
    </div>
  );
}
