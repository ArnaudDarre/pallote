function closeCookieNotice() {
  const nowDate = new Date();
  const expireDate = new Date(nowDate.setDate(nowDate.getDate() + 30)).toUTCString();

  document.cookie = "cookie_notice=0;path=/;expires=" + expireDate + ";SameSite=Lax;";
  document.getElementById("cookie").classList.add("js-cookie-accepted");
};

document.addEventListener("DOMContentLoaded", function() {
  const cookie_notice = ('; ' + document.cookie).split('; cookie_notice=').pop().split(';')[0];

  if (cookie_notice !== "0") {
    document.getElementById("cookie").style.display = "flex";
  }
});
