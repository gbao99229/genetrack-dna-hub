
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";

export const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "🔬 Xét nghiệm huyết thống Cha - Con: Quy trình và ý nghĩa",
      excerpt: "Tìm hiểu chi tiết về xét nghiệm ADN xác định quan hệ cha-con, quy trình thực hiện và ứng dụng trong dân sự và hành chính.",
      author: "BS. Nguyễn Văn A",
      date: "15/11/2024",
      category: "Xét nghiệm huyết thống",
      readTime: "6 phút đọc",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "📄 Xét nghiệm ADN phục vụ hành chính và pháp lý",
      excerpt: "Hướng dẫn thực hiện xét nghiệm ADN để làm giấy khai sinh, di trú và các thủ tục pháp lý khác.",
      author: "LS. Trần Thị B",
      date: "12/11/2024",
      category: "Pháp lý",
      readTime: "8 phút đọc",
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "🧬 Xét nghiệm nguồn gốc và dòng họ - Khám phá lịch sử gia đình",
      excerpt: "Tìm hiểu về xét nghiệm nhiễm sắc thể Y và ty thể DNA để truy tìm nguồn gốc dòng họ và lịch sử gia đình.",
      author: "GS.TS. Lê Văn C",
      date: "10/11/2024",
      category: "Nguồn gốc",
      readTime: "7 phút đọc",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "🧠 Xét nghiệm ADN chuyên sâu: Profile cá nhân và thai nhi",
      excerpt: "Các dịch vụ xét nghiệm ADN đặc biệt: tạo hồ sơ ADN cá nhân và xét nghiệm ADN thai nhi không xâm lấn.",
      author: "ThS. Phạm Thị D",
      date: "08/11/2024",
      category: "Chuyên sâu",
      readTime: "9 phút đọc",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "👫 Xét nghiệm anh em ruột và các mối quan hệ khác",
      excerpt: "Hướng dẫn xét nghiệm xác định quan hệ anh-em ruột, ông-cháu nội và các mối quan hệ huyết thống khác.",
      author: "BS. Hoàng Văn E",
      date: "05/11/2024",
      category: "Quan hệ gia đình",
      readTime: "5 phút đọc",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "👯 Xét nghiệm sinh đôi: Phân biệt cùng trứng và khác trứng",
      excerpt: "Tìm hiểu cách xét nghiệm ADN phân biệt sinh đôi cùng trứng và khác trứng, ý nghĩa và ứng dụng thực tế.",
      author: "ThS. Nguyễn Thị F",
      date: "03/11/2024",
      category: "Sinh đôi",
      readTime: "4 phút đọc",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = [
    { name: "Xét nghiệm huyết thống", count: 8, color: "blue" },
    { name: "Pháp lý", count: 6, color: "purple" },
    { name: "Nguồn gốc", count: 4, color: "green" },
    { name: "Chuyên sâu", count: 3, color: "orange" },
    { name: "Quan hệ gia đình", count: 5, color: "indigo" },
    { name: "Sinh đôi", count: 2, color: "pink" }
  ];

  const getCategoryColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "bg-blue-100 text-blue-700",
      green: "bg-green-100 text-green-700",
      purple: "bg-purple-100 text-purple-700",
      orange: "bg-orange-100 text-orange-700",
      indigo: "bg-indigo-100 text-indigo-700",
      pink: "bg-pink-100 text-pink-700"
    };
    return colorMap[color] || "bg-gray-100 text-gray-700";
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-700 mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Blog & Kiến thức chuyên môn
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Kiến thức toàn diện về xét nghiệm ADN
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Từ xét nghiệm huyết thống cơ bản đến các dịch vụ chuyên sâu, 
            cập nhật đầy đủ kiến thức về tất cả loại hình xét nghiệm ADN.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="aspect-video bg-gray-200 relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-700">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 line-clamp-3 text-sm">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          <span className="text-xs">{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="text-xs">{post.date}</span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-400">
                        {post.readTime}
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full group">
                      Đọc thêm
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="px-8">
                Xem thêm bài viết
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">
                  Chủ đề xét nghiệm
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${getCategoryColor(category.color).split(' ')[0]}`}></div>
                      <span className="text-gray-700 font-medium text-sm">{category.name}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="bg-gradient-to-br from-blue-600 to-green-600 text-white border-0">
              <CardHeader>
                <CardTitle className="text-lg text-white">
                  Đăng ký nhận tin
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Cập nhật kiến thức mới về xét nghiệm ADN
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Email của bạn"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 border-0 focus:ring-2 focus:ring-white/50"
                />
                <Button className="w-full bg-white text-blue-600 hover:bg-gray-50">
                  Đăng ký
                </Button>
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">
                  Bài viết quan trọng
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {blogPosts.slice(0, 4).map((post) => (
                  <div key={post.id} className="flex space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
