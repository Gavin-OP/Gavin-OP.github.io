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
import '../styles/NotesMenu.css';
import FileExplorer from './FileExplorer';
import { shadesOfPurple } from 'react-syntax-highlighter/dist/esm/styles/hljs';



const NotesMenu = ({ currentPath }) => {
    const [files, setFiles] = useState([]);
    const [fileContent, setFileContent] = useState(null);
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
                    const transformedFiles = response.data.map(file => ({
                        name: file.name.replace('.md', ''),
                        path: file.path,
                        isFolder: file.type === 'dir',
                        items: [],
                        sha: file.sha
                    }));
                    setFiles(transformedFiles);
                }
                console.log(files);
            } catch (error) {
                console.error('Error fetching files:', error);
                setFiles([]);
            }
        };

        fetchFiles(currentPath.replace('/notes', ''));
    }, [currentPath]);


    const handleFolderClick = (path) => {
        console.log("path: ", path.replace('public/notes', ''));
        navigate(`/notes/${path.replace('public/notes', '')}`);
        // navigate(`/notes/csci/`);
    };

    const handleParentClick = () => {
        const parentPath = currentPath.split('/').slice(0, -1).join('/');
        navigate(parentPath);
    };

    const handleFileClick = async (path) => {
        const octokit = new Octokit({
            auth: process.env.REACT_APP_GITHUB_TOKEN
        });

        try {
            const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}?ref=master', {
                owner: 'Gavin-OP',
                repo: 'Gavin-OP.github.io',
                path: path,
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            });

            if (response.data && response.data.content) {
                const content = atob(response.data.content);
                setFileContent(content);
            } else {
                setFileContent(null);
            }
        } catch (error) {
            console.error('Error fetching file content:', error);
            setFileContent(null);
        }
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
            {/* {renderFiles(files)} */}
            {files.length > 0 && (
                <FileExplorer explorerData={{
                    name: 'notes', isFolder: true, items: files
                    // .map(file => ({
                    //     name: file.name,
                    //     isFolder: file.type === 'dir',
                    //     items: []
                    // }))
                    , path: '/notes'
                }}
                    onFolderClick={handleFolderClick}
                    onFileClick={handleFileClick}
                />
            )}
        </div>
    );
};

export default NotesMenu;