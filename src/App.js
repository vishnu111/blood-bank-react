import "./sass/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Success from "./components/Success";
import Search from "./components/Search";
function App() {
  return (
    <div className="App">
      {/* <div>
        <Form />
      </div> */}
      <Router>
        <Routes>
          <Route path="/" exact element={<Form />} />
          <Route path="/success" exact element={<Success />} />
          <Route path="/search" exact element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
