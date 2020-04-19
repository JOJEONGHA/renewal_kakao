let data = {
    "menu" : {
        "dept1":["카카오","투자정보","서비스","소셜임팩트","고객지원","인재영입"],
        "카카오" : {
            "dept2":["카카오 소개","카카오 AI","자회사","비즈니스","홍보채널"],
            "카카오 소개":["비전", "카카오문화","걸어온길","CI","윤리규정"],
            "카카오 AI":["소개", "알고리즘 윤리"],
            "자회사":[],
            "비즈니스":["광고 안내","제휴 안내","Kakao for Business"],
            "홍보채널":["보도자료","브랜드 영상","미디어 행성","Kakao Travel Day"]
        },
        "투자정보" : {
            "dept2" : ["경영정보","공시정보","주가정보","재무정보","IR 일정","IR 자료실","증권사커버리지","공고"],
            "경영정보" : ["주주구성","이사회","정관","기업지배구조"],
            "공시정보" : [],
            "주가정보" : [],
            "재무정보" : ["연결재무제표","별도재무제표","신용등급"],
            "IR 일정" : ["IR 행사","주주총회","IR 미팅예약"],
            "IR 자료실" : ["실적발표","정기보고서","IR FAQ"],
            "증권사커버리지" : [],
            "공고" : ["배달정보","공고사항","주주제안권"]
        },
        "서비스" : {
            "dept2" : ["포털","커뮤니케이션","콘텐츠","커머스","게임","핀테크","모빌리티&라이프","소셜임팩트"],
            "포털" : ["Daum","Daum 뉴스","Daum 검색"],
            "커뮤니케이션" : ["카카오톡","카카오스토리","카카오톡 치즈","Daum 메일","Daum 카페","아지트","티스토리","브런치","멜론 아지톡","카카오메일"],
            "콘텐츠" : ["카카오페이지","카카오TV","카카오뮤직","카카오프렌즈","Daum 웹툰","1boon","멜론","멜론티켓"],
            "커머스" : ["카카오톡 선물하기","카카오스타일","카카오톡 쇼핑하기","쇼핑하우"],
            "게임" : ["카카오게임즈"],
            "핀테크" : ["카카오페이"],
            "모빌리티&라이프" : ["카카오 T","카카오 T 대리","카카오내비","카카오맵","카카오버스","카카오지하철","카카오헤어샵"],
            "소셜임팩트" : ["카카오같이가치"]
        },
        "소셜임팩트" : {
            "dept2" : ["소셜임팩트 서비스","사회공헌","상생","제주지역협력","Partners with Kakao"],
            "소셜임팩트 서비스" : ["카카오같이가치","카카오메이커스"],
            "사회공헌" : ["Next","Connect","Kakao Krew"],
            "상생" : ["상생센터","상생서포터즈","Kakao 클래스"],
            "제주지역협력" : ["교육 산학","지역 상생","문화 교류","제주창조경제혁신센터"],
            "Partners with Kakao" : []
        },
        "고객지원" : {
            "dept2" : []
        },
        "인재영입" : {
            "dept2" : []
        }
    }
};

jsonParsing(data);

// data load
let law_json = localStorage.getItem("data");
let obj = JSON.parse(law_json);

// json parsing operation
function jsonParsing(data) {
    let dataJSON = JSON.stringify(data);
    localStorage.setItem("data", dataJSON);
}