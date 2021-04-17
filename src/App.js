import { useState } from "react";
import "./styles.css";

export default function App() {
  const booksMap = {
    investing: [
      "The Intelligent Investor",
      "The Warren Buffet Way",
      "Rich Dad Poor Dad"
    ],
    "Self Development": [
      "Zero to one",
      "Ikigai",
      "The monk who sold his Ferrari"
    ]
  };

  const [selectedKey, setKey] = useState("");

  return (
    <div className="App">
      <h1>📚 goodbooks </h1>
      <h2> Select your area of interest </h2>
      {Object.keys(booksMap).map((item) => {
        return (
          <button
            style={{
              backgroundColor: "#C7D2FE",
              color: "white",
              padding: ".5rem",
              margin: "0rem .5rem",
              cursor: "pointer"
            }}
            onClick={() => setKey(item)}
          >
            {item}
          </button>
        );
      })}
      <hr />
      <ul>
        {selectedKey.length > 1 &&
          booksMap[selectedKey].map((item) => {
            return (
              <li
                style={{
                  padding: ".5rem",
                  listStyleType: "none",
                  border: ".5px solid #DBEAFE",
                  margin: ".5rem",
                  borderRadius: ".5rem"
                }}
              >
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
