$(document).ready(function () {
    let currentIndex = 0;
    const slides = $(".slider img");
    const totalSlides = slides.length;

    // 이미지 슬라이더 이동 함수
    function moveToSlide(index) {
        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        $(".slider").css("transform", "translateX(-" + currentIndex * 100 + "%)");
    }

    // 이전 버튼 클릭 시
    $(".prev").click(function () {
        moveToSlide(currentIndex - 1);
    });

    // 다음 버튼 클릭 시
    $(".next").click(function () {
        moveToSlide(currentIndex + 1);
    });

    // 자동 슬라이딩
    setInterval(function () {
        moveToSlide(currentIndex + 1);
    }, 3000); // 3초마다 자동으로 슬라이드 변경
});

$(function(){
    let 
});