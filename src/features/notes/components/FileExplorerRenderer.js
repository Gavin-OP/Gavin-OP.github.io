// TODO
// 1. Do not show .md extension
// 2. Where should I put the onclick logic?
// 3. how should we deal with current path?
import { useState } from "react";
import {
  VscChevronRight,
  VscChevronDown,
  VscFolder,
  VscFile,
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

  const handleClick = (e) => {
    e.stopPropagation();
    if (explorerData.isFolder) {
      setExpand(!expand);
      console.log("Folder Clicked: ", explorerData.path);
      // onFolderClick && onFolderClick(explorerData.path);
    } else {
      console.log("File Clicked: ", explorerData.path);
      // onFileClick && onFileClick(explorerData.path);
    }
  };

  const isCurrentPath = explorerData.path === currentPath;
  console.log("isCurrentPath: ", isCurrentPath);

  const itemStyle = { fontWeight: isCurrentPath ? "bold" : "normal" };

  return (
    <div>
      <div
        className={`file-explorer-item ${
          explorerData.isFolder ? "folder" : "folder"
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

  //     if (explorerData.isFolder) {
  //         // render folder component
  //         return (
  //             <div>
  //                 {/* display folder expand icon, folder icon, and folder name */}
  //                 <div
  //                     className="folder"
  //                     style={{ cursor: "pointer" }}
  //                     onClick={() => setExpand(!expand)}
  //                 >
  //                     <span>
  //                         {expand ? <VscChevronDown /> : <VscChevronRight />}
  //                         {/* <VscFolder /> */}
  //                         <label>{explorerData.name}</label>
  //                     </span>
  //                 </div>

  //                 {/* if expand the folder, then render the content inside the folder */}
  //                 <div
  //                     id="folderContainer"
  //                     style={{ display: expand ? "block" : "none", marginLeft: 15 }}
  //                 >
  //                     {explorerData.items.map((item, index) => {
  //                         console.log(explorerData);
  //                         return (
  //                             <FileExplorer
  //                                 explorerData={item}
  //                                 key={index}
  //                                 onFolderClick={onFolderClick}
  //                                 onFileClick={onFileClick}
  //                             />
  //                         );
  //                     })}
  //                 </div>
  //             </div>
  //         );

  //     } else {
  //         // render file component
  //         return (
  //             <div className="folder">
  //                 <span>
  //                     <VscFile />
  //                     <label>{explorerData.name}</label>
  //                 </span>
  //             </div>
  //         );
  //     }
};

export default FileExplorerRenderer;
