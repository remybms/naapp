"use client"

import Footer from "../../components/footer";
import Header from "../../components/header";
import React from "react";
import faqData from "../../data/faq.json";

export default function FAQ() {

    const [openIndex, setOpenIndex] = React.useState(null);

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const data = faqData.faq;
    return (
        <main className="flex flex-col min-h-screen justify-between items-center bg-white text-black">
            <Header />
            <h1 className="font-bold text-4xl text-center m-5">
                Les questions les plus posées par la communauté
            </h1>
            {data.map((item, index) => {
                return(
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

            <div className=" flex flex-col w-full bg-black text-white p-5 space-y-5">
                <div className="self-center text-xl tablet:text-2xl pc:text-3xl font-bold w-fit">
                    Vous ne trouvez pas votre réponse ? Posez votre question ici !
                </div>
                <form className="flex items-center justify-center">
                    <input type="text" placeholder="Posez votre question ici" className="p-2 rounded-none rounded-l-lg w-4/5 h-[2.5rem] tablet:text-[1.5rem] tablet:h-[5rem] text-black focus:outline-none" />
                    <button type="submit" className="bg-white text-black p-2 rounded-r-lg"><img src="/img/faq/envoie.png" className="size-[1.5rem] tablet:size-[4rem]" /></button>
                </form>
            </div>
            <Footer />
        </main>
    )
}