export async function getCountriesBySearch(cos) {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/all?fields=${cos}`);
    if (!res.ok) throw new Error("eroooorrrrr");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err.message);
  }
}
