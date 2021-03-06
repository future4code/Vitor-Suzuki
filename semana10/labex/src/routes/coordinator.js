export const goToAdminHomePage = (history) => {
  history.push("/admin/trips/list");
};

export const goToApplicationFormPage = (history) => {
  history.push("/trips/application");
};

export const goToCreateTripPage = (history) => {
  history.push("/admin/trips/create");
};

export const goToHomePage = (history) => {
  history.push("/");
};

export const goToListTripsPage = (history) => {
  history.push("/trips/list");
};

export const goToLoginPage = (history) => {
  history.push("/login");
};

export const goToTripDetailsPage = (history) => {
  history.push("/admin/trips/:id");
};

export const goToLastPage = (history) => {
  history.goBack();
};