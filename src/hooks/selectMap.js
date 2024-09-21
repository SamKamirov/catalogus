export const selectMap = (platform, location) => {
  if ((platform.indexOf("iPhone") != -1) || (platform.indexOf("iPad") != -1) || (platform.indexOf("iPod") != -1))
    return `maps://maps.google.com/maps?daddr=<${location.latitude}>,<${location.longitude}>&amp;ll=`;

  return `https://maps.google.com/maps?daddr=<${location.latitude}>,<${location.longitude}>&amp;ll=`;
}
