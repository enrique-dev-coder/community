import React from 'react'
import Team from '../Team'
const Advisors = () => {
  return (
    <Team
      sectionTitle="Field of Experts"
      numberOfRows={1}
      numberOfElements={4}
      bottomButton={false}
      members={[
        {
          id: 0,
          img: '/img/team/advisors/Felipe.png',
          name: 'FELIPE CANO',
          job: 'CEO OF GLOBAL CARBON PARKS - CHAIRMAN OF COMMUNITY ELECTRICITY',
          linkedin: 'https://www.linkedin.com/in/felipe-cano-12459224/',
          cofounder: false,
          linkedinButton: true,
        },
        {
          id: 1,
          img: '/img/team/advisors/Craig.png',
          name: 'CRAIG PERKINS',
          job: 'President and Executive Director at The Energy Coalition',
          linkedin: 'https://www.linkedin.com/in/craig-perkins-30584512',
          cofounder: false,
          linkedinButton: true,
        },
        {
          id: 2,
          img: '/img/team/advisors/Sandra.png',
          name: 'SANDRA VELEZ',
          job: 'President & Executive Director at the Energy Coallition',
          linkedin: 'https://www.linkedin.com/in/craig-perkins-30584512',
          cofounder: false,
          linkedinButton: false,
        },
        {
          id: 3,
          img: '/img/team/coreteam/JULIE.png',
          name: 'DR.JULIE ALBRIGHT',
          job: 'DATA CENTER EXPERT',
          linkedin: 'https://www.linkedin.com/in/felipe-cano-12459224',
          cofounder: false,
          linkedinButton: false,
        },
        {
          id: 4,
          img: '/img/team/advisors/ANTHEM.png',
          name: 'ANTHEM HAYEK BLANCHARD',
          job: 'FOUNDER OF HERASOFT BLOCKCHAIN AND CYBERSECURITY EXPERT',
          linkedin: 'https://www.linkedin.com/in/craig-perkins-30584512',
          cofounder: false,
          linkedinButton: false,
        },
        {
          id: 5,
          img: '/img/team/advisors/Diego.png',
          name: 'Diego martinez',
          job: 'Energy System Expert',
          linkedin: 'https://www.linkedin.com/in/helena-donoso-a46674b0/',
          cofounder: false,
        },
        {
          id: 6,
          img: '/img/team/advisors/Mark.png',
          name: 'MARK CHASAN',
          job: 'CORPORATE LAW AND FINANCE EXPERT',
          linkedin: 'https://www.linkedin.com/in/felipe-cano-12459224',
          cofounder: false,
          linkedinButton: false,
        },
        {
          id: 7,
          img: '/img/team/advisors/Brad.png',
          name: 'Brad Albright',
          job: 'Community solar and energy expert',
          linkedin: 'https://www.linkedin.com/in/felipe-cano-12459224',
          cofounder: false,
        },
        {
          id: 8,
          img: '/img/team/advisors/Eduardo.png',
          name: 'Eduardo Munoz',
          job: 'CEO of EV Share and Expert in EV Mobility',
          linkedin: 'https://www.linkedin.com/in/eduardo-javier-munoz-',
          cofounder: false,
          linkedinButton: false,
        },

        {
          id: 9,
          img: '/img/team/advisors/Jose.png',
          name: 'JOSE LORA',
          job: 'TRANSACTIVE ENERGY EXPERT',
          linkedin: 'https://www.linkedin.com/in/felipe-cano-12459224',
          cofounder: false,
          linkedinButton: false,
        },
        {
          id: 10,
          img: '/img/team/coreteam/Willow.png',
          name: 'WILLOW THE MASCOT',
          job: 'OUR FLYING BALL OF ENERGY',
          linkedin: 'https://www.linkedin.com/in/felipe-cano-12459224',
          cofounder: false,
          linkedinButton: false,
        },
        {
          id: 11,
          img: 'img/team/advisors/white.png',
          name: '',
          job: '',
          linkedin: 'https://www.linkedin.com/in/felipe-cano-12459224',
          cofounder: false,
          linkedinButton: false,
        },
      ]}
    />
  )
}

export default Advisors
