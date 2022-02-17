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
          img: '/img/team/Helena.png',
          name: 'Helena Donoso',
          job: 'CHIEF EXECUTIVE OFFICER',
          linkedin: 'https://www.linkedin.com/in/helena-donoso-a46674b0/',
          cofounder: true,
        },
        {
          id: 1,
          img: '/img/team/Nicolas.png',
          name: 'Nicolas Bonnet',
          job: 'CHIEF EXECUTIVE OFFICER',
          linkedin: 'https://www.linkedin.com/in/nibonnet/',
          cofounder: true,
        },
        {
          id: 2,
          img: '/img/team/Austin.png',
          name: 'Austin Davis',
          job: 'Blockchain expert',
          linkedin: 'https://www.linkedin.com/in/austindavis/',
          cofounder: false,
        },
        {
          id: 3,
          img: '/img/team/Austin.png',
          name: 'Austin Davis',
          job: 'Blockchain expert',
          linkedin: 'https://www.linkedin.com/in/austindavis/',
          cofounder: false,
        },
        {
          id: 4,
          img: '/img/team/Helena.png',
          name: 'Helena Donoso',
          job: 'CHIEF EXECUTIVE OFFICER',
          linkedin: 'https://www.linkedin.com/in/helena-donoso-a46674b0/',
          cofounder: true,
        },
        {
          id: 5,
          img: '/img/team/Nicolas.png',
          name: 'Nicolas Bonnet',
          job: 'CHIEF EXECUTIVE OFFICER',
          linkedin: 'https://www.linkedin.com/in/nibonnet/',
          cofounder: true,
        },
        {
          id: 6,
          img: '/img/team/Austin.png',
          name: 'Austin Davis',
          job: 'Blockchain expert',
          linkedin: 'https://www.linkedin.com/in/austindavis/',
          cofounder: false,
        },
        {
          id: 7,
          img: '/img/team/Austin.png',
          name: 'Austin Davis',
          job: 'Blockchain expert',
          linkedin: 'https://www.linkedin.com/in/austindavis/',
          cofounder: false,
        },
      ]}
    />
  )
}
