import Categories from "./Components/Categories";
import CreatAccount from "./Components/CreatAccount";
import Delivery from "./Components/Delivery";
import Featured from "./Components/Featured";
import LogIn from "./Components/LogIn";
import Meal from "./Components/Meal";
import MyAccount from "./Components/MyAccount";
import NewsLetter from "./Components/NewsLetter";
import TopPicks from "./Components/TopPicks";
import Topnav from "./Components/Topnav";
import { Route,Routes } from "react-router-dom";
import Avis from "./Components/Avis";
import Notification from "./Components/Notification";
import UserFriends from "./Components/UserFriends";
import MyFavourite from "./Components/MyFavourite";


function App() {
  return (
    <div className="App">
      <Topnav myaccount='myaccount' myFavourite='myfavourite' />
    <Routes>
    
      <Route path="/" element={<>
        
        <Featured />
        <Delivery />
        <TopPicks />
        <Meal />
        <Categories />
        <NewsLetter />
      </>} />
      <Route path="login" element={<LogIn />} />
      <Route path="/login/creataccount" element={<CreatAccount />} />
      <Route path="/mywallet" element={<mywallet/>}/>
      <Route path="/myaccount/Avis" index element={<Avis/>}/>
      <Route path="/myfavourite"  element={<MyFavourite/>}/>
      <Route path="/myaccount" element={<MyAccount/>}>
        <Route path="changepassword" element={<changepassword/>}/>
        <Route index  element={<Notification/>}/>
        <Route index path="notification" element={<Notification/>}/>
        <Route path="friends" element={<UserFriends/>}/>
      </Route>
    </Routes>
  </div>
  );
}

export default App;
