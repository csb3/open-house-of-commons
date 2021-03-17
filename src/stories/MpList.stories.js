import React from 'react';

import MpList from '../components/MpList';
import MpListItem from '../components/MpListItem';

export default {
  title: 'Example/MpList',
  component: MpList,
};

const mps = [
  {
    id: 88292,
    first_name: 'Gudie',
    last_name: 'Hutchings',
    party_name: 'Liberal',
    constituency: 'Long Range Mountains',
    location: 'Newfoundland and Labrador',
    thumbnail: 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/HutchingsGudie_Lib.jpg'
  },
  {
    id: 105614,
    first_name: 'Damien',
    last_name: 'Kurek',
    party_name: 'Conservative',
    constituency: 'Battle River—Crowfoot',
    location: 'Alberta',
    thumbnail: 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/KurekDamien_CPC.jpg'
  },
  {
    id: 88485,
    first_name: 'Gabriel',
    last_name: 'Ste-Marie',
    party_name: 'Bloc Québécois',
    constituency: 'Joliette',
    location: 'Quebec',
    thumbnail: 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/SteMarieGabriel_BQ.jpg'
  },
  {
    id: 96352,
    first_name: 'Mary',
    last_name: 'Ng',
    party_name: 'Green',
    constituency: 'Markham—Thornhill',
    location: 'Ontario',
    thumbnail: 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/NgMary_Lib.jpg'
  },
  {
    id: 88323,
    first_name: 'Darren',
    last_name: 'Fisher',
    party_name: 'Independent',
    constituency: 'Dartmouth—Cole Harbour',
    location: 'OntaNova Scotiario',
    thumbnail: 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/FisherDarren_Lib.jpg'
  },
  {
    id: 88944,
    first_name: 'Terry',
    last_name: 'Sheehan',
    party_name: 'NDP',
    constituency: 'Sault Ste. Marie',
    location: 'Ontario',
    thumbnail: 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/BeechTerry_Lib.jpg'
  }
];

const Template = (args) => <MpList {...args} />;
const SingleTemplate = (args) => <MpListItem {...args} />;

export const Mps = Template.bind({});
Mps.args = {
  mps: mps,
};

export const SingleMp = SingleTemplate.bind({});
SingleMp.args = {
  id: 88292,
  first_name: 'Gudie',
  last_name: 'Hutchings',
  party_name: 'Liberal',
  constituency: 'Long Range Mountains',
  location: 'Newfoundland and Labrador',
  thumbnail: 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/HutchingsGudie_Lib.jpg'
};