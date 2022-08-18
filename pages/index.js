import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
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
            width={1054}
            height={862} 
            className="image"
            placeholder="blur"
            blurDataURL="data:image/png;base64,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"
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
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1RXR7Q8EED"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
         {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-1RXR7Q8EED');
        `}
        </Script>
    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
