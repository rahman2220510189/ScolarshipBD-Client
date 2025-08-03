import img1 from '../../Image/scl.jpg'
import img2 from '../../Image/rrr.avif'

const FirstHome = () => {
    return (
        <div>
            <section>
                       <div className="hero bg-base-200 min-h-screen">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                  src={img1}
                  className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1
              className="text-5xl font-bold text-"
              style={{
                animation: 'floatScale 2s ease-in-out infinite',
              }}
            >
              <span className='text-green-500'>SCHOLARSHIP</span> <span className='text-red-500'>BANGLADESH!</span>
            </h1>
            
   
            <style>
            {`
              @keyframes floatScale {
                0%, 100% { transform: translate(0,0) scale(1); }
                70% { transform: translate(100px, -5px) scale(1.2); }
              }
            `}
            </style>
            
            
                  <p className="py-6">
              <span style={{ color: '#1e90ff' }}>Scholarship BD</span> helps 
              <span style={{ color: '#28a745' }}> Bangladeshi students </span> find local and 
              <span style={{ color: '#ff6347' }}> international scholarships </span> easily. We provide 
              <span style={{ color: '#6f42c1' }}> accurate </span> and 
              <span style={{ color: '#ffc107' }}> updated </span> information to support your education journey. 
              From <span style={{ color: '#20c997' }}>government</span> to 
              <span style={{ color: '#fd7e14' }}> private opportunities</span>, our goal is to make higher education accessible for everyone. 
              Stay connected with us to discover the right 
              <span style={{ color: '#17a2b8' }}>scholarship</span> for your future.
                 
            
            </p>
            
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
            </section>
             <section>
   <div className="bg-blue-200 p-16">
  <div className="bg-white rounded-lg p-4 relative">
    <p className="text-gray-700 mb-4">
        Scholarship BD helps students in Bangladesh find scholarships easily. It gathers many opportunities in one place, so students don’t waste time searching multiple websites.
    </p>
    <p className="text-gray-700 mb-4">
        The platform is simple to use and updates regularly with new scholarships, deadlines, and eligibility information. This keeps students informed and ready to apply on time.


    </p>
    <p className="text-gray-700 mb-4">
        Our mission is to make education affordable and accessible for all. By connecting students with financial aid, Scholarship BD supports dreams and bright futures. Join us today and start your journey toward success!


    </p>
   

 
  </div>
</div>
</section> 
<section className='p-16'>
  
    <div className='grid lg:gap-96  md:grid-cols-2 gap-5 p-4 mt-5 '>
       
        <div>
            <div className='mb-4'>
            <h3 className='text-gray-600 mb-2 font-bold'>How Fastweb works</h3>
            <h1 className='text-black font-extrabold'>Discover the right scholarships <span className='text-blue-500'>for you</span></h1>
        </div>
            <div className="relative w-[900px] max-w-[700px] rounded-2xl overflow-hidden shadow-lg mx-auto">
      {/* Background Image */}
      <img
        src={img2}
        alt="Student"
        className="w-full h-auto mx-auto object-cover"
      />

      {/* New Matches Badge */}
      <div className="absolute top-5 left-10 bg-red-500 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        NEW MATCHES
      </div>

      {/* How You Match Card */}
      <div className="absolute top-5 right-5 bg-white bg-opacity-90 rounded-lg p-4 text-sm shadow-md w-60">
        <h3 className="text-gray-800 font-bold mb-2">How You Match</h3>
        <p className="text-gray-600 text-xs mb-3">Provider Scholarship Criteria:</p>
        <ul className="space-y-1 text-gray-700">
          <li><span className="text-green-600 font-bold">✔</span> GPA</li>
          <li><span className="text-green-600 font-bold">✔</span> MAJOR</li>
          <li><span className="text-green-600 font-bold">✔</span> COLLEGES</li>
          <li><span className="text-green-600 font-bold">✔</span> APPLY YEAR</li>
          <li><span className="text-gray-400">✖</span> SPORTS</li>
          <li><span className="text-gray-400">✖</span> HONORS</li>
        </ul>
      </div>

      {/* You Won Badge */}
      <div className="absolute bottom-5 right-5 bg-green-600 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.105 0-2 .672-2 1.5S10.895 11 12 11s2-.672 2-1.5S13.105 8 12 8zm0 0c0-2-2-2-2-2m0 0c0-2 2-2 2-2m0 0c2 0 2 2 2 2m0 0c0 2-2 2-2 2m0 4c-2 0-2 2-2 2m0 0c0 2 2 2 2 2m0 0c2 0 2-2 2-2m0 0c0-2-2-2-2-2" />
        </svg>
        YOU WON
      </div>
    </div>
        </div>
        <div>
            <div className='mb-3'> 
                <h1 className='text-black font-semibold'>1. Create your profile</h1>
                <p className='text-gray-600'>After signing up, you'll customize your profile by answering a few questions.</p>

            </div>
            <div className="divider"></div>
            <div>
                <h1 className='text-black font-semibold'>2. Get instant scholarship matches</h1>
                <p className='text-gray-600'>Using your unique profile, you'll get a list of scholarships you qualify for based upon your strengths, interests, student activities and skills.</p>
            </div>
            <div className="divider"></div>
            <div>
                <h1 className='text-black font-semibold'>3. Apply. Get money for college!</h1>
                <p className='text-gray-600'>Each time you log in you're greeted with new scholarship matches, and the total value of the scholarships you qualify for! Filter through your list, save those you're interested in and start applying for scholarships.</p>
            </div>
            <div className="divider"></div>

            <button className="btn btn-outline btn-secondary uppercase">join for free</button>
        </div>
    </div>
</section>
        </div>
    );
};

export default FirstHome;