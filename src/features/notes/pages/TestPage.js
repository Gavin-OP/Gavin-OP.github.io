import React from "react";
import { GitHubService } from "../../../services/GitHub";
import { GITHUB_CONFIG } from "../../../utils/Constants";
import MarkdownRenderer from "../components/MarkdownRenderer";

const TestPage = () => {
  const [debugInfo, setDebugInfo] = React.useState({
    treeData: null,
    fileContent: null,
    error: null,
  });

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
        const testFilePath = "/notes/disclaimer.md"; // or any existing file path
        const fileContent = await github.getFileContent(testFilePath);
        console.log("File Content Result:", fileContent);

        setDebugInfo({
          treeData: tree,
          fileContent: fileContent,
          error: null,
        });
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

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div>
        <h1 style={{ textAlign: "center" }}>Test Page</h1>
        <h4>File Tree Sample:</h4>
        <div style={{ maxHeight: "300px", overflow: "auto" }}>
          <pre>
            {debugInfo.treeData
              ? JSON.stringify(debugInfo.treeData.items.slice(0, 3), null, 2)
              : "Loading..."}
          </pre>
        </div>
        <h4>File Content:</h4>
        <MarkdownRenderer />
      </div>
    </div>
  );
};

export default TestPage;
