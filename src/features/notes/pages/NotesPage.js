// import React, { useEffect, useState } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import NotesMenu from "../components/NotesMenu";
// import MarkdownRenderer from "../components/MarkdownRenderer";
// import { GitHubService } from "../../../services/GitHub";
// import { GITHUB_CONFIG } from "../../../utils/Constants";
// import { useNotes } from "../hooks/useNotes";

// const NotesPage = () => {
//   const { "*": filename } = useParams();
//   const [content, setContent] = useState("");
//   const { fileTree, currentContent, isLoading, error, setCurrentPath } =
//     useNotes();

//   console.log("fileTree: ", fileTree);

//   useEffect(() => {
//     const fetchContent = async () => {
//       const github = new GitHubService(
//         GITHUB_CONFIG.owner,
//         GITHUB_CONFIG.repo,
//         GITHUB_CONFIG.branch,
//         GITHUB_CONFIG.basePath,
//         process.env.REACT_APP_GITHUB_TOKEN
//       );
//       const filePath = `notes/${filename || "disclaimer"}.md`;
//       try {
//         const fileContent = await github.getFileContent(filePath);
//         setContent(fileContent);
//       } catch (err) {
//         console.error("Error fetching content:", err);
//       }
//     };

//     fetchContent();
//   }, [filename]);

//   return (
//     <div className="notes-page">
//       <NotesMenu fileTree={fileTree} currentPath={filename} />
//       <div className="notes-content">
//         <MarkdownRenderer markdownContent={content} />
//       </div>
//     </div>
//   );
// };

// export default NotesPage;

import React from "react";
import { GitHubService } from "../../../services/GitHub";
import { GITHUB_CONFIG } from "../../../utils/Constants";
import MarkdownRenderer from "../components/MarkdownRenderer";
import FileExplorerRenderer from "../components/FileExplorerRenderer";
import { useNotes } from "../hooks/useNotes";
import { useNavigate } from "react-router-dom";

const TestPage = () => {
  const {
    fileTree,
    currentContent,
    isLoading,
    error,
    setCurrentPath,
    currentPath,
  } = useNotes();
  const navigate = useNavigate();

  const handleFileClick = (path) => {
    setCurrentPath(path);
    navigate(`${path.replace("notes/", "")}`);
  };

  const handleFolderClick = (path) => {
    setCurrentPath(path);
    navigate(`${path.replace("notes/", "")}`);
  };

  // return (
  //   <div className="notes-page">
  //     <FileExplorerRenderer
  //       explorerData={fileTree}
  //       currentPath={currentPath}
  //       onFileClick={handleFileClick}
  //       onFolderClick={handleFolderClick}
  //     />
  //     <div className="notes-content">
  //       {isLoading && <p>Loading...</p>}
  //       {error && <p style={{ color: "red" }}>Error: {error}</p>}
  //       {currentContent && (
  //         <MarkdownRenderer markdownContent={currentContent} />
  //       )}
  //     </div>
  //   </div>
  // );

  return (
    <div
      style={{ display: "flex", padding: "20px", backgroundColor: "#f5f5f5" }}
    >
      <div style={{ flex: 1, marginRight: "20px" }}>
        <FileExplorerRenderer
          explorerData={fileTree}
          currentPath={currentPath}
          onFileClick={handleFileClick}
          onFolderClick={handleFolderClick}
        />
      </div>
      <div style={{ flex: 3 }}>
        {isLoading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {currentContent && (
          <MarkdownRenderer markdownContent={currentContent} />
        )}
      </div>
    </div>
  );
};

export default TestPage;
