function readMore(lessID, moreID, btnID) {
    var less = document.getElementById(lessID)
    var moreText = document.getElementById(moreID)
    var btnText = document.getElementById(btnID)

    if (less.style.display === "none") {
        less.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        less.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}