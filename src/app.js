import React from "react";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Note from "./components/note";

const App = () => {
  return (
    <div>
      <Header />
      <Note />
      <Footer />
    </div>
  );
};

export default App;
