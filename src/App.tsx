import React from "react";
import { SearchSection } from "./components";

function App() {
  return (
    <div className="flex flex-col p-16">
      <div className="text-6xl">Product List</div>
      <SearchSection />
    </div>
  );
}

export default App;
