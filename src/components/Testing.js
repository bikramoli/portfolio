import React, { useState, memo } from "react";

function Testing() {
  const [state, setState] = useState({
    name: "",
    password: "",
  });
  function handleChange(e) {
    const name = e.target.name;
    setState({
      ...state,
      [name]: e.target.value,
    });
  }
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <>
      <form className="testing-form">
        <input
          type="text"
          name="name"
          palceholder="name"
          onChange={handleChange(name)}
          value={state.name}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange(password)}
          value={state.password}
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </>
  );
}
export default memo(Testing);
