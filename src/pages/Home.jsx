import Header from "../components/Header"
import { Layout } from "../styles/StyledComponents/Layout"
import About from "./About"
import Skills from "./Skills"
import Proyects from "./Proyects"
import Services from "./Services"
import Contact from "./Contact"
import Footer from "./Footer"
import { Animator } from "react-animators"
export default function Home() {


  return (
    <Layout>
      <Animator animationType="fadeIn" duration={500}>
        <Header />
        <About />
        <Skills />
        <Proyects />
        <Services />
        <Contact />
        <Footer />
      </Animator>
    </Layout>


  )
}
