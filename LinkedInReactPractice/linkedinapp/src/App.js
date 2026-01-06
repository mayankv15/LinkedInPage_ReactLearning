import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Dashboard from "./Pages/Dashboard";
import store from "./Pages/redux/store";
import { Provider } from "react-redux";
import Profile from "./Pages/Profile";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
