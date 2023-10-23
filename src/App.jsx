import Tours from "./components/Tours";
import Loading from "./components/Loading";
import { useState, useEffect } from "react";
const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    console.log(id);
    setTours(tours.filter((tour) => tour.id != id));
  };

  const fetchTours = () => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTours(data);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    setTimeout(() => {
      fetchTours();
    }, 0);
  }, []);

  if (isLoading) {
    return (
      <main>
        {" "}
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
