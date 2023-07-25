

const showImages = (type, tabPanes) => {
  let list = `<div class="row">`;
  for (let item of tabPanes) {
    if (item.type === type) {
      list += `<div class="col-4">
          <div class="d-flex justify-content-center">
            <img src="${item.imgSrc_jpg}" class="img-fluid">
          </div>
          <p class="text-center fs-1"><b>${item.name}</b></p>
          <div class="d-flex justify-content-center">
            <button class="btn btn-primary px-5 mb-3 try-on" data-img="${item.imgSrc_png}" data-type="${item.type}">Thử đồ</button>
          </div>
        </div>`;
    }
  }
  list += `</div>`;
  document.getElementById('imageList').innerHTML = list;
  tryOnButtons()
}
