import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import NotesMenu from '../component/notes/NotesMenu';
import MarkdownRenderer from '../component/notes/MarkdownRenderer';


const Notes = () => {
    const { '*': filename } = useParams();
    const location = useLocation();

    const currentPath = location.pathname;

    return (
        <div className="notes-page">
            <NotesMenu currentPath={currentPath} />
            <div className="notes-content">
                <MarkdownRenderer filename={filename} />
            </div>
        </div>
    );
};

export default Notes;