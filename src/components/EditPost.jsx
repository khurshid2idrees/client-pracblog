import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPost() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  //   const [file, setFile] = useState();
  const [post, setPost] = useState([]);

  const { id } = useParams();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

  
    axios
      .put("http://localhost:5000/editpost/"+id, {title,description})
      .then((res) => {
        if (res.data === "success") {
          navigate("/");
        }
      })
      .then((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/getpostbyid/" + id)
      .then((res) => {
        setTitle(res.data.title);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="heading text-center font-bold text-2xl m-5 text-gray-800">
        Update Post
      </div>

      <form
        onSubmit={handleSubmit}
        className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl"
      >
        <input
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
        <textarea
          value={description}
          className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
          spellCheck="false"
          placeholder="Describe everything about this post here"
          onChange={(e) => setDescription(e.target.value)}
        />
        {/* <input
          className="mt-4 title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          spellCheck="false"
          placeholder="Title"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        /> */}

        {/* buttons */}
        {/* <div className="buttons flex md:mt-8 mt-4"> */}
        <button
          type="submit"
          className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
        >
          Update  
        </button>
        {/* </div> */}
      </form>
    </>
  );
}
