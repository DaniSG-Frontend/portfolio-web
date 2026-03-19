import { SProyect, TitleCardProyect, DescriptionCard } from "../styles/StyledComponents/Proyects"
import { SkillItem, SContainerSkills } from "../styles/StyledComponents/Skills"
export default function CardProyect() {
  return (
    <SProyect>
      <TitleCardProyect>SG Community</TitleCardProyect>
      <DescriptionCard>
        Un blog web donde escribo artículos sobre varios temas como Programación, Noticias y Juegos
      </DescriptionCard>

      <SContainerSkills gap>
        <SkillItem scale colorItem="#0f32a1">React</SkillItem>
        <SkillItem scale colorItem="#09f">Material UI</SkillItem>
        <SkillItem scale colorItem="#f9d8a1">StyledComponents</SkillItem>
      </SContainerSkills>
    </SProyect>
  )
}
