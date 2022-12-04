let ct = $("ct");
let wp = $("wp");
let pt = $("pt");
let hd = $("hd");
let pgt = $("pgt");
let toptb = $("toptb");
let f_pst = $("f_pst");
let dfsj_wp = $("dfsj_wp");
let threadlist = $("threadlist");
let thread_types = $("thread_types");

let sd = ct.getElementsByClassName("sd")[0];
let mn = ct.getElementsByClassName("mn")[0];
let th = threadlist.getElementsByClassName("th")[0];
let dfsj_ftl = dfsj_wp.getElementsByClassName("dfsj_ftl")[0];

let threadTypes = thread_types.getElementsByTagName("li");

let atargetSpan = $("atarget");
let orderTypes = $x("..", atargetSpan)[0];
atargetSpan.innerHTML += '<span class="pipe">|</span>';
atargetSpan.setAttribute("class", "x");

for (let i = 0; i < 7; i++) {
  orderTypes.children[i].style.color = "#ffffff";
}

let clearstickthread = $("clearstickthread");
orderTypes.insertBefore(clearstickthread, $("filter_special"));
clearstickthread.insertBefore(
  $x("./a", clearstickthread)[0],
  $x("./span", clearstickthread)[0]
);
$x("./a", clearstickthread)[0].style.color = "#ffffff";

let filter_orderby_menu = $("filter_orderby_menu");

document.body.style.background = "#64A0E6";
dfsj_wp.style.background = "#64A0E6";
threadlist.style.background = "#ffffff";
th.style.background = "#00318A";

document.body.removeChild(toptb);
document.body.removeChild(hd);
ct.removeChild(sd);
wp.removeChild(pt);
mn.removeChild(pgt);
mn.removeChild(f_pst);
dfsj_wp.removeChild(dfsj_ftl);

mn.style.width = "100%";
