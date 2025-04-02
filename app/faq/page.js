"use client"

import Footer from "../../components/footer";
import Header from "../../components/header";
import React from "react";
import faqData from "../../data/faq.json";
import { toast, ToastContainer } from "react-toastify";

export default function FAQ() {

    const [openIndex, setOpenIndex] = React.useState(null);
    const [question, setQuestion] = React.useState("")


    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    async function sendQuestion(e) {
        e.preventDefault();
        var data
        try {
            const response = await fetch('/api/faq', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "question": question
                }),
            });

            data = await response.json();
            if (data.success == true) {
                toast.success("Votre question a bien été envoyée !")
            } else {
                toast.error("Une erreur est survenue, nous n'avons pas reçu votre question !")
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données à l\'API :', error);
        }
    }

    const data = faqData.faq;
    return (
        <main className="flex flex-col min-h-screen justify-between items-center bg-white text-black">
            <ToastContainer />
            <Header />
            <h1 className="font-bold text-4xl text-center m-5">
                Les questions les plus posées par la communauté
            </h1>
            {data.map((item, index) => {
                return (
                    <div className="flex flex-col rounded-lg w-full pc:w-2/3 items-center m-5 mx-12 px-2 pc:px-0" onClick={() => toggleQuestion(index)} key={index}>
                        <div className="flex border-b-2 w-full px-2">
                            <h2 className="font-bold text-2xl">
                                {item.question}
                            </h2>
                            <div className="justify-center self-end ml-auto text-3xl">
                                {openIndex === index ? "-" : "+"}
                            </div>
                        </div>

                        <div className={openIndex === index ? "flex mx-5" : "hidden"}>
                            {item.answer}
                        </div>
                    </div>)
            })}

            <div className=" flex flex-col w-full bg-black text-white p-5 space-y-10 py-10 mt-5">
                <div className=" text-xl tablet:text-2xl pc:text-3xl font-bold w-fit pc:mx-[16.5%]">
                    Vous ne trouvez pas votre réponse ? Posez votre question ici !
                </div>
                <form className="flex items-center justify-center pc:mx-[10%]" onSubmit={sendQuestion}>
                    <input type="text" placeholder="Posez votre question ici" className="p-2 rounded-none rounded-l-lg w-4/5 h-[2.5rem] tablet:text-[150%] tablet:h-[3.5rem] text-black focus:outline-none" onChange={(e) => setQuestion(e.target.value)} />
                    <button type="submit" className="bg-white text-black p-2 rounded-r-lg"><img src="/img/faq/envoie.png" className="size-[1.5rem] tablet:size-[2.5rem]" /></button>
                </form>
            </div>
            <Footer />
        </main>
    )
}