import { useState } from "react";
import { HiBadgeCheck } from "react-icons/hi";
import pic from '../../Image/re.jpeg'
import pic2 from '../../Image/images.jpeg'
import pic3 from '../../Image/images (1).jpeg'
import pic4 from '../../Image/hhhh.jpg'
import { FaBriefcase, FaCalendarAlt, FaGraduationCap, FaNewspaper, FaTag } from "react-icons/fa";

const SecondHome = () => {
    const [tab, setTab] = useState('research')
    return (
        <div>
            <section className='mt-16'>
                <div className='text-center'>
                    <h3 className='text-gray-400 text-2xl mb-4'>What makes Fastweb better?</h3>
                    <h1 className='text-4xl'>Fastweb <span className='text-green-600'>does the work</span> for you</h1>
                </div>
                <div>
                    <div className="flex justify-center gap-10 mt-10">
                        <button onClick={() => setTab('research')} className="btn btn-outline">Research Team</button>
                        <button onClick={() => setTab('matching')} className="btn btn-outline">Matching Algorithm</button>
                        <button onClick={() => setTab('content')} className="btn btn-outline">Content Expert</button>
                    </div>
                    <div>
                        {
                            tab === 'research' && (
                                <div className="flex justify-around mt-3">
                                    <div className="w-6/12">
                                        <h1 className="text-3xl mb-2 font-bold">Scholarship Research Team
                                        </h1>

                                        <p className="mb-2 font-semibold">What sets Fastweb apart from other scholarship search sites is our team of researchers. Every scholarship in our database has been researched and vetted by a team of real people.</p>
                                        <p className="flex items-center gap-2 mb-2">
                                            <HiBadgeCheck className="text-green-600" />
                                            You get your own team of scholarship researchers, zero cost.
                                        </p>

                                        <p className="flex items-center gap-2 mb-2">
                                            <HiBadgeCheck className="text-green-600" />
                                            Each and every scholarship in our huge database has been vetted by a team of real people.
                                        </p>

                                        <p className="flex items-center gap-2 mb-2">
                                            <HiBadgeCheck className="text-green-600" />
                                            Never worry about scholarship scams.
                                        </p>
                                    </div>
                                    <img src={pic} className="rounded-lg" alt="" />
                                </div>

                            )
                        }
                        {
                            tab === 'matching' && (
                                <div className="flex justify-around mt-3">
                                    <div className="w-6/12">
                                        <h1 className="text-3xl mb-2 font-bold">Scholarship Matching Algorithm
                                        </h1>

                                        <p className="mb-2 font-semibold">Skip sifting through hundreds of scholarships, only to find a few you qualify for. Each day our matching algorithm uses your Fastweb profile to filter through and match you to new scholarships you should consider applying for.</p>
                                        <p className="flex items-center gap-2 mb-2">
                                            <HiBadgeCheck className="text-green-600" />
                                            Each time you log into Fastweb you'll be greeted with new scholarships that are a perfect match.
                                        </p>

                                        <p className="flex items-center gap-2 mb-2">
                                            <HiBadgeCheck className="text-green-600" />
                                            Organize your scholarship matches with  to mark what you’ve already applied for and  icons as a reminder to apply for your favorite scholarships.                                        </p>

                                        <p className="flex items-center gap-2 mb-2">
                                            <HiBadgeCheck className="text-green-600" />
                                       Sign up for email reminders of important or large scholarships you shouldn't miss applying for.
                                        </p>
                                    </div>
                                    <img src={pic2} className="rounded-lg" alt="" />
                                </div>

                            )
                        }
                        {
                            tab === 'content' && (
                                <div className="flex justify-around mt-3">
                                    <div className="w-6/12">
                                        <h1 className="text-3xl mb-2 font-bold">Content Experts
                                        </h1>

                                        <p className="mb-2 font-semibold">Our seasoned editorial team has worked in the higher education industry. Coming from first-generation and low-income families, some Fastweb content experts have first-hand experiences related to the struggle to pay for school.</p>
                                        <p className="flex items-center gap-2 mb-2">
                                            <HiBadgeCheck className="text-green-600" />
                                            Our editorial team truly has a passion to ensure students know exactly how to prepare for, succeed in and pay for college, or vocational colleges.
                                        </p>

                                        <p className="flex items-center gap-2 mb-2">
                                            <HiBadgeCheck className="text-green-600" />
                                            Gain insider information; our content experts have a combined 20+ years of working in higher education.
                                            </p>

                                        <p className="flex items-center gap-2 mb-2">
                                            <HiBadgeCheck className="text-green-600" />
                                            Our writers cover a variety of topics related to current high school students, the vocational student, college students and parents.
                                        </p>
                                    </div>
                                    <img src={pic3} className="rounded-lg" alt="" />
                                </div>

                            )
                        }
                    </div>
                </div>



            </section>
            
            <section className="bg-green-700 mt-10 text-white py-16 px-4 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>
          <p className="uppercase font-semibold text-sm mb-3">
            Your FAFSA Information Headquarters
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Don't forget the FAFSA
          </h1>
          <h3 className="text-xl font-bold mb-4">
            Common FAFSA Q&As + FAFSA Tools
          </h3>
          <p className="text-lg text-white/90 mb-6">
            FAFSA amplifies the importance of other financial aid resources like the Free Application for Federal Student Aid (FAFSA). In addition to scholarships, the FAFSA is another key component to help students and their families pay for college or accredited trade schools.
          </p>
          <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded-full hover:bg-green-100 transition">
            GET FAFSA INFO
          </button>
        </div>

        {/* Right Side */}
        <div className="bg-white text-green-700 p-8 rounded-2xl shadow-xl text-center">
          <FaCalendarAlt className="text-6xl mx-auto mb-4" />
          <p className="text-xl font-semibold">
            The FAFSA should be <br /> completed yearly.
          </p>
        </div>
      </div>
    </section>
 <section className="py-16 px-4 md:px-20 bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <div>
          <img
            src={pic4} 
            alt="Smiling Student"
            className="w-full rounded-xl"
          />
        </div>

        {/* Right Content */}
        <div className="grid sm:grid-cols-2 gap-6">

          {/* Card 1 */}
          <div className="bg-white shadow-lg p-6 rounded-xl">
            <FaGraduationCap className="text-3xl bg-green-500 text-white p-2 rounded-md mb-4" />
            <h3 className="font-bold text-lg text-blue-800 mb-2">Scholarships</h3>
            <p className="text-gray-700 text-sm">
              Find the next scholarship you should apply for with personalized recommendations. Access over 1.5 million scholarships.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg p-6 rounded-xl">
            <FaBriefcase className="text-3xl bg-cyan-500 text-white p-2 rounded-md mb-4" />
            <h3 className="font-bold text-lg text-blue-800 mb-2">Internships</h3>
            <p className="text-gray-700 text-sm">
              Find internship opportunities from popular businesses, based on your major and location.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg p-6 rounded-xl">
            <FaTag className="text-3xl bg-yellow-400 text-white p-2 rounded-md mb-4" />
            <h3 className="font-bold text-lg text-blue-800 mb-2">Student Discounts</h3>
            <p className="text-gray-700 text-sm">
              Discover daily deals on tech, software, fitness, and more — only for students!
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-lg p-6 rounded-xl">
            <FaNewspaper className="text-3xl bg-red-400 text-white p-2 rounded-md mb-4" />
            <h3 className="font-bold text-lg text-blue-800 mb-2">Student News</h3>
            <p className="text-gray-700 text-sm">
              Stay updated with the latest in higher-ed, career tips, and more curated by our editorial team.
            </p>
          </div>
          <button className="btn btn-outline btn-secondary uppercase">Sign Up for free</button>

        </div>
      </div>
    </section>
        </div>
    );
};

export default SecondHome;