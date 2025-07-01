import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Mail, Code, Palette, Gamepad2, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const teamMembers = [
  {
    name: "Quách Thành Long",
    role: "Leader • Web & Game Developer",
    description:
      "Trưởng nhóm, chịu trách nhiệm chính trong lập trình website và phát triển game. Long không chỉ sở hữu kiến thức kỹ thuật vững vàng, mà còn có khả năng lãnh đạo, kết nối và truyền cảm hứng cho cả nhóm. Là người khởi xướng dự án và dẫn dắt mọi giai đoạn từ ý tưởng đến sản phẩm hoàn chỉnh.",
    avatar: "/members/Long.png",
    skills: [
      "Project Management",
      "Unity",
      "C#",
      "React",
      "Next.js",
      "UI/UX Design",
      "Git",
      "Presentation"
    ],
    github: "https://github.com/StephenSouth13",
    email: "stephensouth1307@gmail.com",
    linkedin: "https://www.linkedin.com/in/quach-long-338018274/",
    icon: Code,
  },
  {
    name: "Nguyễn Lê Gia Huy",
    role: "Game Programmer/Developer",
    description:
      "Huy là người đam mê logic và tối ưu. Với tư duy phân tích tốt, Huy chuyên xử lý gameplay mechanics và đảm bảo hiệu suất mượt mà cho game. Là trụ cột kỹ thuật đáng tin cậy trong nhóm.",
    avatar: "/members/Huy.png",
    skills: ["C#", "Unity", "Algorithm", "Performance Optimization"],
    github: "https://github.com/GiaHuy1106",
    email: "huynlg.124010124044@vtc.edu.vn",
    icon: Code,
  },
  {
    name: "Lương Nguyễn Tấn Dũng",
    role: "Game Programmer/Developer",
    description:
      "Dũng là người kiên định, tỉ mỉ và có trách nhiệm cao. Với kỹ năng lập trình vững và khả năng tối ưu chi tiết, Dũng đóng vai trò quan trọng trong việc hoàn thiện gameplay chất lượng và ổn định.",
    avatar: "/members/Dung.png",
    skills: ["C#", "Unity", "Algorithm", "Performance Optimization", "Presentation"],
    github: "https://github.com/DungLuong1602",
    email: "dunglnt.125010124006@vtc.edu.vn",
    icon: Code,
  },
  {
    name: "Trần Công Thuận",
    role: "Sound Designer & 3D Artist",
    description:
      "Thuận mang đến linh hồn nghệ thuật cho dự án. Với kỹ năng thiết kế âm thanh và mô hình 3D, Thuận tạo nên không gian sống động cho game qua âm nhạc và hình ảnh trực quan. Là người nghệ sĩ tận tụy của nhóm.",
    avatar: "/members/Thuan.png",
    skills: [
      "FL Studio",
      "Sound Effects",
      "Mixing & Mastering",
      "Maya",
      "Substance Painter"
    ],
    email: "thuantc.124020124035@vtc.edu.vn",
    github: "#",
    icon: Palette,
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
            👨‍👩‍👧‍👦 Đội Ngũ Phát Triển
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Gặp Gỡ Nhóm Phát Triển
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nhóm sinh viên đam mê game development tại VTC Academy, cùng nhau tạo nên trải nghiệm độc đáo.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {["4", "6+", "1000+", "∞"].map((number, idx) => (
            <div key={idx} className="text-center">
              <div className={`text-4xl font-bold text-purple-400 mb-2`}>{number}</div>
              <div className="text-gray-300">
                {idx === 0 && "Thành Viên"}
                {idx === 1 && "Tháng Phát Triển"}
                {idx === 2 && "Giờ Code"}
                {idx === 3 && "Đam Mê"}
              </div>
            </div>
          ))}
        </div>

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
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-purple-600/20 text-purple-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-center space-x-4 pt-4">
                  {member.github && member.github !== "#" && (
                    <Link href={member.github} target="_blank">
                      <Button variant="ghost" size="icon" className="hover:bg-purple-600/20">
                        <Github className="h-5 w-5" />
                      </Button>
                    </Link>
                  )}
                  {member.email && (
                    <Link href={`mailto:${member.email}`}>
                      <Button variant="ghost" size="icon" className="hover:bg-purple-600/20">
                        <Mail className="h-5 w-5" />
                      </Button>
                    </Link>
                  )}
                  {member.linkedin && (
                    <Link href={member.linkedin} target="_blank">
                      <Button variant="ghost" size="icon" className="hover:bg-purple-600/20">
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-slate-800/30 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">VTC Academy</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
            Chúng tôi là sinh viên VTC Academy - nơi đào tạo công nghệ hàng đầu. Dự án "The Next Generation" là kết quả của đam mê và sáng tạo không ngừng.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: <Code className="h-8 w-8 text-white" />, title: "Học Tập", desc: "Đưa kiến thức thành sản phẩm thực tế", color: "bg-blue-600" },
              { icon: <Gamepad2 className="h-8 w-8 text-white" />, title: "Thực Hành", desc: "Rèn luyện kỹ năng qua dự án game", color: "bg-green-600" },
              { icon: <Palette className="h-8 w-8 text-white" />, title: "Sáng Tạo", desc: "Khơi nguồn cảm hứng, thể hiện cá tính", color: "bg-purple-600" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
