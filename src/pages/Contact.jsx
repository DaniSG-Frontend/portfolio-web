import { Section, STitleSection } from "../styles/StyledComponents/About"
import { Linked, LinkedContainer, LinkName } from "../styles/StyledComponents/Contact"
import { useState } from "react"
export default function Contact() {
  const [copyCorreo, setCopyCorreo] = useState(false)

  const TextCorreo = 'danidev0902@gmail.com'
  const TextPhone = '+53 58863926'

  const copiarCorreo = async () => {
    try {
      await navigator.clipboard.writeText(TextCorreo);
      setCopyCorreo(true)
      setTimeout(() => setCopyCorreo(false), 2000)
    } catch (err) {
      console.error('Error al copiar: ', err)
    }
  }

  return (
    <Section>
      <STitleSection>Contact</STitleSection>

      <LinkedContainer>
        <LinkName>
          Correo:
          <Linked onClick={copiarCorreo}>{TextCorreo}</Linked>

        </LinkName>
        <LinkName>Phone :
          <Linked >+53 58863926</Linked>
        </LinkName>
      </LinkedContainer>
    </Section>
  )
}
