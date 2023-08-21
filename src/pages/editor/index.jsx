import React, { useState } from "react";
import Header from "../../components/Header";
import "../../pages/blogDetails/blogDetails.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import parse from 'html-react-parser'
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Editor = () => {
  const [text, setText] = useState("");
  // const [title, setTitle] = useState("");
  // const [subHeading, setSubHeading] = useState("");

  return (
    <div className="blog__container">
      <Header />
      <div className="custom__width editor__width">

      <div className="editor">
        <CKEditor
          editor={ClassicEditor}
          data={text}
          onChange={(event, editor) => {
            const data = editor.getData();
            setText(data)
          }}
        />
      </div>
      {/* <div className="editor__content">
        <h1>Title</h1>
        <h4>Header</h4>
        <p>{parse(text)}</p>

      </div> */}
    </div>
    </div>
  );
};

export default Editor;
