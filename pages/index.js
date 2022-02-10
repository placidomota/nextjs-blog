import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Navegacao from '../components/Navegacao'

export default function Home() {
  return (
    <>
    <Navegacao />
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
      <Link href="/first-post">
        <a>Ir para First-Post</a>
      </Link>
    </Layout>
    </>
  )
}