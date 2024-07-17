window.addEventListener("load", function () {
  const apiKey = config.apiKey;
  const newsUrl = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${apiKey}`;
  // 1. api 호출하고 성공하면
  fetch(newsUrl)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      const result = makeHtmlTag(data);
      return result;
    })
    .catch((error) => {
      console.log(error);
    });

  // html 태그 생성 함수
  function makeHtmlTag(data) {
    console.log(data.articles);

    const articles = data.articles;
    // html 태그 글자
    let tag = "";

    articles.forEach((article) => {
      const { title, description, url, urlToImage, publishedAt } = article;

      const imageTag = urlToImage
        ? `<div class="thumbnail">
        <a href="${url}" target="_blank" rel="noopener noreferrer">
         <img src="${urlToImage}" alt="thumbnail" />
        </a>       
      </div>`
        : "";

      const tempTag = `
       <div class="card-wrap">
       ${imageTag}   
       <div class="content">
        <h2>
         <a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a>
        </h2>
        <p class="desc">${description}</p>
        <p class="date">${publishedAt}</p>git
       </div>
      </div>
      `;

      tag += tempTag;
    });

    // .card-wrap 요소가 없는 경우, 새로운 컨테이너 생성
    let newsContainer = document.querySelector("#news-container");
    const wrapElement = document.querySelector(".wrap");
    if (!newsContainer) {
      newsContainer = document.createElement("div");
      newsContainer.id = "news-container";
      wrapElement.appendChild(newsContainer);
    }

    // html에 배치
    newsContainer.innerHTML = tag;
    return newsContainer;
  }
});
