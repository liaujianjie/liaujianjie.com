import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Liau Jian Jie</title>
        <meta
          name="description"
          content="Hello, I'm Jian Jie—a software engineer passionate about product and performance, I create thoughtful and performant software experiences through code."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Liau Jian Jie</h1>

        <p>
          Hello, I'm Jian Jie—a software engineer passionate about product and
          performance, I create thoughtful and performant software experiences
          through code.
        </p>

        <p>
          Currently, I'm working on <a href="https://mobbin.design">Mobbin</a>{" "}
          out of Singapore.
        </p>

        <p>
          Here are some places you can find me:
          <ul>
            <li>
              <a href="https://github.com/liaujianjie">GitHub</a>
            </li>
            <li>
              <a href="https://twitter.com/liaujianjie">Twitter</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/liaujianjie/">LinkedIn</a>
            </li>
          </ul>
        </p>

        <p>
          Feel free to reach me via email at:
          <code>jianjie[at]mobbin.design</code>
        </p>

        {/* TODO: add PGP public key */}
        {/* <p >
          Other stuff:
          <ul>
            <li>PGP public key</li>
          </ul>
        </p> */}
      </main>
    </div>
  );
};

export default Home;
