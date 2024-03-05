import styles from "../styles/ContactCode.module.css";

const contactItems = [
  {
    social: "Website",
    link: "anujksingh",
    href: "https://anujksingh.vercel",
  },
  {
    social: "Email",
    link: "anujkumarsingh6544@gmail.com",
    href: "mailto:anujkumarsingh6544@gmail.com",
  },
  {
    social: "Github",
    link: "anujsingh4545",
    href: "https://github.com/anujsingh4545",
  },
  {
    social: "Linkedin",
    link: "theanujksingh",
    href: "https://www.linkedin.com/in/theanujksingh/",
  },
  {
    social: "Leetcode",
    link: "theanujkumarsingh",
    href: "https://leetcode.com/theanujkumarsingh/",
  },
  {
    social: "GeeksforGeeks",
    link: "anujsingh55",
    href: "https://auth.geeksforgeeks.org/user/anujsingh55",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
