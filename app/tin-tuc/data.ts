export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  cover?: string;
  youtubeId?: string;
};

export const newsItems: NewsItem[] = [
  {
    slug: "vinacontrol-test",
    title: "Báo cáo kiểm định Vinacontrol cho AQURON 2000",
    date: "26/05/2026",
    summary:
      "Mẫu bê tông phun AQURON 2000 đã đạt kết quả kiểm định độc lập tại Vinacontrol. Hoạt chất thấm sâu mao mạch, khóa lỗ rỗng từ trong, không tạo màng nên không lo bong tróc theo thời gian.",
    cover: "/news/vinacontrol-test/cover.jpg",
  },
  {
    slug: "cau-binh-khanh",
    title: "Cầu Bình Khánh - 1.000 lít AQURON 2000 cho mố cầu, dầm và mối nối",
    date: "20/05/2026",
    summary:
      "Một trong những cột mốc đưa AQURON về Việt Nam. Shimizu thử nghiệm trên dầm bê tông cầu Bình Khánh năm 2023, kết quả dùng 1.000L A2000 để bịt vết nứt và bảo vệ mối nối ICB - không cần thêm lớp màng nào khác.",
    cover: "/news/cau-binh-khanh/cover.jpg",
  },
  {
    slug: "camellia-retreat-villa",
    title: "Camellia Retreat & Villa - bể bơi, sàn mái, tầng hầm sau 4 năm",
    date: "15/05/2026",
    summary:
      "Hai biệt thự cách Hà Nội 50km dùng AQURON 2000 thay toàn bộ màng chống thấm cho hồ bơi, sàn mái bê tông và tầng hầm. Sau 4 năm sử dụng, công trình vẫn nguyên trạng tốt, không xuất hiện thấm hay bong tróc.",
    cover: "/news/camellia-retreat-villa/cover.jpg",
  },
  {
    slug: "ho-boi-dai-lai",
    title: "Hồ bơi Đại Lải - phun AQURON 2000 trực tiếp lên mặt bê tông",
    date: "10/05/2026",
    summary:
      "Biệt thự nghỉ dưỡng gần sân bay Nội Bài, hồ bơi bê tông được phun thẳng AQURON 2000 lên mặt hoàn thiện. Khách hàng sử dụng đến nay không phát sinh khiếu nại về thấm.",
    cover: "/news/ho-boi-dai-lai/cover.jpg",
  },
  {
    slug: "itto-office",
    title: "Văn phòng Itto - sàn mái 400m² không dùng màng",
    date: "05/05/2026",
    summary:
      "Sàn mái bê tông 400m² của văn phòng Itto được thi công AQURON 2000, không sử dụng bất kỳ lớp màng phủ nào sau đó. Sàn mái duy trì tình trạng tốt, không bong tróc.",
    cover: "/news/itto-office/cover.jpg",
  },
  {
    slug: "mo-lao-office",
    title: "Tòa nhà Mỗ Lao - phun A2000 trong 12 giờ đầu sau đổ bê tông",
    date: "01/05/2026",
    summary:
      "Sàn tầng hầm 250m² ở trung tâm Mỗ Lao được phun AQURON 2000 trong vòng 12 giờ đầu sau khi đổ bê tông. Đây là thời điểm vàng để hoạt chất thẩm thấu sâu nhất vào kết cấu.",
    cover: "/news/mo-lao-office/cover.jpg",
  },
  {
    slug: "nha-trang-seapark-villa",
    title: "Biệt thự Nha Trang Seapark - phun A2000 sau 5 giờ đổ bê tông",
    date: "25/04/2026",
    summary:
      "Khí hậu Nha Trang nắng, gió và khô. Đội thi công phun AQURON 2000 chỉ 5 giờ sau khi đổ bê tông để hỗ trợ quá trình bảo dưỡng. Vết nứt chân chim giảm rõ rệt, mặt bê tông đặc chắc ngay sau khi phun, thợ không phải tưới nước bảo dưỡng nhiều như công trình khác.",
    cover: "/news/nha-trang-seapark-villa/cover.jpg",
  },
  {
    slug: "korean-homestay-bac-ninh",
    title: "Homestay chuyên gia Hàn Quốc Bắc Ninh - sàn mái 300m² sau hơn 2 năm",
    date: "20/04/2026",
    summary:
      "Cụm nhà ở chuyên gia Samsung tại Bắc Ninh. Sàn mái 300m² dùng AQURON 2000 để bịt vết nứt và chống thấm mà không cần lớp màng. Sau hơn 2 năm, khách hàng vẫn rất hài lòng với chất lượng.",
    cover: "/news/korean-homestay-bac-ninh/cover.jpg",
  },
  {
    slug: "y20-aged-care",
    title: "Trung tâm dưỡng lão Y20 Thạch Bàn - hai tầng hầm và D-Wall 1.000m²",
    date: "15/04/2026",
    summary:
      "Trung tâm dưỡng lão do tập đoàn Y20 (Nhật Bản) vận hành. Hai tầng hầm có vết nứt trên D-Wall (1.000m²) được xử lý kết hợp PU foam và phun AQURON 2000, sau đó phủ B50 trên lớp vữa. D-Wall hiện đã khô hoàn toàn.",
    cover: "/news/y20-aged-care/cover.jpg",
  },
  {
    slug: "tang-ham-nha-rieng",
    title: "Tầng hầm nhà riêng - xử lý thấm bê tông bằng công nghệ thẩm thấu nano",
    date: "10/04/2026",
    summary:
      "Công trình tầng hầm nhà riêng được xử lý chống thấm bằng công nghệ thẩm thấu nano. Hoạt chất phun/lăn trực tiếp vào nền bê tông, khóa lỗ rỗng từ bên trong, không tạo màng nên không phồng rộp. Thời gian thi công ngắn, ít đục phá kết cấu.",
    cover: "/news/tang-ham-nha-rieng/cover.jpg",
  },
  {
    slug: "ngoc-thuy-house",
    title: "Nhà Ngọc Thụy - sàn mái và sân thượng dùng AQURON 2000",
    date: "05/04/2026",
    summary:
      "Nhà dân khu Ngọc Thụy, Long Biên, Hà Nội. Sàn mái và sân thượng được thi công AQURON 2000 trực tiếp lên mặt bê tông. Không cần thuê thợ chuyên - đội nhà tự lăn/phun được, đúng tiêu chí dễ thi công của sản phẩm.",
    cover: "/news/ngoc-thuy-house/cover.jpg",
  },
  {
    slug: "phun-ngam-nuoc-aquron-2000-thailand",
    title:
      "Khách hàng phun ngâm nước đánh giá chất lượng sau 14 ngày phun AQURON 2000 tại Thailand",
    date: "27/05/2026",
    summary:
      "Khách hàng phun ngâm nước để đánh giá chất lượng sau 14 ngày phun AQURON 2000 tại Thailand. Kết quả thực tế từ thị trường quốc tế.",
    youtubeId: "VhgFk_knUeE",
  },
];
