import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Heart, Coffee, Gift, Star, CreditCard, Smartphone } from "lucide-react"
import Image from "next/image"

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
            ☕ Ủng Hộ Nhóm Phát Triển
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Donate & Ủng Hộ
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Game hoàn toàn miễn phí, nhưng nếu bạn thích và muốn ủng hộ nhóm phát triển tiếp tục tạo ra những sản phẩm
            tốt hơn, chúng tôi rất biết ơn sự hỗ trợ của bạn.
          </p>
        </div>

        {/* Why Donate Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors">
            <CardHeader className="text-center">
              <Coffee className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <CardTitle className="text-white">Mua Cà Phê Cho Team</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400 text-center">
                Những đêm thức khuya code game cần rất nhiều caffeine để duy trì năng lượng
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors">
            <CardHeader className="text-center">
              <Gift className="h-12 w-12 text-pink-400 mx-auto mb-4" />
              <CardTitle className="text-white">Hỗ Trợ Phát Triển</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400 text-center">
                Giúp chúng tôi có kinh phí để mua assets, tools và hosting cho các dự án tiếp theo
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors">
            <CardHeader className="text-center">
              <Star className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <CardTitle className="text-white">Động Viên Tinh Thần</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400 text-center">
                Sự ủng hộ của bạn là động lực lớn để chúng tôi tiếp tục sáng tạo và phát triển
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Donation Methods */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Momo */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="text-center">
              <Smartphone className="h-12 w-12 text-pink-500 mx-auto mb-4" />
              <CardTitle className="text-white">Momo</CardTitle>
              <CardDescription className="text-gray-400">Chuyển khoản qua ví điện tử Momo</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="bg-white p-4 rounded-lg inline-block">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Momo QR Code"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>
              <div className="space-y-2">
                <p className="text-white font-medium">Số điện thoại: 0123456789</p>
                <p className="text-gray-400">Tên: Long Quách</p>
                <p className="text-gray-400 text-sm">Quét mã QR hoặc chuyển khoản trực tiếp</p>
              </div>
            </CardContent>
          </Card>

          {/* PayPal */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="text-center">
              <CreditCard className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <CardTitle className="text-white">PayPal</CardTitle>
              <CardDescription className="text-gray-400">Donate qua PayPal (quốc tế)</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="bg-white p-4 rounded-lg inline-block">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="PayPal QR Code"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>
              <div className="space-y-2">
                <p className="text-white font-medium">PayPal: longquachdev@gmail.com</p>
                <p className="text-gray-400 text-sm">Hỗ trợ thanh toán quốc tế</p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Donate via PayPal</Button>
            </CardContent>
          </Card>
        </div>

        {/* Donation Tiers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Mức Ủng Hộ Gợi Ý</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-yellow-500/50 transition-colors">
              <CardHeader className="text-center">
                <Coffee className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <CardTitle className="text-white">20,000 VNĐ</CardTitle>
                <CardDescription className="text-gray-400">Một ly cà phê</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-sm">Giúp team có năng lượng cho một buổi coding</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-green-500/50 transition-colors">
              <CardHeader className="text-center">
                <Gift className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <CardTitle className="text-white">50,000 VNĐ</CardTitle>
                <CardDescription className="text-gray-400">Bữa ăn nhẹ</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-sm">Hỗ trợ team có bữa ăn trong lúc làm việc</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors">
              <CardHeader className="text-center">
                <Star className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                <CardTitle className="text-white">100,000 VNĐ</CardTitle>
                <CardDescription className="text-gray-400">Game assets</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-sm">Giúp mua assets và tools phát triển game</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-pink-500/50 transition-colors">
              <CardHeader className="text-center">
                <Heart className="h-8 w-8 text-pink-400 mx-auto mb-2" />
                <CardTitle className="text-white">200,000+ VNĐ</CardTitle>
                <CardDescription className="text-gray-400">Super supporter</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-sm">Ủng hộ lớn cho dự án tiếp theo</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Thank You Section */}
        <Card className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30">
          <CardHeader className="text-center">
            <Heart className="h-12 w-12 text-red-400 mx-auto mb-4" />
            <CardTitle className="text-white text-2xl">Cảm Ơn Các Supporters</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-300">
              Chúng tôi xin chân thành cảm ơn tất cả những người đã và đang ủng hộ dự án. Mỗi đóng góp, dù lớn hay nhỏ,
              đều có ý nghĩa rất lớn với chúng tôi.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <Badge variant="secondary">Anonymous Supporter #1</Badge>
              <Badge variant="secondary">Minh N.</Badge>
              <Badge variant="secondary">Anonymous Supporter #2</Badge>
              <Badge variant="secondary">Hùng T.</Badge>
              <Badge variant="secondary">+ 12 supporters khác</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Important Note */}
        <Alert className="mt-8 border-blue-500/50 bg-blue-500/10">
          <Heart className="h-4 w-4" />
          <AlertDescription className="text-blue-300">
            <strong>Lưu ý quan trọng:</strong> Việc donate hoàn toàn tự nguyện. Game sẽ luôn miễn phí và chúng tôi sẽ
            tiếp tục phát triển bất kể có nhận được donation hay không. Cảm ơn bạn đã quan tâm và ủng hộ!
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}
