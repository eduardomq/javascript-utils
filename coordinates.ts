export function generateRandomCoordsByBounds(bounds: {minLon, maxLon, minLat, maxLat}, elements: number, precision = 3): number[] {
    const points = [];

    for (let i = 0; i <= elements; i++) {
        let lat = Math.random() * (bounds.maxLat - bounds.minLat) + bounds.minLat;
        let lon = Math.random() * (bounds.maxLon - bounds.minLon) + bounds.minLon;
        lat = +lat.toFixed(precision);
        lon = +lon.toFixed(precision);
        points.push([lon, lat]);
    }

    return points;
}
