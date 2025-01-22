import { useState, useEffect, useMemo } from "react";
import { GitHubService } from "../../../services/GitHub";
import { GITHUB_CONFIG } from "../../../utils/Constants";

export function useNotes(initialPath = "disclaimer") {
  const [state, setState] = useState({
    fileTree: null,
    currentContent: null,
    currentPath: initialPath,
    isLoading: true,
    error: null,
  });

  // create GitHub service instance once
  const githubService = useMemo(
    () =>
      new GitHubService(
        GITHUB_CONFIG.owner,
        GITHUB_CONFIG.repo,
        GITHUB_CONFIG.branch,
        GITHUB_CONFIG.basePath,
        process.env.REACT_APP_GITHUB_TOKEN
      ),
    []
  ); // empty dependency array as these values won't change

  // fetch file tree only once when component mounts
  useEffect(() => {
    const fetchFileTree = async () => {
      try {
        const tree = await githubService.getAllNotes();
        setState((prev) => ({ ...prev, fileTree: tree, isLoading: false }));
      } catch (error) {
        setState((prev) => ({
          ...prev,
          error: "Failed to load file structure",
          isLoading: false,
        }));
      }
    };

    fetchFileTree();
  }, []); // empty dependency array as this effect should run only once

  // fetch file content when path changes
  useEffect(() => {
    const fetchContent = async () => {
      if (!state.currentPath) return;

      setState((prev) => ({ ...prev, isLoading: true }));
      try {
        const content = await githubService.getFileContent(state.currentPath);
        setState((prev) => ({
          ...prev,
          currentContent: content,
          isLoading: false,
        }));
      } catch (error) {
        setState((prev) => ({
          ...prev,
          error: "Failed to load file content",
          isLoading: false,
        }));
      }
    };

    fetchContent();
  }, [state.currentPath]);

  const setCurrentPath = (path) => {
    setState((prev) => ({ ...prev, currentPath: path }));
  };

  return {
    ...state,
    setCurrentPath,
  };
}
