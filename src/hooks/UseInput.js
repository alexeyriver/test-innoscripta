import { useState } from "react";

export default function UseInput(initial) {
  const [input, setInput] = useState(initial);
  const onChange = (e) => setInput(e.target.value);
  return { input, onChange };
}
