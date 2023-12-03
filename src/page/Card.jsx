import { useEffect, useState } from "react";

const Card = () => {
    const [popular, setPopular] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
               (data,'dddd')
                const itemsName = data.filter(item => item.category === 'ball')
                setPopular(itemsName)
            })
    }, [])
    return (
        <div className="pt-32 bg-slate-200  py-4">
            <div className="text-center mb-16 ">
            </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
                    {
                        popular.map(item => <div key={item._id} className="card card-compact bg-base-100 shadow-xl">
                            <figure><img className="w-full" src={item.image} alt="photo" /></figure>
                            <div className="card-body">
                                <h2 className="card-title"> {}</h2>
                                <p>Location: {item.location}</p>
                                <p>Course: {item.course}</p>
                                <p>Enroll: {item.enroll}</p>
                                <p className="text-semibold text-lg">Instructor: {item.instructor}</p>
                            </div>
                        </div>)
                    }
                </div>
        </div>
    );
};

export default Card;