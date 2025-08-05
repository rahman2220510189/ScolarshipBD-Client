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
import ScholarshipProvider from "../Pages/ScholarshipProvider/ScholarshipProvider";
import ProfileForm from "../Pages/FindScholarship/ProfileForm";
import SchoolForm from "../Pages/FindScholarship/SchoolForm";
import Guid from "../Pages/FindScholarship/Guid";
import LogIn from "../Pages/Login/LogIn";
import SignUp from "../Pages/Login/SignUp";
import PrivateRoute from "./PrivateRoute";


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
               element:<PrivateRoute><ApplyPage></ApplyPage></PrivateRoute>,
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
            element:<PrivateRoute><StudentLoans></StudentLoans></PrivateRoute>,
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
            element:<PrivateRoute><FeaturedInternshipApply></FeaturedInternshipApply></PrivateRoute>,
        },
           {
            path:'/job',
            element:<PartTimeJob></PartTimeJob>,
        },
        {
            path:'/job/:id',
            element:<PrivateRoute><JoBDetails></JoBDetails></PrivateRoute>,
        },
        {
            path:'/scholarship-providers',
            element: <ScholarshipProvider></ScholarshipProvider>,
        },
        {
            path:'profile',
            element:<PrivateRoute><ProfileForm></ProfileForm></PrivateRoute>,
        },
        {
           path:'match',
           element:<PrivateRoute><SchoolForm></SchoolForm></PrivateRoute>,

        },
        {
            path:'guid',
            element:<PrivateRoute><Guid></Guid></PrivateRoute>,
        },
        {
            path:'login',
            element:<LogIn></LogIn>,
        },
        {
        path: 'signup',
        element:<SignUp></SignUp>,
        },
       
    

       
    ]

},
]);

