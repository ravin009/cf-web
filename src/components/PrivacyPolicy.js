import React from 'react';

const PrivacyPolicy = () => (
  <section
    id="privacy"
    tabIndex={-1}
    className="privacy-policy section-offset"
    style={{
      padding: '4rem 1rem',
      maxWidth: '900px',
      margin: '0 auto 4rem',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      fontSize: '1.125rem',
      color: '#4b5563',
      lineHeight: '1.7',
    }}
  >
    <h2
      style={{
        fontSize: '2.5rem',
        marginBottom: '2rem',
        fontWeight: '700',
        color: '#1e293b',
        textAlign: 'center',
      }}
    >
      Privacy Policy and User Guidelines
    </h2>

    <ol style={{ paddingLeft: '1.25rem' }}>
      <li style={{ marginBottom: '1rem' }}>
        <strong>Eligibility</strong>
        <br />
        Our chat platform is intended for users aged 18 years and above. By
        registering and using this service, you confirm that you are at least 18
        years old. Users under 18 are strictly prohibited from joining or using
        the platform.
      </li>
      <li style={{ marginBottom: '1rem' }}>
        <strong>Personal Information and Safety</strong>
        <br />
        Your safety and privacy are our top priorities. Please adhere to the
        following guidelines:
        <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
          <li>
            Do not share sensitive personal information (such as your full name,
            address, phone number, financial details) with unknown users.
          </li>
          <li>Be cautious when interacting with strangers. Not everyone may have good intentions.</li>
          <li>Never trust or rely on information from unknown users without verification.</li>
          <li>Do not share passwords or login credentials with anyone.</li>
          <li>Report any suspicious or inappropriate behavior to moderators immediately.</li>
        </ul>
      </li>
      <li style={{ marginBottom: '1rem' }}>
        <strong>User Conduct and Restrictions</strong>
        <br />
        To maintain a safe and respectful environment, the following behaviors are
        strictly prohibited:
        <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
          <li>Abuse and Harassment: Any form of verbal abuse, harassment, bullying, or threatening behavior will not be tolerated.</li>
          <li>Molestation and Sexual Harassment: Any inappropriate sexual advances, messages, or content are strictly forbidden.</li>
          <li>Violence and Hate Speech: Promotion or incitement of violence, hate speech, discrimination, or offensive content is prohibited.</li>
          <li>Impersonation and Fraud: Do not impersonate other users or attempt to deceive others.</li>
          <li>Spam and Advertising: Unsolicited advertising, spamming, or flooding chat rooms is not allowed.</li>
          <li>Sharing Illegal Content: Sharing or promoting illegal activities or content is strictly forbidden.</li>
        </ul>
      </li>
      <li style={{ marginBottom: '1rem' }}>
        <strong>Consequences of Violations</strong>
        <br />
        Violations of the above rules may result in the following actions:
        <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
          <li>Read-Only Mode: Users may be restricted to read-only mode, preventing them from sending messages.</li>
          <li>Temporary or Permanent Ban: Accounts may be suspended or permanently banned depending on the severity of the violation.</li>
          <li>Account Suspension: Repeated or severe violations may lead to account suspension without prior notice.</li>
          <li>Reporting to Authorities: In cases involving illegal activities, we reserve the right to report to relevant law enforcement agencies.</li>
        </ul>
      </li>
      <li style={{ marginBottom: '1rem' }}>
        <strong>User Responsibility</strong>
        <br />
        Users are responsible for their own actions and interactions on the platform.
        We encourage:
        <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
          <li>Respectful and courteous communication.</li>
          <li>Protecting your own privacy and security.</li>
          <li>Using the platform responsibly and ethically.</li>
          <li>Being aware that online relationships may not always reflect real-life intentions. Please do not fall into scams or emotional manipulation.</li>
        </ul>
      </li>
      <li style={{ marginBottom: '1rem' }}>
        <strong>Data Privacy</strong>
        <br />
        We collect and process your data in accordance with applicable data protection
        laws. Your information is stored securely and used only to provide and
        improve our services. We do not share your personal data with third parties
        without your consent, except as required by law.
      </li>
      <li style={{ marginBottom: '1rem' }}>
        <strong>Reporting and Support</strong>
        <br />
        If you encounter any issues, abusive behavior, or security concerns, please
        contact our support team immediately through the app or website. We take
        all reports seriously and will act promptly to investigate and resolve
        issues.
      </li>
      <li style={{ marginBottom: '1rem' }}>
        <strong>Changes to This Policy</strong>
        <br />
        We reserve the right to update these policies and guidelines at any time.
        Users will be notified of significant changes via the app or website.
        Continued use of the platform after changes constitutes acceptance of the
        updated terms.
      </li>
      <li style={{ marginBottom: '1rem' }}>
        <strong>Contact Us</strong>
        <br />
        For any questions or concerns regarding privacy, security, or user conduct,
        please contact us at:{' '}
        <a href="kingravin001@gmail.com" style={{ color: '#2563eb' }}>
          Contact Page
        </a>
      </li>
      <li>
        <strong>Disclaimer</strong>
        <br />
        While we strive to maintain a safe environment, we cannot guarantee the
        behavior of other users. Please exercise caution and use your best judgment
        when interacting on the platform.
      </li>
    </ol>
  </section>
);

export default PrivacyPolicy;
