const request = (query) => {
  return new Promise((resolve, reject) => {
    fetch(query).then((response) => response.json()).then(resolve).catch(reject);
  });
}

export const getParkingAreas = () => {
  return request("http://opendata.dbbahnpark.info/api/beta/occupancy")
}
