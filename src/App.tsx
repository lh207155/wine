import WineCarousel from "./components/WineCarousel/WineCarousel";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <>
      <div>
        <Nav></Nav>
      </div>
      <div>
        <WineCarousel />
      </div>
      <div>footer</div>
    </>
  );
};

export default App;
