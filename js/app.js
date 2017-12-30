"use strict";document.addEventListener("DOMContentLoaded",function(){function e(e,t,o){for(var i=t.split(" "),l=0,s=i.length;l<s;l++)e.addEventListener(i[l],o,!1)}function t(e){if(b.innerHTML='<img id="data_img" src="images/'+bigsrc[e].url+'" data-id="'+bigsrc[e].id+'">',h.innerHTML="<h4>"+bigsrc[e].title+"</h4><p>"+bigsrc[e].desc+"</p>",18==e||12==e||8==e){var t=document.createElement("a");t.href=bigsrc[e].link,t.setAttribute("target","_blank"),t.innerHTML="visit website",h.appendChild(t)}}function o(e){if(e.target!==e.currentTarget){var o=e.target.getAttribute("data-pos");t(o),m.className="is-active",v.className="is-active"}e.stopPropagation()}function i(e){0==e?e=bigsrc.length-1:e--,t(e)}function l(e){e==bigsrc.length-1?e=0:e++,t(e)}function s(e,t){e.addEventListener("click",function(){j[t].scrollIntoView({behavior:"smooth"})},!1)}var n,r,a,c,d=document.getElementById("main-menu"),g=document.getElementById("nav"),u=document.getElementById("close-nav");e(window,"load resize scroll",function(){n=window.innerWidth,r=window.pageYOffset,a=document.getElementById("site_logo"),c=document.getElementById("alt_logo"),a&&c&&n&&r&&(r>=199||n<=767?(a.className="site-logo logo-display mini-logo",c.className="site-logo logo-hide mini-alt-logo"):(a.className="site-logo logo-display",c.className="site-logo logo-hide"))}),d.addEventListener("click",function(){g.style.right=0}),u.addEventListener("click",function(){g.style.right="-320px"});var p=document.getElementById("wrap-thumbs"),m=document.getElementById("gal_holder"),b=document.getElementById("img_holder"),h=document.getElementById("desc_holder"),v=document.getElementById("modal_bg"),k=document.getElementById("close_btn"),w=document.getElementById("prev"),y=document.getElementById("next");p.addEventListener("click",o,!1),y.addEventListener("click",function(){var e=document.getElementById("data_img").getAttribute("data-id");i(e)},!1),w.addEventListener("click",function(){var e=document.getElementById("data_img").getAttribute("data-id");l(e)},!1),function(){for(var e=[v,k],t=0,o=e.length;t<o;t++)e[t].addEventListener("click",function(){m.className="",v.className=""},!1)}();var f=document.getElementsByClassName("link"),j=document.getElementsByClassName("dest-link");f=[].slice.call(f),j=[].slice.call(j);for(var E=0,I=f.length;E<I;E++)s(f[E],E);document.getElementById("submit").addEventListener("click",function(){function e(e){var t=/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]/;return!!t.test(s)}var t=!1,o=document.getElementById("user"),i=document.getElementById("user").value,l=document.getElementById("email"),s=document.getElementById("email").value,l=document.getElementById("message"),n=document.getElementById("message").value;i.length<2&&(o.value="",o.setAttribute("placeholder","please enter a valid name"),t=!0),0==e(s)&&(l.setAttribute("placeholder","please enter a valid email"),t=!0),0==t&&(o.style.border="none",o.setAttribute("placeholder",""),l.style.border="none",l.setAttribute("placeholder",""));var r={Name:i,email:s,question:n},a=JSON.stringify(r),c=new XMLHttpRequest;c.open("POST","igetEmail.php",!0),c.setRequestHeader("Content-type","application/json"),c.send(a),c.onload=function(){4==c.readyState&&200==c.status&&(document.getElementById("form").innerHTML=c.responseText)}})});var trigger=document.getElementById("modal_trigger"),eraser=document.getElementById("modal_close");trigger.onclick=function(){document.getElementById("modal-overlay").classList.add("modal-on")},eraser.onclick=function(){document.getElementById("modal-overlay").classList.remove("modal-on")},window.onscroll=function(){var e=!1,t=window.scrollY,o=pageYOffset;window.innerWidth<=767&&(e=!0),e&&(t||o)>=1490?document.getElementById("wrap_skill").classList.add("grow-bar"):!e&&(t||o)>=910&&document.getElementById("wrap_skill").classList.add("grow-bar")},"ontouchstart"in document.documentElement||(document.documentElement.className+="no-touch");var iOS=/iPad|iPhone|iPod/.test(navigator.platform);iOS||navigator.userAgent.indexOf("MSIE")!==-1||navigator.appVersion.indexOf("Trident/")>0||(document.getElementById("site_logo").classList.add("logo-display"),document.getElementById("alt_logo").classList.add("logo-hide"));var app=angular.module("myApp",[]);app.controller("eduCtrl",["$scope",function(e){e.cards=[{inst:"treehouse",period:"2015 - Present",url:"treehouse",title:"Web Development",location:"Online",desc:"PHP, JavaScript, Angular.js, CSS3 animations, CSS3 flexbox; etc."},{inst:"herzing",period:"2013 - 2014",url:"herzing-college",title:"Graphic Design for Websites",location:"Montreal",desc:"Photoshop, Illustrator, HTML5, CSS3, JavaScript, Responsive layout; etc."},{inst:"sdf",period:"Apr - Oct 2008",url:"sdf",title:"Advance Officer's Course",location:"Shizuoka, Japan",desc:"Army doctrine / tactics; offensive, defensive and maneuver companies / battalions; etc."},{inst:"hokkai",period:"1996 - 2000",url:"hokkai",title:"Bachelor of Laws",location:"Sapporo, Japan",desc:"Leagl method and procedures, Criminal law, Administrative law, Law of property; etc."}]}]),app.controller("skillsCtrl",["$scope",function(e){e.progbars=[{url:"ps",alt:"Photoshop",skill:" ps",eh:"eh",okay:"okay",good:"good",ninja:"ninja"},{url:"ai",alt:"Illustrator",skill:"ai"},{url:"html5",alt:"HTML5",skill:"htm"},{url:"css3",alt:"CSS3",skill:"css"},{url:"sass",alt:"Sass",skill:"sass"},{url:"js",alt:"JavaScript",skill:"js"},{url:"jquery",alt:"jQuery",skill:"jquery"},{url:"angular",alt:"angular",skill:"angular"},{url:"php",alt:"PHP",skill:"php"},{url:"git",alt:"Git",skill:"git"}]}]),app.controller("galleryCtrl",["$scope",function(e){e.images=[{url:"work-carousel-swarovski.jpg",alt:"mapleharbour website",desc:"website content: carousel",pos:20},{url:"work-carousel-new-year.jpg",alt:"mapleharbour website",desc:"website content: carousel",pos:19},{url:"work-mh.jpg",alt:"mapleharbour website",desc:"website development",pos:18},{url:"work-boxingday.jpg",alt:"carousel design",desc:"website content: carousel",pos:17},{url:"work-blackfriday.jpg",alt:"carousel design",desc:"website content: carousel",pos:16},{url:"work-email.jpg",alt:"email header design",desc:"visual content: email",pos:15},{url:"work-social.jpg",alt:"visual content for social media",desc:"visual content: social media",pos:14},{url:"work-tshirt.jpg",alt:"tshirt design",desc:"vector: t-shirt design",pos:13},{url:"work-musician.jpg",alt:"website for a musician",desc:"website development",pos:12},{url:"work-coco.jpg",alt:"logo design",desc:"vector: logo design",pos:11},{url:"work-icons.jpg",alt:"vector icon design",desc:"vector: icon design",pos:10},{url:"work-vector.jpg",alt:"vector character design",desc:"vector: character design",pos:9},{url:"work-larocque.jpg",alt:"website design",desc:"website development 2014",pos:8},{url:"work-cafe.jpg",alt:"website design",desc:"website development 2013",pos:7},{url:"work-logo-design.jpg",alt:"logo design",desc:"vector: logo design",pos:6},{url:"work-logo-design2.jpg",alt:"logo design",desc:"business card design",pos:5},{url:"work-infographic.jpg",alt:"infographic design",desc:"vector: infographic",pos:4},{url:"work-printing.jpg",alt:"printing design",desc:"indesign: printing content",pos:3},{url:"work-bookcover.jpg",alt:"bookcover design",desc:"bitmap: book cover design",pos:2},{url:"work-poster.jpg",alt:"poster design",desc:"bitmap: movie poster recreation",pos:1},{url:"work-tapestry.jpg",alt:"vector tapestry",desc:"vector: tapestry imitaion",pos:0}]}]),app.controller("validateCtrl",["$scope",function(e){}]),app.controller("timeCtrl",["$scope",function(e){e.getDatetime=new Date}]);var bigsrc=[];bigsrc[20]={url:"pan-carousel-swarovski.jpg",id:20,title:"Visual Content: Carousel",desc:"Photoshop",link:""},bigsrc[19]={url:"pan-carousel-new-year.jpg",id:19,title:"Visual Content: Carousel",desc:"Photoshop",link:""},bigsrc[18]={url:"pan-mh-website.jpg",id:18,title:"Graphic/Integration",desc:"Magento: Maple Harbour",link:"//mapleharbour.ca"},bigsrc[17]={url:"pan-carousel-bd.jpg",id:17,title:"Visual Content: Carousel",desc:"Photoshop",link:""},bigsrc[16]={url:"pan-carousel-bf.jpg",id:16,title:"Visual Content: Carousel",desc:"Photoshop",link:""},bigsrc[15]={url:"pan-email.jpg",id:15,title:"Visual Content: Social Media",desc:"Photoshop",link:""},bigsrc[14]={url:"pan-social.jpg",id:14,title:"Visual Content: Social Media",desc:"Photoshop",link:""},bigsrc[13]={url:"pan-tshirt-design.jpg",id:13,title:"T-shirt Design",desc:"Illustrator",link:""},bigsrc[12]={url:"pan-musician-website.jpg",id:12,title:"Website Development",desc:"PHP, jQuery",link:"//bynki.com/"},bigsrc[11]={url:"pan-coco-logo.jpg",id:11,title:"Logo Design",desc:"Illustrator",link:""},bigsrc[10]={url:"pan-icon-set.jpg",id:10,title:"Icon Design",desc:"Illustrator",link:""},bigsrc[9]={url:"pan-character-design.jpg",id:9,title:"Logo Design",desc:"Illustrator",link:""},bigsrc[8]={url:"pan-larocque-website.jpg",id:8,title:"Website Development",desc:"HTML5, CSS3, jQuery",link:"//eaularocque.com/"},bigsrc[7]={url:"pan-cafe-website.jpg",id:7,title:"Website Development",desc:"HTML5, CSS3, jQuery",link:""},bigsrc[6]={url:"pan-logo-design2.jpg",id:6,title:"Logo Design",desc:"Illustrator",link:""},bigsrc[5]={url:"pan-logo-design.jpg",id:5,title:"Business Card Design",desc:"IIllustrator",link:""},bigsrc[4]={url:"pan-infograph.jpg",id:4,title:"Infographic",desc:"Illustrator",link:""},bigsrc[3]={url:"pan-printing.jpg",id:3,title:"Desktop Publishing",desc:"inDesign",link:""},bigsrc[2]={url:"pan-bookcover.jpg",id:2,title:"Book Cover Design",desc:"Photoshop",link:""},bigsrc[1]={url:"pan-poster.jpg",id:1,title:"Movie Poster Recreation",desc:"Photoshop",link:""},bigsrc[0]={url:"pan-tapestry-vector.jpg",id:0,title:"Tapestry Imitation",desc:"Illustrator",link:""};
//# sourceMappingURL=app.js.map
