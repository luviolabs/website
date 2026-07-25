import type { Metadata } from "next";
import LegalPage from "../LegalPage";

export const metadata: Metadata = {
  title: "Terms and Conditions | Luvio Labs",
  description: "Luvio Labs Terms and Conditions for using our website and services.",
};

const content = `Terms and Conditions
Effective Date: 23 July 2026
Last Updated: 23 July 2026
Welcome to www.luviolabs.com. These Terms and Conditions govern your use of the Luvio Labs website and services.
By using our website, requesting a quotation, approving a proposal or purchasing our services, you agree to these Terms and Conditions.
1. About Luvio Labs
Luvio Labs (PVT) Ltd. provides technology, digital marketing, design and business consulting services, including:
Website and web application development
Mobile application development
Custom software, CRM, ERP and POS solutions
UI/UX design
Digital marketing and social media management
SEO and paid advertising
Branding, content creation and consulting
2. Service Agreements
Information displayed on our website is general and does not automatically form a binding service agreement.
Project scope, deliverables, prices, timelines, payment terms and responsibilities will normally be confirmed through a quotation, proposal, contract, email or other written agreement.
Where a separate written agreement conflicts with these Terms, the separate agreement will apply to that project.
3. Quotations and Payments
Quotations are valid only for the period stated in the quotation.
Clients must make payments according to the agreed payment schedule. Luvio Labs may require an advance payment before starting work.
Unless otherwise agreed:
Work begins after the required advance payment is received
Final files, source code or system access may be withheld until full payment
Additional work outside the approved scope will be separately quoted
Third-party costs may be charged separately
Applicable taxes and transaction charges may be added
Late payments may result in paused services, delayed delivery or restricted access after reasonable notice.
4. Project Changes and Delays
Changes to an approved project scope may affect the price and delivery timeline.
Clients must provide content, feedback, approvals, access credentials and other required materials on time. Luvio Labs is not responsible for delays caused by missing information, delayed approvals, third-party services or circumstances outside our reasonable control.
Estimated timelines are not guaranteed unless expressly agreed in writing.
5. Cancellation and Refunds
Cancellation and refund terms will be stated in the relevant quotation, proposal or service agreement.
Payments covering completed work, purchased third-party services, reserved resources or approved project stages may not be refundable, subject to applicable law.
Where Luvio Labs cancels a service without completing the agreed work, any refund will be calculated based on work completed and costs already incurred.
6. Client Responsibilities
Clients agree to:
Provide accurate and complete information
Respond to requests and approvals within a reasonable period
Obtain permission to use all supplied text, images, logos, data and materials
Review and approve deliverables before publication
Maintain secure passwords and system access
Use our services lawfully
Comply with advertising, privacy, intellectual-property and industry requirements relevant to their business
The client remains responsible for the accuracy, legality and suitability of materials supplied to Luvio Labs.
7. Intellectual Property
Luvio Labs retains ownership of its:
Pre-existing software, frameworks and templates
Development tools and reusable components
Internal methods, processes and knowledge
Concepts or drafts not selected or paid for
Ownership or licensing of final deliverables will be determined by the relevant project agreement.
Unless otherwise agreed, rights to approved final deliverables are transferred or licensed only after full payment.
Third-party fonts, plugins, stock media, software and platforms remain subject to their respective licence terms.
Luvio Labs may display completed work in its portfolio and marketing materials unless confidentiality requirements or a written agreement prevent this.
8. Website Content
Website content is provided for general information and may be updated without notice.
You may not copy, reproduce, distribute, modify or commercially use our website content, branding, designs or materials without written permission.
You must not attempt to:
Disrupt or damage the website
Introduce malicious software
Gain unauthorised access to systems or data
Misuse contact forms or communication channels
Use the website for unlawful or fraudulent purposes
9. Confidentiality
Both Luvio Labs and the client must reasonably protect confidential information received during a project.
Confidential information may be disclosed where required by law or where necessary to authorised employees, contractors or professional advisers who are subject to confidentiality obligations.
10. Third-Party Services
Our services may use third-party platforms such as hosting providers, payment gateways, advertising networks, analytics tools, social media platforms, plugins and APIs.
These services operate under their own terms, pricing and privacy policies. Luvio Labs is not responsible for third-party outages, policy changes, account restrictions, security incidents or service interruptions outside our reasonable control.
Clients are responsible for third-party subscription and renewal costs unless otherwise agreed.
11. Digital Marketing Results
Luvio Labs does not guarantee specific rankings, sales, leads, engagement, revenue or advertising results.
Marketing performance may be affected by competition, budgets, platform algorithms, customer demand, website performance and other external factors.
We will provide services using reasonable skill and care according to the agreed scope.
12. Warranties and Liability
We aim to provide professional and reliable services. However, websites, software and digital platforms may occasionally experience technical errors, downtime or third-party interruptions.
To the maximum extent permitted by law, Luvio Labs will not be responsible for indirect or consequential losses, including lost profits, lost opportunities, loss of data or business interruption.
Our total liability relating to a service will generally not exceed the amount paid for the affected service, except where liability cannot legally be limited.
Nothing in these Terms excludes rights or remedies that cannot be excluded under applicable law.
13. Indemnity
Clients are responsible for claims or losses arising from unlawful, misleading or unauthorised materials supplied by them, including intellectual-property, privacy or advertising violations.
This does not apply where the issue was directly caused by the negligence or unlawful conduct of Luvio Labs.
14. Suspension and Termination
We may suspend or terminate services where:
Payments remain overdue
These Terms or a project agreement are seriously breached
Services are used unlawfully
Continuing the service creates a security or legal risk
Either party may terminate a service according to the relevant agreement. The client must pay for completed work and committed costs up to the termination date.
15. Privacy
Personal information is handled according to our Privacy Policy. By using our website or services, you acknowledge the collection and processing practices described in that policy.
16. Force Majeure
Neither party will be responsible for delays caused by events beyond reasonable control, including natural disasters, internet or power failures, government actions, public emergencies, platform outages or major cybersecurity incidents.
17. Changes to These Terms
We may update these Terms when our services, business practices or legal requirements change.
Updated Terms will be published on our website with a revised “Last Updated” date. Continued use of the website or services after an update means the revised Terms will apply.
18. Governing Law and Disputes
These Terms are governed by the laws of Sri Lanka.
Both parties should first attempt to resolve disputes through good-faith discussions. Where a dispute cannot be resolved, it may be referred to the courts of Sri Lanka or another dispute-resolution method agreed in writing.
19. Contact Us
Questions about these Terms and Conditions may be directed to:
Luvio Labs (PVT) Ltd.
Registered Address: No. 532/11, Medamandiya, Dadigamuwa, Kaduwela, Sri Lanka
Website: www.luviolabs.com
Email: hello@luviolabs.com
Telephone: +94 76 643 3434
`;

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      lead="These Terms and Conditions explain how Luvio Labs operates, what we expect from our clients, and how our website and services are governed."
      content={content}
      email="hello@luviolabs.com"
      phone="+94 76 643 34 34"
      whatsapp="https://api.whatsapp.com/send/?phone=94766433434&text&type=phone_number&app_absent=0"
      office="NO: 532/1, Medamandiya, Dadigamuwa. Kaduwela"
      socialLinks={[
        { label: "LinkedIn", href: "https://linkedin.com/company/luviolabs", icon: "🔗" },
        { label: "GitHub", href: "https://github.com/luviolabs", icon: "🐱" },
        { label: "Instagram", href: "https://instagram.com/luviolabs", icon: "📸" },
        { label: "WhatsApp", href: "https://api.whatsapp.com/send/?phone=94766433434&text&type=phone_number&app_absent=0", icon: "💬" },
      ]}
    />
  );
}
