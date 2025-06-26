"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, PresentationControls, Stage } from "@react-three/drei"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Box, RotateCw, ZoomIn, Move3D } from "lucide-react"

// 3D Model Component
function GameModel() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#8b5cf6" />
    </mesh>
  )
}

// Character Model Component
function CharacterModel() {
  return (
    <group>
      {/* Simple character representation */}
      <mesh position={[0, 1, 0]}>
        <capsuleGeometry args={[0.5, 1]} />
        <meshStandardMaterial color="#ec4899" />
      </mesh>
      <mesh position={[0, 2.2, 0]}>
        <sphereGeometry args={[0.3]} />
        <meshStandardMaterial color="#fbbf24" />
      </mesh>
    </group>
  )
}

// Environment Model Component
function EnvironmentModel() {
  return (
    <group>
      {/* Ground */}
      <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#10b981" />
      </mesh>
      {/* Trees */}
      <mesh position={[-2, 1, -2]}>
        <cylinderGeometry args={[0.2, 0.2, 2]} />
        <meshStandardMaterial color="#92400e" />
      </mesh>
      <mesh position={[-2, 2.5, -2]}>
        <sphereGeometry args={[0.8]} />
        <meshStandardMaterial color="#16a34a" />
      </mesh>
      <mesh position={[2, 1, 2]}>
        <cylinderGeometry args={[0.2, 0.2, 2]} />
        <meshStandardMaterial color="#92400e" />
      </mesh>
      <mesh position={[2, 2.5, 2]}>
        <sphereGeometry args={[0.8]} />
        <meshStandardMaterial color="#16a34a" />
      </mesh>
    </group>
  )
}

export default function ModelsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">🧊 Mô Hình 3D</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Khám Phá Mô Hình 3D
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Xem trước các mô hình 3D được sử dụng trong game. Bạn có thể xoay, phóng to và khám phá chi tiết từng mô
            hình.
          </p>
        </div>

        {/* Controls Info */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <Card className="bg-slate-800/50 border-slate-700 text-center">
            <CardContent className="pt-6">
              <Move3D className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Kéo để Xoay</p>
              <p className="text-gray-400 text-sm">Click và kéo chuột</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700 text-center">
            <CardContent className="pt-6">
              <ZoomIn className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Cuộn để Zoom</p>
              <p className="text-gray-400 text-sm">Bánh xe chuột</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700 text-center">
            <CardContent className="pt-6">
              <RotateCw className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Xoay Tự Động</p>
              <p className="text-gray-400 text-sm">Chế độ mặc định</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 border-slate-700 text-center">
            <CardContent className="pt-6">
              <Box className="h-8 w-8 text-pink-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Nhiều Góc Nhìn</p>
              <p className="text-gray-400 text-sm">360 độ</p>
            </CardContent>
          </Card>
        </div>

        {/* 3D Models Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Game Object Model */}
          <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-white">Game Object</CardTitle>
              <CardDescription className="text-gray-400">Mô hình vật thể chính trong game</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-96 bg-gradient-to-br from-slate-800 to-slate-900">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                  <Suspense fallback={null}>
                    <PresentationControls
                      global
                      rotation={[0.13, 0.1, 0]}
                      polar={[-0.4, 0.2]}
                      azimuth={[-1, 0.75]}
                      config={{ mass: 2, tension: 400 }}
                      snap={{ mass: 4, tension: 400 }}
                    >
                      <Stage environment="city" intensity={0.6}>
                        <GameModel />
                      </Stage>
                    </PresentationControls>
                  </Suspense>
                </Canvas>
              </div>
            </CardContent>
          </Card>

          {/* Character Model */}
          <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-white">Nhân Vật Chính</CardTitle>
              <CardDescription className="text-gray-400">Mô hình nhân vật người chơi điều khiển</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-96 bg-gradient-to-br from-slate-800 to-slate-900">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                  <Suspense fallback={null}>
                    <PresentationControls
                      global
                      rotation={[0.13, 0.1, 0]}
                      polar={[-0.4, 0.2]}
                      azimuth={[-1, 0.75]}
                      config={{ mass: 2, tension: 400 }}
                      snap={{ mass: 4, tension: 400 }}
                    >
                      <Stage environment="sunset" intensity={0.6}>
                        <CharacterModel />
                      </Stage>
                    </PresentationControls>
                  </Suspense>
                </Canvas>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Environment Model - Full Width */}
        <Card className="bg-slate-800/50 border-slate-700 overflow-hidden mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-white">Môi Trường Game</CardTitle>
            <CardDescription className="text-gray-400">Cảnh quan và môi trường trong game</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-96 bg-gradient-to-br from-slate-800 to-slate-900">
              <Canvas camera={{ position: [5, 5, 5], fov: 45 }}>
                <Suspense fallback={null}>
                  <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                  <Environment preset="forest" />
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[10, 10, 5]} intensity={1} />
                  <EnvironmentModel />
                </Suspense>
              </Canvas>
            </div>
          </CardContent>
        </Card>

        {/* Model Information */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Thông Tin Kỹ Thuật</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Polygon Count:</span>
                <span className="text-white">~2,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Texture Size:</span>
                <span className="text-white">512x512</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Format:</span>
                <span className="text-white">FBX, OBJ</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Animations:</span>
                <span className="text-white">8 clips</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Công Cụ Sử Dụng</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">Blender</Badge>
                <span className="text-gray-300">3D Modeling</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">Unity</Badge>
                <span className="text-gray-300">Game Engine</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">Photoshop</Badge>
                <span className="text-gray-300">Texturing</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">Three.js</Badge>
                <span className="text-gray-300">Web 3D</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Tính Năng</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-300">LOD System</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-gray-300">PBR Materials</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span className="text-gray-300">Optimized for WebGL</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                <span className="text-gray-300">Mobile Friendly</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
