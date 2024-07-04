import axios, {AxiosError} from 'axios';

const API_URL =
  'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros';

export const getFinancialProducts = async (authorId: string) => {
  try {
    const response = await axios.get(`${API_URL}/bp/products`, {
      headers: {
        authorId: authorId,
      },
    });
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error('Error de respuesta:', error.response.data);
        throw new Error('Error al obtener productos financieros');
      } else if (error.request) {
        console.error('No se recibió respuesta:', error.request);
        throw new Error('No se recibió respuesta del servidor');
      } else {
        console.error('Error al configurar la solicitud:', error.message);
        throw new Error('Error de configuración de la solicitud');
      }
    } else {
      console.error('Error desconocido:', error);
      throw new Error('Error desconocido al obtener productos financieros');
    }
  }
};
