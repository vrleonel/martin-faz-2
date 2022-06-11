import Image from "next/image";

export default function Footer({ children }) {
  return (
    <footer>
      <Image
        src="/gaia-chapeuzinho.png"
        width={212}
        height={350}
        alt="Gaia de chapéuzinho"
      />
      <p>
        © 2022. Feito por Vitor &amp; Tati com carinho para o Martin{' '}
        <span role="img" aria-label="heart">❤️</span>{' '}
        <a href="https://vrleonel.dev">vrleone.dev</a>
      </p>
    </footer>
  )
}