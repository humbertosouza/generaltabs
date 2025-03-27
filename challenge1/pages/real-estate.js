// pages/real-estate.js
import React from "react";
import Head from "next/head";

function RealEstate() {
  return (
    <>
      <Head>
        <title>Real Estate | usacanada.com.br</title>
      </Head>

      <main
        style={{
          padding: "2rem",
          backgroundColor: "#f9f9f9",
          color: "#333",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1 style={{ color: "#003366" }}>Real Estate</h1>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2>Overview</h2>
          <p>
            We offer tailored assessment services for Brazilians, Canadians, and
            American residents looking to buy or rent property in the U.S. Our
            multilingual support and expert network ensure that cultural, legal,
            and financial nuances are handled smoothly during your relocation or
            investment process.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2>Properties for Sale/Rent</h2>
          <p>Coming soon.</p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2>City Guides</h2>
          <ul>
            <li>
              <a href="https://www.miamiandbeaches.com/" target="_blank">
                Miami
              </a>
            </li>
            <li>
              <a href="https://www.visitorlando.com/" target="_blank">
                Orlando
              </a>
            </li>
            <li>
              <a href="https://www.fortmyers-sanibel.com/" target="_blank">
                Fort Myers
              </a>
            </li>
            <li>
              <a href="https://www.visittampabay.com/" target="_blank">
                Tampa
              </a>
            </li>
            <li>
              <a href="https://www.visitjacksonville.com/" target="_blank">
                Jacksonville
              </a>
            </li>
            <li>
              <a href="https://www.visithoustontexas.com/" target="_blank">
                Houston
              </a>
            </li>
            <li>
              <a href="https://discoveratlanta.com/" target="_blank">
                Atlanta
              </a>
            </li>
            <li>
              <a href="https://www.visitdallas.com/" target="_blank">
                Dallas
              </a>
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2>How-to Articles</h2>
          <ul>
            <li>
              Buying a Home as a Brazilian/Canadian — <em>Coming soon</em>
            </li>
            <li>
              Renting Tips for Newcomers — <em>Coming soon</em>
            </li>
            <li>
              Financing & Mortgage — <em>Coming soon</em>
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2>Partner Agencies</h2>
          <p>Coming soon.</p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2>Find Your Property</h2>
          <form
            style={{
              background: "#fff",
              padding: "1.5rem",
              borderRadius: "6px",
              maxWidth: "400px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              style={{
                width: "100%",
                marginBottom: "1rem",
                padding: "0.75rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              style={{
                width: "100%",
                marginBottom: "1rem",
                padding: "0.75rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              style={{
                width: "100%",
                marginBottom: "1rem",
                padding: "0.75rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <textarea
              name="description"
              rows="4"
              placeholder="Tell us what you're looking for..."
              style={{
                width: "100%",
                marginBottom: "1rem",
                padding: "0.75rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            ></textarea>
            <button
              type="submit"
              style={{
                backgroundColor: "#003366",
                color: "#fff",
                padding: "0.75rem 1.5rem",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default RealEstate;
