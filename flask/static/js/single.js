import { html, render } from "https://unpkg.com/lit-html?module";

function renderPage(subjects) {
  const element = subjects[0];
  const template = document.createElement("div");
  template.innerHTML = element[6];
  const itemsContainer = html`
    <div class="container p-0 text-dark" style="margin-top: 7em;">
      <div class="row">
        <div class="col-md-8 pl-5">
          <span class="text-muted">${element[1]}</span>
          <h1>${element[4]}</h1>
          <div class="mt-5" id="homeworkTags">
            ${template.childNodes}
          </div>
        </div>
      </div>
    </div>
  `;

  render(itemsContainer, document.getElementById("app"));
}

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    renderPage(JSON.parse(xhttp.responseText));
  }
};
xhttp.open("GET", "/api/" + subjectId, true);
xhttp.send();
