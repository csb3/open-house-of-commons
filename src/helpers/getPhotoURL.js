const urls = {
  'Mel Arnold': 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/ArnoldMel_CPC%20web.jpg',
  'Stéphane Bergeron': 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/BergeronStephane_BQ.jpg',
  'Yves-François Blanchet': 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/BlanchetYvesFrançois_BQ.jpg',
  'Chris d\'Entremont': 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/DentremontChris_CPC.jpg',
  'Fayçal El-Khoury': 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/ElKhouryFayçal_Lib.jpg',
  'Kerry-Lynne Findlay': 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/FindlayKerryLynneD_CPC.jpg',
  'Joël Godin': 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/GodinJoël_CPC.jpg',
  'Ahmed Hussen': 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/HussenAhmedD_Lib.jpg',
  'Dane Lloyd': 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/LloydDane._CPC.jpg',
  'David McGuinty': 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/McGuintyDavidJ_Lib.jpg',
  'Michael McLeod': 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/McLeodMichaelV_Lib.jpg',
  'Jennifer O\'Connell': 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/OConnellJennifer_Lib.jpg',
  'Seamus O\'Regan': 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/OReganSeamus_Lib.jpg',
  'Erin O\'Toole': 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/OTooleErin_CPC.jpg',
  'Louis Plamondon': 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/PlamondonLouis_PQ.jpg',
  'Yasmin Ratansi': 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/RatansiYasmin_Lib.jpg',
  'Michelle Rempel Garner': 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/RempelMichelle_CPC.jpg',
  'Harjit S. Sajjan': 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/SajjanHarjitS_Lib.jpg',
  'Ya\'ara Saks': 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/SaksYaara_Lib.jpg',
  'Ramesh Sangha': 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/SanghaRamesh_Lib.jpg',
  'Judy A. Sgro': 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/SgroJudyA_Lib.jpg',
  'Derek Sloan': 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/SloanDerek_CPC.jpg',
  'Marwan Tabbara': 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/TabbaraMarwan_Lib.jpg',
  'Jody Wilson-Raybould': 'https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/WilsonRaybouldJody_Ind.jpg',
};

export default function getPhotoURL(mp) {
  const mpName = `${mp.first_name} ${mp.last_name}`;

  if (urls[mpName]) {
    return urls[mpName];
  }

  const last_name = mp.last_name.replace(/\s/g, '').replace(/-/g, '').replace(/ë/g, 'e').replace(/ç/g, 'c');
  const first_name = mp.first_name.replace(/-/g, '').replace(/\s/g, '').replace(/ë/g, 'e').replace(/ç/g, 'c');
  
  let party;
    switch (mp.party_name) {
      case "Liberal":
        party = "Lib";
        break;
      case "Conservative":
        party = "CPC";
        break;
      case "Bloc Québécois":
        party = "BQ";
        break;
      case "Green Party":
        party = "GP";
        break;
      default:
        party = mp.party_name;
    }
  
  return `https://www.ourcommons.ca/Content/Parliamentarians/Images/OfficialMPPhotos/43/${last_name.trim()}${first_name.trim()}_${party}.jpg`;
};