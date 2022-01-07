import React, { useState } from "react";

export default function CreateArea() {
  const [input, setInput] = useState({
    title: "",
    note: ""
  });

  function handleChange(event) {
    let { value, name } = event.target;
    if ("title" === name) {
      setInput({
        title: value,
        note: input.note
      });
    } else {
      setInput({
        title: input.title,
        note: value
      });
    }
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={input.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={input.note}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button>Add</button>
      </form>
    </div>
  );
}
