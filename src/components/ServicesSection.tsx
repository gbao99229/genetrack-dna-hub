import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Scale, ChevronRight, Heart, Baby } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: Users,
      title: "Xét nghiệm huyết thống dân sự",
      description: "Xác định mối quan hệ huyết thống giữa các thành viên trong gia đình",
      features: [
        "Xét nghiệm cha con",
        "Xét nghiệm mẹ con", 
        "Xét nghiệm anh chị em ruột",
        "Xét nghiệm ông bà - cháu"
      ],
      price: "2.500.000 - 4.500.000 VNĐ",
      timeframe: "5-7 ngày",
      accuracy: "99.99%",
      sampleOptions: ["Thu mẫu tại nhà", "Thu mẫu tại cơ sở"],
      color: "blue"
    },
    {
      id: 2,
      icon: Scale,
      title: "Xét nghiệm huyết thống hành chính",
      description: "Phục vụ các thủ tục pháp lý, tòa án và cơ quan nhà nước",
      features: [
        "Có giá trị pháp lý",
        "Quy trình nghiêm ngặt",
        "Chứng kiến thu mẫu",
        "Báo cáo chính thức"
      ],
      price: "3.500.000 - 6.000.000 VNĐ",
      timeframe: "7-10 ngày",
      accuracy: "99.99%",
      sampleOptions: ["Chỉ thu mẫu tại cơ sở"],
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string; icon: string; badge: string } } = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-700",
        border: "border-blue-200",
        icon: "bg-blue-100",
        badge: "bg-blue-100 text-blue-700"
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-700",
        border: "border-green-200",
        icon: "bg-green-100",
        badge: "bg-green-100 text-green-700"
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-700",
        border: "border-purple-200",
        icon: "bg-purple-100",
        badge: "bg-purple-100 text-purple-700"
      },
      orange: {
        bg: "bg-orange-50",
        text: "text-orange-700",
        border: "border-orange-200",
        icon: "bg-orange-100",
        badge: "bg-orange-100 text-orange-700"
      }
    };
    return colorMap[color];
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-700 mb-4">
            Dịch vụ xét nghiệm
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Các dịch vụ xét nghiệm ADN
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi cung cấp đầy đủ các dịch vụ xét nghiệm ADN từ dân sự đến hành chính, 
            đáp ứng mọi nhu cầu của khách hàng với độ chính xác cao nhất.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => {
            const colors = getColorClasses(service.color);
            const Icon = service.icon;
            
            return (
              <Card 
                key={service.id} 
                className={`${colors.bg} ${colors.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className={`w-14 h-14 ${colors.icon} rounded-xl flex items-center justify-center`}>
                      <Icon className={`w-7 h-7 ${colors.text}`} />
                    </div>
                    <Badge className={colors.badge}>
                      {service.accuracy}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-900 mt-4">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Bao gồm:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-700">
                          <div className={`w-1.5 h-1.5 ${colors.text.replace('text-', 'bg-')} rounded-full mr-3`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Service Details */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-200">
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">Thời gian</div>
                      <div className="text-sm font-medium text-gray-900">{service.timeframe}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">Giá từ</div>
                      <div className="text-sm font-medium text-gray-900">{service.price}</div>
                    </div>
                  </div>

                  {/* Sample Options */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Hình thức thu mẫu:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.sampleOptions.map((option, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {option}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button className="w-full mt-6" variant="outline">
                    Đặt lịch xét nghiệm
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Cần tư vấn về dịch vụ?</h3>
            <p className="text-blue-100 mb-6">
              Đội ngũ chuyên gia của chúng tôi sẵn sàng tư vấn miễn phí cho bạn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-50">
                Gọi hotline: 1900 1234
              </Button>
              <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                Đăng ký tư vấn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
