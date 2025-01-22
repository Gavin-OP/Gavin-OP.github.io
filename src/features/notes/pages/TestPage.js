import React from "react";
import { GitHubService } from "../../../services/GitHub";
import { GITHUB_CONFIG } from "../../../utils/Constants";
import MarkdownRenderer from "../components/MarkdownRenderer";
import FileExplorerRenderer from "../components/FileExplorerRenderer";
import { useNotes } from "../hooks/useNotes";

const TestPage = () => {
  const [debugInfo, setDebugInfo] = React.useState({
    treeData: null,
    fileContent: null,
    currentPath: null,
    error: null,
  });

  // Test useNotes.js
  const { fileTree, currentContent, isLoading, error, setCurrentPath } =
    useNotes();

  // Test GitHub Service
  React.useEffect(() => {
    const testGitHubService = async () => {
      const github = new GitHubService(
        GITHUB_CONFIG.owner,
        GITHUB_CONFIG.repo,
        GITHUB_CONFIG.branch,
        GITHUB_CONFIG.basePath,
        process.env.REACT_APP_GITHUB_TOKEN
      );

      try {
        const tree = await github.getAllNotes();
        console.log("Test File Tree:", tree);

        // Test getting a specific file
        // const testFilePath = "/notes/stat/distribution.md"; // or any existing file path
        // const testFilePath = "/notes/README.md";
        const testFilePath = "notes/csci/code-block-test.md";
        // const testFilePath = "notes/csci";
        const fileContent = await github.getFileContent(testFilePath);
        // console.log("File Content Result:", fileContent);

        setCurrentPath(testFilePath);

        setDebugInfo((prev) => ({
          ...prev,
          treeData: tree,
          fileContent: fileContent,
          currentPath: testFilePath,
          error: null,
        }));
      } catch (err) {
        console.error("GitHub Service Test Error:", err);
        setDebugInfo((prev) => ({
          ...prev,
          error: err.message,
        }));
      }
    };

    testGitHubService();
  }, []);

  // console.log("currentContent:", currentContent);
  console.log("debugInfo.currentPath:", debugInfo.currentPath);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div>
        <h1 style={{ textAlign: "center" }}>Test Page</h1>
        <h4>File Explorer:</h4>
        <FileExplorerRenderer
          explorerData={fileTree}
          currentPath={debugInfo.currentPath}
        />
        <h4>File Content:</h4>
        <MarkdownRenderer markdownContent={currentContent} />
        {/* <MarkdownRenderer markdownContent={debugInfo.fileContent} /> */}
        <h4>File Tree Sample:</h4>
        <div style={{ maxHeight: "300px", overflow: "auto" }}>
          <pre>
            {debugInfo.treeData
              ? JSON.stringify(debugInfo.treeData.items.slice(0, 3), null, 2)
              : "Loading..."}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
