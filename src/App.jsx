import { Toaster } from "react-hot-toast";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";

function App() {
  return (
    <div className="max-w-[1320px] m-auto">
      <Header></Header>
      <Banner></Banner>
      <Recipes></Recipes>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
