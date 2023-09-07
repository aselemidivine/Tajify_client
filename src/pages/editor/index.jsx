import React, { useState } from "react";
import SubHeader from "../../components/SubHeader";
import "../../pages/blogDetails/blogDetails.css";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import parse from "html-react-parser";
import { Editor } from "@tinymce/tinymce-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useAuthContext } from "../../context/AuthContext";
import Loader from "../../components/Loader";
import 'tinymce/tinymce';

// Import any additional CSS or styles if needed
import 'tinymce/themes/silver';
import 'tinymce/icons/default';




const BLOG_POST_URL = "http://localhost:3005/api/blogs"; // Replace with your actual API endpoint
const UPLOAD_ENDPOINT = "https://api.cloudinary.com/v1_1/dlvm6us0n/image";

const EditorPage = () => {
  const { user, token, handleChange } = useAuthContext();
  const [creator, setCreator] = useState(""); // Creator's name
  const [title, setTitle] = useState(""); // Blog post title
  const [text, setText] = useState(""); // Blog post content
  const [category, setCategory] = useState(""); // Blog post category
  const [tags, setTags] = useState(""); // Blog post tags
  const [loading, setLoading] = useState(false);

  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
  };

  const handlePublish = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // console.log("Token:", token);
      const response = await axios.post(
        BLOG_POST_URL,
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
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  // function uploadAdapter(loader) {
  //   return {
  //     upload : () => {
  //       return new Promise((resolve, reject) => {
  //         const body = new FormData();
  //         loader.file.then((file) => {
  //           body.append("uploadImg", file);
  //           fetch(`${BLOG_POST_URL}/${UPLOAD_ENDPOINT}`, {
  //             method: "post",
  //             body: body
  //           }).then((res) => res.json())
  //           .then((res) => {
  //             resolve({default: `${BLOG_POST_URL}/${res.url}`})
  //           })
  //           .catch((err) => {
  //             reject(err);
  //           })
  //         })
  //       })
  //     }
  //   }
  // }

  // function uploadPlugin(editor) {
  //   editor.plugins.get("FileRespository").createUploadAdapter = (loader) => {
  //     return uploadAdapter(loader);
  //   }
  // }

  return (
    <div className="blog__container">
      <SubHeader />

      <div className="custom__width editor__width">
        <div className="display__col">
          <input
            type="title"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input type="file" accept="image/*" name="imgTitle" />

          {/* <CKEditor
            editor={CKEditor}
            data={text}
            config={{
              height: 900, // Set your desired height here
            }}b className='editor__textarea'
            onChange={(event, editor) => {
              const data = editor.getData();
              setText(data);
            }}
          /> */}

          <Editor
            initialValue="<p>This is the initial content of the editor</p>"
          
            init={{
              plugins: 'link image code',
              toolbar:
                'undo redo | bold italic | alignleft aligncenter alignright | code image',
            }}
            onEditorChange={handleEditorChange}
         
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
              <button
                onClick={handlePublish}
                className="w-[119px] h-[40px] bg-[#4CAF50] text-white text-center flex items-center cursor-pointer justify-center rounded-lg p-10 px-24"
              >
                Publish
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
