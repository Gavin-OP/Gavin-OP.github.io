import { React, useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import NotesMenu from '../components/NotesMenu';
import MarkdownRenderer from '../components/MarkdownRenderer';


const NotesPage = () => {
    const { '*': filename } = useParams();
    const location = useLocation();
    const [exists, setExists] = useState(true);

    const currentPath = location.pathname;

    useEffect(() => {
        // Check if file exists
        fetch(`/notes/${filename || 'disclaimer'}`)
            .then((response) => response.text())
            .then((text) => {
                // console.log(text);
                if (text.includes("<!DOCTYPE html>")) {
                    setExists(false);
                }
                setExists(true);
            })
            .catch(() => setExists(false));
    }, [filename]);

    console.log("filename: ", filename, "exists: ", exists, 'currentPath: ', currentPath);


    return (
        <div className="notes-page">
            <NotesMenu currentPath={currentPath} />
            <div className="notes-content">
                <MarkdownRenderer filename={exists ? filename : 'disclaimer'} />
            </div>
        </div>
    );
};



export default NotesPage;