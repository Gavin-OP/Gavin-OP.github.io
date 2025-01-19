// This is a file to render the markdown file to HTML.
// It takes the Markdown file string as input and renders it to HTML.
// TODO
// 1. Add the clickable checkbox
// 2. Add support for Mermaid
// 3. Add a report button for the markdown files, so that can report mistakes
// 4. add a button to copy the code in the markdown file
// 5. Convert the markdown file to pdf

import React, { useState, useEffect, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router-dom";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import SyntaxHighlighter from "react-syntax-highlighter";
import { xcode } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import rehypeMermaid from 'rehype-mermaid';
// import remarkMermaid from 'remark-mermaid';

import "katex/dist/katex.min.css";
import "../styles/MarkdownRenderer.css";
// import 'mermaid/dist/mermaid.esm.min.mjs';

const MarkdownRenderer = ({ markdownContent }) => {
  const location = useLocation();

  // scroll to footnotes and scroll back
  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // get current url for footnotes
  const getCurrentUrl = () => {
    return `${window.location.origin}${location.pathname}${location.hash}`;
  };

  // make relative path import to correct path relative to public folder
  const resolveRelativePath = (base, relative) => {
    const stack = base.split("/");
    const parts = relative.split("/");
    stack.pop();
    for (let i = 0; i < parts.length; i++) {
      if (parts[i] === ".") continue;
      if (parts[i] === "..") stack.pop();
      else stack.push(parts[i]);
    }
    return stack.join("/");
  };

  // make the checkbox can be checked or unchecked
  // const handleCheckboxChange = (event) => {
  //     console.log(event.target.checked);
  // }
  // const handleCheckboxChange = (event, index) => {
  //     setCheckboxStates({
  //         ...checkboxStates,
  //         [index]: event.target.checked,
  //     });
  //     console.log(event.target.checked);
  // };
  // const handleCheckboxChange = (event, index) => {
  //     setCheckboxStates((prevStates) => ({
  //         ...prevStates,
  //         [index]: !prevStates[index],
  //     }));
  //     console.log(event.target.checked);
  //     console.log(index)
  // };

  return (
    <div className="markdown-container">
      <div id="write">
        <ReactMarkdown
          className="markdown-body"
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeRaw, rehypeKatex]}
          // make the checkbox can be check or unchecked, use handleCheckBoxChange
          // components={{
          //     input({ node, ...props }) {
          //         console.log(node.position);
          //         if (props.type === 'checkbox') {
          //             const index = node && node.position && node.position.start ? node.position.start.offset : null;
          //             return <input type="checkbox" {...props} disabled={false} checked={checkboxStates[index] || false} onChange={(event) => handleCheckboxChange(event, index)}/>;
          //         }
          //         return <input {...props} />;
          //     },
          // }}

          // make the checkbox disable is false
          // components={{
          //     input({ node, ...props }) {
          //         if (props.type === 'checkbox') {
          //             return <input type="checkbox" {...props} disabled={false} />;
          //         }
          //         return <input {...props} />;
          //     },
          // }}

          components={{
            // make the code block formatted
            pre({ node, className, children, ...props }) {
              const codeNode = node.children[0];
              const match = /language-(\w+)/.exec(
                codeNode?.properties?.className || ""
              );
              return match ? (
                <SyntaxHighlighter
                  style={xcode}
                  language={match[1]}
                  PreTag="pre"
                  {...props}
                >
                  {String(codeNode.children[0].value).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <pre className="md-fences" {...props}>
                  {children}
                </pre>
              );
            },

            // make the footnote link clickable
            a({ node, ...props }) {
              if (
                props.href &&
                (props.href.startsWith("#user-content-fn-") ||
                  props.href.startsWith("#user-content-fnref-"))
              ) {
                const currentUrl = getCurrentUrl();
                return (
                  <a
                    {...props}
                    href={`${currentUrl}${props.href}`}
                    onClick={(event) => {
                      event.preventDefault();
                      handleSmoothScroll(props.href.substring(1));
                    }}
                  >
                    {props.children.length === 0 ? "Link" : props.children}
                  </a>
                );
              }
              return (
                <a {...props}>
                  {props.children.length === 0 ? "Link" : props.children}
                </a>
              );
            },

            // make the image path correct for relative import
            img({ node, ...props }) {
              if (props.src && !props.src.startsWith("http")) {
                const src = resolveRelativePath(
                  window.location.hash.replace("#/", ""),
                  props.src
                );
                console.log(src);
                return <img {...props} src={src} />;
              }
              return <img {...props} />;
            },

            // make the checkbox can be checked or unchecked
          }}
        >
          {markdownContent}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownRenderer;
