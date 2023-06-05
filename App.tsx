import './App.css'
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    console.log("CLICKED SAVE");
    console.log({
      firstName,
      lastName,
      age,
      email,
      password,
    });
  };

  return (
    <>
      <h1>Get started with your account</h1>
      <form style={{ display: "flex", flexDirection: "column", gap: 16 }} onSubmit={handleSave}>
        <p>
          <label htmlFor="fname">First name:</label>
          <input type="text" id="fname" placeholder="First Name" required name="firstName" onChange={(ev) => setFirstName(ev.target.value)} />
          <label htmlFor="lname">Last name:</label>
          <input type="text" id="lname" placeholder="Last Name" required onChange={(ev) => setLastName(ev.target.value)} />
        </p>
        <p>
          <label htmlFor="age">Age: </label>
          <input type="number" id="age" placeholder="Age" min="18" max="99" required onChange={(ev) => setAge(ev.target.value)} />
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required onChange={(ev) => setEmail(ev.target.value)} />
          <label htmlFor="pass">Password:</label>
          <input type="password" id="pass" name="password" placeholder="Password" required onChange={(ev) => setPassword(ev.target.value)} />
        </p>
        <p>
          <h3>Gender*:</h3>
          <label htmlFor="male">Male</label>
          <input type="radio" id="male" name="gender" checked value="male" onChange={(ev) => console.log(ev.target.value)} />
          <label htmlFor="female">Female</label>
          <input type="radio" id="female" name="gender" value="female" onChange={(ev) => console.log(ev.target.value)} />
          <label htmlFor="other">Other</label>
          <input type="radio" id="other" name="gender" value="other" onChange={(ev) => console.log(ev.target.value)} />
        </p>
        <p>
          <h3>Select your device:</h3>
          <label htmlFor="Mackbook">  Macbook</label>
          <input type="checkbox" id="Mackbook" name="device" value="mackbook" onChange={(ev) => console.log(ev.target.value)} />
          <label htmlFor="Iphone"> iPhone</label>
          <input type="checkbox" id="Iphone" name="device" value="iphone" onChange={(ev) => console.log(ev.target.value)} />
          <label htmlFor="Ipad"> iPad</label>
          <input type="checkbox" id="Ipad" name="device" value="ipad" onChange={(ev) => console.log(ev.target.value)} />
        </p>
        <p>
          <label htmlFor="select">How did you hear about us?</label>
          <select id="select" onChange={(ev) => console.log(ev.target.value)}>
            <option value="smedia">Social Media</option>
            <option value="sengine">Search Engine</option>
            <option value="friend">Friend</option>
            <option value="other">Other</option>
          </select>
        </p>
        <button type="button" onClick={handleSave}>Save</button>
      </form>
    </>
  );
}

export default App;
