import { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify';
import { AuthContext } from '../provider/AuthProvider';

const SignUp = () => {
    const { signIn } = useContext(AuthContext)
    const [show, setShow] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const from = location.state?.from?.pathname || '/'
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                reset();
                toast('SignUp SuccessFull');
                navigate(from, { replace: true })
            })
            .error(error => {
                toast.error(error.message)
            })
    }

    return (

        <div className="pt-8">
            <div className="relative">
                <img style={{ height: '800px' }} className="w-full" src="https://i.ibb.co/TgGNZht/altumcode-U0t-BTn8-UR8-I-unsplash.jpg" alt="" />
            </div>
            <div style={{ marginTop: '-800px', width: '600px', height: '700px' }} className="SignUp absolute inset-x-0 flex items-center justify-center mx-auto pb-20 pt-10 px-20">
                <div>
                    <div className='ml-8 text-white'>
                        <h1 className='text-4xl font-bold '>SignUp!</h1>
                        <p className='text-xl'>You can SignUp with you social account below</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                name="name"
                                placeholder="Name"
                                className="input rounded-none  border border-gray-300 focus:border-rose-600 w-full"
                            />
                            {errors.name && <span className="text-red-600 text-start">required</span>}
                        </div>
                        <div className="form-control">

                            <input
                                type="email"
                                {...register("email", { required: true })}
                                name="email"
                                placeholder="email"
                                className="input input-bordered mt-5 rounded-none w-full"
                            />
                            {errors.email && <span className="text-red-600 text-start">required</span>}
                        </div>
                   

                        <div className="form-control">

                            <input
                                type="text"
                                {...register("photoURL", { required: true })}
                                placeholder="Photo URL"
                                className="input input-bordered mt-5  rounded-none w-full"
                            />
                            {errors.photoURL && (
                                <span className="text-red-600 text-start">required</span>
                            )}
                        </div>
                        <div className="form-control">

                            <div className="flex items-center justify-between">
                                <input
                                    type={show ? "text" : "password"}
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        pattern:
                                            /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                    })}
                                    placeholder="password"
                                    className="input input-bordered  mt-5 rounded-none w-full"
                                />
                                <span
                                    className="absolute  p-2 cursor-pointer mt-5"
                                    onClick={() => setShow(!show)}
                                    style={{ marginLeft: '500px' }}
                                >
                                    {show ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            </div>
                            {errors.password?.type === "required" && (
                                <p className="text-red-600 text-start">required</p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className="text-red-600">Password must be 6 characters</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className="text-red-600">
                                    Password must have one Uppercase one lower case, one number
                                    and one special character.
                                </p>
                            )}
                        </div>

                        <div className="form-control mt-6 -mb-20">
                            <input style={{ width: '540px', }}
                                className="signUp btn text-black"
                                type="submit"
                                value="Sign Up"
                            />
                        </div>
                    </form>
                    <div className="">
                        <p className="mt-14 ml-9 text-white">
                            An have an account! Please SignUp
                            <Link to="/SignUp" className="hover:underline text-blue-500 ml-2">
                                SignUp
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default SignUp;