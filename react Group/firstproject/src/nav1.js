import React from 'react';
export function Nav1() {
    return (
    <> 
    <div className="big-background">
        <div className="first">
            <p>Đại học FPT Đà Nẵng</p>
            <div className="first-l">
                <i className="fab fa-facebook-square fa-2x"></i>
                <i className="fab fa-youtube fa-2x"></i>
                <i className="fab fa-instagram fa-2x"></i>
            </div>
        </div>
        <div className="nav-pof">
            <div className="image">
                <img src="https://dnuni.fpt.edu.vn/wp-content/uploads/2021/01/logo.png" />
            </div>
            <div className="col-2 col-m-2">
                <a href="index.html"><i className="fas fa-home fa-3x"></i></a>
            </div>
            <div className="col-2 col-m-2">
                <p>Giới thiệu</p>
            </div>
            <div className="col-2 col-m-2">
                <p>Ngành đào tạo</p>
            </div>
            <div className="col-2 col-m-2">
                <p>Tuyển sinh</p>
            </div>
            <div className="col-2 col-m-2">
                <p>Tin tức</p>
            </div>
            <div className="col-2 col-m-2">
                <p>Liên hệ</p>
            </div>
        </div>
        <div className="image1">
            
        </div>
    </div>
    </> 
    );
}