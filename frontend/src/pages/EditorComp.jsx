import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

// Import Quill dynamically (to support SSR in Next.js)
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Editor = () => {
  const [content, setContent] = useState("");
  const [language, setLanguage] = useState("ltr"); // Default: Left-to-right (LTR)

  // Quill Modules Configuration (Supports Headers, Multilingual Text)
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ script: "sub" }, { script: "super" }],
      [{ direction: "rtl" }, { direction: "ltr" }], // Language direction support
      [{ align: [] }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <div className="p-4 max-w-3xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Multilingual WYSIWYG Editor</h2>
      
      {/* Language Selector */}
      <select
        onChange={(e) => setLanguage(e.target.value)}
        className="mb-3 px-2 py-1 border rounded-md"
      >
        <option value="ltr">Left-to-Right (English, French, Hindi, etc.)</option>
        <option value="rtl">Right-to-Left (Arabic, Hebrew, Urdu, etc.)</option>
      </select>

      {/* Quill Editor */}
      <ReactQuill
        value={content}
        onChange={setContent}
        modules={modules}
        theme="snow"
        style={{ direction: language }}
      />

      {/* Submit Button */}
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={() => console.log(content)}
      >
        Submit
      </button>
    </div>
  );
};

export default Editor;
