import { Section, STitleSection } from "../styles/StyledComponents/About"
import { Service } from "../styles/StyledComponents/Services"
export default function Services() {
  return (
    <Section>
      <STitleSection>Services</STitleSection>
      <ul>
        <Service>Programador web</Service>
        <Service>Desarrollador Frontend</Service>
        <Service>Desarrollador Backend</Service>
        <Service>UI & UX Design</Service>
      </ul>
    </Section>
  )
}
