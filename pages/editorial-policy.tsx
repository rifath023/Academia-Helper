import { InfoPage, orgJsonLd } from '../components/InfoPage';

export default function EditorialPolicy() {
  return (
    <InfoPage
      path="/editorial-policy/"
      title="Editorial Policy | How Academia Helper Writes & Checks Guides"
      description="How Academia Helper researches, writes, reviews and corrects its study guides, and how it uses AI tools."
      h1="Editorial Policy"
      intro="These are the standards for updates to our study resources. Older articles may not yet meet every standard; this page is not a claim that the full archive has been independently reviewed."
      jsonLd={[orgJsonLd]}
    >
      <h2>Sources</h2>
      <p>University policy and grading pages are cited from the institution itself. Research-method guides draw on the original methodological literature (for example Braun and Clarke on thematic analysis). We prefer primary sources and link to them.</p>
      <h2>Review</h2>
      <p>Updates involving university rules should cite the relevant policy and state when it was checked. Publication or modification dates do not guarantee that every linked rule is current. Only name a reviewer when that person actually reviewed the content and agreed to the attribution.</p>
      <h2>Use of AI</h2>
      <p>AI-assisted drafting does not establish accuracy. Tool comparisons should distinguish provider documentation from hands-on testing, link to sources and state limitations. We must not invent tests, screenshots, accuracy scores or reviewer credentials.</p>
      <h2>Affiliate links and independence</h2>
      <p>Some pages contain affiliate links. Check each page&apos;s disclosure before following a commercial recommendation. An affiliate relationship is not evidence that a product was tested.</p>
      <h2>Corrections</h2>
      <p>Report errors via the <a href="/contact/">contact page</a>. Updates should record substantive corrections and their dates.</p>
    </InfoPage>
  );
}
