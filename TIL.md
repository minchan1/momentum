

# JS



## Searching for Elements

- getElementsByClassName() : 많은 element를 가져올때 씀(array를 반환)
- getElementsByTagName() : name을 할당할 수 있음(array를 반환)
- querySelector : element를 CSS selector방식으로 검색할 수 있음 (ex. h1:first-child)
  단 하나의 element를 return해줌, 첫번째 element만 가져옴
- 조건에 맞는것들을 다 가져오고 싶으면 querySelectorAll (array를 반환)



## Events

- html이 js파일을 load -> document 생성. browser는 우리가 document에 접근할 수 있게 해줌
- element의 내부를 보고 싶으면 console.dir()
- element 중 앞에 on이 붙은 것들은 event임 -> 어떤 동작을 실행하는 것
- eventListener : event를 listen함 → js에게 무슨 event를 listen하고 싶은 지 알려줘야 함
  \- title.addEventListener("click") : 누군가가 title을 click하는 것을 listen할 거임 → 무언가를 해줘야함
- ex)  title.addEventListener("click",handleTitleClick);
  함수명에 ()는 붙이지 않고, js가 실행시키도록 함













