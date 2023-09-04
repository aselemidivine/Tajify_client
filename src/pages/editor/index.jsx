

import React, { useState } from "react";
import SubHeader from "../../components/SubHeader";
import "../../pages/blogDetails/blogDetails.css";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import parse from "html-react-parser";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useAuthContext } from "../../context/AuthContext";
import Loader from "../../components/Loader";

const LOGIN_URL = "http://localhost:3005/api/blogs"; // Replace with your actual API endpoint

const Editor = () => {
  const { user, token, handleChange } = useAuthContext();
  const [creator, setCreator] = useState(""); // Creator's name
  const [title, setTitle] = useState(""); // Blog post title
  const [text, setText] = useState(""); // Blog post content
  const [category, setCategory] = useState(""); // Blog post category
  const [tags, setTags] = useState(""); // Blog post tags
  const [loading, setLoading] = useState(false);

  const handlePublish = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // console.log("Token:", token);
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({
          title: title,
          content: text,
          category: category,
          tags: tags.split(","),
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        console.log("Blog post created successfully!");
        setLoading(false);

        // Reset the editor content or perform any other necessary actions
      } else {
        console.error("Error creating blog post");
        setLoading(false);

      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="blog__container">
      <SubHeader />

      <div className="custom__width editor__width">
        <div className="display__col">
          {/* <input
            type="text"
            placeholder="Creator's Name"
            value={creator}
            onChange={(e) => setCreator(e.target.value)}
          /> */}
          <input
            type="title"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="file"
            // value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <CKEditor
            editor={ClassicEditor}
            data={text}
            config={{
              height: 900, // Set your desired height here
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              setText(data);
            }}
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="text"
            placeholder="Tags (comma-separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />

          {loading ? (
            <Loader />
          ) : (
            <div className="editor__button">
              <button onClick={handlePublish} className="w-[119px] h-[40px] bg-[#4CAF50] text-white text-center flex items-center cursor-pointer justify-center rounded-lg p-10 px-24">Publish</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Editor;
