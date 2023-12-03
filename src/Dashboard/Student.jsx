import { useLoaderData } from "react-router-dom";


const Student = () => {
    // const [users] = useUsers();
    // console.log(users)
    const users = useLoaderData();
    return (
        <div className="pt-44">
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>Date</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((item) => <tr key={item._id} className="hover md:text-md">
                                <td>Programming</td>
                                <th><img className="w-8 md:w-20 h-8 md:h-20 bg-cover bg-center rounded" src={item.image} alt="" /></th>
                                <td>{item.name}</td>
                                <td>{item.instructor} Student</td>
                                <td>03-12-2023{item.date}</td>
                              
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Student;