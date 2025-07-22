import React, { useState, useEffect } from 'react'
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const Login = () => {

    const { showLogin, setshowLogin, axios, setToken, navigate } = useAppContext()

    const [state, setState] = useState("login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = async (event) => {

        try {

            event.preventDefault();

            const { data } = await axios.post(`/api/user/${state}`,
                { name, email, password }
            )

            if (data.success) {

                navigate('/')

                setToken(data.token)

                localStorage.setItem('token', data.token)

                toast.success(data.message)

                setshowLogin(false)

            } else {

                toast.error(data.message)

            }

        } catch (error) {

        }



    };

    useEffect(() => {

        if (showLogin) {

            document.body.style.overflow = 'hidden';

        } else {

            document.body.style.overflow = 'auto';

        }

        return () => {

            document.body.style.overflow = 'auto';

        };

    }, [showLogin]);

    return (

        <div
            onClick={() => setshowLogin(false)}
            className='fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center
            text-sm text-gray-600 bg-black/50'>

            <form
                onSubmit={onSubmitHandler}
                onClick={(e) => e.stopPropagation()}
                className="flex flex-col gap-5 m-auto items-start p-8 py-10 w-80 sm:w-[352px] 
                rounded-xl shadow-xl border border-green-100 bg-white"
            >

                {/* Title */}

                <p className="text-2xl font-semibold text-center w-full text-green-700">

                    <span className="text-green-700">User </span>

                    {state === "login" ? "Login" : "Sign Up"}

                </p>

                {/* Name (Only for Register) */}

                {state === "register" && (

                    <div className="w-full">

                        <label className="text-sm text-green-700 font-medium">Name</label>

                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            placeholder="Type your name"
                            className="border border-green-100 rounded-md w-full p-2 mt-1 
                            focus:outline-none focus:ring-2 focus:ring-green-300 text-sm"
                            type="text"
                            required
                        />

                    </div>

                )}

                {/* Email */}

                <div className="w-full">

                    <label className="text-sm text-green-700 font-medium">Email</label>

                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="you@example.com"
                        className="border border-green-100 rounded-md w-full p-2 mt-1 
                        focus:outline-none focus:ring-2 focus:ring-green-300 text-sm"
                        type="email"
                        required
                    />

                </div>

                {/* Password */}

                <div className="w-full">

                    <label className="text-sm text-green-700 font-medium">Password</label>

                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="••••••••"
                        className="border border-green-100 rounded-md w-full p-2 mt-1 
                        focus:outline-none focus:ring-2 focus:ring-green-300 text-sm"
                        type="password"
                        required
                    />

                </div>

                {/* Forget Password Link */}

                {state === "login" && (

                    <p className="text-sm text-left w-full text-green-700 
                        hover:underline cursor-pointer">

                        Forgot password?

                    </p>

                )}

                {/* Submit Button */}

                <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 transition-all 
                    text-white w-full py-2 rounded-md font-medium cursor-pointer"
                >

                    {state === "register" ? "Create Account" : "Login"}

                </button>

                {/* Toggle Login/Register */}

                <p className="text-sm text-slate-600">

                    {state === "register" ? "Already have an account?" : "Don't have an account?"}{" "}

                    <span
                        onClick={() => setState(state === "login" ? "register" : "login")}
                        className="text-green-700 cursor-pointer font-medium hover:underline"
                    >

                        Click here

                    </span>

                </p>

            </form>

        </div>

    )

}


export default Login