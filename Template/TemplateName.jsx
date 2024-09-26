import { useEffect, useState } from "react";
import Style from "./TemplateName.module.css";

export default function TemplateName() {
  const [Counter, setCounter] = useState(0);

  useEffect(() => {}, []);

  return (
    <>
      <h1>TemplateName</h1>
      <p>TemplateName component </p>
    </>
  );
}
