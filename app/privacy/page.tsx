import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chính sách quyền riêng tư | Chống Thấm Nano",
  description:
    "Chính sách quyền riêng tư cho website chongthamnano.com và app AQURON CT Nano Tools.",
  alternates: {
    canonical: "https://www.chongthamnano.com/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-[#1a1a1a]">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-2 text-3xl font-bold uppercase tracking-tight">
          Chính sách quyền riêng tư
        </h1>
        <p className="mb-10 text-sm text-gray-500">Cập nhật: 26/05/2026</p>

        <section className="space-y-8 leading-relaxed">
          <div>
            <h2 className="mb-3 text-xl font-semibold">1. Phạm vi áp dụng</h2>
            <p>
              Chính sách này áp dụng cho website{" "}
              <strong>chongthamnano.com</strong> và ứng dụng{" "}
              <strong>AQURON CT Nano Tools</strong> dùng để quản lý nội dung
              Fanpage Facebook <em>Chống Thấm Nano Công Nghệ Úc</em>.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold">2. Dữ liệu thu thập</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Thông tin liên hệ khách hàng tự cung cấp khi inbox/comment trên
                Fanpage hoặc gọi hotline (số điện thoại, hình ảnh hiện trạng
                công trình).
              </li>
              <li>
                Thông tin Fanpage do Meta cấp qua API: page_id, fan_count, danh
                sách bài viết của chính Page (chỉ truy cập Page do chủ sở hữu
                ủy quyền).
              </li>
            </ul>
            <p className="mt-3">
              Chúng tôi <strong>không thu thập dữ liệu cá nhân của người dùng
              Facebook ngoài Page chủ sở hữu</strong>; không truy cập danh sách
              bạn bè, tin nhắn riêng tư hay hành vi duyệt web của bất kỳ ai.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold">3. Mục đích sử dụng</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Tư vấn giải pháp chống thấm phù hợp với hiện trạng công trình.</li>
              <li>Đăng nội dung sản phẩm, hình ảnh dự án lên Fanpage chính chủ.</li>
              <li>Quản lý lịch đăng và phản hồi bình luận của Fanpage.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold">4. Chia sẻ dữ liệu</h2>
            <p>
              Chúng tôi <strong>không bán, không cho thuê</strong> dữ liệu
              khách hàng cho bên thứ ba. Dữ liệu chỉ được dùng nội bộ để liên
              hệ tư vấn và lưu hồ sơ bảo hành công trình.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold">5. Lưu trữ và bảo mật</h2>
            <p>
              Dữ liệu Page access token được lưu trên máy chủ nội bộ, mã hóa,
              không upload lên dịch vụ công cộng. Chỉ chủ sở hữu Page được cấp
              quyền truy cập. Khi không còn nhu cầu sử dụng, dữ liệu được xóa
              vĩnh viễn.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold">6. Quyền của người dùng</h2>
            <p>
              Người dùng có quyền yêu cầu xem, chỉnh sửa hoặc xóa dữ liệu cá
              nhân đã cung cấp bằng cách liên hệ qua các kênh dưới đây. Chúng
              tôi xử lý yêu cầu trong vòng 7 ngày làm việc.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold">7. Liên hệ</h2>
            <ul className="space-y-2">
              <li>
                <strong>Hotline / Zalo:</strong> 0904 128 909
              </li>
              <li>
                <strong>Fanpage:</strong>{" "}
                <a
                  href="https://www.facebook.com/ChongThamNanoUc"
                  className="text-[#0c3957] underline"
                >
                  Chống Thấm Nano Công Nghệ Úc
                </a>
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a href="https://www.chongthamnano.com" className="text-[#0c3957] underline">
                  chongthamnano.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold">
              8. Yêu cầu xóa dữ liệu Facebook
            </h2>
            <p>
              Nếu bạn muốn xóa toàn bộ dữ liệu mà ứng dụng AQURON CT Nano Tools
              đã lưu liên quan đến tài khoản Facebook của bạn, vui lòng gửi
              email kèm yêu cầu tới <strong>tuanhp88fx@gmail.com</strong> với
              tiêu đề <em>"Xóa dữ liệu Facebook"</em>. Chúng tôi xử lý trong
              vòng 7 ngày.
            </p>
          </div>
        </section>

        <p className="mt-12 text-sm">
          <a href="/" className="text-[#0c3957] underline">
            ← Quay về trang chủ
          </a>
        </p>
      </div>
    </main>
  )
}
