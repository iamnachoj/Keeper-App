import React from "react";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import CreateArea from "./components/create.jsx";
import Note from "./components/note";
import DATA from "./notes.json";

const App = () => {
  return (
    <div>
      <Header />
      <CreateArea />
      {DATA.map((val, key) => {
        return <Note key={val.key} title={val.title} content={val.content} />;
      })}
      <Footer />
    </div>
  );
};

export default App;
