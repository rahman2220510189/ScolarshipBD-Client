import axios from "axios";
import { useEffect, useState } from "react";


const ScholarshipWiner = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
       axios.get('http://localhost:3000/winner')
            .then(res => setItems(res.data))
            .catch(err => console.error(err));
          }, []);
    return (
        <div className="max-w-5xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Scholarship Winners</h1>
            <div className="grid gap-6">
                {
                    items.map(item => (
                        <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
                            <img src={item.photo}
                                alt={item.name}
                                className="w-full md:w-48 h-48 object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none" />

                            <div className="p-4 flex flex-col justify-between">
                                <div>
                                    <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                                    <p className="text-gray-700 mb-1"><strong>State:</strong> {item.state}</p>
                                    <p className="text-gray-700 mb-1"><strong>School:</strong> {item.school}</p>
                                    <p className="text-gray-700 mb-1"><strong>Amount:</strong> ${item.amount.toLocaleString()}</p>
                                </div>
                                <p className="mt-4 italic text-gray-600">💡 "{item.advice}"</p>

                            </div>

                        </div>
                    ))
                }

            </div>


        </div>

    );
};

export default ScholarshipWiner;