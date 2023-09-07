import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Arvo } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const d = Arvo({
  subsets: ['latin'],
  weight: ['400','700']
})

export default function Home() {
  return (
      <div className = {d.className}>
        <h1 className = "text-3xl text-center">Hello</h1>
      </div>
  )
}
