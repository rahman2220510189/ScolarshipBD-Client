import { Link } from "react-router-dom";

const StudentLoan = () => {
    return (
        <div>
            <div className=" bg-blue-700 text-center p-10">
                <h1 className="text-white text-4xl uppercase mb-5">student Loan  </h1>
                <p className="text-white w-6/12 mx-auto">Scholarship BD offers essential guidance on student loans to help you fund your education. Find trusted loan options from banks and government programs. Learn about eligibility, application steps, and repayment plans. We aim to support every student’s academic journey by making higher education more accessible and affordable </p>
               
            </div>
            <div>
                <h1 className='font-bold mt-20 mb-4'>How Do Student Loans Work? </h1>
                <p className="mb-4">Student loans help to bridge the financial gap between what a student can pay and the cost of attendance at their school of choice. Students typically require loans because their financial aid package falls short of the full cost.</p>
                
                <p className="mb-4" >Generally speaking, student loans are money that is borrowed from the federal government or a private lender in order to make tuition payments while a student is enrolled in school. After graduation, the borrower must pay back the money borrowed – with interest, in some cases.</p>
               <p>When it comes to <Link to='/student-loans'><u className="text-green-500">student loans</u></Link>, students have a variety of options:</p>
                 
            </div>
        </div>
    );
};

export default StudentLoan;
