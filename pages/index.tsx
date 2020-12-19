import Head from "next/head";
import { NavBar } from "../components/NavBar/index";
import { Section } from "../components/Section/index";
import { Layout } from "../styles/GlobalVariables";
export default function Home() {
  return (
    <Layout id='app'>
      <Head>
        <title>Arch Motorcycle</title>
        <meta property='og:site_name' content='ARCH Motorcycle' />
        <meta property='og:title' content='ARCH Motorcycle' />
        <meta
          name='description'
          content='ARCH Motorcycle creates custom production American motorcycles with a unique blend of performance and meticulous attention to detail.'
        />
        <meta name='twitter:title' content='ARCH Motorcycle' />
        <meta
          name='twitter:image'
          content='http://static1.squarespace.com/static/5ce3ab38bb7872000156109c/t/5cf7727bb625b400013df5e0/1559720574197/1s-hero-1-min.jpg?format=1500w'
        />
        <meta
          name='twitter:description'
          content='ARCH Motorcycle creates custom production American motorcycles with a unique blend of performance and meticulous attention to detail.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/favicon/android-chrome-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicon/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <meta name='msapplication-TileColor' content='#da532c' />
        /favicon
        <meta
          name='msapplication-TileImage'
          content='/favicon/mstile-144x144.png'
        />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <NavBar />
      <Section />
      <style jsx global>
        {`
          html,
          body {
            min-height: 100vh;
            max-width: 100vw;
            font-size: 62.5%;
            font-family: "Poppins", sans-serif;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </Layout>
  );
}
