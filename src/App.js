import "./App.css";
import { Page } from "@shopify/polaris";
import Cake from "./Components/Cake";
import Icecream from "./Components/Icecream";
import Chocklate from "./Components/Chocklate";
import { connect } from "react-redux";
import { mapToDispatch, mapToState } from "./Maps/Map";

function App(props) {
  // console.log(props)
  return (
    <Page>
      <Cake />
      <Icecream />
      <Chocklate />
    </Page>
  );
}

export default connect(mapToState,mapToDispatch)(App);
