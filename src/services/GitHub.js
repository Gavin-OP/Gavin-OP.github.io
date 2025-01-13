// TODO
// 1. inventory?
// 2. test getFileContent
import { Octokit } from '@octokit/core';

// Centralize all GitHub API calls
export class GitHubService {
    constructor(owner, repo, branch = 'master') {
        this.owner = owner;
        this.repo = repo;
        this.branch = branch;
        this.octokit = new Octokit({
            auth: process.env.REACT_APP_GITHUB_TOKEN
        });
    }

    transformGitHubTree(tree) {
        // Transform flat tree into hierarchical structure
        // if want any order or inventory, add here
        const root = { name: 'notes', path: '', items: [], isFolder: true };
        const map = { '': root };

        tree.forEach(item => {
            if (!item.path.startsWith('public/notes/')) return;

            const path = item.path.replace('public/notes/', '');
            const parts = path.split('/');
            let currentPath = '';

            parts.forEach((part, index) => {
                const isLast = index === parts.length - 1;
                const parentPath = currentPath;
                currentPath = currentPath ? `${currentPath}/${part}` : part;

                if (!map[currentPath]) {
                    const node = {
                        name: part,
                        path: `public/notes/${currentPath}`,
                        isFolder: !isLast || item.type === 'tree',
                        items: []
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
            const response = await this.octokit.request('GET /repos/{owner}/{repo}/git/trees/{branch}?recursive=1', {
                owner: this.owner,
                repo: this.repo,
                branch: this.branch,
                recursive: true
            });

            return this.transformGitHubTree(response.data.tree);
        } catch (error) {
            console.error('Error fetching notes:', error);
            return [];
        }
    }

    async getFileContent(path) {
        try {
            const response = await this.octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
                owner: this.owner,
                repo: this.repo,
                path: path
            });

            return atob(response.data.content);
        } catch (error) {
            console.error('Error fetching file:', error);
            return null;
        }
    }

}