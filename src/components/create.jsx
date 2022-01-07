import React, { useState } from "react";
import Add from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

export default function CreateArea(props) {
  const [input, setInput] = useState({
    title: "",
    note: ""
  });
  const [isTyping, setIsTyping] = useState(false);

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
    setIsTyping(false);
  }

  return (
    <div>
      <form className="create-note" onSubmit={handleClick}>
        <input
          hidden={isTyping ? false : true}
          onChange={handleChange}
          value={input.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onClick={() => {
            setIsTyping(true);
          }}
          onChange={handleChange}
          value={input.content}
          name="content"
          placeholder="Take a note..."
          rows={isTyping ? "3" : "1"}
        />
        <Zoom in={isTyping ? true : false}>
          <Fab type="submit">
            <Add />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
