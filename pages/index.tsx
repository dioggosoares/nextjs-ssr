import { GetStaticProps } from 'next';

export default function Home({ repositories, date }) {
  return (
    <>
      <h3>{ date }</h3>
      <ul>
        {repositories.map((repo) => (
          <li key={repo}>{repo}</li>
        ))}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch
  ('https://api.github.com/users/dioggosoares/repos')

  const data = await response.json();
  const repositoryNames = data.map(item => item.name);

  return {
    props: {
      repositories: repositoryNames,
      date: new Date().toISOString(),
    },
    revalidate: 60 * 60 * 4, // 5 seconds in cache (60 * 60 * 4) 4 hours in cache
  }
}
