// TODO
// 1. inventory?
// 2. test getFileContent
import { Octokit } from "@octokit/core";
import { GITHUB_CONFIG } from "../utils/Constants";

// Centralize all GitHub API calls
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

  transformGitHubTree(tree) {
    // Transform flat tree into hierarchical structure
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

      return this.transformGitHubTree(response.data.tree);
    } catch (error) {
      console.error("Error fetching notes:", error);
      return [];
    }
  }

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

  async getFileContent(path) {
    // check whether the path is valid, if not, display the default file
    const defaultPath = `notes/disclaimer.md`;
    const validPath = await this.isValidPath(path) ? path : defaultPath;

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
