import { useState } from "react";
import "./styles.css";
import useForm from "./useForm";

type formValues = {
  name: string;
  email: string;
};

export default function App() {
  const { value, handleChange } = useForm({
    name: "",
    email: ""
  });

  const [formValues, setFormValues] = useState<formValues>();

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const newFormValues = {
      name: value.name,
      email: value.email
    };

    setFormValues(newFormValues);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={value.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={value.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <div>{formValues && JSON.stringify(formValues)}</div>
    </div>
  );
}
