// use https://api.github.com/repos/Gavin-OP/Gavin-OP.github.io/contents/public/file?ref=master to get the file list
// https://api.github.com/repos/Gavin-OP/Gavin-OP.github.io/contents/<foldername>?ref=<branch_name>


import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NotesMenu = ({ currentPath }) => {
    const [files, setFiles] = useState([]);
    const directoryPath = currentPath.split('/').slice(0, -1).join('/');
    console.log(currentPath);
    console.log(directoryPath)

    useEffect(() => {
        fetch(`https://api.github.com/repos/Gavin-OP/Gavin-OP.github.io/contents/public${directoryPath}?ref=master`)
            .then(response => response.json())
            .then(data => setFiles(data))
            .catch(error => console.error(error));
    }, [currentPath]);

    console.log(files);

    return (
        <div className="notes-menu">
            {/* <ul>
                {files.map(file => (
                    <li key={file.path}>
                        {file.type === 'dir' ? (
                            <Link to={`/notes${file.path.replace('public/notes', '')}`}>{file.name}</Link>
                        ) : (
                            <Link to={`/notes${file.path.replace('public/notes', '')}`}>{file.name}</Link>
                        )}
                        {file.path}
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default NotesMenu;