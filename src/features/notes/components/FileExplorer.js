// TODO
// 1. Do not show .md extension
import { useState } from "react";
import { VscChevronRight, VscChevronDown, VscFolder, VscFile, } from "react-icons/vsc";
import "../styles/Folder.css";

const FileExplorer = ({
    explorerData,
    onFolderClick,
    onFileClick
}) => {
    const [expand, setExpand] = useState(false);

    const handleClick = (e) => {
        e.stopPropagation();
        if (explorerData.isFolder) {
            setExpand(!expand);
            console.log("explorerData.path: ", explorerData.path);
            // onFolderClick && onFolderClick(explorerData.path);
        } else {
            console.log(explorerData.path);
            onFileClick && onFileClick(explorerData.path);
        }
    };

    return (
        // Main container for the file explorer item
        <div>
            {/* Item container with click handler and folder/file styling */}
            <div
                className={`file-explorer-item ${explorerData.isFolder ? 'folder' : 'folder'}`}
                onClick={handleClick}
            >
                {/* Icon and label container */}
                <span className="file-explorer-icon-label">
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
                <div className="file-explorer-children" id='folderContainer'>
                    {/* Map through and render each child item */}
                    {explorerData.items.map((item, index) => (
                        <FileExplorer
                            key={index}
                            explorerData={{
                                ...item,
                                // Construct full path by combining parent path with item name
                                path: `${explorerData.path}/${item.name}`
                            }}
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

export default FileExplorer;