import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authQueries from "../services/authQueries";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
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
        authQueries.login(aux).then((response) => {
            console.log(response);
            if (response.status == 200) {
                navigate("/");
            }
        });
    }

    return (
        <main className="grow pt-20 flex flex-col gap-5 justify-center items-center">
            <h2 className="text-4xl font-bold">Login</h2>
            <div className="border w-10/12 py-5 flex flex-col items-center h-fit">
                <form
                    onSubmit={handleSubmit}
                    onInput={handleInput}
                    className="w-full text-zinc-950 flex flex-col items-center gap-5 pb-5"
                >
                    <input
                        className="w-10/12 h-10 outline-none rounded-lg ps-5"
                        type="email"
                        placeholder="Email"
                        name="email"
                    />
                    <input
                        className="w-10/12 h-10 outline-none rounded-lg ps-5"
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
                    <input
                        type="submit"
                        className="cursor-pointer bg-white w-60 text-black h-10 rounded-lg font-semibold text-xl"
                        value="Sign In"
                    />
                </form>
                <Link
                    className="flex justify-center items-center bg-white w-60 text-black h-10 rounded-lg font-semibold text-xl"
                    to="/register"
                >
                    Create account
                </Link>
            </div>
        </main>
    );
}

export default Login;