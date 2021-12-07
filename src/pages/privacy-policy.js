import * as React from "react";
import MetaTags from "../components/MetaTags";
import Footer from "../components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <>
      <MetaTags title="Privacy - Real Good Touring" />

      <section id="privacy-policy">
        <div class="container">
          <a href="/" class="basic-link">
            Return to Site
          </a>
          <h3>Real Good Touring Privacy Policy</h3>
          <p>Updated 15 April 2021</p>

          <p>
            Real Good Touring knows that you care how information about you is
            used and shared, and we appreciate your trust that we will do so
            carefully and sensibly. We take your privacy seriously. You can
            learn more about our Privacy Policy below. By visiting
            realgoodtouring.com ["the website", "site"], you are consenting to
            the practices described in this Privacy Policy.
          </p>

          <h5>EMAIL NEWSLETTER</h5>

          <p>
            Our website provides the opportunity to sign up to our email
            newsletter. This newletter will only collect entered information
            ["Your Email Address"] if you opt-in. On accepting you will be added
            to our mailing list.{" "}
          </p>

          <p>
            We do not sell or otherwise disclose any portion of our email list
            to third-parties, with the exception of the vendor that provides our
            mailing list services as necessary to distribute the emails.
          </p>

          <p>
            If you join our email list, we retain your email address until you
            ask to be removed. Instructions on how to unsubscribe are contained
            in all messages sent to the email list.
          </p>

          <h5>COOKIES</h5>

          <p>
            This website uses cookies. We use cookies to analyse our traffic.{" "}
          </p>

          <p>
            Cookies are small text files that can be used by websites to make a
            user's experience more efficient.
          </p>

          <p>
            The law states that we can store cookies on your device if they are
            strictly necessary for the operation of this site. For all other
            types of cookies we need your permission.
          </p>

          <p>
            This site uses different types of cookies. Some cookies are placed
            by third party services that appear on our pages.
          </p>

          <p>
            You can at any time change or withdraw your consent by clicking
            here: <a href="javascript:cookieConsent.reset()">Cookie settings</a>
            .
          </p>

          <p>
            If you consent, when you visit our website, we may automatically
            record certain information from your device by using various types
            of technology, including “clear gifs" or APIs. This “automatically
            collected" information may include your IP address or other device
            address or ID, web browser and/or device type, the web pages or
            sites that you visit just before or just after you visit the
            website, the pages or other content you view or otherwise interact
            with on our website, and the dates and times that you visit, access,
            or use our website.{" "}
          </p>

          <p>
            In addition, we have implemented on our website certain Google
            Analytics features. Visitors to our websites may opt out of certain
            types of Google Analytics tracking, customize the Google Display
            Network ads by using the Google Ad Preferences Manager and learn
            more about how Google serves ads by viewing its Customer Ads Help
            Center. If you do not wish to participate in Google Analytics, you
            may also download the Google Analytics opt-out browser add-on.
          </p>

          <h5>YOUR RIGHTS</h5>
          <p>
            If you are a European resident, you have the right to access
            personal information we hold about you and to ask that your personal
            information be corrected, updated, or deleted. If you would like to
            exercise this right, please contact us through the contact
            information below.
          </p>

          <p>
            Additionally, if you are a European resident we note that we are
            processing your information in order to fulfill contracts we might
            have with you, or otherwise to pursue our legitimate business
            interests listed above. Additionally, please note that your
            information will be transferred outside of Europe, including to
            Canada and the United States.
          </p>

          <h5>CHANGES</h5>
          <p>
            We may update this privacy policy from time to time in order to
            reflect, for example, changes to our practices or for other
            operational, legal or regulatory reasons.
          </p>

          <h5>CONTACT US</h5>
          <p>
            For more information about our privacy practices, if you have
            questions, or if you would like to make a complaint, please contact
            us.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default PrivacyPolicyPage;
