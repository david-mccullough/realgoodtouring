import React, { useState, useEffect } from "react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  //   useEffect(() => {
  //     if (submitted) {
  //       $("#newsletter #form").hide();
  //       $("#newsletter #complete").show();
  //     }
  //   }, []);
  return (
    <section id="newsletter">
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
      ></iframe>
      {!submitted && (
        <div id="form">
          <div className="container">
            <h2>Keep up to date!</h2>
            <p>
              Sign up to learn about news, upcoming tours and updates with us at
              Real Good Touring
            </p>
            <form
              action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScg_yCXjsLdeiWj9gl5EXK2DYQMHsXWGNuqE3g-PeGETE3PxQ/formResponse"
              target="hidden_iframe"
              onSubmit={() => setSubmitted(true)}
              method="POST"
              id="mG61Hd"
            >
              <input
                type="email"
                className="quantumWizTextinputPaperinputInput exportInput"
                jsname="YPqjbf"
                autoComplete="email"
                tabIndex="0"
                aria-label="Your email"
                name="emailAddress"
                required=""
                dir="auto"
                placeholder="Email Address"
                data-initial-dir="auto"
                data-initial-value=""
              />
              <input
                type="hidden"
                name="entry.1403620909_sentinel"
                jsname="DTMEae"
              />
              <label>
                <input
                  type="checkbox"
                  name="entry.1403620909"
                  jsname="ekGZBc"
                  value="I agree"
                  required
                  className="checkbox"
                />
                I would like to join the Real Good Touring newsletter.{" "}
              </label>
              <input type="hidden" name="fvv" value="1" />
              <input
                type="hidden"
                name="draftResponse"
                value='[null,null,"5267610453572426805"]'
              />
              <input type="hidden" name="pageHistory" value="0" />
              <input type="hidden" name="fbzx" value="5267610453572426805" />
              <button type="submit">Sign up</button>
            </form>
          </div>
        </div>
      )}
      {submitted && (
        <div id="complete">
          <div className="container">
            <h2>Keep up to date!</h2>
            <p>Thank you for signing up to the Real Good Touring Newsletter</p>
          </div>
        </div>
      )}
    </section>
  );
}
