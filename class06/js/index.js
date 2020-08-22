// document 가 준비되면 함수를 실행합니다.
// 절차지향
$(document).ready(function() {
  function scrollEvent() {
    // scrollPos = 현재 브라우저의 스크롤값
    var scrollPos = $(document).scrollTop();
    // perPos = 이벤트 시작점의 절대 포지션값
    var perPos = $("#skill_wrapper").position().top;
    //winheight = 현재 브라우져의 높이값
    var winHeight = $("html").innerHeight() / 2;
    // 스크롤값 + 현재브라우저높이값 / 2 가 이벤트시작점보다 크다면
    if (scrollPos+winHeight > perPos) {
      skillAnimated();
    } else { // 스크롤값 + 현재브라우저높이값 / 2 가 이벤트시작점보다 작다면
      return false;
    };
  };
  function skillAnimated() {
    var targetEl = $(".skill_max");
    // each 반복문
    targetEl.each(function(i){
      var $this = $(this);
      var percentage = $this.attr("data");
      // 만약 자기자신이 on클래스를 가지고있다면 함수종료
      if($this.hasClass("on")) {
        return false;
      } else { // 자기자신이 on클래스를 가지고있지 않다면 이벤트 실행
        // on이라는 클래스를 자기자신한테 추가
        $this.addClass("on");
        // 자기자신안에 있는 .skill_per_txt > span에게 퍼센테이지 출력 
        $(".skill_per_txt > span", $this).append(percentage);
        // 자기자신안에 있는 클래스 skill_per한테 함수를 실행
        $(".skill_per",$this).delay(300 * i).animate({
          "width" : percentage
        }, 1000)
      };
    });
  };
  // document에서 스크롤이 일어났을때 함수를 실행합니다.
  $(document).scroll(function() {
    scrollEvent();
  });
  // 최초 페이지 로드시에 함수 1회 실행
  scrollEvent();
});