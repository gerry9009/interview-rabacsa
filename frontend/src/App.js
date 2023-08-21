import "./App.css";
import Actions from "./components/actions/Actions";
import Items from "./components/item_details/Items";
import Meta from "./components/meta_data/Meta";
import Navigation from "./components/navigation/Navigation";
import Sidebar from "./components/sidebar/Sidebar";
import Modal from "./components/modal_window/Modal";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Sidebar />
      <Meta />
      <Items />
      <Actions />
      {/*MODAL ABLAK CSAK AKKOR JELENIK MEG, HA RÁKATTINTANAK EGY ELEMRE */}
      <Modal />
    </div>
  );
}

export default App;
