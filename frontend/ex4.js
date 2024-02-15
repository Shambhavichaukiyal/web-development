
    var a = Math.floor(Math.random() * 6) + 1;
    var b = Math.floor(Math.random() * 6) + 1;
    var img1 = "dice" + a + ".png";
    var img2 = "dice" + b + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", img1);
     document.querySelectorAll("img")[1].setAttribute("src", img2);

