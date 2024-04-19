"use client";
import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./language-selector";
import { CODE_SNIPPETS } from "@/lib/constants";
import Output from "./output";
import { Card, CardContent } from "./ui/card";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language: any) => {
    console.log("logging");
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <>
      <Card className="flex flex-wrap">
        <CardContent>
          <LanguageSelector language={language} onSelect={onSelect} />
          <div>
            <Editor
              options={{
                minimap: {
                  enabled: true,
                },
              }}
              width="60vw"
              height="80vh"
              theme="vs-dark"
              language={language}
              defaultValue={CODE_SNIPPETS[language]}
              onMount={onMount}
              value={value}
              onChange={(value) => setValue(value!)}
            />
          </div>
        </CardContent>
        <CardContent>
          <Output editorRef={editorRef} language={language} />
        </CardContent>
      </Card>
    </>
  );
};
export default CodeEditor;
