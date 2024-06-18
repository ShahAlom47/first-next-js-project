"use client"
import axios from "axios";
import React from "react";

const SignUp = () => {
    const handelForm = async(event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        const formData = {
            name,
             email,
              password,
              role:'user',
              date:new Date().toLocaleString()
        };

        try {
            const res = await axios.post(`http://localhost:3000/api/signup/new-user`, formData);
            console.log();
            if(res.data.res.insertedId){

                alert('user Created')
            }
        } catch (error) {
            console.error('Error signing up:', error);
        }
    }

    return (
        <div className="max-w-7xl m-auto">
            <div>
                <h1 className="text-3xl font-bold">
                    Register
                </h1>
            </div>
            <div>
                <form onSubmit={handelForm} className="w-6/12 m-auto">
                    <label className="form-control w-full">
                        <span className="label-text">Name</span>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full">
                        <span className="label-text">Email</span>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full">
                        <span className="label-text">Password</span>
                        <input type="text" name="password" placeholder="Password" className="input input-bordered w-full" />
                    </label>
                    <input type="submit" value="Register" className="btn my-3 input input-bordered w-full" />
                </form>
            </div>
        </div>
    );
};

export default SignUp;
