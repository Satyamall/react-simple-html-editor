import "./styles.css";
import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another

export default function App() {
  const [code, setCode] = React.useState("");
  return (
    <div>
      <div style={{ height: "500px" }} className="editor">
        <Editor
          value={code}
          onValueChange={(code) => setCode(code)}
          highlight={(code) => highlight(code, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
            height: "500px",
            overflow: "auto"
          }}
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: code }}></div>
    </div>
  );
}
