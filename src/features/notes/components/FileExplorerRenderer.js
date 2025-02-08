/**
 * FileExplorerRenderer Component
 *
 * This component is responsible for rendering a file explorer tree structure.
 * It displays folders and files, and allows users to expand/collapse folders
 * and select files. The current path is highlighted in bold.
 *
 * Props:
 * - explorerData: Object containing the file/folder structure. Each item in the structure
 *   should have the following properties:
 *   - name: The name of the file or folder.
 *   - path: The path (start with `notes/`) of the file or folder.
 *   - isFolder: Boolean indicating whether the item is a folder.
 *   - items: Array of child items (if the item is a folder).
 * - currentPath: String representing the current selected path (start with `notes/`).
 * - onFileClick: Function to handle file click events. Receives the file path as an argument.
 * - onFolderClick: Function to handle folder click events. Receives the folder path as an argument.
 *
 * State:
 * - expand: Boolean indicating whether the folder is expanded.
 *
 * Usage:
 * <FileExplorerRenderer
 *   explorerData={fileTree}
 *   currentPath={currentPath}
 *   onFileClick={handleFileClick}
 *   onFolderClick={handleFolderClick}
 * />
 *
 * TODO:
 * 1. Do not show .md extension in file names.
 * 2. Determine where to put the onclick logic.
 * 3. Handle the current path highlighting.
 */

import { useState } from "react";
import {
  VscChevronRight,
  VscChevronDown,
  VscFile,
  // VscFolder,
} from "react-icons/vsc";
import "../styles/FileExplorerRenderer.css";

const FileExplorerRenderer = ({
  explorerData,
  currentPath,
  onFileClick,
  onFolderClick,
}) => {
  const [expand, setExpand] = useState(false);

  // if explorerData is null or undefined, return null
  if (!explorerData) {
    console.log("explorerData", explorerData);
    return null;
  }

  console.log("explorerData", explorerData);
  console.log("currentPath in FileExplorerRenderer: ", currentPath);

  // handle click event for folder and file
  const handleClick = (e) => {
    e.stopPropagation();
    if (explorerData.isFolder) {
      setExpand(!expand);
      console.log("Folder Clicked: ", explorerData.path);
      onFolderClick && onFolderClick(explorerData.path);
    } else {
      console.log("File Clicked: ", explorerData.path);
      onFileClick && onFileClick(explorerData.path);
    }
  };

  // style for current path
  const isCurrentPath = explorerData.path === currentPath;
  const itemStyle = { fontWeight: isCurrentPath ? "bold" : "normal" };
  console.log("isCurrentPath: ", isCurrentPath);

  return (
    <div>
      <div
        className={`file-explorer-item ${
          explorerData.isFolder ? "folder" : "file"
        }`}
        onClick={handleClick}
        style={itemStyle}
      >
        <span className="file-explorer-icon-label" style={itemStyle}>
          {explorerData.isFolder ? (
            <>
              {expand ? <VscChevronDown /> : <VscChevronRight />}
              {/* <VscFolder /> */}
            </>
          ) : (
            <VscFile />
          )}
          <label>{explorerData.name}</label>
        </span>
      </div>

      {/* Recursively render children if item is an expanded folder */}
      {explorerData.isFolder && expand && (
        <div className="file-explorer-children" id="folderContainer">
          {/* Map through and render each child item */}
          {explorerData.items.map((item, index) => (
            <FileExplorerRenderer
              key={index}
              explorerData={{
                ...item,
                // Construct full path by combining parent path with item name
                path: `${explorerData.path}/${item.name}`,
              }}
              currentPath={currentPath}
              onFolderClick={onFolderClick}
              onFileClick={onFileClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FileExplorerRenderer;
