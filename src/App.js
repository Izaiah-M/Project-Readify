import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { Search } from "./components/Books/Search";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { MySideNav } from "./components/SideNav/SideNav";

function App() {
  const ROUTES = {
    DASHBOARD: "/",
    BOOKSEARCH: "/book-search",
    UPCOMING: "/upcoming",
  };

  return (
    <div className="App">
      <MySideNav />
      <main>
        <Routes>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={ROUTES.BOOKSEARCH} element={<Search />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
