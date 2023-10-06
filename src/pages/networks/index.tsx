import { FormEvent, useState } from "react";

import { Header } from "../../components/header";
import { Input } from "../../components/input";

import {db} from "../../services/firebaseConection";
import { setDoc, doc, getDoc } from "firebase/firestore";


export function Network(){

    const [gitHub, setGitHub] = useState("");
    const [instagram, setInstagram] = useState("");
    const [linkdin, setLinkdin] = useState("");

    function handleRegister(e: FormEvent){
        e.preventDefault();

        setDoc(doc(db, "social", "link"), {
            gitHub: gitHub,
            instagram: instagram,
            linkdin: linkdin,
        }
        )
        .then(() => {
            console.log("Cadastrados com sucesso!")
        })
        .catch((error) =>{
            console.log("Erro ao salvar!!!" + error)
        })
    }


    return(
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header/>

            <h1 className="text-white text-2xl font-medium mt-8 mb-4">Minhas Redes Sociais</h1>
        
            <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
                <label className="text-white font-medium mt-2 mb-2">
                    Link do GitHub
                </label>
                <Input
                    type="url"
                    placeholder="Digite a URL do facebook"
                    value={gitHub}
                    onChange={ (e) => setGitHub(e.target.value)}
                />

                <label className="text-white font-medium mt-2 mb-2">
                    Link do Instagram
                </label>
                <Input
                    type="url"
                    placeholder="Digite a URL do facebook"
                    value={instagram}
                    onChange={ (e) => setInstagram(e.target.value)}
                />

                <label className="text-white font-medium mt-2 mb-2">
                    Link do Linkdin
                </label>
                <Input
                    type="url"
                    placeholder="Digite a URL do facebook"
                    value={linkdin}
                    onChange={ (e) => setLinkdin(e.target.value)}
                />

                <button type="submit" className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mt-4 mb-7 font-medium">
                    Salvar Links
                </button>



            </form>
        
        
        
        
        
        </div>
    )
}