import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import RepoCard from "../components/RepoCard";
import styles from "../styles/GithubPage.module.css";

const GithubPage = ({repos, user}) => {
  const theme = {
    level0: "#161B22",
    level1: "#0e4429",
    level2: "#006d32",
    level3: "#26a641",
    level4: "#39d353",
  };

  return (
    <>
      <div className={styles.user}>
        <div>
          <Image src={user.avatar_url} className=" rounded-lg" alt={user.login} width={50} height={50} />
          <h3 className={styles.username}>{user.login}</h3>
        </div>
        <div>
          <h3>{user.public_repos} repos</h3>
        </div>
        <div>
          <h3>{user.followers} followers</h3>
        </div>
      </div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div className={styles.contributions}>
        <GitHubCalendar username={process.env.NEXT_PUBLIC_GITHUB_USERNAME} theme={theme} hideColorLegend hideMonthLabels />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const userRes = await fetch(`https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`, {
    headers: {
      Authorization: `token ${process.env.GITHUB_API_KEY}`,
    },
  });
  const user = await userRes.json();

  const repoRes = await fetch(`https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=30`, {
    headers: {
      Authorization: `token ${process.env.GITHUB_API_KEY}`,
    },
  });

  let repos = await repoRes.json();

  repos.forEach((repo) => {
    repo.updated_at = new Date(repo.updated_at).toISOString(); // Convert Date object to string
  });

  repos = repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)).slice(0, 30);

  return {
    props: {title: "GitHub", repos, user},
    revalidate: 10,
  };
}

export default GithubPage;
