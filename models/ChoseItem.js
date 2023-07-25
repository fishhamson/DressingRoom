const tryOnButtons = () => {
    let tryOnButtons = document.querySelectorAll('.try-on');
    let typeToClassMap = {
        'handbags': '.handbag',
        'necklaces': '.necklace',
        'hairstyle': '.hairstyle'
    };
    for (let button of tryOnButtons) {
        button.addEventListener('click', function () {
            let imgSrc = this.getAttribute('data-img');
            let type = this.getAttribute('data-type');
            if (type === 'background') {
                document.querySelector('.background').style.backgroundImage = `url(${imgSrc})`;
            } else if (type === 'topclothes') {
                document.querySelector('.bikinitop').style.background = `url(${imgSrc})`
            } else if (type === 'botclothes') {
                document.querySelector('.bikinibottom').style.background = `url(${imgSrc})`
            } else if (type === 'shoes') {
                document.querySelector('.feet').style.background = `url(${imgSrc})`
            } else {
                let targetClass = typeToClassMap[type] || '.model';
                document.querySelector(targetClass).innerHTML = `<img src="${imgSrc}">`;
            }
        });
    }
}