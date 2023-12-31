import { NextApiResponse, NextApiRequest } from 'next';

export default async function handler(req, res) {
    const userResponse = await fetch(`https://api.github.com/users/hasanafzal8485`);
    const userReposResponse = await fetch(
        `https://api.github.com/users/hasanafzal8485/repos?per_page=100`
    );

    const user = await userResponse.json();
    const repositories = await userReposResponse.json();

    const notForked = repositories.filter((repo) => !repo.fork);

    const stars =
        notForked.reduce(
            (a, r) => a + r.stargazers_count,
            0
        ) || null;

    res.setHeader(
        `Cache-Control`,
        `public, s-maxage=1200, stale-while-revalidate=600`
    );

    const sendRepos = notForked.map(
        ({
             id,
             name,
             html_url,
             created_at,
             pushed_at,
             language,
             description,
             fork,
             stargazers_count,
         }) => ({
            id,
            name,
            html_url,
            created_at,
            pushed_at,
            language,
            description,
            fork,
            stargazers_count,
        })
    );
    return res.status(200).json({
        followers: user.followers,
        repos: sendRepos,
        stars,
    });
}
