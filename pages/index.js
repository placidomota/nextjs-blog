import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Sou o Plácido, entusista por tecnlogia da Informação</p>
        <p>
          Este é um exemplo de um web site utilizando NextJS{' '}
          <a href="#">siga-me nas redes sociais</a>.)
        </p>
      </section>
      <Link href="/sobre">
        <a>Ir para a página Sobre</a>
      </Link>
    </Layout>
    </>
  )
}