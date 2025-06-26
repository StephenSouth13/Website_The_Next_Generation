import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Mail, Code, Palette, Music, Gamepad2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"



  const teamMembers = [
  {
    name: "Quách Thành Long",
    role: "Lead Developer & Web/Game Developer",
    description: "Chịu trách nhiệm chính trong việc phát triển game và quản lý dự án. Có kinh nghiệm với Unity và C#.",
    avatar: "/members/Long.png",
    skills: ["Unity", "C#", "Game Design", "Project Management","React", "Next.js"],
    github: "https://github.com/StephenSouth13",
    email: "stephensouth1307@gmail.com",
    icon: Code,
  },
  {
    name: "Lê Gia Huy",
    role: "Game Programmer/Developer",
    description: "Lập trình gameplay mechanics và system. Chuyên về optimization và performance tuning.",
    avatar: "/members/Huy.png",
    skills: ["C#", "Unity", "Algorithm", "Performance Optimization"],
    github: "https://github.com/minhdesigner",
    email: "minh.designer@gmail.com",
    icon: Code,
  },
  {
    name: "Lương Nguyễn Tấn Dũng",
    role: "Game Programmer/Developer",
    description: "Lập trình gameplay mechanics và system. Chuyên về optimization và performance tuning.",
    avatar: "/members/Dung.png",
    skills: ["C#", "Unity", "Algorithm", "Performance Optimization"],
    github: "https://github.com/DungLuong1602",
    email: "dunglnt.125010124006@vtc.edu.vn",
    icon: Code,
  },
  {
    name: "Thuận Jesus",
    role: "Sound Designer",
    description: "Vẽ 3D cho game, tạo mô hình và texture. Có kinh nghiệm với  Substance Painter.",
    avatar: "/members/Thuan.png",
    skills: ["Audio Engineering", "Sound Effects", "FL Studio", "Mixing & Mastering"],
    email: "thuantc.124020124035@vtc.edu.vn",
    github: "#",
    icon: Palette,
  },
]


export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
            👨‍👩‍👧‍👦 Đội Ngũ Phát Triển
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Gặp Gỡ Nhóm Phát Triển
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Chúng tôi là nhóm sinh viên đam mê game development tại VTC Academy, cùng nhau tạo ra những trải nghiệm game
            độc đáo và thú vị.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">4</div>
            <div className="text-gray-300">Thành Viên</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">6+</div>
            <div className="text-gray-300">Tháng Phát Triển</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">1000+</div>
            <div className="text-gray-300">Giờ Code</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">∞</div>
            <div className="text-gray-300">Đam Mê</div>
          </div>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <CardHeader className="text-center">
                <div className="relative mx-auto mb-4">
                  <Image
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="rounded-full border-4 border-purple-500/30"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <member.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <CardTitle className="text-white text-xl">{member.name}</CardTitle>
                <CardDescription className="text-purple-300 font-medium">{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-center leading-relaxed">{member.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-purple-600/20 text-purple-300">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 pt-4">
                  <Link href={member.github} target="_blank">
                    <Button variant="ghost" size="icon" className="hover:bg-purple-600/20">
                      <Github className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href={`mailto:${member.email}`}>
                    <Button variant="ghost" size="icon" className="hover:bg-purple-600/20">
                      <Mail className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* VTC Academy Section */}
        <div className="bg-slate-800/30 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">VTC Academy</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
            Chúng tôi là sinh viên tại VTC Academy - một trong những trung tâm đào tạo công nghệ hàng đầu Việt Nam. Dự
            án "The Next Generation" là thành quả của quá trình học tập và nghiên cứu về game development.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Học Tập</h3>
              <p className="text-gray-400">Áp dụng kiến thức được học vào dự án thực tế</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gamepad2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Thực Hành</h3>
              <p className="text-gray-400">Phát triển kỹ năng thông qua dự án game thực tế</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Sáng Tạo</h3>
              <p className="text-gray-400">Thể hiện tính sáng tạo và đam mê với game</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
