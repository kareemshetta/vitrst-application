import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useState,
} from "react";

type Props = {};

function Application({}: Props) {
  const [formData, setFormData] = useState({
    selectValue: "",
    inputValue: "",
    checkboxValue: false,
    textArea: "",
  });

  const [isLogin, setIsLogin] = useState(false);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    let newValue: string | boolean = value;

    if (type === "checkbox") {
      newValue = (e.target as HTMLInputElement).checked;
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  useEffect(() => {
    const id = setTimeout(() => {
      setIsLogin(true);
    }, 2000);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
  };

  return (
    <>
      <h1>kareem</h1>
      <h2>malak</h2>
      <form
        style={{
          width: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="select">Select:</label>
          <select
            id="select"
            name="selectValue"
            value={formData.selectValue}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div>
          <label htmlFor="input">Input:</label>
          <input
            id="input"
            type="text"
            name="inputValue"
            value={formData.inputValue}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="text-area">textArea</label>
          <textarea
            id="text-area"
            name="textArea"
            value={formData.textArea}
            onChange={handleChange}
          ></textarea>
          {/* <input
          id="text-area"
          type="text"
          name="inputValue"
          value={formData.inputValue}
          onChange={handleChange}
        /> */}
        </div>
        <div>
          <label htmlFor="checkbox">Checkbox:</label>
          <input
            id="checkbox"
            type="checkbox"
            name="checkboxValue"
            checked={formData.checkboxValue}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>

        {isLogin ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsLogin(false);
            }}
          >
            start learning
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsLogin(true);
            }}
          >
            login
          </button>
        )}
      </form>
    </>
  );
}

export default Application;
