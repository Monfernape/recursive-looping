const zones = [
  {
    id: 12,
    name: "Classroom 13a",
    site: 1,
    type: 0,
    parent: 9,
    geojson: null,
    geoSource: 1,
    createdAt: "2021-11-03T09:57:07.622Z",
    updatedAt: "2021-11-03T09:57:07.622Z",
    devices: 1
  },
  {
    id: 4,
    name: "Classroom 17",
    site: 1,
    type: 0,
    parent: 2,
    geojson: null,
    geoSource: 1,
    createdAt: "2021-11-03T09:57:07.608Z",
    updatedAt: "2021-11-03T09:57:07.608Z",
    devices: 1
  },
  {
    id: 15,
    name: "Classroom 18",
    site: 1,
    type: 0,
    parent: 9,
    geojson: null,
    geoSource: 1,
    createdAt: "2021-11-03T09:57:07.628Z",
    updatedAt: "2021-11-03T09:57:07.628Z",
    devices: 1
  },
  {
    id: 3,
    name: "Classroom 1b",
    site: 1,
    type: 0,
    parent: 2,
    geojson: null,
    geoSource: 1,
    createdAt: "2021-11-03T09:57:07.606Z",
    updatedAt: "2021-11-03T09:57:07.606Z",
    devices: 1
  },
  {
    id: 10,
    name: "Classroom 1e",
    site: 1,
    type: 0,
    parent: 1,
    geojson: null,
    geoSource: 1,
    createdAt: "2021-11-03T09:57:07.618Z",
    updatedAt: "2021-11-03T09:57:07.618Z",
    devices: 1
  },
  {
    id: 6,
    name: "Classroom 3d",
    site: 1,
    type: 0,
    parent: 2,
    geojson: null,
    geoSource: 1,
    createdAt: "2021-11-03T09:57:07.611Z",
    updatedAt: "2021-11-03T09:57:07.611Z",
    devices: 1
  },
  {
    id: 2,
    name: "Classroom 5",
    site: 1,
    type: 0,
    parent: 1,
    geojson: null,
    geoSource: 1,
    createdAt: "2021-11-03T09:57:07.603Z",
    updatedAt: "2021-11-03T09:57:07.603Z",
    devices: 8
  },
  {
    id: 11,
    name: "Classroom 6a",
    site: 1,
    type: 0,
    parent: 9,
    geojson: null,
    geoSource: 1,
    createdAt: "2021-11-03T09:57:07.620Z",
    updatedAt: "2021-11-03T09:57:07.620Z",
    devices: 1
  },
  {
    id: 7,
    name: "Classroom p1",
    site: 1,
    type: 0,
    parent: 2,
    geojson: null,
    geoSource: 1,
    createdAt: "2021-11-03T09:57:07.613Z",
    updatedAt: "2021-11-03T09:57:07.613Z",
    devices: 1
  },
  {
    id: 1,
    name: "Classroom P1C",
    site: 1,
    type: 0,
    parent: null,
    geojson: null,
    geoSource: 1,
    createdAt: "2021-11-03T09:57:07.600Z",
    updatedAt: "2021-11-03T09:57:07.600Z",
    devices: 1
  },
  {
    id: 13,
    name: "Classroom P2D",
    site: 1,
    type: 0,
    parent: 9,
    geojson: null,
    geoSource: 1,
    createdAt: "2021-11-03T09:57:07.624Z",
    updatedAt: "2021-11-03T09:57:07.624Z",
    devices: 1
  },
  {
    id: 8,
    name: "Classroom p6e",
    site: 1,
    type: 0,
    parent: 2,
    geojson: null,
    geoSource: 1,
    createdAt: "2021-11-03T09:57:07.614Z",
    updatedAt: "2021-11-03T09:57:07.614Z",
    devices: 1
  },
  {
    id: 5,
    name: "Classroom P7C",
    site: 1,
    type: 0,
    parent: 2,
    geojson: null,
    geoSource: 1,
    createdAt: "2021-11-03T09:57:07.609Z",
    updatedAt: "2021-11-03T09:57:07.609Z",
    devices: 1
  },
  {
    id: 9,
    name: "Reception",
    site: 1,
    type: 0,
    parent: 1,
    geojson: null,
    geoSource: 1,
    createdAt: "2021-11-03T09:57:07.616Z",
    updatedAt: "2021-11-03T09:57:07.616Z",
    devices: 1
  },
  {
    id: 14,
    name: "Scullery",
    site: 1,
    type: 0,
    parent: 9,
    geojson: null,
    geoSource: 1,
    createdAt: "2021-11-03T09:57:07.626Z",
    updatedAt: "2021-11-23T13:30:10.367Z",
    devices: 1
  }
];

let uniqueZoneIds = [2];

const getZonesByParent = (parentId) => {
  const zoneIds = zones
    .filter((zone) => zone.parent === parentId)
    .map((zone) => zone.id);
  if (zoneIds.length > 0) {
    const zoneIdsNotFetchedYet = zoneIds.filter(
      (zone) => !uniqueZoneIds.includes(zone)
    );
    if (!zoneIdsNotFetchedYet.length) return;
    else
      zoneIdsNotFetchedYet.forEach((zoneId) => {
        uniqueZoneIds = [...new Set([...uniqueZoneIds, zoneId])];
        getZonesByParent(zoneId);
      });
  } else return;
};

getZonesByParent(2);

console.log("Unique Ids", uniqueZoneIds);
