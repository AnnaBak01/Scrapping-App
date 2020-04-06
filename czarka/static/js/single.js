import { html, render } from "https://unpkg.com/lit-html?module";

function renderPage(subjects) {
  const element = subjects[0];
  const template = document.createElement("div");
  template.innerHTML = element.homeworkTags;
  const itemsContainer = html`
    <div class="container p-0 text-dark" style="margin-top: 7em;">
      <div class="row">
        <div class="col-md-8 pl-5">
          <span class="text-muted">${element.name}</span>
          <h1>${element.type}</h1>
          <div class="mt-5" id="homeworkTags">
            ${template.childNodes}
          </div>
        </div>
        <div class="col-md-3 mt-sm-5 mt-xs-5">
          <div style="top:25;">
            <h5 class="ml-2">
              Popularne:
            </h5>
            <ul class="list-group">
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                Angielski - Misterkiewicz
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                Angielski - Janik
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                Matematyka
                <span
                  class="badge badge-primary badge-pill"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Dostępna nowa praca domowa!"
                  >1</span
                >
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                Fizyka
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                Język polski
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                Projektowanie baz - S.A.
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                Witryny APK - D.T.
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                Tworzenie aplikacji - K.R.
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                Montaż i EKS - S.A.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;

  render(itemsContainer, document.getElementsByTagName("app")[0]);
}

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    renderPage(JSON.parse(xhttp.responseText));
  }
};
xhttp.open("GET", "/api/" + subjectId, true);
xhttp.send();