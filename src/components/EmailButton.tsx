"use client";

import React from "react";

const email = "ggmihaylov02@gmail.com";

export function EmailButton() {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard
      ?.writeText(email)
      .then(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2400);
      })
      .catch(() => {
        // The mail link still works when clipboard access is unavailable.
      });
  };

  return (
    <a
      className="button button-light"
      href={`mailto:${email}`}
      onClick={copyEmail}
      aria-label={`Email Galin at ${email}`}
    >
      {copied ? "Email copied" : "Email me"}
      <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
        {copied ? (
          <path d="m4.5 10 3.4 3.4 7.6-7.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </a>
  );
}
