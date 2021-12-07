import * as React from "react";
import MetaTags from "../components/MetaTags";
import Layout from "../components/Layout";
import * as styles from "./careers.module.css";

const CareersPage = () => {
  return (
    <Layout className="Careers">
      <MetaTags title="Careers - Real Good Touring" />

      <section id="main" className={styles.main}>
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: "150px" }}>
            Careers
          </p>

          <div className="row" style={{ alignItems: "flex-start" }}>
            <div className={styles.job}>
              <h1>Executive Assistant</h1>
              <p>
                Real Good Touring is the fastest growing touring company in the
                digital creator space. It’s a fast paced and collaborative
                environment with a company culture that stresses teamwork and
                lack of ego.
              </p>
              <p>
                RGT is searching for a highly motivated Executive Assistant for
                an account exec located in Los Angeles, CA. A candidate joining
                RGT will need a deep passion for the Digital Creator space, live
                shows, and touring in general. At RGT, we take pride in our
                "full-service" approach and require that anyone joining our team
                has the drive and hunger to succeed alongside our high-profile
                clientele.
              </p>
              <p>
                The ideal candidate is highly-motivated, able to think on their
                feet, and excels in a fast-paced environment. The candidate has
                exceptional oral and written communication skills and
                understands the communication needs of a busy executive. This
                role will encompass numerous aspects of live touring as well as
                traditional executive assistant job functions. This role may
                require travel with account execs to various functions and
                events.
              </p>
              <p>
                <b>Responsibilities</b>
              </p>
              <ul>
                <li>
                  Manage professional and personal scheduling, including
                  agendas, mail, email, meals and travel arrangements.
                </li>
                <li>
                  Coordinate complex scheduling and extensive calendar
                  management.
                </li>
                <li>
                  Manage, coordinate, and arrange travel and travel-related
                  activities, including hotel booking, transportation, and meal
                  coordination for both the account exec and clients.
                </li>
                <li>
                  Maintain professionalism and strict confidentiality with all
                  materials, and exercise discretion when interfacing with the
                  business
                </li>
                <li>Provide general support to office visitors and guests.</li>
                <li>
                  Stay informed on latest trends revolving around YouTube,
                  Twitch and other new media platforms such as TikTok.
                </li>
                <li>
                  Assist in tracking and processing multiple tours and
                  client/show payments using internal systems.
                </li>
                <li>
                  Support clients and their internal teams on a daily basis.
                </li>
                <li>
                  Assist other coordinators and managers in day-to-day
                  operations.
                </li>
              </ul>

              <p>
                <b>Requirements</b>
              </p>
              <ul>
                <li>
                  Deep knowledge of YouTube from a business and consumer
                  perspective.
                </li>
                <li>1+ years of in a personal or executive assistant role.</li>
                <li>
                  Must be highly proficient with Microsoft Office and Google
                  Suite.
                </li>
                <li>
                  Working knowledge of new media platforms from a business and
                  consumer perspective.
                </li>
                <li>Incredible communication skills, both oral and written.</li>
                <li>Superb teamwork and team management skills.</li>
                <li>
                  Extreme discretion; ability to handle confidential
                  information.
                </li>
                <li>
                  Outstanding organizational skills and the ability to
                  prioritize tasks and manage multiple projects simultaneously.
                </li>
                <li>Eagerness to learn about all facets of the industry</li>
                <li>
                  Must be a self-starter and has a history of taking initiative
                </li>
                <li>Work hour flexibility</li>
              </ul>
            </div>
            <div className={styles.apply}>
              To apply, contact:
              <br />
              <a href="mailto:careers@realgoodtouring.com">
                careers@realgoodtouring.com
              </a>
            </div>
          </div>
          <div className={styles["applyMobile"]}>
            To apply, contact:
            <br />
            <a href="mailto:careers@realgoodtouring.com">
              careers@realgoodtouring.com
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default CareersPage;
