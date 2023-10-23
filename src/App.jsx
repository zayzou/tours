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
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setTours(data);
          setIsLoading(false);
        });
    }, 500);
  }, []);

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (
        <section>
          <div className="title">
            <h2>Our Tours</h2>
            <div className="title-underline"></div>
          </div>
          <Tours tours={tours} removeTour={removeTour} />
        </section>
      )}
    </main>
  );
};
export default App;
