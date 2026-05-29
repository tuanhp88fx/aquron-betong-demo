export type NewsItem = {
  slug: string;
  title: string;
  date?: string;
  summary: string;
  cover?: string;
  youtubeId?: string;
  gallery?: string[];
};

export const newsItems: NewsItem[] = [
  {
    slug: "vinacontrol-test",
    title: "Kiểm định chất lượng",
    summary:
      "Tổng hợp phiếu kết quả thử nghiệm Vinacontrol cho các vật liệu chống thấm công nghệ Úc như Waterpel/AQURON. Kết quả thể hiện hiệu quả giảm hút nước rõ rệt, phù hợp định hướng chống thấm thẩm thấu sâu, khóa lỗ rỗng từ bên trong bê tông.",
    cover: "/news/vinacontrol-test/cover.jpg",
    gallery: ["/news/vinacontrol-test/01.jpg", "/news/vinacontrol-test/02.jpg", "/news/vinacontrol-test/03.jpg", "/news/vinacontrol-test/04.jpg", "/news/vinacontrol-test/05.jpg"],
  },
  {
    slug: "cau-binh-khanh",
    title: "Cầu Bình Khánh - 1.000 lít AQURON 2000 cho mố cầu, dầm và mối nối",
    date: "20/05/2026",
    summary:
      "Một trong những cột mốc đưa AQURON về Việt Nam. Shimizu thử nghiệm trên dầm bê tông cầu Bình Khánh năm 2023, kết quả dùng 1.000L A2000 để bịt vết nứt và bảo vệ mối nối ICB - không cần thêm lớp màng nào khác.",
    cover: "/news/cau-binh-khanh/cover.jpg",
    gallery: ["/news/cau-binh-khanh/01.jpg", "/news/cau-binh-khanh/02.jpg", "/news/cau-binh-khanh/03.jpg", "/news/cau-binh-khanh/04.jpg", "/news/cau-binh-khanh/05.jpg", "/news/cau-binh-khanh/06.jpg", "/news/cau-binh-khanh/07.jpg", "/news/cau-binh-khanh/08.jpg"],
  },
  {
    slug: "camellia-retreat-villa",
    title: "Camellia Retreat & Villa - bể bơi, sàn mái, tầng hầm sau 4 năm",
    date: "15/05/2026",
    summary:
      "Hai biệt thự cách Hà Nội 50km dùng AQURON 2000 thay toàn bộ màng chống thấm cho hồ bơi, sàn mái bê tông và tầng hầm. Sau 4 năm sử dụng, công trình vẫn nguyên trạng tốt, không xuất hiện thấm hay bong tróc.",
    cover: "/news/camellia-retreat-villa/cover.jpg",
    gallery: ["/news/camellia-retreat-villa/01.jpg", "/news/camellia-retreat-villa/02.jpg", "/news/camellia-retreat-villa/03.jpg", "/news/camellia-retreat-villa/04.jpg", "/news/camellia-retreat-villa/05.jpg", "/news/camellia-retreat-villa/06.jpg", "/news/camellia-retreat-villa/07.jpg"],
  },
  {
    slug: "ho-boi-dai-lai",
    title: "Hồ bơi Đại Lải - phun AQURON 2000 trực tiếp lên mặt bê tông",
    date: "10/05/2026",
    summary:
      "Biệt thự nghỉ dưỡng gần sân bay Nội Bài, hồ bơi bê tông được phun thẳng AQURON 2000 lên mặt hoàn thiện. Khách hàng sử dụng đến nay không phát sinh khiếu nại về thấm.",
    cover: "/news/ho-boi-dai-lai/cover.jpg",
    gallery: ["/news/ho-boi-dai-lai/01.jpg", "/news/ho-boi-dai-lai/02.jpg", "/news/ho-boi-dai-lai/03.jpg", "/news/ho-boi-dai-lai/04.jpg", "/news/ho-boi-dai-lai/05.jpg", "/news/ho-boi-dai-lai/06.jpg", "/news/ho-boi-dai-lai/07.jpg", "/news/ho-boi-dai-lai/08.jpg"],
  },
  {
    slug: "itto-office",
    title: "Văn phòng Itto - sàn mái 400m² không dùng màng",
    date: "05/05/2026",
    summary:
      "Sàn mái bê tông 400m² của văn phòng Itto được thi công AQURON 2000, không sử dụng bất kỳ lớp màng phủ nào sau đó. Sàn mái duy trì tình trạng tốt, không bong tróc.",
    cover: "/news/itto-office/cover.jpg",
    gallery: ["/news/itto-office/01.jpg", "/news/itto-office/02.jpg", "/news/itto-office/03.jpg", "/news/itto-office/04.jpg", "/news/itto-office/05.jpg", "/news/itto-office/06.jpg", "/news/itto-office/07.jpg", "/news/itto-office/08.jpg"],
  },
  {
    slug: "mo-lao-office",
    title: "Tòa nhà Mỗ Lao - phun A2000 trong 12 giờ đầu sau đổ bê tông",
    date: "01/05/2026",
    summary:
      "Sàn tầng hầm 250m² ở trung tâm Mỗ Lao được phun AQURON 2000 trong vòng 12 giờ đầu sau khi đổ bê tông. Đây là thời điểm vàng để hoạt chất thẩm thấu sâu nhất vào kết cấu.",
    cover: "/news/mo-lao-office/cover.jpg",
    gallery: ["/news/mo-lao-office/01.jpg", "/news/mo-lao-office/02.jpg", "/news/mo-lao-office/03.jpg", "/news/mo-lao-office/04.jpg", "/news/mo-lao-office/05.jpg", "/news/mo-lao-office/06.jpg", "/news/mo-lao-office/07.jpg", "/news/mo-lao-office/08.jpg"],
  },
  {
    slug: "nha-trang-seapark-villa",
    title: "Biệt thự Nha Trang Seapark - phun A2000 sau 5 giờ đổ bê tông",
    date: "25/04/2026",
    summary:
      "Khí hậu Nha Trang nắng, gió và khô. Đội thi công phun AQURON 2000 chỉ 5 giờ sau khi đổ bê tông để hỗ trợ quá trình bảo dưỡng. Vết nứt chân chim giảm rõ rệt, mặt bê tông đặc chắc ngay sau khi phun, thợ không phải tưới nước bảo dưỡng nhiều như công trình khác.",
    cover: "/news/nha-trang-seapark-villa/cover.jpg",
    gallery: ["/news/nha-trang-seapark-villa/01.jpg", "/news/nha-trang-seapark-villa/02.jpg", "/news/nha-trang-seapark-villa/03.jpg", "/news/nha-trang-seapark-villa/04.jpg", "/news/nha-trang-seapark-villa/05.jpg", "/news/nha-trang-seapark-villa/06.jpg", "/news/nha-trang-seapark-villa/07.jpg", "/news/nha-trang-seapark-villa/08.jpg"],
  },
  {
    slug: "korean-homestay-bac-ninh",
    title: "Homestay chuyên gia Hàn Quốc Bắc Ninh - sàn mái 300m² sau hơn 2 năm",
    date: "20/04/2026",
    summary:
      "Cụm nhà ở chuyên gia Samsung tại Bắc Ninh. Sàn mái 300m² dùng AQURON 2000 để bịt vết nứt và chống thấm mà không cần lớp màng. Sau hơn 2 năm, khách hàng vẫn rất hài lòng với chất lượng.",
    cover: "/news/korean-homestay-bac-ninh/cover.jpg",
    gallery: ["/news/korean-homestay-bac-ninh/01.jpg", "/news/korean-homestay-bac-ninh/02.jpg", "/news/korean-homestay-bac-ninh/03.jpg", "/news/korean-homestay-bac-ninh/04.jpg", "/news/korean-homestay-bac-ninh/05.jpg", "/news/korean-homestay-bac-ninh/06.jpg"],
  },
  {
    slug: "y20-aged-care",
    title: "Trung tâm dưỡng lão Y20 Thạch Bàn - hai tầng hầm và D-Wall 1.000m²",
    date: "15/04/2026",
    summary:
      "Trung tâm dưỡng lão do tập đoàn Y20 (Nhật Bản) vận hành. Hai tầng hầm có vết nứt trên D-Wall (1.000m²) được xử lý kết hợp PU foam và phun AQURON 2000, sau đó phủ B50 trên lớp vữa. D-Wall hiện đã khô hoàn toàn.",
    cover: "/news/y20-aged-care/cover.jpg",
    gallery: ["/news/y20-aged-care/01.jpg", "/news/y20-aged-care/02.jpg", "/news/y20-aged-care/03.jpg", "/news/y20-aged-care/04.jpg", "/news/y20-aged-care/05.jpg", "/news/y20-aged-care/06.jpg"],
  },
  {
    slug: "tang-ham-nha-rieng",
    title: "Tầng hầm nhà riêng - xử lý thấm bê tông bằng công nghệ thẩm thấu nano",
    date: "10/04/2026",
    summary:
      "Công trình tầng hầm nhà riêng được xử lý chống thấm bằng công nghệ thẩm thấu nano. Hoạt chất phun/lăn trực tiếp vào nền bê tông, khóa lỗ rỗng từ bên trong, không tạo màng nên không phồng rộp. Thời gian thi công ngắn, ít đục phá kết cấu.",
    cover: "/news/tang-ham-nha-rieng/cover.jpg",
    gallery: ["/news/tang-ham-nha-rieng/01.jpg", "/news/tang-ham-nha-rieng/02.jpg", "/news/tang-ham-nha-rieng/03.jpg", "/news/tang-ham-nha-rieng/04.jpg"],
  },
  {
    slug: "ngoc-thuy-house",
    title: "Nhà Ngọc Thụy - sàn mái và sân thượng dùng AQURON 2000",
    date: "05/04/2026",
    summary:
      "Nhà dân khu Ngọc Thụy, Long Biên, Hà Nội. Sàn mái và sân thượng được thi công AQURON 2000 trực tiếp lên mặt bê tông. Không cần thuê thợ chuyên - đội nhà tự lăn/phun được, đúng tiêu chí dễ thi công của sản phẩm.",
    cover: "/news/ngoc-thuy-house/cover.jpg",
    gallery: ["/news/ngoc-thuy-house/01.jpg", "/news/ngoc-thuy-house/02.jpg", "/news/ngoc-thuy-house/03.jpg", "/news/ngoc-thuy-house/04.jpg", "/news/ngoc-thuy-house/05.jpg", "/news/ngoc-thuy-house/06.jpg", "/news/ngoc-thuy-house/07.jpg"],
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



