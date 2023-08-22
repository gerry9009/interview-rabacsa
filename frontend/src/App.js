// import "./App.css";
import Actions from "./components/actions/Actions";
import Items from "./components/item_details/Items";
import Meta from "./components/meta_data/Meta";
import Navigation from "./components/navigation/Navigation";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="h-screen max-w-full max-h-screen grid grid-rows-9 grid-cols-9">
      <Navigation />
      <Sidebar />
      <Meta />
      <Items />
      <Actions />
      {/*MODAL ABLAK CSAK AKKOR JELENIK MEG, HA RÁKATTINTANAK EGY ELEMRE */}
      {/*<Modal />*/}
    </div>
  );
}

export default App;
