function convertToSlug(Text) {
  try {
    return Text.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  } catch {
    return "/";
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export { convertToSlug, capitalize, isNumeric };
