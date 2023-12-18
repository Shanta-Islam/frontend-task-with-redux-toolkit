import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/images/paper 1.png'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from 'react-router-dom'
// import { useEffect } from "react";
import { signupSelector, signupUser } from "../../redux/SignUpSlice";
import { useEffect } from "react";
import { clearState } from "../../redux/LoginSlice";



const Signup = () => {
    const { register, handleSubmit }= useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isFetching, isSuccess, isError, errorMessage } = useSelector(
        signupSelector
    );
    const onSubmit = (data) => {
        console.log(data.email, data.password);
        // const email = data.email;
        // const password = data.password;
        dispatch(signupUser(data))
    };
    useEffect(() => {
        return () => {
            dispatch(clearState());
        };
    }, []);

    useEffect(() => {
        if (isError) {
            console.log(errorMessage);
            dispatch(clearState());
        }

        if (isSuccess) {
            dispatch(clearState());
            navigate('/');
        }
    }, [isError, isSuccess]);
    return (
        <div className="mx-auto max-w-screen-lg px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[370px]">
                <form onSubmit={handleSubmit(onSubmit)} className="mb-0 mt-6 space-y-4 rounded-2xl p-4 shadow-lg sm:p-6 lg:p-8">
                    <div className="flex items-center gap-4">
                        <img src={logo} alt="logo" />
                        <p className="text-[#4E5D78] text-[28px] font-bold">Stack</p>
                    </div>
                    <p className="text-xl font-semibold mt-[20px] text-[#404040]">Sign up to join with Stack</p>
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-[#344054]">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                className="w-full rounded-lg border-[#D6BBFB] border p-4 text-sm shadow-sm"
                                placeholder="Enter Email" {...register("email", { required: true })} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-[#344054]">Password</label>
                        <div className="relative">
                            <input
                                type="password"
                                className="w-full rounded-lg border-[#D6BBFB] border p-4  text-sm shadow-sm"
                                placeholder="Enter password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20
                                })} />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="block w-full rounded-lg bg-[#6941C6] px-5 py-3 text-base font-semibold text-white">
                        Sign Up
                    </button>
                    <p className="text-base font-medium text-gray-500 mt-[27px]">
                        Already have an account?
                        <Link to='/login' className="ms-2 text-[#377DFF]">Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup; 