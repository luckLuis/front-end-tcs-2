export const validateId = (id: string): boolean => {
  return id.length >= 3 && id.length <= 10;
};

export const validateName = (name: string): boolean => {
  return name.length >= 5 && name.length <= 100;
};

export const validateDescription = (description: string): boolean => {
  return description.length >= 10 && description.length <= 200;
};

export const validateLogo = (logo: string): boolean => {
  return !!logo;
};

export const validateReleaseDate = (releaseDate: string): boolean => {
  const currentDate = new Date();
  const productReleaseDate = new Date(releaseDate);
  return productReleaseDate >= currentDate;
};

export const validateRevisionDate = (revisionDate: string, releaseDate: string): boolean => {
  const productReleaseDate = new Date(releaseDate);
  const productRevisionDate = new Date(revisionDate);
  return productRevisionDate.getFullYear() === productReleaseDate.getFullYear() + 1;
};
