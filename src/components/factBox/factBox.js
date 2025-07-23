import React, { useState, useEffect } from "react";
import "../../App.css";

function FactBox() {
  const [fact, setFact] = useState("Loading...");

  useEffect(() => {
    const fetchFact = async () => {
      try {
        const response = await fetch(
          "https://uselessfacts.jsph.pl/random.json?language=en"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch fact");
        }

        const data = await response.json();
        console.log(data); // Logs the fact object
        setFact(data.text); // Sets the fact text
      } catch (error) {
        console.error("Error fetching fact:", error);
      }
    };

    // Fetch one immediately
    fetchFact();

    // Then set an interval every 60 seconds (60000ms)
    const intervalId = setInterval(() => {
      fetchFact();
    }, 60000); //60000ms = 60 seconds

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return <div className="factBox-block">{fact}</div>;
}

export default FactBox;
