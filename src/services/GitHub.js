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

    async getAllNotes() {
        try {
            const response = await this.octokit.request('GET /repos/{owner}/{repo}/git/trees/{branch}?recursive=1', {
                owner: this.owner,
                repo: this.repo,
                branch: this.branch
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

    transformGitHubTree(tree) {
        // Transform flat tree into hierarchical structure
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
}