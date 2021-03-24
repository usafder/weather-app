export interface LocationNavigator {
  getCurrentLocation: () => Promise<any>;
}

const locationNavigator: LocationNavigator = {
  getCurrentLocation: () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (location) => resolve(location.coords),
        (error) => reject(error)
      );
    });
  },
};

export default locationNavigator;
