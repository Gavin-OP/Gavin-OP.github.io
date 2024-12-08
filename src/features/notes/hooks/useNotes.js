import { useState, useEffect } from 'react';
import { GitHubService } from '../services/githubService';

export function useNotes(initialPath = 'disclaimer') {
  const [state, setState] = useState({
    fileTree: null,
    currentContent: null,
    currentPath: initialPath,
    isLoading: true,
    error: null
  });

  const githubService = new GitHubService(
    process.env.REACT_APP_GITHUB_OWNER,
    process.env.REACT_APP_GITHUB_REPO
  );

  // Fetch file tree
  useEffect(() => {
    const fetchFileTree = async () => {
      try {
        const tree = await githubService.getAllNotes();
        setState(prev => ({ ...prev, fileTree: tree, isLoading: false }));
      } catch (error) {
        setState(prev => ({ 
          ...prev, 
          error: 'Failed to load file structure', 
          isLoading: false 
        }));
      }
    };

    fetchFileTree();
  }, []);

  // Fetch file content when path changes
  useEffect(() => {
    const fetchContent = async () => {
      if (!state.currentPath) return;

      setState(prev => ({ ...prev, isLoading: true }));
      try {
        const content = await githubService.getFileContent(state.currentPath);
        setState(prev => ({
          ...prev,
          currentContent: content,
          isLoading: false
        }));
      } catch (error) {
        setState(prev => ({
          ...prev,
          error: 'Failed to load file content',
          isLoading: false
        }));
      }
    };

    fetchContent();
  }, [state.currentPath]);

  const setCurrentPath = (path) => {
    setState(prev => ({ ...prev, currentPath: path }));
  };

  return {
    ...state,
    setCurrentPath
  };
} 