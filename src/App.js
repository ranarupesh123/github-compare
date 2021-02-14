import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import User from "./User";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://api.github.com/users/ranarupesh123`
      );
      console.log(result.data);
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <div className="app">
      <User data={data} />
    </div>
  );
}

export default App;
