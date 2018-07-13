$(document).ready(function () {

    var span_maker_box = document.createElement('span');
    span_maker_box.classList.add('makers-box');
    span_maker_box.id = 'makers-box';

    var span_made_by = document.createElement('span');
    span_made_by.classList.add('maker-link');

    var p_made_by = document.createElement('p');
    p_made_by.classList.add('maker-name');
    p_made_by.innerText = 'Made by';

    span_made_by.appendChild(p_made_by);

    var a_dinuka = document.createElement('a');
    a_dinuka.classList.add('maker-link');
    a_dinuka.href = 'https://twitter.com/its_dinuka';
    a_dinuka.target = '_blank';

    var img_dinuka = document.createElement('img');
    img_dinuka.classList.add('maker-img');
    img_dinuka.src = 'https://image.ibb.co/eKK4gT/maker_dinuka.jpg';

    var p_dinuka = document.createElement('p');
    p_dinuka.classList.add('maker-name');
    p_dinuka.innerText = 'Dinuka';

    a_dinuka.appendChild(img_dinuka);
    a_dinuka.appendChild(p_dinuka);

    var a_shehan = document.createElement('a');
    a_shehan.classList.add('maker-link');
    a_shehan.href = 'https://twitter.com/kevinshehan';
    a_shehan.target = '_blank';

    var img_shehan = document.createElement('img');
    img_shehan.classList.add('maker-img');
    img_shehan.src = 'https://image.ibb.co/fSD888/maker_shehan.jpg';

    var p_shehan = document.createElement('p');
    p_shehan.classList.add('maker-name');
    p_shehan.innerText = 'Shehan';

    a_shehan.appendChild(img_shehan);
    a_shehan.appendChild(p_shehan);

    var a_nuwan = document.createElement('a');
    a_nuwan.classList.add('maker-link');
    a_nuwan.href = 'https://twitter.com/denz404';
    a_nuwan.target = '_blank';

    var img_nuwan = document.createElement('img');
    img_nuwan.classList.add('maker-img');
    img_nuwan.src = 'https://image.ibb.co/ish1ST/maker_nuwan.jpg';

    var p_nuwan = document.createElement('p');
    p_nuwan.classList.add('maker-name');
    p_nuwan.innerText = 'Nuwan';

    a_nuwan.appendChild(img_nuwan);
    a_nuwan.appendChild(p_nuwan);

    span_maker_box.appendChild(span_made_by);
    span_maker_box.appendChild(a_dinuka);
    span_maker_box.appendChild(a_shehan);
    span_maker_box.appendChild(a_nuwan);

    var width = screen.width, height = screen.height;

    if (screen.width > 411 || screen.height > 823) {
        document.body.appendChild(span_maker_box);
    }
});