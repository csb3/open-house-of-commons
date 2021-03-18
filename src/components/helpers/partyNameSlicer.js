export default function partyNameSlicer(fullName) {
  let shortName = '';

  for (let i = 0; i < fullName.length; i++) {
    if (fullName[i] === ' ' || fullName[i] === ',') {
      return shortName;
    }
    shortName += fullName[i];
  }

  return shortName;
}