import { useEffect, useState } from 'react';
import Link from '../src/components/Link';


export default function FAQPage() {

    const[faq,setFaq] = useState([]);

    useEffect(() => {
        const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
        fetch(FAQ_API_URL)
            .then((respostaDoServidor) => {
                return respostaDoServidor.json();
            })
            .then((resposta) => {
                setFaq(resposta);
            })
    }, []);

    return (
        <div>
            <h1>Alura Cases - Páginas de Perguntas FAQ</h1>
            <Link href="/">
                Ir para a home
            </Link>
            <ul>
                {faq.map(({answer, question}) =>(
                <li key={question} >
                    <article>
                        <h2>{question}</h2>
                        <p>{answer}</p>
                    </article>
                </li>
                ))}
            </ul>
        </div>
    )
}