import type { NextPage } from "next";
import Head from "next/head";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Liau Jian Jie</title>
        <meta
          name="description"
          content="I create value for the world through crafting thoughtful and performant software."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto my-10 md:my-32 px-8 md:px-0" style={{ maxWidth: 550 }}>
        <section className="mb-10">
          <h1 className="font-black text-4xl mb-6">Hi, I’m Jian Jie.</h1>

          <h2 className="font-semibold text-2xl">
            I create value for the world through crafting thoughtful and performant software.
          </h2>
        </section>

        <section className="mb-10">
          <p className="font-medium text-xl mb-4">
            Currently, I’m the CTO and co-founder of <a href="https://mobbin.com">Mobbin</a>.
          </p>

          <p className="font-medium text-xl mb-4">
            My software-oriented interests include machine learning, human-computer interactions,
            conflict-free replicated data types, and web technologies. I get excited about creating
            value through building software.
          </p>

          <p className="font-medium text-xl mb-4">
            In my free time, I consume content from random topics from semiconductor fabrication to
            public policy. I am currently also learning Malay.
          </p>

          <p className="font-medium text-xl mb-4">
            You can find me on <a href="https://github.com/liaujianjie">GitHub</a>,{" "}
            <a href="https://twitter.com/liaujianjie">Twitter</a>, or as <code>liaujianjie</code> on
            other corners of the internet. You can also reach me via email at{" "}
            <a href="mailto:jianjie@mobbin.com">jianjie@mobbin.com</a>.
          </p>
        </section>
      </main>
    </div>
  );
}
