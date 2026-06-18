// SSR page: getServerSideProps forces server-side rendering on every request,
// so this app genuinely needs a running server (next start).
export async function getServerSideProps() {
  return { props: { renderedAt: new Date().toISOString() } };
}

export default function Home({ renderedAt }) {
  return <h1>node-next-ssr — server-rendered at {renderedAt}</h1>;
}
