export default function assetsURL(str) {
  return `${process.env.REACT_APP_SERVER_MEDIA_URL}${String(str).replace(
    "\\",
    "/"
  )}`;
}
