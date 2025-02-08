/**
 * useNotes Hook
 *
 * This custom hook is responsible for managing the state and logic related to
 * fetching and displaying notes from a GitHub repository. It handles fetching
 * the file tree and the content of individual files, and provides functions
 * to update the current path.
 *
 * Parameters:
 * - initialPath: String representing the initial path to be loaded.
 *
 * State:
 * - fileTree: Object containing the structure of the file tree.
 * - currentContent: String containing the content of the currently selected file.
 * - currentPath: String representing the current selected path.
 * - isLoading: Boolean indicating whether data is being loaded.
 * - error: String containing any error message encountered during fetching.
 *
 * Functions:
 * - setCurrentPath: Function to update the current path and fetch the corresponding content.
 *
 * Usage:
 * const { fileTree, currentContent, isLoading, error, setCurrentPath } = useNotes();
 *
 * Example:
 * const { fileTree, currentContent, isLoading, error, setCurrentPath } = useNotes("notes/README.md");
 *
 */
import { useState, useEffect, useMemo } from "react";
import { GITHUB_CONFIG } from "../../../utils/Constants";
import { GitHubService } from "../../../services/GitHub";

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

  // function to update the current path
  const setCurrentPath = (path) => {
    setState((prev) => ({ ...prev, currentPath: path }));
  };

  return {
    ...state,
    setCurrentPath,
  };
}
