import { InfoPage } from '../components/InfoPage';

export default function Privacy() {
  return (
    <InfoPage
      path="/privacy-policy/"
      title="Privacy Policy | Academia Helper"
      description="Information about browser-based tools, external contact channels and privacy enquiries at Academia Helper."
      h1="Privacy Policy"
      intro="Last updated: 8 October 2026."
    >
      <h2>Data we collect</h2>
      <ul>
        <li>Email and WhatsApp messages contain the contact details and information you choose to send. Those services also handle data under their own privacy terms.</li>
        <li>Hosting and external resources may receive connection information such as your IP address and requested URL when your browser loads them.</li>
        <li>Calculator inputs on our tools are processed in your browser and are not sent to us.</li>
      </ul>
      <h2>How we use it</h2>
      <p>Information you send in an enquiry is used to respond to that enquiry. Avoid sending sensitive documents or confidential research data unless the recipient has confirmed how it will be handled.</p>
      <h2>Sharing</h2>
      <p>Links to WhatsApp, email providers and third-party sites take you to services with their own practices. Some article images and fonts are loaded from external providers. The on-page automated chat uses local preset replies; typing there does not send a message to a person. Use the contact links for an enquiry.</p>
      <h2>Retention and your rights</h2>
      <p>For questions about the operator, retention of messages or requests concerning your information, contact <a href="mailto:academiahelp0@gmail.com">academiahelp0@gmail.com</a>. This notice does not specify a verified retention schedule or a complete inventory of hosting-side processing.</p>
      <h2>Cookies</h2>
      <p>The study calculators do not require cookies or store your inputs. External services may have their own cookie and storage practices. Use your browser settings to manage site data and consult the external service&apos;s notice before signing in.</p>
    </InfoPage>
  );
}
