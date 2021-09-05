import {useState} from "react";

export default function useInput(initialValue) {
  const [value, setvalue] = useState(initialValue);

  const handleChange = (e) => {
    setvalue(e.target.value);
  };
  return [value, handleChange];
}
