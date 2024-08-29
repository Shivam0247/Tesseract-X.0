import FetchImageContext from "./FetchImageContext";
import { useState, useEffect } from "react";

const FetchImageState = (props) => {
  const host = "http://localhost:4000";
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await getEDMImages();
    };

    fetchData();
  }, []);

  const getEDMImages = async () => {
    try {
      const response = await fetch(`${host}/api/FetchImage/EDM`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      setImage(json.images || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching images:", error);
      setError(error.message || "Failed to fetch images");
      setLoading(false);
    }
  };

  return (
    <FetchImageContext.Provider
      value={{ images: image, loading, error, getEDMImages }}
    >
      {props.children}
    </FetchImageContext.Provider>
  );
};

export default FetchImageState;
