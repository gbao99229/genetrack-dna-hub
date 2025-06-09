
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  username: string;
  email: string;
  fullName: string;
  phone?: string;
  role?: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo accounts for testing
const demoAccounts = [
  {
    username: "admin",
    password: "admin123",
    userData: {
      id: "1",
      username: "admin",
      email: "admin@dnahealth.vn",
      fullName: "Quản trị viên",
      phone: "0901234567",
      role: "admin"
    }
  },
  {
    username: "staff",
    password: "staff123",
    userData: {
      id: "2",
      username: "staff",
      email: "staff@dnahealth.vn",
      fullName: "Nguyễn Văn B",
      phone: "0901234568",
      role: "staff"
    }
  },
  {
    username: "customer",
    password: "customer123",
    userData: {
      id: "3",
      username: "customer",
      email: "customer@email.com",
      fullName: "Trần Thị C",
      phone: "0901234569",
      role: "customer"
    }
  }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for saved auth token on app start
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('userData');
    
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  const login = async (username: string, password: string) => {
    try {
      // First try demo login
      const demoAccount = demoAccounts.find(
        account => account.username === username && account.password === password
      );

      if (demoAccount) {
        // Demo login successful
        localStorage.setItem('authToken', 'demo-token-' + username);
        localStorage.setItem('userData', JSON.stringify(demoAccount.userData));
        setUser(demoAccount.userData);
        return;
      }

      // If not demo account, try real API
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      
      if (!response.ok) {
        // If API fails, check if it's a network error or 404
        if (response.status === 404) {
          throw new Error('Tài khoản hoặc mật khẩu không đúng');
        }
        throw new Error('Lỗi kết nối server');
      }

      const data = await response.json();
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('userData', JSON.stringify(data.user));
      setUser(data.user);
      
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const register = async (userData: any) => {
    try {
      // For demo purposes, simulate successful registration
      const newUser = {
        id: Date.now().toString(),
        username: userData.username,
        email: userData.email,
        fullName: userData.fullName,
        phone: userData.phone,
        role: 'customer'
      };

      // Try real API first
      try {
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData),
        });
        
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('authToken', data.token);
          localStorage.setItem('userData', JSON.stringify(data.user));
          setUser(data.user);
          return;
        }
      } catch (apiError) {
        console.log('API not available, using demo registration');
      }

      // Fallback to demo registration
      localStorage.setItem('authToken', 'demo-token-' + userData.username);
      localStorage.setItem('userData', JSON.stringify(newUser));
      setUser(newUser);
      
    } catch (error) {
      console.error('Register error:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
