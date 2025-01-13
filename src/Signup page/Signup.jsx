import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prevState) => !prevState);
    };

    const [active, setActive] = useState(false);
    const navigate = useNavigate();

    const handleHomepage = () => {
        navigate('/');
    };

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        Confirmpassword: ""
    });

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData ((prevData) =>({
            ...prevData, 
            [name]: value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        const {username, email, password, Confirmpassword} = formData;

        if(!username, !email, !password, !Confirmpassword){
            alert('all fields are required')
            return;
        }
        if(password.length < 8){
            alert('passwords must at least up to 8 characters');
            return;
        }
        if(password!== Confirmpassword){
            alert('passwords doesnt match');
            return;
        }

        localStorage.setItem("signupData", JSON.stringify(formData));
        alert('Sign up sucessfully')
        navigate('/login')
    }

    return (
        <div className="h-screen w-screen bg-slate-950 flex items-center justify-around flex-col">
            <p className="text-lg text-red-700 text-center font-bold">Signup</p>
            <form className="h-3/4 w-[80%] sm:w-[450px] flex flex-col items-center justify-around bg-slate-700 px-3 py-3 rounded-lg" onSubmit={handleSubmit}>
                <section className="h-14 w-full flex justify-between px-3 bg-red-700 items-center">
                    <article className="h-10 w-[180px] flex flex-col my-0">
                        <p className="text-3xlg"><span className="uppercase text-xl">ss</span>SaintStream</p>
                        <span className="text-xs">Register to enjoy the features</span>
                    </article>
                    <button className="border h-10 w-16 rounded cursor-pointer" onClick={handleHomepage}>close</button>
                </section>
                <input className="h-10 w-full rounded indent-2 outline-none bg-slate-950 text-white"
                    type="text" 
                    name="username" 
                    value={formData.username} 
                    onChange={handleChange} 
                    id="" 
                    placeholder="Username" 
                />
                <input className="h-10 w-full rounded indent-2 outline-none bg-slate-950 text-white" 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    id="" 
                    placeholder="Email" 
                />

                    {/* Password Input */}
                    <div className="h-10 w-full rounded indent-2 outline-none bg-slate-950 flex items-center gap-2">
                        <input
                            className="h-10 w-[90%] bg-transparent indent-2 outline-none text-white"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange} 
                            id="password"
                        />
                        <i
                            className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"} text-white opacity-50 cursor-pointer`}
                            aria-hidden="true"
                            onClick={togglePasswordVisibility}
                        ></i>
                    </div>


                     {/* Confirm Password Input */}
                    <div className="h-10 w-full rounded indent-2 outline-none bg-slate-950 flex items-center gap-2">
                        <input
                            className="h-10 w-[90%] bg-transparent indent-2 outline-none text-white"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            name="Confirmpassword"
                            value={formData.Confirmpassword}
                            onChange={handleChange}
                            id="Confirmpassword"
                        />
                        <i
                            className={`fa ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"} text-white opacity-50 cursor-pointer`}
                            aria-hidden="true"
                            onClick={toggleConfirmPasswordVisibility}
                        ></i>
                    </div>


                <main className="h-10 w-full rounded bg-transparent flex items-center gap-2">
                    <input className="rounded border bg-transparent" type="checkbox" />
                    <p className="text-gray-400 text-sm">I agree to our <a className="text-white font-bold" href="">privacy policy</a> and <a className="text-white font-bold" href="">terms and conditions</a></p>
                </main>
                <button type='submit' className='h-10 w-full rounded indent-2 outline-none bg-white text-black'>Continue</button>
                <p className='text-white text-sm'>Already have an account? <Link to='/Login' className='text-blue-400 cursor-pointer'>Login</Link></p>
            </form>
        </div>
    );
}
