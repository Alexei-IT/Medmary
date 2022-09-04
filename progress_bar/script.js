let procentCountGreen = 35; //вторая диаграмма
let procentCountBlue = 66; //первая диаграмма
let procentCountWhite = 35; //кол-во лет
let percGreen = document.querySelector('.perc-green');
let percBlue = document.querySelector('.perc-blue');
let indicatorGreen = document.querySelector('.gradient-green');
let indicatorBlue = document.querySelector('.gradient-blue');
let percWhite = document.querySelector('.perc-white');



percGreen.innerText = procentCountGreen + '%';

percBlue.innerText = procentCountBlue + '%';

percWhite.innerText = `${procentCountWhite} лет`


indicatorGreen.style['stroke-dashoffset'] = `${250 - (250 / 100 * procentCountGreen)}px`;

indicatorBlue.style['stroke-dashoffset'] = `${250 - (250 / 100 * procentCountBlue)}px`;