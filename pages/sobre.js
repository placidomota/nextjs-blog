import Head from "next/head"
import Link from "next/link"
import Layout from "../components/layout"


export default function Sobre() {
    return (
  <>
      <Layout home>
        <Head>
          <title>{}</title>
        </Head>
        <h1>Sobre</h1>
        <Link href="/">
            <button className="btn btn-primary m-3">Página Home</button>
        </Link>
      </Layout>
  </>
    )
  }