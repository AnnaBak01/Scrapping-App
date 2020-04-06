import { html, render } from "https://unpkg.com/lit-html?module";

function renderPage(subjects) {
  let itemsList = [];
  for (let i = 0; i < subjects.length; i++) {
    const element = subjects[i];
    itemsList.push(html`
      <div class="col-lg-4 my-4">
          <div class="card" id="card${element.id}">
               <div class="card-body">
                    <p class="title">
                         <div class="row">
                              <div class="col-10" id="${element.id}">
                                   <span class="text-muted date">${element.date}</span>
                                   <h4>${element.type}</h4>
                                   <span class="text-muted"><small>${element.name}</small></span>
                              </div>
                         <div class="col-2 mt-1">
                    <div class="notice" id="notice${element.id}"></div>
               </div>
          </div>
     </p>
     <p class="card-text" id="text">${element.homework}</p>
     </div>
     </div>
     </div>
    `);
  }

  const itemsContainer = html`
    <div class="container" style="margin-top: 7em;">
      <div class="row">
        ${itemsList}
      </div>
    </div>
  `;

  $(document).ready(function () {
    $(".notice").click(function () {
      const notice = this.id;
      if ($("#" + notice).hasClass("on")) {
        $("strong").html("Ukończono pracę domową!");
        $(".toast-body").html(
          "Od teraz ten przedmiot nie będzie już przypominany do czasu następnego update'u!"
        );
        $(".toast").toast("show");
        $("#" + notice).removeClass("on");
        $("#" + notice).addClass("off");
        checkCookie(notice, "on");
      } else if ($("#" + notice).hasClass("off")) {
        $("strong").html("Dodano znacznik pracy domowej!");
        $(".toast-body").html(
          "Znakcznik będzie tutaj dopóki nie odrobisz lekcji z tego przedmiotu."
        );
        $(".toast").toast("show");
        $("#" + notice).removeClass("off");
        $("#" + notice).addClass("on");
        checkCookie(notice, "off");
      }
    });
  });

  $(document).ready(function () {
    $(".col-10").click(function () {
      localStorage.setItem("subjectId", this.id);
      location.href = "http://localhost/crapapp/singleteacher.html";
    });
  });

  render(itemsContainer, document.getElementsByTagName("app")[0]);
}
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    renderPage(JSON.parse(xhttp.responseText));
    loadCookies();
  }
};
xhttp.open("GET", "http://localhost/CrapApp/php.php/all/", true);
xhttp.send();

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function checkCookie(id, klasa) {
  if (id == null) {
    checkTag();
  } else {
    var subject = id;
    setCookie(subject, klasa, 30);
    
  }
}

function loadCookies() {
  for (let j = 1; j < 14; j++) {
    const el = document.getElementById("notice" + j);
    const a = Cookies.get("notice" + j);
    if (Cookies.get("notice" + j) === undefined) {
      el.classList.add("off");
    } else {
      var cookie = Cookies.get("notice" + j);
      el.classList.add(cookie);
    }
  }
}
