import Categories from "./Components/Categories";
import CreatAccount from "./Components/CreatAccount";
import Delivery from "./Components/Delivery";
import Featured from "./Components/Featured";
import Meal from "./Components/Meal";
import NewsLetter from "./Components/NewsLetter";
import TopPicks from "./Components/TopPicks";
import Topnav from "./Components/Topnav";



function App() {
  return (
    <div className="App">
      <Topnav/>
      <Featured/>
      <Delivery/>
      <TopPicks/>
      <Meal/>
      <Categories/>
      <NewsLetter/>
      <CreatAccount/>
    </div>
  );
}

export default App;
