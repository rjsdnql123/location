# locatio

실행하기 전에 src폴더에 env.ts 파일을 만들어 .env의 기능을 하는 파일을 하나 만들어 주어야 합니다.

/src/env.ts

export const MAPS_API_KEY = 'YOU_GOOGLEMAPS_API_KEY';

export const SERVER_PORT = 'YOU_LOCALHOST_IP:8080';

location은 지역기반 커뮤니티 어플리케이션으로 사용자의 해당 지역을 기준으로 같은 지역에서 회원가입한 유저의 게시글만 보여주는 어플리케이션입니다.

# 목적
location은 지역기반 커뮤니티로 지역 경제 발전과 지역의 커뮤니케이션이 주 목적입니다.
각각의 지역에는 생각보다 많은 문화와 축제 등..을 즐길수 있는 문화 시스템이 갖추어 있습니다
허나 관심이 없거나, 찾아보지 않는 이상 많은 홍보가 이루어 지지않고 있고,
지역 사람들은 서울에만 많은 문화시설이 갖추어져 있다고 알고 있습니다.
그로인해 지역 주민들은 자신의 지역 문화시설을 이용하지 않고, 사용자가 없으므로 해당지역에 문화시설은 방치되고 있습니다.
이러한 경제적 문제점을 해결하기 위해 location은 지역 커뮤니티를 이용해 문화를 홍보하고, 지역의 문화시설과 축제를 이용하게 만들고, 문화를 발전시키는 목적을 갖고있니다.

#문화시설 존재를 모를때
```
홍보를 안함, 모름 -> 이용안함 -> 고객없음 -> 수익 창출이 안됨 -> 공연,축제를 하지않음 -> 지역 문화시설 방치 -> 서울로 문화시설 집중.
```
#지역 문화시설을 이용할 때
```
홍보와 커뮤니티로 존재를 앎 -> 문화 시설 이용 -> 수익 창출 -> 또 다른 공연, 문화시설 증가 -> 새로운 문화 시설 이용 -> 지역 경제 발전
```