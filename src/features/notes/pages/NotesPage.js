import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import NotesMenu from "../components/NotesMenu";
import MarkdownRenderer from "../components/MarkdownRenderer";
import { GitHubService } from "../../../services/GitHub";
import { GITHUB_CONFIG } from "../../../utils/Constants";

const NotesPage = () => {
  const { "*": filename } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchContent = async () => {
      const github = new GitHubService(
        GITHUB_CONFIG.owner,
        GITHUB_CONFIG.repo,
        GITHUB_CONFIG.branch,
        GITHUB_CONFIG.basePath,
        process.env.REACT_APP_GITHUB_TOKEN
      );
      const filePath = `notes/${filename || "disclaimer"}.md`;
      try {
        const fileContent = await github.getFileContent(filePath);
        setContent(fileContent);
      } catch (err) {
        console.error("Error fetching content:", err);
      }
    };

    fetchContent();
  }, [filename]);

  return (
    <div className="notes-page">
      {/* <NotesMenu currentPath={filename} /> */}
      <div className="notes-content">
        <MarkdownRenderer markdownContent={content} />
      </div>
    </div>
  );
};

export default NotesPage;
