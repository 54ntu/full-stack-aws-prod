import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [datas, setDatas] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/api/data")
      .then((res) => res.json())
      .then((data) => setDatas(data.data));
  }, []);

  return (
    <>
      <h1>Welcome to my home page.</h1>
      <h2>message: {message}</h2>
      <h3 style={{ fontFamily: "ui-sans-serif", color: "red" }}>
        Data : {datas}
      </h3>
    </>
  );
}

export default App;
