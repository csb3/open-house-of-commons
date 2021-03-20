export default function getOrdinalNumber(number) {
  let lastNum = number.toString().slice(-1);

  if (lastNum == 1) {
    return "st"
  } else if (lastNum == 2) {
    return "nd"
  } else if (lastNum == 3) {
    return "rd"
  } else {
    return "th"
  };
};