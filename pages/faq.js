import Link from 'next/Link'
import React from 'react'

function Title({children}) {
    return(
        <>
            <h1>
                {children}
            </h1>
        </>
    )
}

export default function FAQPage() {
    return(
        <div>
            <Title>Página de FAQ</Title>
            <Link href="/" >
                Voltar para homePage
            </Link>
        </div>
    )
}