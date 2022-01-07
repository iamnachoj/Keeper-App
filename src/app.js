import React, { useState } from "react";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import CreateArea from "./components/create.jsx";
import Note from "./components/note";
import DATA from "./notes.json";

const App = () => {
  const [notes, setNotes] = useState(DATA);

  function addItem(input) {
    console.log(input);
    return setNotes([...notes, input]);
  }

  return (
    <div>
      <Header />
      <CreateArea add={addItem} />
      {notes.map((note, key) => {
        return <Note key={key} title={note.title} content={note.content} />;
      })}
      <Footer />
    </div>
  );
};

export default App;
