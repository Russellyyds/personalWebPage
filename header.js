// 使顶部导航栏下滑显示，上滑透明
// 添加滚动事件
window.addEventListener('scroll', function () {
    //获取元素
    var header = document.querySelector("header"); //querySelector() 方法返回文档中匹配指定 CSS 选择器的一个元素。
    // 添加类
    header.classList.toggle("sticky", window.scrollY > 0)
});
//汉堡导航栏
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".primary-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".navlink");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

//切换按钮 切换页面部分内容
window.onload = function () {
    tabClick();
}
function tabClick() {
    var tab = document.querySelectorAll(".col12 ul li")
    var cont = document.querySelectorAll(".tab-pane") //获取content所有 li
    if (tab && cont) { //严格模式 取到tab 和 cont 之后再进行其他
        for (var i = 0; i < tab.length; i++) { //给每一个tab添加点监听点击事件
            addHover(i);
        }
        //添加点击监听
        function addHover(i) {
            // tab[i].addEventListener('click', function() { //点击切换
            tab[i].addEventListener('mouseover', function () {//悬浮切换
                setTabClass(i);
                setContClass(i)
            });
        }
        // 切换按钮的事件
        function setTabClass(num) {
            // 移出所有的TabActive名称
            for (var i = 0; i < tab.length; i++) {
                tab[i].classList.remove("TabActive");
            }
            // 点击的哪个给哪个添加TabActive
            tab[num].classList.add("TabActive");
        }
        // 切换内容的事件
        function setContClass(num) {
            // 移出所有的ContActive名称
            for (var i = 0; i < cont.length; i++) {
                cont[i].classList.remove("ContActive");
            }
            // 点击的哪个给哪个添加ContActive
            cont[num].classList.add("ContActive");
        }
    }
}


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.visibility = "visible";
  } else {
    mybutton.style.visibility = "hidden";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}