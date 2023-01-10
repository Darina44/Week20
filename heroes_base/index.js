let json = `[{
    "pic": "assets/images/batman.jpeg",
    "name": "Бэтмен",
    "universe": "DC Comics",
    "actions": "борец с преступностью, филантроп, миллиардер",
    "superpower": "интеллект, обширные познания, знания боевых искусств, ловкость",
    "rate": "1"
},{
    "pic": "assets/images/superman.jpeg",
    "name": "Супермен",
    "universe": "DC Comics",
    "actions": "борец за справедливость",
    "superpower": "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
    "rate": "2"
},{
    "pic": "assets/images/spider-man.jpeg",
    "name": "Человек-паук",
    "universe": "Marvel Comics",
    "actions": "борец за справедливость, студент, фотограф",
    "superpower": "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины",
    "rate": "3"
}]`;

const btn = document.getElementById('btn');

document.addEventListener("DOMContentLoaded", function (event) {
    let heroes = JSON.parse(json);

    let heroesContent = "";
    for (let hero of heroes) {
        heroesContent += `<div class='hero'><h2>${hero.name}</h2>
        <div><img src="${hero.pic}"></div>
        <div><span class="subtitle">Вселенная: </span>${hero.universe}</div>
        <div><span class="subtitle">Род деятельности: </span>${hero.actions}</div>
        <div><span class="subtitle">Суперспособности: </span>${hero.superpower}</div>
        <div><span class="subtitle">Поставьте оценку: </span>${hero.rate}</div>
        <div class="rate">
          <span class="subtitle">Насколько вам нравится герой?</span>
            <select class="rate-${hero.rate}">
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>
        </div>`;
    }

    document.querySelector('.heroesContainer').innerHTML = heroesContent;

    btn.addEventListener('click', (event) => {
        event.preventDefault();

        let rate1 = document.querySelector('.rate-1').value;
        let rate2 = document.querySelector('.rate-2').value;
        let rate3 = document.querySelector('.rate-3').value;

        let rates = [
            { Бэтмен: rate1 },
            { Супермен: rate2 },
            { 'Человек-паук': rate3 },
        ];

        localStorage.setItem('rates', JSON.stringify(rates));
    });
});

