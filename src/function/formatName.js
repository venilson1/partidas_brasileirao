export default function formatName(name) {
  return name.replace(" ", "_").normalize('NFD').replace(/[\u0300-\u036f]/g, "")
}
