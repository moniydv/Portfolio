import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import storage from "local-storage-fallback";

import ThemeProvider from "./components/ThemeProvider";
import Nav from "./components/Nav";
import Home from "./pages/Home";
// import BlogPage from './components/BlogPage';

import "./App.css";

const App = () => {
  const historyTheme = () => {
    const prevTheme = storage.getItem("theme");
    return prevTheme ? JSON.parse(prevTheme) : "dark";
  };

  const [theme, setTheme] = useState(historyTheme);

  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Nav themeSetter={themeToggler} theme={theme} />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/blogs/:id">
              {/* <BlogPage/> */}
            </Route>
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
