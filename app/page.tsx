"use client";

import { useEffect, useState } from "react";
import { Deck, Slide, Stack } from "@revealjs/react";

function PhotoPlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`photo-placeholder ${className}`} role="img" aria-label={`Khung ảnh: ${label}`}>
      <span className="photo-spark" aria-hidden="true">✳</span>
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><rect x="7" y="9" width="34" height="30" rx="5" /><circle cx="18" cy="19" r="3" /><path d="m10 34 10-10 7 7 5-5 7 8" /></svg>
      <strong>{label}</strong>
      <small>THAY BẰNG ẢNH CỦA BẠN</small>
    </div>
  );
}

function Label({ number, children }: { number: string; children: string }) {
  return <div className="slide-label"><span>{number}</span><i />{children}<b aria-hidden="true">✳</b></div>;
}

export default function Home() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => setMobile(window.matchMedia("(max-width: 700px)").matches);
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <main className={`recap-app${mobile ? " is-mobile" : ""}`}>
      <header className="recap-header">
        <a className="recap-brand" href="#/" aria-label="Về trang đầu">
          <span className="brand-icon">R<small>✳</small></span>
          <span>CLB ROBOTICS<small>KHÓA 18 · 2026</small></span>
        </a>
        <span className="header-caption">MỘT NĂM ĐÁNG NHỚ</span>
        <span className="nav-hint">VUỐT ĐỂ KHÁM PHÁ <b>↓</b></span>
      </header>

      <section className="presentation" aria-label="Hành trình Robotics Khóa 18">
        <Deck config={{
          width: mobile ? 390 : 1280,
          height: mobile ? 844 : 720,
          margin: mobile ? 0.045 : 0.06,
          minScale: 0.2,
          maxScale: 1.5,
          controls: true,
          progress: true,
          slideNumber: "c/t",
          hash: true,
          mouseWheel: true,
          touch: true,
          transition: "slide",
          backgroundTransition: "fade",
        }}>
          <Stack>
            <Slide className="story-slide">
              <div className="story-page cover-page">
                <div className="cover-orbit orbit-a" aria-hidden="true" /><div className="cover-orbit orbit-b" aria-hidden="true" />
                <div className="cover-top"><span>CLB ROBOTICS · HKI</span><span>NHẬT KÝ 2026</span></div>
                <div className="cover-main">
                  <div className="cover-copy"><p className="eyebrow">✳ MỘT HÀNH TRÌNH · NGÀN KỶ NIỆM</p><h1>CHÚNG MÌNH<br />ĐÃ <em>LÀM ĐƯỢC!</em></h1><p className="cover-subtitle">12 tuần cùng học, cùng chế tạo,<br />cùng lớn lên bên nhau.</p><span className="hello-pill">Khóa 18 — Xin chào! 👋</span></div>
                  <div className="cover-photo-wrap"><PhotoPlaceholder label="Ảnh tập thể yêu thích của câu lạc bộ" className="cover-photo" /><span className="photo-sticker">THANH XUÂN<br />CỦA CHÚNG MÌNH ♥</span></div>
                </div>
                <div className="cover-bottom"><span>KÉO XUỐNG ĐỂ XEM LẠI KỶ NIỆM</span><span>01 — 06 ↓</span></div>
              </div>
            </Slide>

            <Slide className="story-slide">
              <div className="story-page memory-page memory-peach">
                <Label number="01">NGÀY ĐẦU GẶP GỠ</Label>
                <div className="memory-layout"><div className="memory-copy"><p className="eyebrow">05 THÁNG 09 · CLUB DAY</p><h2>Một lời chào.<br /><em>Một khởi đầu.</em></h2><p>Bàn đầy linh kiện, đầu đầy câu hỏi, và thật nhiều gương mặt mới. Ngày hội câu lạc bộ đã mở ra hành trình của tụi mình.</p><div className="memory-tags"><span>TÒ MÒ</span><span>GẶP GỠ</span><span>ROBOTICS</span></div></div><PhotoPlaceholder label="Ngày hội câu lạc bộ và những gương mặt đầu tiên" className="memory-photo" /></div>
                <div className="page-footer"><span>MỌI ĐIỀU LỚN LAO ĐỀU BẮT ĐẦU TỪ ĐÂY.</span><span>HKI · 2026</span></div>
              </div>
            </Slide>

            <Slide className="story-slide">
              <div className="story-page memory-page memory-pink">
                <Label number="02">TỤI MÌNH THÀNH MỘT ĐỘI</Label>
                <div className="memory-layout"><div className="memory-copy"><p className="eyebrow">BUỔI HỌP ĐẦU TIÊN</p><h2>Ý tưởng đầu tiên.<br /><em>Đồng đội đầu tiên.</em></h2><p>Tụi mình làm quen, chia sẻ những ý tưởng có phần điên rồ, rồi cùng phác thảo xem cả đội có thể tạo nên điều gì.</p><ul className="agenda-list"><li><span>01</span>Làm quen với nhau <b>↗</b></li><li><span>02</span>Kể ý tưởng thật to <b>↗</b></li><li><span>03</span>Bắt tay vào kế hoạch <b>↗</b></li></ul></div><PhotoPlaceholder label="Buổi họp đầu tiên, cùng lên kế hoạch" className="memory-photo" /></div>
                <div className="page-footer"><span>Ý TƯỞNG HAY HƠN KHI ĐƯỢC CHIA SẺ.</span><span>HKI · 2026</span></div>
              </div>
            </Slide>

            <Slide className="story-slide">
              <div className="story-page memory-page memory-yellow">
                <Label number="03">BẮT TAY VÀO CHẾ TẠO</Label>
                <div className="memory-layout"><div className="memory-copy"><p className="eyebrow">TUẦN 01 · BUỔI HỌC ĐẦU TIÊN</p><h2>Từ câu hỏi<br /><em>đến sản phẩm.</em></h2><p>12 tuần học bằng cách tự tay làm. Khởi đầu là những kiến thức cơ bản, vài sợi dây rối và vô số câu hỏi hay ho.</p><div className="course-steps"><span className="active"><b>01</b>Khám phá</span><i /><span><b>02</b>Thiết kế</span><i /><span><b>03</b>Chế tạo</span></div></div><PhotoPlaceholder label="Buổi học robotics đầu tiên" className="memory-photo" /></div>
                <div className="page-footer"><span>THỬ NGHIỆM · SAI MỘT CHÚT · THỬ LẠI.</span><span>HKI · 2026</span></div>
              </div>
            </Slide>

            <Slide className="story-slide">
              <div className="story-page games-page">
                <Label number="04">HỌC MÀ CHƠI · CHƠI MÀ HỌC</Label>
                <div className="games-heading"><div><p className="eyebrow">KHOẢNH KHẮC KHÔNG THỂ THIẾU</p><h2>Vừa vui hết nấc,<br /><em>vừa lên tay.</em></h2></div><p>Thử, sai, cười thật to rồi thử lại. Đây là vài trò tụi mình nhớ nhất!</p></div>
                <div className="game-grid">
                  <article className="game-card game-coral"><PhotoPlaceholder label="Khoảnh khắc đua robot" className="game-photo" /><span>01 · ĐUA ROBOT</span><h3>Robot, xuất phát!</h3><p>Lắp nhanh, cổ vũ còn nhanh hơn.</p></article>
                  <article className="game-card game-lilac"><PhotoPlaceholder label="Thử thách làm việc nhóm" className="game-photo" /><span>02 · THỬ THÁCH ĐỘI</span><h3>Cùng nhau giải mã</h3><p>Một nhiệm vụ, cả đống ý tưởng.</p></article>
                  <article className="game-card game-orange"><PhotoPlaceholder label="Trò chơi lập trình vui nhộn" className="game-photo" /><span>03 · CODE & SÁNG TẠO</span><h3>Sửa lỗi cũng vui</h3><p>Gỡ từng bug, vui từng chút.</p></article>
                </div>
                <div className="page-footer"><span>CHƠI HẾT MÌNH, HỌC HẾT Ý.</span><span>HKI · 2026</span></div>
              </div>
            </Slide>

            <Slide className="story-slide">
              <div className="story-page finale-page">
                <Label number="05" >NHÌN LẠI CHẶNG ĐƯỜNG</Label>
                <div className="finale-layout"><div className="finale-copy"><p className="eyebrow">12 TUẦN · MỘT ĐỘI</p><h2>Tụi mình<br /><em>đã trưởng thành.</em></h2><p>Không chỉ là những chú robot. Tụi mình có thêm kỹ năng mới, những người bạn tốt, ý tưởng lớn và sự tự tin để bắt đầu điều tiếp theo.</p><div className="complete-stamp">KHÓA HỌC<br />HOÀN THÀNH <span>✓</span></div></div><PhotoPlaceholder label="Ảnh ăn mừng hoặc tốt nghiệp của cả đội" className="finale-photo" /></div>
                <div className="page-footer"><span>CẢM ƠN VÌ ĐÃ CÙNG NHAU TẠO NÊN ĐIỀU NÀY.</span><span>HKI · 2026</span></div>
              </div>
            </Slide>

            <Slide className="story-slide">
              <div className="story-page thanks-page">
                <span className="thanks-spark" aria-hidden="true">✳</span><p className="eyebrow">GỬI ĐẾN TẤT CẢ NHỮNG NGƯỜI ĐÃ CÙNG TẠO NÊN HÀNH TRÌNH NÀY</p>
                <h2>Đây chỉ mới là<br /><em>khởi đầu thôi!</em></h2>
                <p>Cảm ơn Khóa 18 vì một hành trình thật đáng nhớ.<br />Cứ tò mò, cứ sáng tạo, cứ cùng nhau chế tạo nhé!</p>
                <span className="thanks-signoff">HẸN GẶP LẠI! ♥</span>
                <div className="page-footer"><span>CLB ROBOTICS · HKI</span><span>KHÓA 18 · 2026</span></div>
              </div>
            </Slide>
          </Stack>
        </Deck>
      </section>
    </main>
  );
}
