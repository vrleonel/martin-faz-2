import Image from "next/image";

export default function Footer({ children }) {
  return (
    <header>
      <h1><Image src="/logo.png" width={502} height={322} alt="Segunda Volta ao Sol do Martin"/></h1>
    </header>
  )
}