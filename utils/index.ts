export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "e75d6789e3msh569e6895b6f398bp103569jsn52b0e428d182",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
