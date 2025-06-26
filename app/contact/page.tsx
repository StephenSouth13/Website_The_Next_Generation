"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, MessageSquare, Send, CheckCircle, Github, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate Firebase submission
    try {
      // Here you would integrate with Firebase Realtime Database
      // const { db } = require('../firebase')
      // const { ref, push } = require('firebase/database')
      // const contactsRef = ref(db, 'contacts')
      // await push(contactsRef, {
      //   ...formData,
      //   timestamp: Date.now()
      // })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">💬 Liên Hệ Với Chúng Tôi</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Gửi Góp Ý & Phản Hồi
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Chúng tôi rất mong nhận được ý kiến đóng góp từ bạn để cải thiện game và tạo ra những trải nghiệm tốt hơn.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <MessageSquare className="mr-2 h-6 w-6 text-purple-400" />
                Gửi Tin Nhắn
              </CardTitle>
              <CardDescription className="text-gray-400">
                Điền thông tin bên dưới và chúng tôi sẽ phản hồi sớm nhất có thể
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <Alert className="border-green-500/50 bg-green-500/10">
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription className="text-green-300">
                    <strong>Cảm ơn bạn!</strong> Tin nhắn của bạn đã được gửi thành công. Chúng tôi sẽ phản hồi trong
                    vòng 24-48 giờ.
                  </AlertDescription>
                </Alert>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        Họ và Tên *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                        placeholder="Nhập họ và tên của bạn"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white">
                      Chủ Đề *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                      placeholder="Chủ đề tin nhắn"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Nội Dung *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 resize-none"
                      placeholder="Chia sẻ ý kiến, góp ý hoặc báo lỗi về game..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Đang Gửi...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Gửi Tin Nhắn
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Mail className="mr-2 h-6 w-6 text-blue-400" />
                  Thông Tin Liên Hệ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-purple-400" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400">longquachdev@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="h-5 w-5 text-purple-400" />
                  <div>
                    <p className="text-white font-medium">GitHub</p>
                    <p className="text-gray-400">github.com/StephenSouth13</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <div>
                    <p className="text-white font-medium">Địa Chỉ</p>
                    <p className="text-gray-400">VTC Academy, Việt Nam</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Quick Links */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Câu Hỏi Thường Gặp</CardTitle>
                <CardDescription className="text-gray-400">Có thể câu trả lời bạn cần đã có sẵn</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <h4 className="text-purple-300 font-medium">Game không tải được?</h4>
                  <p className="text-gray-400 text-sm">Kiểm tra kết nối internet và đảm bảo trình duyệt hỗ trợ WebGL</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-pink-300 font-medium">Làm sao để báo lỗi?</h4>
                  <p className="text-gray-400 text-sm">Mô tả chi tiết lỗi gặp phải và gửi qua form liên hệ</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-blue-300 font-medium">Game có phí không?</h4>
                  <p className="text-gray-400 text-sm">Game hoàn toàn miễn phí, bạn có thể donate để ủng hộ nhóm</p>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Thời Gian Phản Hồi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">24h</div>
                    <div className="text-gray-400 text-sm">Phản hồi thường</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400 mb-1">2h</div>
                    <div className="text-gray-400 text-sm">Lỗi nghiêm trọng</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
