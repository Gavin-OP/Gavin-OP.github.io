import { useState, useEffect } from 'react';
import { GitHubService } from '../services/GitHubithub';
import { GITHUB_CONFIG } from '../utils/Constants';

export function useGitHub() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const githubService = new GitHubService(
        GITHUB_CONFIG.owner,
        GITHUB_CONFIG.repo,
        GITHUB_CONFIG.branch
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await githubService.getAllNotes();
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error, githubService };
}