// use https://api.github.com/repos/Gavin-OP/Gavin-OP.github.io/contents/public/file?ref=master to get the file list
// https://api.github.com/repos/Gavin-OP/Gavin-OP.github.io/contents/<foldername>?ref=<branch_name>
// TODO
// 1. Render too slow
// 2. Icon to display menu and close menu
// 3. Identify folder and file
// 4. Show the parent folder tree if click on a file


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Octokit } from '@octokit/core';
import '../../css/NotesMenu.css';

const NotesMenu = ({ currentPath }) => {
    const [files, setFiles] = useState([]);
    const navigate = useNavigate();

    // const octokit = useMemo(() => new Octokit({
    //     auth: process.env.REACT_APP_GITHUB_TOKEN
    // }), []);

    // useEffect(() => {
    //     const fetchFiles = async (path) => {
    //         try {
    //             const sanitizedPath = path.replace(/\/$/, '');
    //             const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}?ref=master', {
    //                 owner: 'Gavin-OP',
    //                 repo: 'Gavin-OP.github.io',
    //                 path: `public/notes${sanitizedPath}`,
    //                 headers: {
    //                     'X-GitHub-Api-Version': '2022-11-28',
    //                     'Authorization': `token ${process.env.REACT_APP_GITHUB_TOKEN}` 
    //                 }
    //             });


    //             if (Array.isArray(response.data)) {
    //                 setFiles(response.data);
    //             } else {
    //                 setFiles([]);
    //             }
    //         } catch (error) {
    //             console.error('Error fetching files:', error);
    //             setFiles([]);
    //         }
    //     };

    //     fetchFiles(currentPath.replace('/notes', ''));
    // }, [currentPath, octokit]);

    useEffect(() => {
        const fetchFiles = async (path) => {
            const octokit = new Octokit({
                auth: process.env.REACT_APP_GITHUB_TOKEN
            });

            try {
                const sanitizedPath = path.replace(/\/$/, '');
                const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}?ref=master', {
                    owner: 'Gavin-OP',
                    repo: 'Gavin-OP.github.io',
                    path: `public/notes${sanitizedPath}`,
                    headers: {
                        'X-GitHub-Api-Version': '2022-11-28'
                    }
                });

                if (Array.isArray(response.data)) {
                    setFiles(response.data);
                } else {
                    setFiles([]);
                }
            } catch (error) {
                console.error('Error fetching files:', error);
                setFiles([]);
            }
        };

        fetchFiles(currentPath.replace('/notes', ''));
    }, [currentPath]);


    const handleFolderClick = (path) => {
        navigate(`/notes${path.replace('public/notes', '')}`);
    };

    const handleParentClick = () => {
        const parentPath = currentPath.split('/').slice(0, -1).join('/');
        navigate(parentPath);
    };

    const renderFiles = (files) => {
        return (
            <ul>
                {currentPath !== '/notes' && (
                    <li>
                        <span onClick={handleParentClick}>
                            .. (返回上一级)
                        </span>
                    </li>
                )}
                {files.map(file => (
                    <li key={file.path}>
                        {file.type === 'dir' ? (
                            <span onClick={() => handleFolderClick(file.path)}>
                                {file.name}
                            </span>
                        ) : (
                            <Link to={`/notes${file.path.replace('public/notes', '')}`}>
                                {file.name}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className="notes-menu">
            {renderFiles(files)}
        </div>
    );
};

export default NotesMenu;