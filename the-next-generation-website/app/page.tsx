import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gamepad2, Users, Palette, Zap, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <div className="relative container mx-auto px-4 py-20 text-center">
          <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">🎮 Indie Game Showcase</Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            The Next Generation
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Một tựa game indie thư giãn được phát triển bằng Unity bởi nhóm sinh viên tại VTC Academy. Khám phá thế giới
            mới với đồ họa tuyệt đẹp và gameplay độc đáo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/play">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3"
              >
                <Gamepad2 className="mr-2 h-5 w-5" />
                Chơi Ngay
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-3"
              >
                Tìm Hiểu Thêm
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Tính Năng Nổi Bật</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <Gamepad2 className="h-10 w-10 text-purple-400 mb-2" />
                <CardTitle className="text-white">Gameplay Thư Giãn</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  Trải nghiệm gameplay nhẹ nhàng, phù hợp cho mọi lứa tuổi
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <Palette className="h-10 w-10 text-pink-400 mb-2" />
                <CardTitle className="text-white">Đồ Họa Tuyệt Đẹp</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  Thiết kế visual độc đáo với màu sắc và hiệu ứng ấn tượng
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <Users className="h-10 w-10 text-blue-400 mb-2" />
                <CardTitle className="text-white">Nhóm Phát Triển</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  Được tạo ra bởi nhóm sinh viên đam mê game tại VTC Academy
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <Zap className="h-10 w-10 text-yellow-400 mb-2" />
                <CardTitle className="text-white">WebGL Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  Chơi trực tiếp trên trình duyệt mà không cần tải về
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Hình Ảnh Game</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative group overflow-hidden rounded-lg">
                <Image
                  src={`/img/roomaround.png`}
                  alt={`Game Screenshot ${i}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Sẵn Sàng Khám Phá?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Tham gia cùng chúng tôi trong hành trình khám phá thế giới mới. Chơi ngay hoặc tìm hiểu thêm về quá trình
            phát triển game.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/play">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3"
              >
                <Gamepad2 className="mr-2 h-5 w-5" />
                Chơi Game Ngay
              </Button>
            </Link>
            <Link href="/models">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-3"
              >
                Xem Mô Hình 3D
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-pink-500 text-pink-300 hover:bg-pink-500/10 px-8 py-3"
              >
                Liên Hệ
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
