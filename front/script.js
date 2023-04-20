var container = document.getElementById('map');
var options = {
	center: new kakao.maps.LatLng(36.56595967099695, 128.72422806514086),
	level: 8
};

var map = new kakao.maps.Map(container, options);

var zoomControl = new kakao.maps.ZoomControl();

map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

const dataSet = [
    {
        title: "안동 신세계찜닭",
        address: "경북 안동시 번영길 10 신세계찜닭",
        url: "https://map.naver.com/v5/entry/place/35532808?lng=128.7275591&lat=36.5655256&placePath=%2Fhome%3Fentry=pll",
        category: "한식",
        img: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220317_230%2F1647503293191rQgB2_JPEG%2FKakaoTalk_20211221_144918779.jpg"
    },
                
    {
        title: "진성식당",
        address: "경북 안동시 태사길 25 진성식당",
        url: "https://map.naver.com/v5/entry/place/37683813?lng=128.73240760000044&lat=36.5666961999996&placePath=%2Fhome&entry=plt",
        category: "일식",
        img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA0MTJfNjYg%2FMDAxNjgxMzAzMzEyMDg3.amkScZMl9NCjzpSQg6KP0tA7L2XoaBeC2bZeURsWrJ0g.9JTQYVsY8Yg0NlWYxOtp3ft4AkxmDGgTMcAMlPHWOPcg.JPEG.naljini_v%2FIMG_4647.jpg"
    },
    {
        title: "탕화쿵푸마라탕 안동삼산점",
        address: "경북 안동시 중앙로 40-1 2층",
        url: "https://map.naver.com/v5/entry/place/1262434482?lng=128.73092099966743&lat=36.5654289002939&placePath=%2Fhome&entry=plt",
        category: "중식",
        img: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20201208_12%2F1607407249105nRk4V_JPEG%2F2CiRC2gfrRs6EZbP3MJCfN_Q.jpeg.jpg"
    },
    {
        title: "말콥버거",
        address: "경북 안동시 영가로 5 1층",
        url: "https://map.naver.com/v5/entry/place/867780407?lng=128.7327498&lat=36.5637586&placePath=%2Fhome&entry=plt",
        category: "양식",
        img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA0MTdfOTgg%2FMDAxNjgxNzA5MTY4MDU2.1IAg2VKZKvFJ6T_GVSnqpU98GYpgSxj0WIBl4T2Oamwg.cFajsHudZlVpJhGOfSPcr6RaUT566N-sPv7ztDl0Z0kg.JPEG.dlee0206%2FKakaoTalk_20230417_132035750.jpg"
    },
    {
        title: "죽통김밥 옥동점",
        address: "경북 안동시 경북대로 418",
        url: "https://map.naver.com/v5/entry/place/15376527?lng=128.69954100000038&lat=36.56655199999964&placePath=%2Fhome",
        category: "분식",
        img: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200131_85%2F1580430959898yxjUy_JPEG%2FzoIprAxjt0sgkwEq_s5y3MJq.jpg"
    },
    {
        title: "ThanQ coffee",
        address: "경북 안동시 영호2길 15 1층",
        url: "https://map.naver.com/v5/entry/place/36259811?lng=128.7216587001474&lat=36.56130339991051&placePath=%2Fhome&entry=plt&c=15,0,0,0,dh",
        category: "카페",
        img: "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMzAzMTBfNjMg%2FMDAxNjc4NDQxMjg1MzQ5.IEF4D4bzB7Fp4uH4zJVcNipLlvxwGSd3TDJU2ETh9Fwg.8uCmmjR6Ce_A2M9h-TToUO8aHcFmiJkBRiALj0icYtwg.JPEG%2FC507042A-A568-45A6-81A1-13FBDDE4319B.jpeg"
    },
    {
        title: "일직식당",
        address: "경북 안동시 경동로 676 일직식당",
        url: "https://map.naver.com/v5/entry/place/15355074?lng=128.73198200000041&lat=36.56295499999961&placePath=%2Fhome&entry=plt",
        category: "구이",
        img: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20160108_45%2F1452235000704XTLfx_JPEG%2F176058556659640_8.jpg"
    }, 
    {
        title: "회전초밥예서",
        address: "경북 안동시 옥광1길 8-7",
        url: "https://map.naver.com/v5/entry/place/1129388644?lng=128.7036971&lat=36.5630652&placePath=%2Fhome&entry=plt&c=15,0,0,0,dh",
        category: "회/초밥",
        img: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20181119_31%2F15425928784908nirx_JPEG%2F14XR8NisCMXTtqYAA1M1DqyE.jpg"
    },
];

// 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder(); 

// 주소-좌표 변환 함수
function getCoordsByAddress(address){

    return new Promise((resolve, reject) => {
        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(address, function(result, status) {
        // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                resolve(coords);
                return;
            } 
            reject(new Error("getCoordsByAddress Error: not valid Address"));
        }); 
    });
}

setMap(dataSet);  

function getCentent(data){
    // 인포윈도우 가공하기
    return `<div class="infowindow">
    <div class="infowindow-img-container">
      <img src="${data.img}" class="infowindow-img" class="infowindow-img" alt="">
    </div>
    <div class="infowindow-body">
      <h3 class="infowindow-title">${data.title}</h3>
      <p class="infowindow-address">${data.address}</p>
      <a href="${data.url}" class="infowindow-btn" target="_blank"> 더보기 </a>
    </div>
   </div>`;
}

async function setMap(dataSet){
    for (var i = 0; i < dataSet.length; i ++) {

        // 마커를 생성합니다
        let coords = await getCoordsByAddress(dataSet[i].address);
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: coords, // 마커를 표시할 위치
        });

        markerArray.push(marker);

    // 마커에 표시할 인포윈도우를 생성합니다 
    var infowindow = new kakao.maps.InfoWindow({
        content: getCentent(dataSet[i]) // 인포윈도우에 표시할 내용
    });

    infowindowArray.push(infowindow);

    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
    // 이벤트 리스너로는 클로저를 만들어 등록합니다 
    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    kakao.maps.event.addListener(
        marker, 
        'click', 
        makeOverListener(map, marker, infowindow, coords)
        );
    kakao.maps.event.addListener(
        map, 
        'click', 
        makeOutListener(infowindow)
        );
    }
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 

function makeOverListener(map, marker, infowindow, coords) {
    return function() {
        closeInfoWindow();
        infowindow.open(map, marker);

        map.panTo(coords)
    };
}

let infowindowArray = []
function closeInfoWindow(){
    for(let infowindow of infowindowArray){
        infowindow.close();
    }
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}

const categoryMap = {
    korea: "한식",
    china: "중식",
    japan: "일식",
    america: "양식",
    wheat: "분식",
    meat: "구이",
    sushi: "회/초밥",
    cafe: "카페",
};

const categoryList = document.querySelector(".category-list");
categoryList.addEventListener("click", categoryHandler);

function categoryHandler(event) {
    const categoryId = event.target.id;
    const category = categoryMap[categoryId]; 

    // 데이터 분류
    let categorizedDataSet = [];
    for (let data of dataSet) {
        if (data.category === category) {
            categorizedDataSet.push(data);
        }
    }
     // 기존 마커 삭제
  closeMarker();

  // 기존 인포윈도우 닫기
  closeInfoWindow();

  setMap(categorizedDataSet);
}

let markerArray = [];
function closeMarker() {
  for (marker of markerArray) {
    marker.setMap(null);
  }
}
