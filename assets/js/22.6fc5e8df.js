(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{311:function(t,s,r){"use strict";r.r(s);var e=r(10),a=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"백엔드-서버에-https-적용하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#백엔드-서버에-https-적용하기"}},[t._v("#")]),t._v(" 백엔드 서버에 https 적용하기")]),t._v(" "),s("blockquote",[s("p",[t._v("프론트 서버를 배포하고 백엔드 서버에 접근하지 못하는 문제가 발생했다.")])]),t._v(" "),s("h2",{attrs:{id:"문제-https-프론트-서버에서-http-백엔드-서버로-요청을-진행할때-발생하는-문제"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#문제-https-프론트-서버에서-http-백엔드-서버로-요청을-진행할때-발생하는-문제"}},[t._v("#")]),t._v(" 문제 : https 프론트 서버에서 http 백엔드 서버로 요청을 진행할때 발생하는 문제")]),t._v(" "),s("p",[t._v("현재 나의 EC2 서버위에 올라간 API 서버 접근은 https가 세팅되어있지 않다 어떻게 해야할까?")]),t._v(" "),s("p",[t._v("옛날엔 EC2 서버에 SSL 인증서를 직접 설치하는 방식으로 https 를 달았지만 무료 인증서라 기간이 지나면 계속 갱신해야 되는 문제가 있다. 어떤 분들은 cron 스케줄링까지 걸어서 인증서 갱신을 매주, 90일마다 갱신을 시도하거나 인증서 기간을 10년치 주는 회사를 찾아서 사용하기도 한다. 다른 방법을 찾아보았다.")]),t._v(" "),s("p",[t._v("제일 흔한 방법은 도메인을 구매, 로드밸런서를 생성하여 ssl 인증서를 등록하고 ec2 서버로 접근 시키는 방법이다.\n작업이 잘 안됬다\n그래서 도메인 없이도 https를 할수 없을까 일주일을 찾아보았다.")]),t._v(" "),s("p",[t._v("Caddy 는 https를 붙여주는 DNS라고 한다. 오픈소스이고 무료로 사용할 수 있다.")]),t._v(" "),s("img",{attrs:{src:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fcaddy.community%2Ft%2Fusing-caddy-as-a-reverse-proxy-in-a-home-network%2F9427&psig=AOvVaw2touZiE6xLD6FDqn608sTx&ust=1718005816784000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCe78SEzoYDFQAAAAAdAAAAABAE"}}),t._v(" "),s("p",[s("img",{attrs:{src:"0dbf52c145819810e48c366a00145608e288b8f8.png",alt:"img"}}),t._v("\nEC2 서버에 인바운드 규칙에도 22, 80, 443 을 열어주는건 무조건 해야하고")]),t._v(" "),s("p",[t._v("EC2 서버에 https 로 접근을 시도하면 Caddy가 그걸 받아서 Reverse Proxy를 해주는 방식이다")]),t._v(" "),s("p",[t._v("Caddy 를 실행하면 자동으로 ssl 인증서를 발급해서 사용하는 방식이다 너무 간편하고 좋다!")]),t._v(" "),s("p",[t._v("Caddy 공식문서도 있으니 참고하면 매우 좋다")]),t._v(" "),s("hr"),t._v(" "),s("h5",{attrs:{id:"또다른-방법-docker에서-certbot을-실행하여-인증서를-발급"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#또다른-방법-docker에서-certbot을-실행하여-인증서를-발급"}},[t._v("#")]),t._v(" 또다른 방법 Docker에서 CertBot을 실행하여 인증서를 발급")]),t._v(" "),s("p",[t._v("https://velog.io/@jungsangu/Docker%EB%A1%9C-Lets-Encrypt-%EC%9D%B8%EC%A6%9D%EC%84%9C-%EB%B0%9C%EA%B8%89%ED%95%98%EA%B8%B0-%EB%8F%84%EB%A9%94%EC%9D%B8-%EB%B0%9C%EA%B8%89-%EC%97%86%EC%9D%B4")]),t._v(" "),s("h5",{attrs:{id:"방법3-nginx로-reverse-proxy-제어"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#방법3-nginx로-reverse-proxy-제어"}},[t._v("#")]),t._v(" 방법3 : NginX로 Reverse Proxy 제어")]),t._v(" "),s("h2",{attrs:{id:"참고"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#참고"}},[t._v("#")]),t._v(" 참고")]),t._v(" "),s("p",[t._v("https://velog.io/@miro7923/AWS-EC2-%EC%84%9C%EB%B2%84-%EB%8F%84%EB%A9%94%EC%9D%B8-%EC%97%86%EC%9D%B4-https-%EB%B6%99%EC%9D%B4%EA%B8%B0")]),t._v(" "),s("p",[t._v("https://caddyserver.com/docs/getting-started")])])}),[],!1,null,null,null);s.default=a.exports}}]);