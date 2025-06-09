
import { Button } from "@/components/ui/button";
import { Microscope, UserPlus, LogIn, Home, TestTube, BookOpen, Phone, LogOut, User, Zap } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const navItems = [
    { name: "Trang chủ", href: "/", icon: Home },
    { name: "Dịch vụ", href: "/services", icon: TestTube },
    { name: "Quy trình", href: "/process", icon: Microscope },
    { name: "Blog", href: "/blog", icon: BookOpen },
    { name: "Liên hệ", href: "/contact", icon: Phone },
  ];

  const handleSignOut = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <Microscope className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">DNA Health</h1>
              <p className="text-xs text-gray-600">Xét nghiệm ADN chuyên nghiệp</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === item.href ? "text-blue-600" : "text-gray-700"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-gray-700">
                  <User className="w-4 h-4" />
                  <span>{user.username}</span>
                </div>
                <Button variant="outline" size="sm" onClick={handleSignOut}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Đăng xuất
                </Button>
              </div>
            ) : (
              <>
                <Link to="/demo-auth">
                  <Button variant="outline" size="sm" className="bg-yellow-50 border-yellow-300 text-yellow-700 hover:bg-yellow-100">
                    <Zap className="w-4 h-4 mr-2" />
                    Demo Login
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button variant="outline" size="sm">
                    <LogIn className="w-4 h-4 mr-2" />
                    Đăng nhập
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Đăng ký
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
