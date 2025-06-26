"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Gamepad2, Maximize, Volume2, VolumeX, RotateCcw, Info } from "lucide-react"

export default function PlayPage() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [gameLoaded, setGameLoaded] = useState(false)

  const toggleFullscreen = () => {
    const gameFrame = document.getElementById("game-frame")
    if (gameFrame) {
      if (!document.fullscreenElement) {
        gameFrame.requestFullscreen()
        setIsFullscreen(true)
      } else {
        document.exitFullscreen()
        setIsFullscreen(false)
      }
    }
  }

  const restartGame = () => {
    const gameFrame = document.getElementById("game-frame") as HTMLIFrameElement
    if (gameFrame) {
      gameFrame.src = gameFrame.src // Reload iframe
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">🎮 Chơi Game Ngay</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            The Next Generation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Trải nghiệm game ngay trên trình duyệt của bạn. Không cần tải về, chỉ cần click và chơi!
          </p>
        </div>

        {/* Game Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button
            onClick={toggleFullscreen}
            variant="outline"
            className="border-purple-500 text-purple-300 hover:bg-purple-500/10"
          >
            <Maximize className="mr-2 h-4 w-4" />
            {isFullscreen ? "Thoát Toàn Màn Hình" : "Toàn Màn Hình"}
          </Button>
          <Button
            onClick={() => setIsMuted(!isMuted)}
            variant="outline"
            className="border-blue-500 text-blue-300 hover:bg-blue-500/10"
          >
            {isMuted ? <VolumeX className="mr-2 h-4 w-4" /> : <Volume2 className="mr-2 h-4 w-4" />}
            {isMuted ? "Bật Âm Thanh" : "Tắt Âm Thanh"}
          </Button>
          <Button
            onClick={restartGame}
            variant="outline"
            className="border-green-500 text-green-300 hover:bg-green-500/10"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Khởi Động Lại
          </Button>
        </div>

        {/* Game Container */}
        <div className="max-w-6xl mx-auto mb-12">
          <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
            <CardHeader className="text-center">
              <CardTitle className="text-white flex items-center justify-center">
                <Gamepad2 className="mr-2 h-6 w-6 text-purple-400" />
                Game WebGL
              </CardTitle>
              <CardDescription className="text-gray-400">
                Sử dụng WASD hoặc phím mũi tên để di chuyển, Space để nhảy
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative bg-black aspect-video">
                {/* Game iframe - Replace with actual game URL */}
                <iframe
                  id="game-frame"
                  src="/placeholder-game.html" // Replace with actual Unity WebGL build URL
                  className="w-full h-full border-0"
                  onLoad={() => setGameLoaded(true)}
                  title="The Next Generation Game"
                />

                {/* Loading overlay */}
                {!gameLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/80">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
                      <p className="text-white">Đang tải game...</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Game Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Info className="mr-2 h-5 w-5 text-blue-400" />
                Hướng Dẫn Chơi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-purple-300 font-semibold">Điều Khiển:</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>
                    • <kbd className="bg-slate-700 px-2 py-1 rounded text-xs">WASD</kbd> hoặc{" "}
                    <kbd className="bg-slate-700 px-2 py-1 rounded text-xs">↑↓←→</kbd> - Di chuyển
                  </li>
                  <li>
                    • <kbd className="bg-slate-700 px-2 py-1 rounded text-xs">Space</kbd> - Nhảy
                  </li>
                  <li>
                    • <kbd className="bg-slate-700 px-2 py-1 rounded text-xs">Mouse</kbd> - Tương tác với UI
                  </li>
                  <li>
                    • <kbd className="bg-slate-700 px-2 py-1 rounded text-xs">ESC</kbd> - Menu tạm dừng
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-pink-300 font-semibold">Mục Tiêu:</h4>
                <p className="text-gray-300 text-sm">
                  Khám phá thế giới, giải quyết các câu đố và thu thập các vật phẩm để tiến tới level tiếp theo.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Yêu Cầu Hệ Thống</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-green-300 font-semibold">Trình Duyệt Được Hỗ Trợ:</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Chrome 80+ (Khuyến nghị)</li>
                  <li>• Firefox 75+</li>
                  <li>• Safari 13+</li>
                  <li>• Edge 80+</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-yellow-300 font-semibold">Yêu Cầu:</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• WebGL 2.0 support</li>
                  <li>• RAM: 4GB+</li>
                  <li>• Kết nối internet ổn định</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Alerts */}
        <div className="space-y-4">
          <Alert className="border-blue-500/50 bg-blue-500/10">
            <Info className="h-4 w-4" />
            <AlertDescription className="text-blue-300">
              <strong>Lưu ý:</strong> Game có thể mất một chút thời gian để tải lần đầu. Hãy đảm bảo kết nối internet ổn
              định để có trải nghiệm tốt nhất.
            </AlertDescription>
          </Alert>

          <Alert className="border-purple-500/50 bg-purple-500/10">
            <Gamepad2 className="h-4 w-4" />
            <AlertDescription className="text-purple-300">
              <strong>Mẹo:</strong> Sử dụng chế độ toàn màn hình để có trải nghiệm chơi game tốt nhất. Đeo tai nghe để
              thưởng thức âm thanh game một cách trọn vẹn.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  )
}
