
const ScholarshipProvider = () => {
    return (
    <div className='px-4 py-10 bg-gray-100 min-h-screen'>
      <div className='max-w-6xl mx-auto bg-white shadow-md rounded-xl p-8'>
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Scholarship Provider Guidelines
        </h2>

        {/* Introduction */}
        <p className="text-gray-700 mb-6">
          As a leading scholarship database, <strong>Scholarship BD</strong> screens all of the scholarships available on the site and does not charge anything for its services. Scholarships, as well as the websites listing them, must meet the following guidelines in order to be listed on Fastweb.
        </p>

        {/* Scholarship Requirements */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-600 mb-3">Scholarship Requirements</h3>
          <p className="text-gray-700 mb-4">
            If you would like to have your scholarship posted on Fastweb, please ensure that your organization and website meet the following guidelines:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Application does not ask students for a social security number or credit card number.</li>
            <li>Scholarship does not charge a fee to apply or reapply.</li>
            <li>Corporate contact information (address, phone, email) is clearly accessible to students.</li>
            <li>Scholarship does not display ads or competitor scholarships.</li>
            <li>URL must link directly to the specific scholarship page.</li>
            <li>Page must outline eligibility criteria and selection/judging process.</li>
            <li>If listed as non-profit, provider must provide valid 501(c)(3) documentation upon request.</li>
          </ul>
        </section>

        {/* Privacy Policy */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-600 mb-3">Privacy Policy</h3>
          <p className="text-gray-700 mb-4">
            All scholarship submissions must include a privacy policy on each page of the sponsor’s website. Fastweb is committed to protecting student information. Your privacy policy should include:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Organization name, address, and contact information.</li>
            <li>Information about what data is collected and how it is used.</li>
            <li>A section where students can choose to opt-in or opt-out of further communication.</li>
          </ul>
          <p className="text-sm mt-3 italic text-gray-600">
            Note: Submissions without privacy policies will be reviewed, and only posted if all other requirements are met.
          </p>
        </section>

        {/* Submission Requirements */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-600 mb-3">Submission Requirements</h3>

          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Sponsorship Information</h4>
          <p className="text-gray-700 mb-4">
            Please include your organization's mailing address, phone number, contact name, and email address. These are used internally unless specified otherwise. Include your website’s URL. A fax number is helpful but optional.
          </p>

          <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">Scholarship Information</h4>
          <p className="text-gray-700 mb-4">
            Submit all information within the body of the email. Attachments and external links will not be reviewed.
          </p>

          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Name of the scholarship</li>
            <li>Deadline date</li>
            <li>Scholarship URL</li>
            <li>Detailed description</li>
            <li>Value of the scholarship</li>
            <li>Number of scholarships available</li>
            <li>Minimum SAT/ACT and GPA</li>
            <li>Residency Requirement(s)</li>
            <li>School year</li>
            <li>Major</li>
            <li>Required college state</li>
            <li>Required college or university</li>
            <li>Required race or heritage</li>
            <li>Required student activities</li>
            <li>Parental requirements (e.g., union membership, military status)</li>
            <li>U.S. Citizenship</li>
            <li>Specific disabilities (if applicable)</li>
            <li>Religion or religious heritage</li>
            <li>Sports or hobbies</li>
            <li>Gender</li>
            <li>Marital status</li>
          </ul>

          <p className="text-sm mt-3 italic text-gray-600">
            Note: Please include submission preferences like “Only emails will be accepted” or “Send a SASE for further information” to avoid unwanted communication.
          </p>
        </section>

        {/* Submission Email */}
        <section className="bg-blue-50 p-4 border-l-4 border-blue-500 rounded-lg">
          <p className="text-gray-700">
            📧 Submit your scholarship to Fastweb via email at:{" "}
            <a
              href="mailto:rahman22205101894@diu.edu.bd"
              className="text-blue-600 font-medium underline"
            >
              rahman22205101894@diu.edu.bd
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default ScholarshipProvider;