두번째부터
git add .
git commit -m "😤 다시 한번 커밋"
git push -u origin main


12
react-router-dom : React.js 기반의 웹 애플리케이션에서 라우팅(주소)을 관리하기 위한 라이브러리입니다
"rafce"는 간단하고 간결한 컴포넌트를 생성할 때 사용하며, 주로 함수형 프로그래밍 스타일을 선호하는 개발자들에게 적합합니다.SCSS는 CSS의 확장 버전으로, CSS의 단점을 보완하고 개발자들에게 더 편리한 방식으로 스타일 시트를 작성할 수 있도록 도와주는 전처리기(preprocessor)입니다. 
                                

SCSS는 SASS(Syntactically Awesome Style Sheets)라는 원래 버전의 상위집합(superset)으로, CSS와 거의 동일한 구문을 사용하면서도 추가적인 기능과 유용한 문법을 제공합니다. 
                            
- 변수(Variables) : $ 기호를 사용하여 변수를 선언하고, 변수를 이용하여 스타일 값을 저장하고 재사용할 수 있습니다. 이를 통해 스타일 시트를 유지보수하기 쉽고 가독성이 좋게 만들어 줍니다.
- 중첩(Nesting) : 스타일 규칙을 중첩하여 DOM 트리의 구조와 일치시킬 수 있습니다. 이를 통해 스타일 시트의 계층 구조를 명확하게 표현할 수 있으며, 중첩된 요소의 스타일을 쉽게 찾고 수정할 수 있습니다.
- 믹스인(Mixins) : @mixin 지시어를 사용하여 스타일 규칙들을 정의하고, @include 지시어를 사용하여 해당 믹스인을 적용할 수 있습니다. 이를 통해 스타일 규칙들을 재사용하거나, 여러 스타일 규칙들을 하나로 묶어 사용할 수 있습니다.
- 상속(Inheritance) : @extend 지시어를 사용하여 스타일 규칙을 상속할 수 있습니다. 이를 통해 비슷한 스타일들을 그룹화하고 관리할 수 있으며, 스타일 코드의 중복을 줄일 수 있습니다.
- 조건문(Conditionals) : @if, @else if, @else와 같은 조건문을 사용하여 특정 조건에 따라 다른 스타일 규칙을 적용할 수 있습니다.
- 반복문(Loops) : @for, @each, @while과 같은 반복문을 사용하여 스타일 규칙을 반복해서 생성할 수 있습니다.



##1일차
1. node.js 다운로드
2. https://git-scm.com/  깃 다운로드 2.43.0  64bit
3. VSC(비주얼스트디오코드)다운로드
   - 확장 : ES7+ React/Redux/React-Native snippets 다운로드
4. VSC실행 - 터미널 -  npx create-react-app 생성할디렉토리명

- $ npm install react-router-dom :리액트 애플리케이션에서 라우팅 기능 제공페키지
- $ npm install gsap : GSAP는 웹애니메이션구현을위한 플러그인
- $ npm install sass : CSS확장문법제공 CSS작성시 변수 중첩규칙 함수, 믹스인등활용됨.
- $ npm install @studio-freight/lenis : 스무스 효과를 주기위한 파일
- npm install : 번전에 맞게 재설치 합니다.


git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/johyenho/react_2024.git
git push -u origin main