import Image from "next/image";

export default function Footer({ children }) {
  return (
    <header>
      <h1><Image src="/logo.png" width={280} height={179} alt="Segunda Volta ao Sol do Martin"/></h1>
    </header>
  )
}