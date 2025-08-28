import { useState } from 'react'
import './App.css'
import { marked } from "marked";

function MarkdownRenderer({ text }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
    />
  );
}

function App() {
  const [count, setCount] = useState(0)
  const [markdown, setMarkdown] = useState("# Hello Markdown!\n\nType something here...");
  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };
  
  return (
    <>
      <div className="flex h-screen">
      {/* Left side: Markdown input */}
      <textarea
        className='align-left'
        value={markdown}
        onChange={handleChange}
      />

      {/* Right side: Preview */}
      <div
        className='text'
        dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
      />
    </div>
    </>
  )
}

export default App
