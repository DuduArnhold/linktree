import {Link} from "react-router-dom";
import {FormEvent,useState} from "react"
import { Input } from "../../components/input";

export function Login(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    function handleSubmit(e: FormEvent){
        e.preventDefault();
        console.log({
            email: email,
            senha: senha,
        })

    }

    return(
        <div className="flex w-full h-screen items-center justify-center flex-col">
            <Link to="/">
                <h1 className=" mt-11 text-white mb-7 font-bold text-5xl">Dev
                <span className=" bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">Link</span>
                </h1>
            </Link>

            <form onSubmit={handleSubmit} className=" w-full max-w-xl flex flex-col px-2">
                <Input
                    placeholder="Digite o seu Email..."
                    type="email"
                    value={email}
                    onChange={ (e) => setEmail(e.target.value) }
                />

                <Input
                    placeholder="************"
                    type="password"
                    value={senha}
                    onChange={ (e) => setSenha(e.target.value) }
                />

                <button className="h-9 bg-blue-600 rounded border-0 text-lg font-medium text-white"
                        type="submit"
                >Acessar</button>
            </form>
        </div>
    )
}