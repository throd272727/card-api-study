# 1 카드 뉴스 API 연동하기

## 1.1 비동기 작업

- Fetch API 기본형

```js
window.addEventListener("load", function () {
 fetch(url)
  .then((response) => {
   console.log(response);
   return response.json();
  })
  .then((data) => {
   console.log(data);
  })
  .catch((error) => {
   console.log(error);
  });
});
```

## 1.2 두줄 이상 말줄임

```css
선택자 {
 display: -webkit-box;
 -webkit-box-orient: vertical;
 overflow: hidden;
 text-overflow: ellipsis;
 -webkit-line-clamp: 3;
 line-height: 1.5;
 max-height: calc(1.5em * 3);
}
```
