import { useState } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';
import { marked } from 'marked';

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.


\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both_**!
And feel free to go crazy crossing stuff out.

There's also [links](https://freecodecamp.org), and

> Block Quotes!


  - And of course there are lists.
    - Some are bulleted.
        - With different indentation levels.
          - That look like this.

![freeCodeCamp Logo w/ Text](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

marked.setOptions({
  breaks: true
})

function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown)

  return (
    <div>
      <h1>Markdown Previwer</h1>
      <div className='boxes-container'>
        <textarea name='editor' id='editor' value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
        <div id='preview'>     
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default App
