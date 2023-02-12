import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [data, setdata] = useState([]);
  const [displayData, setDisplayData] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setdata(data.results && data.results[0]));
  }, []);
  return (
    <div id="main" className="App">
      <div className="profile">
        <img src={data?.picture?.large} alt="" />
        <span className="name">
          {data?.name?.first + " "} {data?.name?.last}
        </span>
      </div>
      <div className="buttons">
        <button onClick={() => setDisplayData(data?.dob?.age)}>Age</button>
        <button onClick={() => setDisplayData(data?.email)}>Email</button>
        <button onClick={() => setDisplayData(data?.phone)}>Phone</button>
      </div>
      <section>
        <h1>Additinal Info</h1>
        <span>{displayData}</span>
      </section>
    </div>
  );
}

export default App;
