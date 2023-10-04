import { useState, FormEvent } from "react";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { FiTrash } from "react-icons/fi"

import {db} from "../../services/firebaseConection";

import {
    addDoc,
    collection,
    onSnapshot,
    query,
    orderBy,
    doc,
    deleteDoc,

} from "firebase/firestore"

export function Admin(){

    const [nameInput, setNameInput] = useState("")
    const [url, setUrl] = useState("")
    const [textColorInput, setTextColorInput] = useState("#F1F1F1")
    const [bgColorInput, setBgColorInput] = useState("#121212")


    async function handleRegister(e: FormEvent){
        e.preventDefault();

        alert("teste")
    }

    return(
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header/>

            <form className="flex flex-col mt-8 mb-3 w-full max-w-xl" onSubmit={handleRegister}>
                <label className=" text-white font-medium mt-2 mb-2">Nome do Link</label>
                <Input
                placeholder="Digite o nome do link"
                value={nameInput}
                onChange={(e) => {setNameInput(e.target.value)}}
                />


                <label className=" text-white font-medium mt-2 mb-2">URL do Link</label>
                <Input
                type="url"
                placeholder="Digite a URL do link"
                value={url}
                onChange={(e) => {setUrl(e.target.value)}}
                />


                <section className="flex my-4 gap-5">
                    <div className="flex gap-3">
                    <label className=" text-white font-medium mt-2 mb-2">Fundo do Link</label>
                    <input
                        type="color"
                        value={bgColorInput}
                        onChange={(e) => {setBgColorInput(e.target.value)}}
                    />
                    </div>

                    <div className="flex gap-3"> 
                    <label className=" text-white font-medium mt-2 mb-2">Cor do Link</label>
                    <input
                        type="color"
                        value={textColorInput}
                        onChange={(e) => {setTextColorInput(e.target.value)}}
                    />
                    </div>
                </section>

                {nameInput !== '' && (
                <div className="flex items-center justify-center flex-col mb-7 p-1 border-gray-100/25 border rounded-md">
                    <label className=" text-white font-medium mt-2 mb-2">Veja como está ficando</label>
                    <article
                        className="w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-900 rounded px-1 py-3  "
                        style={{marginBottom: 8, marginTop: 8, backgroundColor: bgColorInput}}
                    >
                    <p style={{color: textColorInput}}
                        className="font-medium"
                    >{nameInput}</p>
                    </article>
                </div>
                )}





                <button
                    type="submit"
                    className=" mb-7 bg-blue-600 h-9 rounded-md text-white font-medium
                    gap-4 flex justify-center items-center
                    "
                >Cadastrar</button>




            </form>


            <h2
                className="font-bold text-white mb-4 text-2xl"
            >Meus Links</h2>

            <article className="flex items-center justify-between w-11/12 max-w-xl
                rounded py-3 px-2 mb-2 select-none
            "
                    style={{backgroundColor: "#2563EB", color: "#000"}}
            >
                <p>Canal do Youtube</p>
                <div>
                    <button
                        className="border border-dashed py-1 px-2 rounded"
                    ><FiTrash size={18} color="#FFF"/></button>
                    </div>
            </article>


        </div>
    )
}