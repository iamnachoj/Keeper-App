import React, { useState } from "react";
import Add from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

export default function CreateArea(props) {
  const [input, setInput] = useState({
    title: "",
    note: ""
  });

  function handleChange(event) {
    let { value, name } = event.target;
    setInput({
      ...input,
      [name]: value
    });
  }

  function handleClick(event) {
    event.preventDefault();
    props.add(input);
    setInput({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form className="create-note" onSubmit={handleClick}>
        <input
          onChange={handleChange}
          value={input.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={input.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <Fab aria-label="add">
          <Add />
        </Fab>
      </form>
    </div>
  );
}
