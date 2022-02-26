export default function assetsURL(str) {
  return `${"https://ezbox.falconit.com.pk/"}${String(str).replace("\\", "/")}`;
}
