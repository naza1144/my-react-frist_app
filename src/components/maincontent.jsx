function maincontent() {
  return (
    <main className="container grid grid-cols-1 gap-6 px-4 py-8 mx-auto md:grid-cols-3">
      {newsList.map((news, index) => (
        <article key={index} className="p-4 bg-white shadow rounded-xl">
          <img src={news.image} alt={news.title} className="mb-4 rounded-md" />
          <h3 className="mb-2 text-xl font-semibold">{news.title}</h3>
          <p className="text-sm text-gray-600">{news.description}</p>
        </article>
      ))}
    </main>
  );
}

const newsList = [
  {
    title: "รัฐบาลประกาศนโยบายใหม่",
    description: "รัฐบาลเผยรายละเอียดนโยบายใหม่เพื่อฟื้นฟูเศรษฐกิจหลังโควิด...",
    image: "https://source.unsplash.com/400x200/?news,politics"
  },
  {
    title: "เปิดตัวมือถือ AI รุ่นใหม่",
    description: "บริษัทเทคโนโลยีเปิดตัวสมาร์ตโฟนที่ขับเคลื่อนด้วย AI เต็มรูปแบบ...",
    image: "https://source.unsplash.com/400x200/?technology,news"
  },
  {
    title: "ข่าวด่วน: เหตุการณ์โลก",
    description: "เกิดเหตุการณ์สำคัญในต่างประเทศ มีผลกระทบต่อความมั่นคง...",
    image: "https://source.unsplash.com/400x200/?world,breaking"
  }
];

export default maincontent;