import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Martin Faz 2</title>
        <meta name="title" content="Martin Faz 2" />
        <meta name="description" content="Segunda volta ao sol do Martin" />
        <meta property="og:image" content="/sol-tiny.png" />
        <meta property="og:title" content="Martin Faz 2" />
        <meta property="og:description" content="Segunda volta ao sol do Martin" />
        <link rel="icon" href="/sol-tiny.png" />
      </Head>
      
      <main className={styles.main}>
        <section className="info">
          <Image
            alt="Martin e Gaia no carrinho"
            src="/martin-e-gaia.png"
            width="1054px"
            height="862px" 
            className="image"
          />
          <a href="https://goo.gl/maps/eXtTwN69zkQMEuA89" className="card">
            <h2>21.08 - 12hr</h2>
            <h3>Buffet Viva Vida</h3>
            <address>
              Av. Corifeu de Azevedo Marques, 161
            </address>
            
          </a>
        </section>
        <section className="donate">
          <h2>Presentes e doações</h2>
          <article>
            <p>
              Chegou a hora de comemorar os 2 anos do Martin e contamos com sua presença nesse momento.
            </p>
            <p>
              Pedimos que o presente que você compraria para o Martin seja revertido em uma doação.
            </p>
            <p>
              Juntos vamos celebrar a vida do Martin e ajudar duas instituições de amigos que precisam da sua ajuda para 
              continuar ajudando famílias e pets.
            </p>
            <p>
              As doações podem ser feitas via pix, comprando uma cesta básica no site, ou levando no dia do aniversário uma cesta básica ou pacote ração.
            </p>
            <p>
              Para conhecer mais o trabalho desses parceiros acesse os perfis no Instagram:
            </p>
          </article>
          <ul className="donate-list">
            <li className="card">
              <h3>Projeto Corrente do Bem</h3>
              <a href="https://www.instagram.com/projetocorrente_bem/" rel="noreferrer noopener" target="_blank">
                <Image src="/corrente-do-bem-logo.jpeg" alt="Corrente do Bem" width={150} height={150} />
                <p>@projetocorrente_bem</p>
              </a>
              <h4>Como doar:</h4>
              <ol>
                <li>Acessar a loja das Cestas Básicas:<br /><a href="https://lojacvscesta.com.br/" target="_blank" rel="noreferrer">https://lojacvscesta.com.br</a></li>
                <li>Comprar e entregar no endereço:
                <address>R. Domingos Luís Grou, 81 - Jardim Piracuama, São Paulo - SP, 05763-320</address></li>
              </ol>
              
            </li>
            <li className="card">
              <h3>Irmandade Animal</h3>
              <a href="https://www.instagram.com/irmandadeanimal/" rel="noreferrer noopener" target="_blank">
                <Image src="/irmandade-logo.jpeg" alt="Irmandade Animal" width={150} height={150} />
                <p>@irmandadeanimal</p>
              </a>
              <h4>Como doar:</h4>
              <p>Chave Pix: adaelsonlive@gmail.com</p>
            </li>

          </ul>
        </section>
        <section className="form">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSez7PieTmNJkQK1pbPMxnNhEv5YGk-STBAF1yV1MFiktC-gVA/viewform?embedded=true" 
            width="640"
            height="1124"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className="form-google"
          >
              Carregando…
            </iframe>
        </section>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
