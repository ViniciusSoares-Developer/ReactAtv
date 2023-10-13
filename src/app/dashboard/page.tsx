import Image from 'next/image'
import Link from 'next/link'

const nome = 'abc'

export default function Home() {
  return (
    <main>
      <Link href="/">{nome}</Link>
    </main>
  )
}
