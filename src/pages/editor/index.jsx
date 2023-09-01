// import React, { useState } from "react";
// import SubHeader from "../../components/SubHeader";
// import "../../pages/blogDetails/blogDetails.css";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import parse from "html-react-parser";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// const Editor = () => {
//   const [text, setText] = useState("");

//   return (
//     <div className="blog__container">
//       <SubHeader />

//       <div className="custom__width editor__width">
//         <div className="">
//           {/* <div className="editor"> */}
//             <CKEditor
//               editor={ClassicEditor}
//               data={text}
//               config={{
//                 height: 900, // Set your desired height here
//               }}
//               onChange={(event, editor) => {
//                 const data = editor.getData();
//                 setText(data);
//               }}
//             />
//           {/* </div> */}
//           <div className="editor__button">

//             <button className="w-[119px] h-[40px] bg-[#4CAF50] text-white text-center flex items-center cursor-pointer justify-center rounded-lg p-10 px-24">Publish</button>
//           </div>
//         </div>
//         {/* <div className="editor__content">
//         <h1>Title</h1>
//         <h4>Header</h4>
//         <p>{parse(text)}</p>

//       </div> */}
//       </div>
//     </div>
//   );
// };

// export default Editor;

import React, { useState } from "react";
import SubHeader from "../../components/SubHeader";
import "../../pages/blogDetails/blogDetails.css";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import parse from "html-react-parser";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useAuthContext } from "../../context/AuthContext";

const LOGIN_URL = "http://localhost:3005/api/blogs"; // Replace with your actual API endpoint

const Editor = () => {
  const { user, token, handleChange } = useAuthContext();
  const [creator, setCreator] = useState(""); // Creator's name
  const [title, setTitle] = useState(""); // Blog post title
  const [text, setText] = useState(""); // Blog post content
  const [category, setCategory] = useState(""); // Blog post category
  const [tags, setTags] = useState(""); // Blog post tags

  const handlePublish = async () => {
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
            // Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjFiMjk5YmVhY2Q2N2E1MmQzZDg1OSIsImlhdCI6MTY5MzU2MTU2NSwiZXhwIjoxNjk2MTUzNTY1fQ.bMeSfRUeFZ4awkmR4mtqADHBmSPeoFsTY2O3w9MGFM4`,
          },
        }
      );

      if (response.ok) {
        console.log("Blog post created successfully!");
        // Reset the editor content or perform any other necessary actions
      } else {
        console.error("Error creating blog post");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="blog__container">
      <SubHeader />

      <div className="custom__width editor__width">
        <div className="">
          <input
            type="text"
            placeholder="Creator's Name"
            value={creator}
            onChange={(e) => setCreator(e.target.value)}
          />
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
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

          <div className="editor__button">
            <button
              onClick={handlePublish}
              className="w-[119px] h-[40px] bg-[#4CAF50] text-white text-center flex items-center cursor-pointer justify-center rounded-lg p-10 px-24"
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
