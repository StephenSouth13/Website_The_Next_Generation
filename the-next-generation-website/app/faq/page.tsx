"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronUp, Search, HelpCircle, Gamepad2, Download, Bug, Heart } from "lucide-react"

const faqData = [
  {
    category: "Game",
    icon: Gamepad2,
    questions: [
      {
        question: "Game có miễn phí không?",
        answer:
          "Có, The Next Generation hoàn toàn miễn phí. Bạn có thể chơi trực tiếp trên trình duyệt mà không cần tải về hay trả phí.",
      },
      {
        question: "Tôi cần cài đặt gì để chơi game?",
        answer:
          "Bạn chỉ cần một trình duyệt web hiện đại hỗ trợ WebGL như Chrome, Firefox, Safari hoặc Edge. Không cần cài đặt thêm gì khác.",
      },
      {
        question: "Game có hỗ trợ mobile không?",
        answer:
          "Hiện tại game được tối ưu cho desktop. Chúng tôi đang phát triển phiên bản mobile-friendly cho các bản cập nhật tiếp theo.",
      },
      {
        question: "Làm sao để lưu tiến trình game?",
        answer:
          "Game tự động lưu tiến trình vào localStorage của trình duyệt. Đảm bảo không xóa dữ liệu trình duyệt để giữ lại tiến trình.",
      },
    ],
  },
  {
    category: "Kỹ thuật",
    icon: Bug,
    questions: [
      {
        question: "Game không tải được, tôi phải làm gì?",
        answer:
          "Kiểm tra kết nối internet, đảm bảo trình duyệt hỗ trợ WebGL, thử tắt ad blocker, hoặc thử trình duyệt khác. Nếu vẫn không được, hãy liên hệ với chúng tôi.",
      },
      {
        question: "Game chạy chậm hoặc giật lag?",
        answer:
          "Thử giảm chất lượng đồ họa trong settings, đóng các tab khác, hoặc chơi trên máy tính có cấu hình mạnh hơn.",
      },
      {
        question: "Âm thanh không hoạt động?",
        answer:
          "Kiểm tra volume của trình duyệt và hệ thống, đảm bảo không bị mute. Một số trình duyệt yêu cầu tương tác trước khi phát âm thanh.",
      },
      {
        question: "Game bị crash hoặc đóng đột ngột?",
        answer:
          "Thử refresh trang, xóa cache trình duyệt, hoặc restart trình duyệt. Nếu vấn đề tiếp tục, hãy báo lỗi cho chúng tôi.",
      },
    ],
  },
  {
    category: "Tải về",
    icon: Download,
    questions: [
      {
        question: "Tôi có thể tải game về máy không?",
        answer:
          "Hiện tại chúng tôi chỉ cung cấp phiên bản WebGL. Phiên bản desktop có thể được phát triển trong tương lai dựa trên phản hồi của người chơi.",
      },
      {
        question: "Game có trên Steam hoặc app store không?",
        answer:
          "Chưa có kế hoạch đưa lên Steam hay app store trong thời gian gần. Game hiện tại hoàn toàn miễn phí trên web.",
      },
      {
        question: "Tôi có thể chia sẻ game cho bạn bè không?",
        answer:
          "Tất nhiên! Bạn có thể chia sẻ link website này cho bạn bè. Chúng tôi rất vui khi game được nhiều người biết đến.",
      },
    ],
  },
  {
    category: "Hỗ trợ",
    icon: Heart,
    questions: [
      {
        question: "Làm sao để báo lỗi hoặc góp ý?",
        answer:
          "Bạn có thể sử dụng form liên hệ trên website, gửi email trực tiếp, hoặc tạo issue trên GitHub repository của chúng tôi.",
      },
      {
        question: "Tôi muốn ủng hộ nhóm phát triển?",
        answer: "Cảm ơn bạn rất nhiều! Bạn có thể donate qua trang Donate hoặc đơn giản là chia sẻ game cho bạn bè.",
      },
      {
        question: "Khi nào có bản cập nhật mới?",
        answer:
          "Chúng tôi không có lịch trình cố định, nhưng sẽ thông báo trên website khi có cập nhật mới. Theo dõi để không bỏ lỡ!",
      },
      {
        question: "Tôi có thể tham gia phát triển game không?",
        answer:
          "Chúng tôi luôn chào đón những người có cùng đam mê! Hãy liên hệ qua email để thảo luận về cơ hội hợp tác.",
      },
    ],
  },
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const filteredFAQ = faqData
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">❓ Câu Hỏi Thường Gặp</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            FAQ
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tìm câu trả lời cho những thắc mắc phổ biến về game và dự án của chúng tôi.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Tìm kiếm câu hỏi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFAQ.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center text-2xl">
                  <category.icon className="mr-3 h-8 w-8 text-purple-400" />
                  {category.category}
                </CardTitle>
                <CardDescription className="text-gray-400">{category.questions.length} câu hỏi</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const itemId = `${categoryIndex}-${faqIndex}`
                  const isOpen = openItems.includes(itemId)

                  return (
                    <Collapsible key={faqIndex}>
                      <CollapsibleTrigger asChild>
                        <Button
                          variant="ghost"
                          className="w-full justify-between text-left p-4 h-auto bg-slate-700/30 hover:bg-slate-700/50 border border-slate-600"
                          onClick={() => toggleItem(itemId)}
                        >
                          <span className="text-white font-medium">{faq.question}</span>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-purple-400" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-purple-400" />
                          )}
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-4 py-3 bg-slate-700/20 border border-t-0 border-slate-600 rounded-b-md">
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </CollapsibleContent>
                    </Collapsible>
                  )
                })}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQ.length === 0 && searchTerm && (
          <Card className="bg-slate-800/50 border-slate-700 text-center py-12">
            <CardContent>
              <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Không tìm thấy kết quả</h3>
              <p className="text-gray-400 mb-6">Không có câu hỏi nào phù hợp với từ khóa "{searchTerm}"</p>
              <Button
                onClick={() => setSearchTerm("")}
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-500/10"
              >
                Xóa tìm kiếm
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Contact CTA */}
        <Card className="mt-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30">
          <CardHeader className="text-center">
            <CardTitle className="text-white text-2xl">Vẫn Có Thắc Mắc?</CardTitle>
            <CardDescription className="text-gray-300">
              Nếu không tìm thấy câu trả lời, đừng ngại liên hệ với chúng tôi
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                <a href="/contact">Gửi Câu Hỏi</a>
              </Button>
              <Button asChild variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10">
                <a href="mailto:longquachdev@gmail.com">Email Trực Tiếp</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
