interface Geolocation {
  getCurrentLocation: () => Promise<any>;
}

const geolocation: Geolocation = {
  getCurrentLocation: () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (location) => resolve(location.coords),
        (error) => reject(error)
      );
    });
  },
};

export default geolocation;
