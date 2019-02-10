import React from "react";
const Form = props => {
  return (
    <form onSubmit={props.loadWeather}>
      <input type="text" name="city" placeholder="City..." />
      <input type="text" name="country" placeholder="Country..." />
      <div>
        <button>Get Weather</button>
      </div>
    </form>
  );
};

export default Form;
