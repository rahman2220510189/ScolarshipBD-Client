import img from '../../Image/ddd.avif'
import img2 from '../../Image/gggg.jpg'
import img3 from '../../Image/unnamed.png'
import img4 from '../../Image/images (3).jpeg'

const FindScholarship = () => {
    return (
        <div>
      
            <div className="bg-blue-700">

                <h1 className="text-4xl text-center text-gray-950 p-4">College Scholarships and Grants</h1>
            </div>
            <div
                className="bg-cover bg-center bg-fixed  h-[500px] relative  flex items-center justify-center text-center text-white"
                style={{ backgroundImage: `url(${img})` }}
            >

                <div className="absolute inset-0 bg-blue-800 opacity-70"></div>

                <div className="relative z-10 max-w-3xl px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Find the money you need to pay for college with Fastweb.
                    </h1>

                    <p className="inline-block text-white font-medium py-2 px-4 rounded text-lg mb-6">
                        Find unique college scholarships, grants, internships, <br />
                        college tips and more — 100% FREE.
                    </p>
                    <br />

                    <button className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition">
                        FIND SCHOLARSHIPS
                    </button>
                </div>
            </div>
           
            <div className='p-14'>
                <h1 className='text-center mt-5 mb-5 text-2xl'>What are Scholarships?
                </h1>
                <div className='grid  sm:grid-cols-2 gap-8 '>
                    <div>
                        <p className='mb-3 '>Many high school students, parents and current college students are shocked to hear there are thousands upon thousands of college scholarships available to college students in the United States.</p>
                        <p>A scholarship is FREE money (money you will not have to pay back after graduation). It’s not a student loan; scholarships are a gift that does not have to be repaid. As the cost of college continues to rise, applying for scholarships should be a priority for all college-bound students and current college students.</p>
                    </div>
                    <div>
                        <p className='mb-3'>Scholarship money can be used to pay for tuition and fees, but also room and board and the hidden (sometimes forgotten cost) of pricey university textbooks.</p>
                        <p>Uncovering scholarships for college students and college bound students can feel overwhelming. When looking for ways to pay for college, parents and students want to know how to get scholarships for college, how to apply for college scholarships, and how to find college scholarships. The best way to do this is to look through a complete list of college scholarships—even better, <u className='text-blue-600'>let your Fastweb profile find scholarships for you.</u></p>
                    </div>
                </div>


            </div>


            <div className='bg-blue-300'>
         
                <div className='grid sm:grid-cols-3 gap-5 p-10 '>
                <div>
                    <img className='w-28 rounded-full mb-5' src={img3} alt="" />
                    <h2 className='text-gray-800 mb-3 font-bold'> Create Your Profile.</h2>
                    <p >Use your strengths, skills & background to <u className='text-blue-500'>create a profile</u> in less than a minute. Your unique profile will be used to gather the scholarships you should be applying for!

                        <span className='mt-1'>Join for free, create your student profile and match to scholarships you'll love.</span></p>
                </div>
                <div>
                    <img className='w-36  mb-5' src={img2} alt="" />
                    <h2 className='text-gray-800 mb-3 font-bold'>See Your Scholarship Matches. </h2>
                    <p ><u className='text-blue-500'>Merit based</u>, <u className='text-blue-500'>high school or college student</u>  , weird scholarships, minority, by state, grade level, featured scholarships and more...our massive database covers all types scholarships. Easily find the scholarships that match your profile.

                        Login daily to see your matches. From this list you’ll know what scholarships you should apply for first.

                        <span className='mt-1'>Login daily to see your matches. From this list you’ll know what scholarships you should apply for first.</span></p>
                </div>
                <div>
                    <img className='w-24 mb-5' src={img4} alt="" />
                    <h2 className='text-gray-800 mb-3 font-bold'>Apply. Get Money For College!</h2>
                    <p>Scholarship BD  database algorithm is designed to help you <u className='text-blue-500'>find the right scholarships</u> to apply for because your qualities make you an ideal scholarship candidate; they fit you.
                        <span className='mt-1'>Increase your chances of winning by applying early and often!</span></p>
                </div>
            </div>
      </div>


        </div>
    );
};

export default FindScholarship;