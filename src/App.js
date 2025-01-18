import './App.css';
import Body from "./components/Body";  // The Body component handles authentication logic
import appStore from './utils/appStore';  // Redux store
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Routes and Route
import Browser from "./components/Browser";
const App = () => {
  return (
    <Provider store={appStore}>  {/* Redux provider to make the store accessible */}
      <Router>  {/* Router should be at the top level */}
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Body />} />  {/* Body component handles login logic */}
          <Route path="/login" element={<Body />} />  {/* Handle login redirect */}
          <Route path="/browser" element={<Browser />} />  {/* Browser component */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
