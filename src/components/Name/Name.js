import { useNavigate } from "react-router-dom";
import "./Name.css"


const Name = () => {

  const Navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    let value = e.target.elements;
    const [input, submit] = value
    value = input.value;
    Navigate("/welcome");
    alert(`Hello ${value}`)
}

    return (
      <div className="form-container">
        <form onSubmit={submit} className="form">
          <input type="text" name="name" id="name" placeholder="name" className="input"/>
          <input type="submit" name="Click Here" className="submit"/>
        </form>
      </div>
    );
}

export default Name