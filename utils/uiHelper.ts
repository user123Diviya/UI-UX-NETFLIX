export async function getStyle(element, property) {
  return await element.evaluate((el, prop) =>
    window.getComputedStyle(el).getPropertyValue(prop),
    property
  );
}
