import React from 'react'
import Team from '../Team'
export const CoreTeam = () => {
  return (
    <Team
      sectionTitle="Core Team"
      numberOfRows={2}
      numberOfElements={4}
      bottomButton={false}
      members={[
        {
          id: 0,
          img: '/img/team/coreteam/Helena.png',
          name: 'Helena Donoso',
          job: 'CHIEF EXECUTIVE OFFICER',
          linkedin: 'https://www.linkedin.com/in/helena-donoso-a46674b0/',
          cofounder: true,
          linkedinButton: true,
        },
        {
          id: 1,
          img: '/img/team/coreteam/Nicolas.png',
          name: 'Nicolas Bonnet',
          job: 'CHIEF EXECUTIVE OFFICER',
          linkedin: 'https://www.linkedin.com/in/nibonnet/',
          cofounder: true,
          linkedinButton: true,
        },
        {
          id: 2,
          img: '/img/team/coreteam/Austin.png',
          name: 'Austin Davis',
          job: 'Blockchain expert',
          linkedin: 'https://www.linkedin.com/in/austindavis/',
          cofounder: false,
          linkedinButton: true,
        },
        {
          id: 3,
          img: '/img/team/coreteam/jenny.png',
          name: 'JENNY ARAGON',
          job: 'FINANCE & ACCOUNTING',
          linkedin: 'https://www.linkedin.com/in/austindavis/',
          cofounder: false,
          linkedinButton: true,
        },
        {
          id: 4,
          img: '/img/team/coreteam/Keyla.png',
          name: 'KEYLA PARLANTE',
          job: 'BRANDING MANAGER',
          linkedin: 'https://www.linkedin.com/in/helena-donoso-a46674b0/',
          cofounder: false,
          linkedinButton: false,
        },
        {
          id: 5,
          img: '/img/team/coreteam/Antonella.png',
          name: 'Antonella Cano',
          job: 'ARCHITECT AND SUSTAINABILITY',
          linkedin: 'https://www.linkedin.com/in/nibonnet/',
          cofounder: false,
          linkedinButton: false,
        },
        {
          id: 6,
          img: '/img/team/coreteam/Constanza.png',
          name: 'Constanza Blondet',
          job: 'Chief engagement officer',
          linkedin: 'https://www.linkedin.com/in/austindavis/',
          cofounder: false,
          linkedinButton: false,
        },
        {
          id: 7,
          img: '/img/team/coreteam/Luis.png',
          name: 'LUIS LALINDE ',
          job: 'BUSINESS DEVELOPMENT MIAMI',
          linkedin: 'https://www.linkedin.com/in/austindavis/',
          cofounder: false,
          linkedinButton: false,
        },
      ]}
    />
  )
}
