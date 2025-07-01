import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Target, Heart, Zap } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
            📖 Câu Chuyện Của Chúng Tôi
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Về The Next Generation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Khám phá hành trình tạo ra một tựa game indie độc đáo, từ ý tưởng ban đầu đến sản phẩm hoàn thiện.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">Cốt Truyện Game</h2>
            <p className="text-gray-300 leading-relaxed">
              "The Next Generation" là một hành trình khám phá thế giới tương lai, nơi công nghệ và thiên nhiên hòa
              quyện một cách hoàn hảo. Người chơi sẽ đóng vai một nhà thám hiểm trẻ tuổi, khám phá những vùng đất bí ẩn
              và giải quyết các câu đố thú vị.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Game mang đến trải nghiệm thư giãn với gameplay đơn giản nhưng cuốn hút, phù hợp cho mọi lứa tuổi. Mỗi cấp
              độ là một câu chuyện riêng, với những thử thách và bất ngờ đang chờ đợi.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/about/hero.png"
              alt="Game Story"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Inspiration Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors">
            <CardHeader>
              <Lightbulb className="h-10 w-10 text-yellow-400 mb-2" />
              <CardTitle className="text-white">Cảm Hứng</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">
                Lấy cảm hứng từ những tựa game indie nổi tiếng và trải nghiệm cá nhân của nhóm phát triển
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors">
            <CardHeader>
              <Target className="h-10 w-10 text-blue-400 mb-2" />
              <CardTitle className="text-white">Mục Tiêu</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">
                Tạo ra một trải nghiệm game thư giãn, giúp người chơi giải tỏa căng thẳng sau những giờ làm việc
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors">
            <CardHeader>
              <Heart className="h-10 w-10 text-red-400 mb-2" />
              <CardTitle className="text-white">Đam Mê</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">
                Được tạo ra với tình yêu dành cho game và mong muốn chia sẻ niềm vui với cộng đồng
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-colors">
            <CardHeader>
              <Zap className="h-10 w-10 text-purple-400 mb-2" />
              <CardTitle className="text-white">Công Nghệ</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">
                Sử dụng Unity Engine và các công nghệ hiện đại để mang đến trải nghiệm tốt nhất
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Development Journey */}
        <div className="bg-slate-800/30 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Hành Trình Phát Triển</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Ý Tưởng</h3>
              <p className="text-gray-400">
                Brainstorming và lên kế hoạch cho game concept, xác định target audience và core gameplay
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phát Triển</h3>
              <p className="text-gray-400">
                Coding, thiết kế level, tạo assets và testing liên tục để đảm bảo chất lượng game
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Ra Mắt</h3>
              <p className="text-gray-400">
                Polish, optimization và publish game lên các platform để người chơi có thể trải nghiệm
              </p>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Chi Tiết Kỹ Thuật</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Badge variant="secondary">Unity 2022.3 LTS</Badge>
                <span className="text-gray-300">Game Engine</span>
              </div>
              <div className="flex items-center space-x-3">
                <Badge variant="secondary">C# Scripting</Badge>
                <span className="text-gray-300">Programming Language</span>
              </div>
              <div className="flex items-center space-x-3">
                <Badge variant="secondary">WebGL Build</Badge>
                <span className="text-gray-300">Platform Target</span>
              </div>
              <div className="flex items-center space-x-3">
                <Badge variant="secondary">2D/3D Hybrid</Badge>
                <span className="text-gray-300">Art Style</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Tính Năng Game</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Multiple levels với độ khó tăng dần</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                <span>Puzzle mechanics độc đáo</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Soundtrack thư giãn</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Responsive controls</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span>Save/Load system</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
