import axios from 'axios';

const API_BASE_URL = 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros';
const AUTHOR_ID = '1723855472';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    authorId: AUTHOR_ID,
  },
});

export const getProducts = async () => {
  try {
    const response = await api.get('/bp/products');
    return response.data;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;
  }
};

export const verifyProductId = (id: string) => api.get(`/bp/products/verification?id=${id}`);
export const createProduct = (product: any) => api.post('/bp/products', product);
export const updateProduct = (product: any) => api.put('/bp/products', product);
export const deleteProduct = (id: string) => api.delete(`/bp/products?id=${id}`);

export default api;
