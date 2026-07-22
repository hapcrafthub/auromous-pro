"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function PartnerForm() {
  const [brandName, setBrandName] = useState("");
  const [email, setEmail] = useState("");
  const [requirements, setRequirements] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = `Custom Quote Request - ${brandName}`;
    const body = [
      `Brand Name: ${brandName}`,
      `Email ID: ${email}`,
      "",
      "Requirements:",
      requirements,
    ].join("\n");
    const mailto = `mailto:support@auromous.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    window.location.href = mailto;
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.fieldRow}>
          <div>
            <label htmlFor="brandName" className={styles.label}>
              Brand Name
            </label>
            <input
              id="brandName"
              type="text"
              required
              placeholder="Your brand or company name"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              className={styles.input}
            />
          </div>
          <div>
            <label htmlFor="email" className={styles.label}>
              Email ID
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.fieldFull}>
          <label htmlFor="requirements" className={styles.label}>
            Requirements
          </label>
          <textarea
            id="requirements"
            required
            rows={5}
            placeholder="Tell us about products, quantities, and target market"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            className={styles.textarea}
          />
        </div>

        <div className={styles.submitRow}>
          <button type="submit" className={styles.submitButton}>
            Submit Enquiry
          </button>
        </div>
      </form>

      {submitted && (
        <div className={styles.confirmation}>
          Thank you — our team will get back to you with your custom quote shortly.
        </div>
      )}
    </>
  );
}
