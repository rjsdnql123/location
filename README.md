

# Location

#### location은 지역기반 커뮤니티 어플리케이션으로 사용자의 해당 지역을 기준으로 같은 지역에서 회원가입한 유저의 게시글만 보여주는 어플리케이션입니다.

#### 현제 refactoring 진행중 입니다.
---

### 앱 시연 YouTube 동영상
[![앱시연](http://img.youtube.com/vi/YHeyyVItN9A/0.jpg)](https://youtu.be/YHeyyVItN9A?t=0s) 

---



### Clone
 - location server 도 clone 하여야 합니다.
 ```
 https://github.com/rjsdnql123/location_server
 ```
 
 
## npm start

```
cd location

npm start
```
 
---

## Index

[1. Locations 란?](#locations-란)

[2. Locations-Page](#locations-page)

[3. Dev](#dev)

---

## Locations 란?

"지역의 문화를 공유하자"

공연, 연극, 전시회가 보고싶으면 어디로 가는가? 


location은 지역기반 커뮤니티로 지역 경제 발전과 지역의 커뮤니케이션이 주 목적입니다. 각각의 지역에는 생각보다 많은 문화와 축제 등..을 즐길수 있는 문화 시스템이 갖추어 있습니다 허나 관심이 없거나, 찾아보지 않는 이상 많은 홍보가 이루어 지지않고 있고, 지역 사람들은 서울에만 많은 문화시설이 갖추어져 있다고 알고 있습니다. 그로인해 지역 주민들은 자신의 지역 문화시설을 이용하지 않고, 사용자가 없으므로 해당지역에 문화시설은 방치되고 있습니다. 이러한 경제적 문제점을 해결하기 위해 location은 지역 커뮤니티를 이용해 문화를 홍보하고, 지역의 문화시설과 축제를 이용하게 만들고, 문화를 발전시키는 목적을 갖고있니다.



### 문화시설 존재를 모를때

홍보를 안함, 모름 -> 이용안함 -> 고객없음 -> 수익 창출이 안됨 -> 공연,축제를 하지않음 -> 지역 문화시설 방치 -> 서울로 문화시설 집중.

### 지역 문화시설을 이용할 때

홍보와 커뮤니티로 존재를 앎 -> 문화 시설 이용 -> 수익 창출 -> 또 다른 공연, 문화시설 증가 -> 새로운 문화 시설 이용 -> 지역 경제 발전


---

## Locations-Page 

#### 다양한 모바일 기기에서 사용할 수 있습니다.
<img src="https://user-images.githubusercontent.com/61114705/91667113-1f5de100-eb3d-11ea-875a-ca94810dfa89.png" width="600px" ></img>

#### 게시글에 댓글과 다양한 사람들의 댓글을 확인 할 수 있습니다.
<img src="https://user-images.githubusercontent.com/61114705/91667054-cbeb9300-eb3c-11ea-8cb6-1abedbbc3cad.png" width="600px" ></img>

#### 다양한 주제로 글을 작성할 수 있습니다.
<img src="https://user-images.githubusercontent.com/61114705/91667068-d9a11880-eb3c-11ea-81dd-4ee80bbdae55.png" width="600px" ></img>

#### 지역 기반으로 "대전" 에 거주하는 사람이 쓴 글을 확인할 수 있습니다.
<img src="https://user-images.githubusercontent.com/61114705/91667070-ddcd3600-eb3c-11ea-8228-16a6ef4124f6.png" width="600px" ></img>

#### 이젠에 내가 쓴 댓글을 볼 수 있습니다.
<img src="https://user-images.githubusercontent.com/61114705/91667075-e291ea00-eb3c-11ea-870c-145ee004d82a.png" width="600px" ></img>
#### 자신의 정보를 확인할 수 있습니다.
<img src="https://user-images.githubusercontent.com/61114705/91667078-e6be0780-eb3c-11ea-9e28-b4b19b391780.png" width="600px" ></img>
---


</div>


## Dev

```
Front-end: React, Redux, typescript, React Native, React Navigation, Expo, styled-component, typescript, react.memo

Back-end: Seqeulize, Mysql, Node.js, dotenv, JWT
```
#### Front
- react.memo를 이용하여 Post-Detail page 의 상태 변화에 따른 페이지 재 랜더링을 막아 평균 20ms→ 10ms로 개선
- 효율적인 상태관리를 위해 상태관리 라이브러리 redux를 활용해 상태 관리
- React Navigation을 활용한 화면 설계 및 구현 : Tab, Stack Navigation 활용한 메인화면 구성
- Axios를 활용하여 댓글, 게시글 등. 서버에 요청 로직 작성
- 크롤링을 활용해 문화시설을 추천하는 기능 작성
- typescript를 활용한 타입 관리

#### Back
- node.js를 활용하여 RESTful하게 서버 route 구축
- JWT-TOKEN을 활용하여 사용자 인증 구축
- 사용자 정보, 게시글, 댓글 정보를 저장하기 위한 DB 스키마 설계 및 구축
- Node.js 의 crypto모듈을 활용하여 비밀번호를 암호화 한뒤 DB저장해 보안성 강화
- Mysql, Sequelize를 활용해 User, Post, Comments 등.. Table 구축
---


