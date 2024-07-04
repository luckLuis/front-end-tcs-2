import {Product, ProductErrors} from '../types';

export const validateProduct = (product: Product): ProductErrors => {
  const errors: ProductErrors = {};

  if (!product.id || product.id.length < 3 || product.id.length > 10) {
    errors.id = 'El ID es requerido y debe tener entre 3 y 10 caracteres';
  }

  if (!product.name || product.name.length < 5 || product.name.length > 100) {
    errors.name =
      'El nombre es requerido y debe tener entre 5 y 100 caracteres';
  }

  if (
    !product.description ||
    product.description.length < 10 ||
    product.description.length > 200
  ) {
    errors.description =
      'La descripción es requerida y debe tener entre 10 y 200 caracteres';
  }

  if (!product.logo) {
    errors.logo = 'El logo es requerido';
  }

  const releaseDate = new Date(product.releaseDate);
  const currentDate = new Date();
  if (!product.releaseDate || releaseDate < currentDate) {
    errors.releaseDate =
      'La fecha de liberación es requerida y debe ser igual o mayor a la fecha actual';
  }

  if (!product.reviewDate) {
    errors.reviewDate = 'La fecha de revisión es requerida';
  } else {
    const reviewDate = new Date(product.reviewDate);
    const oneYearAfterRelease = new Date(releaseDate);
    oneYearAfterRelease.setFullYear(releaseDate.getFullYear() + 1);

    if (reviewDate.getTime() !== oneYearAfterRelease.getTime()) {
      errors.reviewDate =
        'La fecha de revisión debe ser exactamente un año posterior a la fecha de liberación';
    }
  }

  return errors;
};
