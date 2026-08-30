export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <main>
      <h1>nextjs-app</h1>
      <pre>{JSON.stringify({
        app: "nextjs-app",
        stack: "next.js on node " + process.version,
        greeting: process.env.GREETING || "no GREETING set",
        renderedAt: new Date().toISOString(),
      }, null, 2)}</pre>
    </main>
  );
}
