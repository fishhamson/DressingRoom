fetch('../data/Data.json')
  .then(response => response.json())
  .then(data => {
    let navPills = `<ul class="nav nav-pills">`;
    data.navPills.map((item) => {
      navPills += `<li class="nav-item">
        <a class="nav-link" data-type="${item.type}" href="#${item.tabName}">${item.showName}</a>
      </li>`;
    })
    navPills += `</ul>`;
    console.log("navPills: ", navPills);
    document.getElementById('navPills').innerHTML = navPills

    let links = document.querySelectorAll('#navPills a');
    for (let link of links) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        let type = this.getAttribute('data-type');
        showImages(type, data.tabPanes);
        for (let link of links) {
          link.classList.remove('active');
        }
        this.classList.add('active');
      });
    }
  });
