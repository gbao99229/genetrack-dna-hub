
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Microscope, User, UserCheck, Shield } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const DemoAuth = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { login } = useAuth();

  const demoAccounts = [
    {
      username: "admin",
      password: "admin123",
      role: "Admin",
      description: "Toàn quyền quản lý hệ thống",
      icon: Shield,
      color: "bg-red-100 text-red-700",
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
      role: "Nhân viên",
      description: "Quản lý xét nghiệm và kết quả",
      icon: UserCheck,
      color: "bg-blue-100 text-blue-700",
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
      role: "Khách hàng",
      description: "Đặt lịch và theo dõi kết quả",
      icon: User,
      color: "bg-green-100 text-green-700",
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

  const handleDemoLogin = async (account: typeof demoAccounts[0]) => {
    setLoading(true);
    
    try {
      // Simulate login with demo data
      localStorage.setItem('authToken', 'demo-token-' + account.username);
      localStorage.setItem('userData', JSON.stringify(account.userData));
      
      toast({
        title: "Đăng nhập thành công",
        description: `Chào mừng ${account.userData.fullName} (${account.role})`,
      });
      
      navigate("/dashboard");
    } catch (error: any) {
      toast({
        title: "Lỗi đăng nhập",
        description: error.message || "Có lỗi xảy ra",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <Card className="mb-6">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Microscope className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold">DNA Health - Demo Login</CardTitle>
            <CardDescription>
              Chọn tài khoản mẫu để test các chức năng theo từng vai trò
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          {demoAccounts.map((account, index) => {
            const IconComponent = account.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="w-6 h-6 text-gray-600" />
                  </div>
                  <CardTitle className="text-lg">{account.userData.fullName}</CardTitle>
                  <Badge className={account.color}>
                    {account.role}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600 text-center">
                    {account.description}
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Tài khoản:</span>
                      <span className="font-mono">{account.username}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Mật khẩu:</span>
                      <span className="font-mono">{account.password}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Email:</span>
                      <span className="text-xs">{account.userData.email}</span>
                    </div>
                  </div>

                  <Button 
                    onClick={() => handleDemoLogin(account)}
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600"
                    disabled={loading}
                  >
                    Đăng nhập với {account.role}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-6 text-center">
          <Card className="p-4 bg-yellow-50 border-yellow-200">
            <p className="text-sm text-yellow-800">
              <strong>Lưu ý:</strong> Đây là môi trường demo với dữ liệu mẫu. 
              Tất cả tài khoản và dữ liệu chỉ dùng để test chức năng.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DemoAuth;
