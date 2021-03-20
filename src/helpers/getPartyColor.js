import partyNameSlicer from './partyNameSlicer';

export default function getPartyColor(partyName) {
  const partyColor = {
    Accountability: '#CC002C',
    Alliance: '#336600',
    Animal: '#5CA586',
    Bloc: '#0088CE',
    Canada: '#FECE0A',
    Canadian: '#AC2C2C',
    Christian: '#8D0E3B',
    Communist: '#DD0101',
    Conservative: '#002395',
    Democratic: '#2B035C',
    Forces: '#152869',
    Green: '#427730',
    Liberal: '#ED2E38',
    Libertarian: '#F2BA00',
    Marijuana: '#907430',
    'Marxist-Leninist': '#DA251E',
    NDP: '#FF5800',
    Pirate: '#70009F',
    Progressive: '#002FA1',
    Rhinoceros: '#3F2204',
    Seniors: '#FFFFFF',
    The: '#3B3999',
    United: '#CC9900',
    Independent: '#C0C0C0',
};

  return partyColor[partyNameSlicer(partyName)];
}