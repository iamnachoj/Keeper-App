import React from "react";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Note from "./components/note";
import DATA from "./notes.json";

const App = () => {
  return (
    <div>
      <Header />
      {DATA.map((val, key) => {
        return <Note key={val.key} title={val.title} content={val.content} />;
      })}
      <Footer />
    </div>
  );
};

export default App;
