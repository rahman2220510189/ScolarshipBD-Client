import { HiBadgeCheck } from "react-icons/hi";
import rg from '../../Image/re.jpeg'

const Research = () => {
    return (
        <div className="grid lg:gap-96 md:grid-cols-1 gap-4 ">
           <div>
            <h1 className="text-2xl">
                Scholarship Research Team
            </h1>
            <p className="mt-3 mb-3"> What sets Fastweb apart from other scholarship search sites is our team of researchers. Every scholarship in our database has been researched and vetted by a team of real people.</p>
            <p className="font-bold mb-3"> <HiBadgeCheck className="bg-green-600" />You get your own team of scholarship researchers, zero cost.</p>
            <p className="font-bold mb-3"> <HiBadgeCheck className="bg-green-600" />Each and every scholarship in our huge database has been vetted by a team of real people.</p>
            <p className="font-bold mb-3"> <HiBadgeCheck className="bg-green-600" />Never worry about scholarship scams.</p>
            </div>
            <div>
                <img src={rg} alt="" />
            </div>
        </div>
    );
};

export default Research;