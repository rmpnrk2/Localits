import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// import Pulongbato component
import Home from "./components/home";
import Pulongbato from "./components/pulongbato";
import Sittimaryam from "./components/sittimaryam";
import Ladyofthepillar from "./components/ladyofthepillar";

function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" element={<Home />} />

          {/* This route is for about component 
          with exact path "/pulongbato", in component 
          props we passes the imported component*/}
          <Route path="/pulongbato" element={<Pulongbato />} />
          <Route path="/sittimaryam" element={<Sittimaryam />} />
          <Route path="/ladyofthepillar" element={<Ladyofthepillar />} />

          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          {/* <Redirect to="/" /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
