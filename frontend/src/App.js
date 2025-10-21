import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Frontend + Backend CI/CD Demo</h1>
      <h3>{msg}</h3>
    </div>
  );
}

export default App;
