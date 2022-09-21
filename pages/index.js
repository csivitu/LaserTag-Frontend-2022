import Head from 'next/head'
import AboutLaserTag from '../components/about';
import ContactUs from "../components/ContactUs";
import Hero from '../components/HeroSection';
import PastEvents from '../components/pastEvents';

export default function Home() {
  return (
    <div>
      <Head>
        <title>CSI | Laser Tag 2022</title>
      </Head>
      <main>
        <Hero />
        <AboutLaserTag />
        <PastEvents />
      </main>
      <ContactUs />
    </div>
  )
}
