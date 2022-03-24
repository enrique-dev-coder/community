import React from 'react'
import Team from '../Team'
const Advisors = () => {
  return (
    <Team
      sectionTitle="Advisors"
      numberOfRows={2}
      numberOfElements={3}
      bottomButton={false}
      members={[
        {
          id: 0,
          img: '/img/team/advisors/Craig.png',
          name: 'CRAIG PERKINS',
          job: 'President and Executive Director at The Energy Coalition',
          linkedin: 'https://www.linkedin.com/in/craig-perkins-30584512',
          cofounder: false,
          linkedinButton: true,
        },
        {
          id: 1,
          img: '/img/team/advisors/Alex.png',
          name: 'ALEX NASCIMIENTO',
          job: 'Blockcahin Expert',
          linkedin: 'https://www.linkedin.com/in/nascimentoalex',
          cofounder: false,
          linkedinButton: true,
        },
        {
          id: 3,
          img: '/img/team/advisors/Felipe.png',
          name: 'FELIPE CANO',
          job: 'President of global carbon parks',
          linkedin: 'https://www.linkedin.com/in/felipe-cano-12459224',
          cofounder: false,
          linkedinButton: true,
        },
        {
          id: 2,
          img: '/img/team/advisors/Brad.png',
          name: 'Brad Albright',
          job: 'Community solar and energy expert',
          linkedin: 'https://www.linkedin.com/in/felipe-cano-12459224',
          cofounder: false,
        },

        {
          id: 4,
          img: '/img/team/advisors/Diego.png',
          name: 'Diego martinez',
          job: 'Energy System Expert',
          linkedin: 'https://www.linkedin.com/in/helena-donoso-a46674b0/',
          cofounder: false,
        },
        {
          id: 5,
          img: '/img/team/advisors/Eduardo.png',
          name: 'Eduardo Munoz',
          job: 'CEO of EV Share and Expert in EV Mobility',
          linkedin: 'https://www.linkedin.com/in/eduardo-javier-munoz-',
          cofounder: false,
          linkedinButton: false,
        },
      ]}
    />
  )
}

export default Advisors
