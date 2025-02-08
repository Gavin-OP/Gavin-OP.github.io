/**
 * MarkdownRenderer Component
 *
 * This component is responsible for rendering markdown content to HTML.
 * It takes a markdown string as input and renders it using various plugins
 * to support features like GitHub Flavored Markdown (GFM), math equations,
 * syntax highlighting, and raw HTML.
 *
 * Props:
 * - markdownContent: String containing the markdown content to be rendered.
 *
 * Features:
 * - Supports GitHub Flavored Markdown (GFM) for tables, strikethrough, etc.
 * - Renders math equations using KaTeX.
 * - Highlights code blocks using react-syntax-highlighter.
 * - Supports raw HTML rendering.
 * - Handles smooth scrolling to footnotes.
 * - Resolves relative image paths to be relative to the public folder.
 * - Makes LaTeX blocks scrollable if they are too wide.
 *
 * TODO:
 * 1. Add clickable checkboxes.
 * 2. Add support for Mermaid diagrams.
 * 3. Add a report button for reporting mistakes in markdown files.
 * 4. Add a button to copy code blocks.
 * 5. Add functionality to convert markdown to PDF.
 */

import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
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
  // const [checkboxStates, setCheckboxStates] = useState({});

  // scroll to footnotes and scroll back
  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // get current url for footnotes
  // get the current location make footnotes scrollable
  const location = useLocation();
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
  //   setCheckboxStates((prevStates) => ({
  //     ...prevStates,
  //     [index]: !prevStates[index],
  //   }));
  //   console.log(event.target.checked);
  //   console.log(index);
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

            // for latex block that is too wide, make it scrollable
            span({ node, ...props }) {
              if (
                props.className &&
                props.className.includes("katex-display")
              ) {
                return (
                  <span
                    {...props}
                    style={{
                      ...props.style,
                      overflowX: "auto",
                    }}
                  >
                    {props.children}
                  </span>
                );
              }
              return <span {...props}>{props.children}</span>;
            },

            // check box
            // input({ node, ...props }) {
            //   if (props.type === "checkbox") {
            //     const index =
            //       node && node.position && node.position.start
            //         ? node.position.start.offset
            //         : null;
            //     return (
            //       <input
            //         type="checkbox"
            //         {...props}
            //         disabled={false}
            //         checked={checkboxStates[index] || false}
            //         onChange={(event) => handleCheckboxChange(event, index)}
            //       />
            //     );
            //   }
            //   return <input {...props} />;
            // },
          }}
        >
          {markdownContent}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownRenderer;
