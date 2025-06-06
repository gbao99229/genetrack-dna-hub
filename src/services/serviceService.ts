
import { apiRequest, API_CONFIG } from '../config/api';

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  category: string;
}

export const serviceService = {
  // Lấy danh sách tất cả dịch vụ
  getAllServices: async (): Promise<Service[]> => {
    return apiRequest(API_CONFIG.ENDPOINTS.SERVICES);
  },

  // Lấy dịch vụ theo ID
  getServiceById: async (id: string): Promise<Service> => {
    return apiRequest(`${API_CONFIG.ENDPOINTS.SERVICES}/${id}`);
  },

  // Lấy dịch vụ theo danh mục
  getServicesByCategory: async (category: string): Promise<Service[]> => {
    return apiRequest(`${API_CONFIG.ENDPOINTS.SERVICES}?category=${category}`);
  },
};
