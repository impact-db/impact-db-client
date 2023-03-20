function isLocalhost() {
  return location.hostname === "localhost" || location.hostname === "127.0.0.1";
}

function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

export { isLocalhost, round };
