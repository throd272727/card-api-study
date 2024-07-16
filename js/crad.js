window.addEventListener("load", function () {
  // 1. json 호출하고 성공하면
  const jsonUrl = "./api/card.json";
  fetch(jsonUrl)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // 데이터를 기반으로 html 태그 생성
      const result = makeHtmlTag(data);
      return result;
    })
    .catch((error) => {
      console.log(error);
    });

  // 2. html 태그를 만든다.
  function makeHtmlTag(data) {
    // html 태그 글자
    let tag = "";
    // 이미지 경로
    const path = "./images";

    data.forEach((item) => {
      console.log(item);
      const tempTag = `
       <a href="#" class="card">
        <div class="thumbnail">
         <img src="${path}/${item.thumbnail}" alt="썸네일" />
        </div>
        <div class="info">
         <div class="avatar">
          <img src="${path}/${item.avatar}" alt="아바타" />
         </div>
         <div class="desc">
          <span class="title">
           ${item.title}
          </span>
          <div class="nickname">
          ${item.nickname}
           <span>
            <img src="${path}/${item.mark}" alt="인증마크" />
           </span>
          </div>
          <span class="count-publish">조회수 ${item.count}만회 · ${item.publish}일전</span>
          <div class="badge">
           <img src="${path}/${item.badge}" alt="배지" />
          </div>
         </div>
         <div class="icon-more">
          <img src="images/icon-more.svg" alt="더보기" />
         </div>
        </div>
       </a>
      `;

      tag += tempTag;
    });

    // html 배치
    const cardWrapElement = document.querySelector(".card-wrap");
    cardWrapElement.innerHTML = tag;
    return cardWrapElement;
  }
});
