/**
 * GitHubService Class
 *
 * This class centralizes all GitHub API calls. It handles fetching the file tree
 * and the content of individual files from a GitHub repository. It also provides
 * utility functions to transform the file tree into a hierarchical structure.
 *
 * Constructor Parameters:
 * - owner: String representing the GitHub repository owner.
 * - repo: String representing the GitHub repository name.
 * - branch: String representing the branch name.
 * - base_path: String representing the base path for the notes.
 * - auth: String representing the GitHub authentication token.
 *
 * Methods:
 * - transformGitHubTree: Transforms a flat GitHub tree into a hierarchical structure.
 * - getAllNotes: Fetches the entire file tree from the GitHub repository.
 * - isValidPath: Checks if a given path is valid.
 * - getFileContent: Fetches the content of a file from the GitHub repository.
 *
 * TODO:
 * 1. Add inventory functionality.
 * 2. Test the getFileContent method.
 */
import { Octokit } from "@octokit/core";
import { GITHUB_CONFIG } from "../utils/Constants";

// centralize all GitHub API calls
export class GitHubService {
  constructor(
    owner = GITHUB_CONFIG.owner,
    repo = GITHUB_CONFIG.repo,
    branch = GITHUB_CONFIG.branch,
    base_path = GITHUB_CONFIG.basePath,
    auth = process.env.REACT_APP_GITHUB_TOKEN
  ) {
    this.owner = owner;
    this.repo = repo;
    this.branch = branch;
    this.base_path = base_path;
    this.octokit = new Octokit({
      auth: auth,
    });
  }

  /**
   * Transforms a flat GitHub tree into a hierarchical structure.
   * @param {Array} tree - The flat GitHub tree.
   * @returns {Object} - The hierarchical tree structure.
   */
  transformGitHubTree(tree) {
    // if want any order or inventory, add here
    const root = {
      name: "notes",
      path: this.base_path,
      items: [],
      isFolder: true,
    };
    const map = { "": root };

    tree.forEach((item) => {
      if (!item.path.startsWith(this.base_path)) return;

      const path = item.path.replace(this.base_path, "");
      const parts = path.split("/");
      let currentPath = "";

      parts.forEach((part, index) => {
        const isLast = index === parts.length - 1;
        const parentPath = currentPath;
        currentPath = currentPath ? `${currentPath}/${part}` : part;

        if (!map[currentPath]) {
          const node = {
            name: part,
            path: `${this.base_path}${currentPath}`,
            isFolder: !isLast || item.type === "tree",
            items: [],
          };
          map[currentPath] = node;
          map[parentPath].items.push(node);
        }
      });
    });

    return root;
  }

  /**
   * Fetches the entire file tree from the GitHub repository.
   * @returns {Object} - The hierarchical file tree structure.
   */
  async getAllNotes() {
    try {
      const response = await this.octokit.request(
        "GET /repos/{owner}/{repo}/git/trees/{branch}?recursive=1",
        {
          owner: this.owner,
          repo: this.repo,
          branch: this.branch,
          recursive: true,
        }
      );
      console.log("fetching file tree");

      return this.transformGitHubTree(response.data.tree);
    } catch (error) {
      console.error("Error fetching notes:", error);
      return [];
    }
  }

  /**
   * Checks if a given path is valid.
   * @param {String} path - The path to check.
   * @returns {Boolean} - True if the path is valid, false otherwise.
   */
  async isValidPath(path) {
    try {
      const response = await fetch(`${path}`);
      const text = await response.text();
      return !text.includes("<!DOCTYPE html>");
    } catch (error) {
      console.error("Error validating path:", error);
      return false;
    }
  }

  /**
   * Fetches the content of a file from the GitHub repository.
   * @param {String} path - The path of the file to fetch.
   * @returns {String} - The content of the file.
   */
  async getFileContent(path) {
    // check whether the path is valid, if not, display the default file
    const defaultPath = `notes/disclaimer.md`;
    const validPath = (await this.isValidPath(path)) ? path : defaultPath;

    try {
      const response = await fetch(`${validPath}`);
      if (!response.ok) {
        throw new Error(`Error fetching file: ${response.statusText}`);
      }
      const text = await response.text();
      return text;
    } catch (error) {
      console.error("Error fetching file from public folder:", error);
      return null;
    }
  }

  // async getFileContent(path) {
  //   try {
  //     const response = await this.octokit.request(
  //       "GET /repos/{owner}/{repo}/contents/{path}",
  //       {
  //         owner: this.owner,
  //         repo: this.repo,
  //         path: path,
  //       }
  //     );

  //     return atob(response.data.content);
  //   } catch (error) {
  //     console.error("Error fetching file:", error);
  //     return null;
  //   }
  // }
}
