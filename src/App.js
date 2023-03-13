import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { Books } from "./components/Books/Books";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { MySideNav } from "./components/SideNav/SideNav";

function App() {
  const ROUTES = {
    DASHBOARD: "/dashboard",
    BOOKSEARCH: "/book-search",
    UPCOMING: "/upcoming",
  };

  return (
    <div className="App">
      <MySideNav />
      <main>
        <Routes>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={ROUTES.BOOKSEARCH} element={<Books />} />
        </Routes>
      </main>

      {/* <header className="App-header">
        <Dashboard />
      </header> */}
    </div>
  );
}

export default App;
