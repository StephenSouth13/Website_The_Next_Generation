import Link from "next/link"
import { Gamepad2, Github, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Gamepad2 className="h-6 w-6 text-purple-500" />
              <span className="font-bold text-lg bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                The Next Generation
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Một tựa game indie thư giãn được phát triển bởi nhóm sinh viên tại VTC Academy.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold">Điều Hướng</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  Giới Thiệu
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-muted-foreground hover:text-primary">
                  Nhóm Phát Triển
                </Link>
              </li>
              <li>
                <Link href="/play" className="text-muted-foreground hover:text-primary">
                  Chơi Game
                </Link>
              </li>
              <li>
                <Link href="/models" className="text-muted-foreground hover:text-primary">
                  Mô Hình 3D
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">Hỗ Trợ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Liên Hệ
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-muted-foreground hover:text-primary">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Liên Hệ</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com/StephenSouth13" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="mailto:longquachdev@gmail.com" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-xs text-muted-foreground">Email: stephensouth13@gmail.com</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 The Next Generation. Made with <Heart className="inline h-4 w-4 text-red-500" /> by The Next Generation
          </p>
          <p className="text-sm text-muted-foreground">Powered by Unity & React</p>
        </div>
      </div>
    </footer>
  )
}
