import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Martin Faz 2</title>
        <meta name="description" content="Segunda volta ao sol do Martin" />
        <link rel="icon" href="/sol-tiny.png" />
      </Head>

      <main className={styles.main}>
        <section>
          <Image alt="Martin e Gaia no carrinho" src="/martin-e-gaia.png" width="1054px" height="862px" />
          <div>
            <h2>Buffet Viva Vida</h2>
            <address>
              Rua Corifeu de Azevedo Marques, xxx
            </address>
            <p>12hr</p>
          </div>
        </section>
        <section>
          <h2>Presentes - Doações</h2>
          <ul>
            <li>
              <h3>Opção 1</h3>
              <p>dados</p>
            </li>
            <li>
              <h3>Opção 2</h3>
              <p>dados</p>
            </li>

          </ul>
        </section>
        <section>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSez7PieTmNJkQK1pbPMxnNhEv5YGk-STBAF1yV1MFiktC-gVA/viewform?embedded=true" 
            width="640"
            height="1124"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
              Carregando…
            </iframe>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
