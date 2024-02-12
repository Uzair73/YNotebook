import React, { useContext, useState } from "react";
import noteContext from "../Context/Notes/notecontext";
import Footer from "./Footer";


import Notes from "./Notes";

const Form = (props) => {
  const { showAlert } = props;
  const value = useContext(noteContext);
  const { addnote } = value;
  const [note, setNote] = useState({ title: "", description: "", tags: "" });
  // addnote function
  const addclick = () => {
    addnote(note.title, note.description, note.tags);
    setNote({ title: "", description: "", tags: "" });
    showAlert("Added Note Successfully", "success");
  };
  // onchange function
  const handlechange = (e) => {
    e.preventDefault();
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container mb-3">
        <h1 className="my-2 text-center">Add Your Notes</h1>
        <label htmlFor="title" className="form-label">
          Enter Title
        </label>
        <input
          type="text"
          className="form-control mx-1"
          id="title"
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handlechange}
          minLength={3}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label mx-3">
          Your Description
        </label>
        <textarea
          className="form-control mx-3"
          id="description"
          name="description"
          rows="3"
          value={note.description}
          onChange={handlechange}
          minLength={5}
          required
        ></textarea>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label my-3 mx-3">
            Your Tag
          </label>
          <input
            type="text"
            className="form-control mx-3"
            id="tags"
            name="tags"
            placeholder="Tag"
            value={note.tags}
            onChange={handlechange}
            minLength={3}
            required
          />
        </div>
        <button
          disabled={
            note.title.length < 3 ||
            note.description.length < 5 ||
            note.tags.length < 3
          }
          type="submit"
          className="btn btn-primary"
          onClick={addclick}
          onChange={handlechange}
        >
          Add Note
        </button>
      </div>
      <Notes showAlert={showAlert} />
      <Footer/>
    </>
  );
};

export default Form;
