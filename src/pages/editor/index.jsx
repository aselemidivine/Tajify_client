import React, { useState } from "react";
import SubHeader from "../../components/SubHeader";
import "../../pages/blogDetails/blogDetails.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import parse from "html-react-parser";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Editor = () => {
  const [text, setText] = useState("");

  return (
    <div className="blog__container">
      <SubHeader />

      <div className="custom__width editor__width">
        <div className="">
          {/* <div className="editor"> */}
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
          {/* </div> */}
          <div className="editor__button">

            <button className="w-[119px] h-[40px] bg-[#4CAF50] text-white text-center flex items-center cursor-pointer justify-center rounded-lg p-10 px-24">Publish</button>
          </div>
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
