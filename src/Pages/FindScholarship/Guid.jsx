
const Guid = () => 
    {
  return (
    <div className="bg-gray-50 text-gray-800">

      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Find the Right Scholarships</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Discover scholarships tailored to your academic goals, background, and interests. No more endless searching — we’ve curated the best opportunities for students worldwide.
        </p>
      </section>

   
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6">🎓 Featured Scholarships</h2>

        <div className="grid md:grid-cols-2 gap-8">
       
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-indigo-700">Global Scholars Program</h3>
            <p className="mt-2">Full tuition for international students pursuing STEM or humanities degrees.</p>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-600">
              <li>Deadline: Nov 15, 2025</li>
              <li>Eligibility: High school seniors</li>
              <li>Benefits: Tuition, mentorship, summer research</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-indigo-700">Women in Tech Scholarship</h3>
            <p className="mt-2">Empowering women in computer science with financial aid and mentorship.</p>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-600">
              <li>Deadline: Jan 10, 2026</li>
              <li>Eligibility: Female undergraduates in tech</li>
              <li>Benefits: $5,000 grant, networking events</li>
            </ul>
          </div>
        </div>
      </section>

 
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6">📝 Application Tips</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Write a personal statement that reflects your values and goals.</li>
            <li>Highlight leadership, volunteer work, or unique experiences.</li>
            <li>Get strong recommendation letters from mentors or teachers.</li>
            <li>Tailor each application to the scholarship’s mission.</li>
            <li>Start early and stay organized with deadlines.</li>
          </ul>
        </div>
      </section>

    
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6">❓ Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">How do I know if I’m eligible?</h4>
              <p className="text-gray-700">Each scholarship has its own criteria. Read carefully and match your profile.</p>
            </div>
            <div>
              <h4 className="font-semibold">Can I apply for multiple scholarships?</h4>
              <p className="text-gray-700">Yes! Apply to as many as you qualify for — it increases your chances.</p>
            </div>
            <div>
              <h4 className="font-semibold">Do I need perfect grades?</h4>
              <p className="text-gray-700">Not always. Many scholarships value leadership, creativity, or financial need.</p>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6">🔗 Useful Resources</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li><a href="https://www.scholarships.com" target="_blank" rel="noopener noreferrer">Scholarships.com</a></li>
            <li><a href="https://www.fastweb.com" target="_blank" rel="noopener noreferrer">Fastweb</a></li>
            <li><a href="https://opportunitydesk.org" target="_blank" rel="noopener noreferrer">Opportunity Desk</a></li>
            <li><a href="https://www.studyabroad.com/scholarships" target="_blank" rel="noopener noreferrer">Study Abroad Scholarships</a></li>
          </ul>
        </div>
      </section>

  
  
    </div>
  );
};

export default Guid;