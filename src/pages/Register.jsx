import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import authQueries from '../services/authQueries';

function Register() {

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        country: ""
    });


    function handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        const aux = { ...formData };
        aux[name] = value;
        setFormData(aux);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const aux = { ...formData };
        for (const key in aux) {
            if (!aux[key]) delete aux[key];
        }
        authQueries.register(aux).then((response) => {
            if (response.status == 201) {
                alert("Cuenta creada, puede logear");
                navigate("/login");
            } else {
                alert(response.statusMsg);
            }
        });
    }

    return (
        <main className='grow flex justify-center'>
            <div className='border w-10/12 flex flex-col items-center'>
                <h2>Register</h2>
                <form className='flex flex-col items-center gap-4 py-4 border'
                    onSubmit={handleSubmit}
                    onInput={handleInput}>
                    <input className='w-10/12 h-10 rounded border outline-none' type="text" placeholder='First name' name='first_name' />
                    <input className='w-10/12 h-10 rounded border outline-none' type="text" placeholder='Last name' name='last_name' />
                    <input className='w-10/12 h-10 rounded border outline-none' type="email" placeholder='Email' name='email' />
                    <input className='w-10/12 h-10 rounded border outline-none' type="password" placeholder='Password' name='password' />
                    <select className='w-10/12 h-10 rounded border outline-none' name='country' defaultValue={formData.country}>
                        <option value="Argentina">Argentina</option>
                        <option value="Brazil">Brazil</option>
                    </select>

                    <input type='submit' className='cursor-pointer bg-white w-60 text-black h-10 border rounded font-semibold' value="Submit" />
                </form>
                <Link to="/login" className='cursor-pointer flex justify-center items-center bg-white w-60 text-black h-10 border rounded font-semibold'>Login</Link>
            </div>

        </main>
    )
}

export default Register
