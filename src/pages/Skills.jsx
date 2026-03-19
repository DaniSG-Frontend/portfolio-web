import { Section, STitleSection } from "../styles/StyledComponents/About";
import { SContainerSkills, SkillItem } from "../styles/StyledComponents/Skills";
export default function Skills() {
  return (
    <Section>
      <STitleSection>Skills</STitleSection>

      <SContainerSkills>
        <SkillItem colorItem="orange">HTML</SkillItem>
        <SkillItem colorItem="#0f8ca1">CSS</SkillItem>
        <SkillItem colorItem="#dc2">JavaScript</SkillItem>
        <SkillItem colorItem='#58b6c6' >TailwindCSS</SkillItem>
        <SkillItem colorItem='#143689'>Python</SkillItem>
        <SkillItem colorItem='#58b6c6'>GDScript</SkillItem>
        <SkillItem colorItem='#891467'>Astro</SkillItem>
        <SkillItem colorItem="#0f32a1">ReactJS</SkillItem>
        <SkillItem colorItem="#333">Next JS</SkillItem>
        <SkillItem colorItem="#1e6629">Node JS</SkillItem>
        <SkillItem colorItem="#0a22">Express</SkillItem>
        <SkillItem colorItem="#14441b">MongoDB</SkillItem>
      </SContainerSkills>
    </Section>
  )
}
