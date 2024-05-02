const API_URL = "https://restcountries.com/v3.1/all";

export async function getCountries() {
  const res = await fetch(`${API_URL}`);
  const data = await res.json();
  return data;
}
