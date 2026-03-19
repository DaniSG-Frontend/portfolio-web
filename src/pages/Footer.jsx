import { SFooter, SectionFooterOne, SectionFooterTwo, SubTitleFooter } from "../styles/StyledComponents/Footer"
import { STitleSection } from "../styles/StyledComponents/About"
export default function Footer() {
  return (
    <SFooter>
      <SectionFooterOne>
        <STitleSection>DaniSG.</STitleSection>
        <SubTitleFooter>
          Copia menos, Programa más...
        </SubTitleFooter>
      </SectionFooterOne>

      <SectionFooterTwo>
        <STitleSection footer>
          Services
          <SubTitleFooter sectionTwo>Frontend</SubTitleFooter>
          <SubTitleFooter sectionTwo>Backend</SubTitleFooter>
          <SubTitleFooter sectionTwo>UI & UX</SubTitleFooter>
        </STitleSection>

        <STitleSection footer>
          Contact
          <SubTitleFooter sectionTwo>+53 58863926</SubTitleFooter>
          <SubTitleFooter sectionTwo>Correo</SubTitleFooter>
          <SubTitleFooter sectionTwo>LinkedIn</SubTitleFooter>
        </STitleSection>

        <STitleSection footer>
          Proyects
          <SubTitleFooter sectionTwo>SG Community</SubTitleFooter>
        </STitleSection>

      </SectionFooterTwo>
    </SFooter>
  )
}
