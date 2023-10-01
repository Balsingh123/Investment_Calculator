import { useState } from "react";

export default function UserInput(props) {
  const [input, setInput] = useState({
    "current-savings": 12000, //quotes uses in object because "-" this symbol
    "yearly-contribution": 2000,
    "expected-return": 5,
    duration: 10
  });

  const resetHandler = () => {
    setInput({
      "current-savings": 12000,
      "yearly-contribution": 2000,
      "expected-return": 5,
      duration: 10
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.fun(input);
  };
  //no need to right a handler for reset but if u want to then add onClick prop for it.

  const inputChangeHandler = (input, value) => {
    setInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value //input=>input,[input=>value in input bcs it is an identifier in the object]
        // + conerts the entered input into a number at first it is a string
      };
    });
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              onChange={(event) =>
                inputChangeHandler("current-savings", event.target.value)
              }
              value={input["current-savings"]} //using updated state value with two way binding
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={(event) =>
                inputChangeHandler("yearly-contribution", event.target.value)
              }
              value={input["yearly-contribution"]}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              onChange={(event) =>
                inputChangeHandler("expected-return", event.target.value)
              }
              value={input["expected-return"]}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              onChange={(event) =>
                inputChangeHandler("duration", event.target.value)
              }
              value={input["duration"]}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
}
