import { useState, useEffect, useMemo } from 'react';
import { GitHubService } from '../services/githubService';

export function useNotes(initialPath = 'disclaimer') {
  const [state, setState] = useState({
    fileTree: null,
    currentContent: null,
    currentPath: initialPath,
    isLoading: true,
    error: null
  });

  // Create GitHub service instance once
  const githubService = useMemo(() => new GitHubService(
    process.env.REACT_APP_GITHUB_OWNER,
    process.env.REACT_APP_GITHUB_REPO
  ), []); // Empty dependency array as these values won't change

  // Fetch file tree only once when component mounts
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
  }, []); // Empty dependency array as we only want this to run once

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