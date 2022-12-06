import Link from "next/Link"

export default function HomePage() {
  return (
    <div>
        <h1>
            HomePage
        </h1>
        <Link href="/faq" >
            Ir para o FAQ
        </Link>
    </div>
  )
}
