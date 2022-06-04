export default function formatData(data) {
  let arr = data.split("/");
  return new Date(arr[2], arr[1], arr[0]).toLocaleDateString("af-ZA");
}