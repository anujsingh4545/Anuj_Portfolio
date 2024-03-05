import Head from "next/head";

const CustomHead = ({title}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Anuj Kumar Singh is Software Developer." />
      <meta name="keywords" content="Anuj Kumar Singh, mudit, data, data science, data science engineer, Anuj Kumar Singh portfolio, vscode-portfolio" />
      <meta property="og:title" content="Anuj Kumar Singh Portfolio" />
      <meta property="og:description" content="Anuj Kumar Singh is a Software Developer." />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Anuj Kumar Singh",
};
