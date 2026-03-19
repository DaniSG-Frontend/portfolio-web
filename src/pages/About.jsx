import { Section, SdescriptionAbout, STitleSection } from "../styles/StyledComponents/About"
// import { AvatarIcon } from "../components/Icons"
import { Avatar } from "../styles/StyledComponents/Avatar"
import Image from '../assets/images/Avatar2.png'
export default function About() {
  return (
    <Section>
      <STitleSection>About my</STitleSection>
      {/* <Avatar src={Image} /> */}
      <SdescriptionAbout>
        Hola mi nombre es Daniel Alejandro Suárez González,soy un chico que vive en Cuba en la provincia de Las Tunas.</SdescriptionAbout>

      <SdescriptionAbout>
        Hice mi primer Hello World en Java a los 10 años.
        Luego descubri que queria dedicarme a la programación y comenze a estudiar didacticamente desarrollo web
        con la meta de ser un Desarrollador FullStack.
      </SdescriptionAbout>
    </Section>
  )
}
