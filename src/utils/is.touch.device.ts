export function is_touch_device() {
  if ("ontouchstart" in window || window.TouchEvent) return true;

  const prefixes = ["", "-webkit-", "-moz-", "-o-", "-ms-"];
  const queries = prefixes.map((prefix) => `(${prefix}touch-enabled)`);

  return window.matchMedia(queries.join(",")).matches;
}

export default is_touch_device;
