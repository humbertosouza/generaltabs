import React from "react";
import Head from "next/head";
import Image from "next/image";

// Reusable styles
const tableCellStyle = {
  border: "1px solid #ccc",
  padding: "0.75rem",
  textAlign: "left",
};

const inputStyle = {
  width: "100%",
  marginBottom: "1rem",
  padding: "0.75rem",
  borderRadius: "4px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};

function Insurance() {
  return (
    <>
      <Head>
        <title>Real Estate Insurance | usacanada.com.br</title>
      </Head>

      <main
        style={{
          padding: "2rem",
          backgroundColor: "#f9f9f9",
          color: "#333",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1 style={{ color: "#cc0000" }}>Real Estate Insurance</h1>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2>Types of Insurance</h2>
          <ul>
            <li>Homeowners Insurance</li>
            <li>Renters Insurance</li>
            <li>Life and Travel Insurance</li>
            <li>RV and Auto Insurance</li>
          </ul>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2>Partners & Providers</h2>
          <p>
            We connect you with top-rated insurance providers operating in
            Florida and Texas:
          </p>
          <div
            style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
          >
            <a
              href="https://www.statefarm.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/statefarm_logo.png"
                alt="State Farm"
                width={120}
                height={40}
                style={{ margin: "0.5rem 1rem" }}
              />
            </a>
            <a
              href="https://www.geico.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/geico_logo.png"
                alt="GEICO"
                width={120}
                height={40}
                style={{ margin: "0.5rem 1rem" }}
              />
            </a>
            <a
              href="https://www.progressive.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/progressive_logo.png"
                alt="Progressive"
                width={120}
                height={40}
                style={{ margin: "0.5rem 1rem" }}
              />
            </a>
            <a
              href="https://www.goodsam.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/goodsam_logo.png"
                alt="Good Sam"
                width={120}
                height={40}
                style={{ margin: "0.5rem 1rem" }}
              />
            </a>
          </div>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2>How It Works</h2>
          <p>
            Whether you're a citizen, investor, or expat, obtaining real
            estate-related insurance in the U.S. usually starts with identifying
            your residency status and property use (personal, rental, etc.).
            Premiums, eligibility, and documentation may vary, but our partners
            can support a wide range of profiles. Expats and international
            investors may be required to provide additional financial or
            identification documents.
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2>FAQ: Key Differences by Profile</h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#eee" }}>
                <th style={tableCellStyle}>Profile</th>
                <th style={tableCellStyle}>Common Requirements</th>
                <th style={tableCellStyle}>Limitations</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tableCellStyle}>
                  U.S. Citizens / Permanent Residents
                </td>
                <td style={tableCellStyle}>
                  Proof of homeownership, ID, basic credit check
                </td>
                <td style={tableCellStyle}>None typical</td>
              </tr>
              <tr>
                <td style={tableCellStyle}>Expats / Non-residents</td>
                <td style={tableCellStyle}>
                  Passport, visa/residency status, international address,
                  sometimes credit report
                </td>
                <td style={tableCellStyle}>
                  Fewer carriers; higher premiums may apply
                </td>
              </tr>
              <tr>
                <td style={tableCellStyle}>Foreign Investors</td>
                <td style={tableCellStyle}>
                  Ownership documents, ID, U.S. tax ID (if any), local agent or
                  lawyer
                </td>
                <td style={tableCellStyle}>May need a U.S. address or proxy</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2>Get a Quote</h2>
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
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              style={inputStyle}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              style={inputStyle}
            />
            <textarea
              name="description"
              rows="4"
              placeholder="Describe your insurance needs..."
              style={inputStyle}
            ></textarea>
            <button
              type="submit"
              style={{
                backgroundColor: "#cc0000",
                color: "white",
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

export default Insurance;
