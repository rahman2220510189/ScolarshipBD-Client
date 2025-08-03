import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

import FindScholarship from "../Pages/FindScholarship/FindScholarship";
import FeaturedScholarship from "../Pages/FeaturedScholarship/FeaturedScholarship";
import ApplyPage from "../Pages/FeaturedScholarship/ApplyPage";
import News from "../Pages/News/News";
import ScholarshipWiner from "../Pages/ScholarshipWiner/ScholarshipWiner";
import StudentLoan from "../Pages/StudentLoan/StudentLoan";
import StudentLoans from "../Pages/StudentLoan/StudentLoans";
import FindInternship from "../Pages/Internship/FindInternship";
import InternshipDetails from "../Pages/Internship/InternshipDetails";
import FeaturedInernship from "../Pages/Internship/FeaturedInernship";
import FeaturedInternshipApply from "../Pages/Internship/FeaturedInternshipApply";
import PartTimeJob from "../Pages/Internship/PartTimeJob";
import JoBDetails from "../Pages/Internship/JoBDEtails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'college-scholarships',
            element:<FindScholarship></FindScholarship>
        },
        {
            path:'featured-scholarship',
           element:<FeaturedScholarship></FeaturedScholarship>,
        }, 
         {
            path:'apply/:companyName',
               element:<ApplyPage></ApplyPage>,
        },
          
  
     
    
        
        {
            path:'/scholarship-news',
            element:<News></News>,
        },
        {
            path:'/scholarship-winner',
            element:<ScholarshipWiner></ScholarshipWiner>
        },
        {
            path:'/student-loan',
            element:<StudentLoan></StudentLoan>,
        },
        {
            path:'student-loans',
            element:<StudentLoans></StudentLoans>,
        },
        {
            path:'find-internship',
            element:<FindInternship></FindInternship>,
        },
        {
            path:'find-internship/:id',
            element:<InternshipDetails></InternshipDetails>,
        },
        {
            path:'featured-internship',
            element:<FeaturedInernship></FeaturedInernship>,
        },
        {
            path:'/apply/:id',
            element:<FeaturedInternshipApply></FeaturedInternshipApply>,
        },
           {
            path:'/job',
            element:<PartTimeJob></PartTimeJob>,
        },
        {
            path:'/job/:id',
            element:<JoBDetails></JoBDetails>,
        },
       
    

       
    ]

},
]);

