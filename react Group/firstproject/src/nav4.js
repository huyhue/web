import React from 'react';
export function Nav4() {
    return (
    <> 
<div id="boder">
        <h2 className="h22">TIN TỨC MỚI NHẤT</h2>
        <div className="news">
            <div className="new-item">
                <img src="https://dnuni.fpt.edu.vn/wp-content/uploads/2020/12/VlogforDanangThelethumbnail-700x441.jpg"/>
                <p>Thể lệ Cuộc thi “Vlog for Danang”</p>
            </div>
            <div className="new-item">
                <img src="https://dnuni.fpt.edu.vn/wp-content/uploads/2021/01/OpenMICthumb-700x441.png"/>
                <p>Đêm nhạc Open Mic #3 – Nơi quy tụ những giọng ca vàng nhà F</p>
            </div>
            <div className="new-item">
                <img src="https://dnuni.fpt.edu.vn/wp-content/uploads/2021/01/Bodyshamingthumb-700x441.jpg"/>
                <p>Sinh viên F nhận thức đúng về “Body Shaming”</p>
            </div>
        </div>
        <button className="nut">Xem Thêm ></button>

        <div className="new1">
            <div className="new1-l">
                <h1>TUYỂN SINH</h1>
                <img src="https://dnuni.fpt.edu.vn/wp-content/uploads/2020/09/F-Camp-thumb-700x441.jpg"/>
                <a href="">
                    <h3>Những cột mốc thanh xuân bạn sẽ trải qua tại Đại học FPT</h3>
                </a>
                <span>03/11/2020|0 Comments</span>
                <p>Tuổi trẻ là một hành trình để khám phá và trưởng thành. Đại học FPT là nơi các bạn trẻ được học, được
                    chơi, được trải nghiệm để có 4 năm thanh xuân tràn ngập</p>
            </div>
            <div className="new1-r">
                <h1>CÂU HỎI</h1>
                <ul>
                    <li><a href="">Làm thế nào để trở thành sinh viên của Trường Đại học FPT?</a></li>
                    <li><a href="">Ngoài học phí thì có phát sinh chi phí gì không?</a></li>
                    <li><a href="">Trường có chính sách học bổng không? Nếu muốn có học bổng thì cần đáp ứng điều kiện
                            gì?</a></li>
                    <li><a href="">Khi nào thì tôi có thể nộp hồ sơ vào trường? Và hồ sơ bao gồm những gì?</a></li>
                    <li><a href="">Tôi đã học ở một trường Đại học khác, tôi có thể chuyển sang Đại học FPT để học tiếp
                            không?</a></li>
                    <li><a href="">Tôi tốt nghiệp THPT ở nước ngoài, nếu về Việt Nam tôi có được đăng ký vào học tại Đại
                            học FPT không?</a></li>
                    <li><a href="">Chương trình học của Đại học FPT là giảng dạy bằng Tiếng Anh hay Tiếng Việt?</a></li>
                </ul>
                <button className="nut">Xem Thêm </button>
            </div>
        </div>

        <div className="new2">
            <div className="new2-item ac">
                <i className="far fa-address-book fa-2x"></i>
                <h2>TRẮC NGHIỆM CHỌN NGÀNH NGHỀ</h2>
            </div>
            <div className="new2-item ab">
                <i className="fas fa-suitcase-rolling fa-2x" style={{color: 'aliceblue'}}></i>
                <h2>ĐĂNG KÝ TƯ VẤN</h2>
            </div>
            <div className="new2-item ac">
                <i className="fas fa-graduation-cap fa-2x"></i>
                <h2>HỌC BỔNG TRƯỜNG ĐẠI HỌC FPT</h2>
            </div>
            <div className="new2-item ab">
                <i className="fas fa-school fa-2x" style={{color: 'aliceblue'}}></i>
                <h2>ĐĂNG KÝ DỰ TUYỂN ONLINE</h2>
            </div>
        </div>
    </div>
    </>
    )};
