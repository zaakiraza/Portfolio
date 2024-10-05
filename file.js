// #################### Navigation ####################

let banner1 = document.getElementById("banner1");
openmenu = () => {
    document.getElementById("nav_Items_response").style.top = "13%";
    document.getElementById("nav_Items_response").style.position = "fixed";
    banner1.style.zIndex = "-1";
    document.getElementById("lines").style.display = "none";
    document.getElementById("cros").style.display = "block";
}

closemenu = () => {
    document.getElementById("nav_Items_response").style.top = "-72%";
    document.getElementById("nav_Items_response").style.position = "absolute";
    document.getElementById("nav_Items_response").style.transition = "2s";
    document.getElementById("lines").style.display = "block";
    document.getElementById("cros").style.display = "none";
}

function disablednav() {
    document.getElementById("nav_Items_response").style.top = "-72%";
    document.getElementById("nav_Items_response").style.position = "absolute";
    document.getElementById("nav_Items_response").style.transition = "2s";
    document.getElementById("lines").style.display = "block";
    document.getElementById("cros").style.display = "none";
}

// #################### Skills ####################

let isfunrun=true;
window.addEventListener('scroll', () => {
    if ((window.pageYOffset >= 2380 && window.pageYOffset <= 2880) && isfunrun==true) {
        showprogress();
    }
})

showprogress = () => {
    let i = 0;
    let skill1 = setInterval(() => {
        i++;
        if (i == 91) {
            clearInterval(skill1);
        }
        else {
            document.getElementById('textloader1').innerHTML = i + "%";
            document.getElementById('loader1').style.background = `conic-gradient(goldenrod ${i}%, #ebebeb 0deg)`;
        }
    }, 50);

    let j = 0;
    let skill2 = setInterval(() => {
        j++;
        if (j == 81) {
            clearInterval(skill2);
        }
        else {
            document.getElementById('textloader2').innerHTML = j + "%";
            document.getElementById('loader2').style.background = `conic-gradient(goldenrod ${j}%, #ebebeb 0deg)`;
        }
    }, 50);

    let k = 0;
    let skill3 = setInterval(() => {
        k++;
        if (k == 71) {
            clearInterval(skill3);
        }
        else {
            document.getElementById('textloader3').innerHTML = k + "%";
            document.getElementById('loader3').style.background = `conic-gradient(goldenrod ${k}%, #ebebeb 0deg)`;
        }
    }, 50);

    let l = 0;
    let skill4 = setInterval(() => {
        l++;
        if (l == 81) {
            clearInterval(skill4);
        }
        else {
            document.getElementById('textloader4').innerHTML = l + "%";
            document.getElementById('loader4').style.background = `conic-gradient(goldenrod ${l}%, #ebebeb 0deg)`;
        }
    }, 50);

    let m = 0;
    let skill5 = setInterval(() => {
        m++;
        if (m == 86) {
            clearInterval(skill5);
        }
        else {
            document.getElementById('textloader5').innerHTML = m + "%";
            document.getElementById('loader5').style.background = `conic-gradient(goldenrod ${m}%, #ebebeb 0deg)`;
        }
    }, 50);

    let n = 0;
    let skill6 = setInterval(() => {
        n++;
        if (n == 71) {
            clearInterval(skill6);
        }
        else {
            document.getElementById('textloader6').innerHTML = n + "%";
            document.getElementById('loader6').style.background = `conic-gradient(goldenrod ${n}%, #ebebeb 0deg)`;
        }
    }, 50);
    isfunrun=false;
    
}

// #################### Banner ####################

// let banner2=document.getElementById("banner2");

// setInterval(() => {
//     setTimeout(() => {
//         banner1.style.left="-100%";
//         banner2.style.left="0%";
//     }, 3000);
//     setTimeout(() => {
//         banner1.style.left="0%";
//         banner2.style.left="-100%";
//     }, 6000);
// }, 6000);


// #################### Project ####################

window.addEventListener('scroll',projects=()=>{
    if(window.pageYOffset >= 3511){
        setTimeout(() => {
            document.getElementById('pro1').style.opacity="1";
        }, 500);
        setTimeout(() => {
            document.getElementById('pro2').style.opacity="1";
        }, 1000);
        setTimeout(() => {
            document.getElementById('pro3').style.opacity="1";
        }, 1500);
        setTimeout(() => {
            document.getElementById('pro4').style.opacity="1";
        }, 2000);
    }
})

// #################### Experience ####################

window.addEventListener('scroll',experience=()=>{
    if(window.pageYOffset >= 2852){
        setTimeout(() => {
            document.getElementById("exp_fst").style.opacity="1";
        }, 500);
        setTimeout(() => {
            document.getElementById("exp_sec").style.opacity="1";
        }, 1000);
        setTimeout(() => {
            document.getElementById("exp_thd").style.opacity="1";
        }, 1500);
    }
})




let heading1 = document.getElementById('heading1');
let heading2 = document.getElementById('heading2');
let text1 = "Ideas In Code";
let text2 = "UI / UX DEVELOPER";
let index = 0;
let index1 = 0;
let arr = [];
let arr1 = [];

function typing() {
    if (index < text1.length) {
        arr.push(text1[index]);
        heading1.innerHTML = arr.join("");
        index++;
        setTimeout(typing, 200);
    } else {
        setTimeout(typing1, 500);
    }
}

function typing1() {
    if (index1 < text2.length) {
        arr1.push(text2[index1]);
        heading2.innerHTML = arr1.join("");
        index1++;
        setTimeout(typing1, 200);
    } else {
        setTimeout(startRemoval, 2000);
    }
}

function startRemoval() {
    setTimeout(typing1end, 500);
}

function typing1end() {
    if (arr1.length > 0) {
        arr1.pop();
        heading2.innerHTML = arr1.join("");
        setTimeout(typing1end, 100);
    } else {
        setTimeout(typingend, 500);
    }
}

function typingend() {
    if (arr.length > 0) {
        arr.pop();
        heading1.innerHTML = arr.join("");
        setTimeout(typingend, 100);
    } else {
        setTimeout(restartAnimation, 200);
    }
}
function restartAnimation() {
    index = 0;
    index1 = 0;
    arr = [];
    arr1 = [];

    setTimeout(typing, 200);
}

restartAnimation();