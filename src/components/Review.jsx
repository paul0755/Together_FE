import React from "react";
import ReviewSlide from "./ReviewSlide";

export default function Review() {
  return (
    <div className="Union">
      <div className="Union1">
        <div className="Vector1"></div>
        <div className="Vector2"></div>
      </div>
      <div className="Rectangle">
        <div className="Rectangle-font1">
          동반인 만남 이후 솔직한 후기를 만나보세요
        </div>
        <div className="Rectangle-font2">
          매칭 시작 전, 나의 매칭에 도움이 되는 후기를 알고 싶다면? 만남 이후,
          나의 솔직한 후기를 남기고 싶다면?
          <br /> 투게더 후기를 통해 다른 사람들의 만남 후기를 참고하고
          해시태그와 별점 남기기, 간단한 느낀점 작성을 통해 만남 이후 나의
          솔직한 후기도 작성해보세요!
        </div>
        <button className="Review-button">후기 작성하기</button>
        <ReviewSlide />
      </div>
    </div>
  );
}
