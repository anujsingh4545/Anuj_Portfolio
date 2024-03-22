import WatchIcon from "../components/icons/WatchIcon";
import ForkIcon from "../components/icons/ForkIcon";
import StarIcon from "../components/icons/StarIcon";
import GithubIcon from "../components/icons/GithubIcon";
import LinkIcon from "../components/icons/LinkIcon";
import styles from "../styles/RepoCard.module.css";

const RepoCard = ({repo}) => {
  return (
    <div className={styles.card}>
      <div>
        <h3 className={styles.title}>{repo.name}</h3>
        <p>{repo.description}</p>
      </div>

      <div className=" flex flex-wrap  gap-2  mb-2  ">
        {repo.topics.map((tag) => (
          <span key={tag} className=" text-[0.6rem] px-2 py-1 rounded-full bg-white/30 shadow-md ">
            {tag}
          </span>
        ))}
      </div>

      <div className={styles.stats}>
        <div>
          <div>
            <WatchIcon className={styles.icon} /> {repo.watchers}
          </div>
          <div>
            <ForkIcon className={styles.icon} /> {repo.forks}
          </div>
          <div>
            <StarIcon className={styles.icon} /> {repo.stargazers_count}
          </div>
        </div>
        <div>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            <GithubIcon height={20} width={20} className={styles.icon} />
          </a>
          {repo.homepage && (
            <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
              <LinkIcon height={20} width={20} className={styles.icon} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
