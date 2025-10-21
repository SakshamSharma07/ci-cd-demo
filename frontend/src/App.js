import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");
  // If running in Docker
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

  useEffect(() => {
    fetch(`${BACKEND_URL}/`)
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
