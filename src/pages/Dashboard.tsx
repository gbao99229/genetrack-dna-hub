
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Calendar, 
  TestTube, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Package,
  Truck,
  Microscope,
  FileText,
  User,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const testResults = [
    {
      id: "DNA001",
      service: "Xét nghiệm huyết thống dân sự",
      date: "15/11/2024",
      status: "completed",
      progress: 100,
      participants: ["Nguyễn Văn A", "Nguyễn Thị B"],
      result: "Có quan hệ huyết thống (99.99%)"
    },
    {
      id: "DNA002", 
      service: "Xét nghiệm tiền hôn nhân",
      date: "20/11/2024",
      status: "processing",
      progress: 75,
      participants: ["Trần Văn C", "Lê Thị D"],
      result: "Đang xử lý..."
    },
    {
      id: "DNA003",
      service: "Xét nghiệm huyết thống hành chính", 
      date: "25/11/2024",
      status: "sample-collection",
      progress: 25,
      participants: ["Phạm Văn E", "Võ Thị F"],
      result: "Chờ thu mẫu"
    }
  ];

  const processSteps = [
    { step: 1, title: "Đặt hẹn", icon: Calendar, completed: true },
    { step: 2, title: "Thu mẫu", icon: TestTube, completed: true },
    { step: 3, title: "Vận chuyển", icon: Truck, completed: true },
    { step: 4, title: "Xét nghiệm", icon: Microscope, completed: false, current: true },
    { step: 5, title: "Kết quả", icon: FileText, completed: false }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-700";
      case "processing": return "bg-blue-100 text-blue-700";
      case "sample-collection": return "bg-orange-100 text-orange-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed": return "Hoàn thành";
      case "processing": return "Đang xử lý";
      case "sample-collection": return "Thu mẫu";
      default: return "Chờ xử lý";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Dashboard quản lý xét nghiệm
            </h1>
            <p className="text-gray-600">
              Theo dõi tiến độ và quản lý các dịch vụ xét nghiệm của bạn
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Tổng quan</TabsTrigger>
              <TabsTrigger value="tests">Xét nghiệm</TabsTrigger>
              <TabsTrigger value="results">Kết quả</TabsTrigger>
              <TabsTrigger value="profile">Hồ sơ</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {/* Stats Cards */}
              <div className="grid md:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2">
                      <TestTube className="w-8 h-8 text-blue-600" />
                      <div>
                        <p className="text-2xl font-bold text-gray-900">3</p>
                        <p className="text-sm text-gray-600">Tổng xét nghiệm</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                      <div>
                        <p className="text-2xl font-bold text-gray-900">1</p>
                        <p className="text-sm text-gray-600">Đã hoàn thành</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-8 h-8 text-orange-600" />
                      <div>
                        <p className="text-2xl font-bold text-gray-900">2</p>
                        <p className="text-sm text-gray-600">Đang xử lý</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="w-8 h-8 text-red-600" />
                      <div>
                        <p className="text-2xl font-bold text-gray-900">0</p>
                        <p className="text-sm text-gray-600">Cần chú ý</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activities */}
              <Card>
                <CardHeader>
                  <CardTitle>Hoạt động gần đây</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {testResults.slice(0, 3).map((test) => (
                      <div key={test.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <TestTube className="w-10 h-10 text-blue-600" />
                          <div>
                            <h4 className="font-medium text-gray-900">{test.service}</h4>
                            <p className="text-sm text-gray-600">Mã: {test.id} • {test.date}</p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(test.status)}>
                          {getStatusText(test.status)}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tests Tab */}
            <TabsContent value="tests" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Danh sách xét nghiệm</h2>
                <Button className="bg-gradient-to-r from-blue-600 to-green-600">
                  Đặt xét nghiệm mới
                </Button>
              </div>

              <div className="grid gap-6">
                {testResults.map((test) => (
                  <Card key={test.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{test.service}</CardTitle>
                          <CardDescription>
                            Mã xét nghiệm: {test.id} • Ngày đặt: {test.date}
                          </CardDescription>
                        </div>
                        <Badge className={getStatusColor(test.status)}>
                          {getStatusText(test.status)}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Người tham gia:</h4>
                        <div className="flex flex-wrap gap-2">
                          {test.participants.map((participant, index) => (
                            <Badge key={index} variant="outline">
                              {participant}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">Tiến độ</span>
                          <span className="text-sm text-gray-600">{test.progress}%</span>
                        </div>
                        <Progress value={test.progress} className="h-2" />
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t">
                        <div>
                          <span className="text-sm text-gray-600">Kết quả: </span>
                          <span className="font-medium text-gray-900">{test.result}</span>
                        </div>
                        <div className="space-x-2">
                          <Button variant="outline" size="sm">Chi tiết</Button>
                          {test.status === "completed" && (
                            <Button size="sm">Xem kết quả</Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Results Tab */}
            <TabsContent value="results" className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Kết quả xét nghiệm</h2>
              
              <Card>
                <CardHeader>
                  <CardTitle>Xét nghiệm huyết thống dân sự - DNA001</CardTitle>
                  <CardDescription>Hoàn thành ngày 15/11/2024</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Thông tin mẫu:</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Mẫu 1:</span>
                          <span className="font-medium">Nguyễn Văn A</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Mẫu 2:</span>
                          <span className="font-medium">Nguyễn Thị B</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Loại mẫu:</span>
                          <span className="font-medium">Tế bào niêm mạc miệng</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Kết quả:</h4>
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center space-x-2 mb-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="font-medium text-green-900">Có quan hệ huyết thống</span>
                        </div>
                        <p className="text-sm text-green-700">Độ chính xác: 99.99%</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <Button className="mr-4">Tải báo cáo PDF</Button>
                    <Button variant="outline">Gửi email</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Thông tin cá nhân</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Họ và tên
                        </label>
                        <input 
                          type="text" 
                          value="Nguyễn Văn A"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Số điện thoại
                        </label>
                        <input 
                          type="text" 
                          value="0901234567"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input 
                        type="email" 
                        value="nguyenvana@email.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Địa chỉ
                      </label>
                      <input 
                        type="text" 
                        value="123 Đường XYZ, Quận 1, TP.HCM"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>

                    <Button className="bg-gradient-to-r from-blue-600 to-green-600">
                      Cập nhật thông tin
                    </Button>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Liên hệ nhanh</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="font-medium text-gray-900">Hotline</p>
                          <p className="text-sm text-gray-600">1900 1234</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="font-medium text-gray-900">Email</p>
                          <p className="text-sm text-gray-600">support@dnahealth.vn</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Thống kê</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tổng xét nghiệm:</span>
                        <span className="font-medium">3</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Thành viên từ:</span>
                        <span className="font-medium">01/2024</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
