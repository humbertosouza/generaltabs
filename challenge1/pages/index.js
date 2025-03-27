import React from "react";
import Image from "next/image";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>usacanada.com.br</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          :root {
            --main-blue: #003366;
            --main-red: #cc0000;
            --main-green: #007a33;
            --main-yellow: #ffcc00;
            --light-gray: #f9f9f9;
          }

          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: var(--light-gray);
            color: #333;
          }

          header {
            background: white;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }

          header img {
            height: 40px;
          }

          nav a {
            margin: 0 1rem;
            text-decoration: none;
            color: #333;
            font-weight: bold;
          }

          .hero {
            text-align: center;
            padding: 4rem 2rem;
            background-color: white;
          }

          .hero h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }

          .hero p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
          }

          .cta-buttons a {
            display: inline-block;
            margin: 0.5rem;
            padding: 1rem 2rem;
            font-size: 1rem;
            border-radius: 8px;
            text-decoration: none;
            color: white;
          }

          .real-estate { background-color: var(--main-blue); }
          .insurance { background-color: var(--main-red); }
          .tech { background-color: var(--main-green); }

          footer {
            text-align: center;
            padding: 2rem;
            font-size: 0.9rem;
            color: #666;
          }
        `}</style>
      </Head>

      <header>
        <Image
          src="/logo_variant_1.png"
          alt="usacanada logo"
          width={160}
          height={40}
        />
        <nav>
          <a href="/real-estate">Real Estate</a>
          <a href="/insurance">Insurance</a>
          <a href="/tech">Tech</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h1>
          Connecting Brazilians and Canadians with Opportunities in the USA
        </h1>
        <p>
          Your bridge to real estate, insurance, and tech jobs across borders.
        </p>
        <div className="cta-buttons">
          <a href="/real-estate" className="real-estate">
            Explore Real Estate
          </a>
          <a href="/insurance" className="insurance">
            Get Insured
          </a>
          <a href="/tech" className="tech">
            Tech
          </a>
        </div>
      </section>

      <footer>&copy; 2025 usacanada.com.br — All rights reserved.</footer>
    </>
  );
}

export default Home;
