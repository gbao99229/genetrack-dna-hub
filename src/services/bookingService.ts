
import { apiRequest, API_CONFIG } from '../config/api';

export interface BookingData {
  serviceType: string;
  collectionType: string;
  fullName: string;
  phone: string;
  email?: string;
  address?: string;
  participantsCount?: number;
  appointmentDate?: string;
  appointmentTime?: string;
  notes?: string;
}

export const bookingService = {
  // Tạo đặt lịch mới
  createBooking: async (bookingData: BookingData) => {
    return apiRequest(API_CONFIG.ENDPOINTS.BOOKINGS, {
      method: 'POST',
      body: JSON.stringify(bookingData),
    });
  },

  // Lấy danh sách đặt lịch của user
  getUserBookings: async () => {
    return apiRequest(API_CONFIG.ENDPOINTS.BOOKINGS);
  },

  // Lấy chi tiết đặt lịch
  getBookingById: async (id: string) => {
    return apiRequest(`${API_CONFIG.ENDPOINTS.BOOKINGS}/${id}`);
  },

  // Cập nhật đặt lịch
  updateBooking: async (id: string, data: Partial<BookingData>) => {
    return apiRequest(`${API_CONFIG.ENDPOINTS.BOOKINGS}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  // Hủy đặt lịch
  cancelBooking: async (id: string) => {
    return apiRequest(`${API_CONFIG.ENDPOINTS.BOOKINGS}/${id}`, {
      method: 'DELETE',
    });
  },
};
