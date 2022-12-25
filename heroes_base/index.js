let json = `[{
    "pic": "assets/images/batman.jpeg",
    "name": "Бэтмен",
    "universe": "DC Comics",
    "actions": "борец с преступностью, филантроп, миллиардер",
    "superpower": "интеллект, обширные познания, знания боевых искусств, ловкость",
    "rate": ""
},{
    "pic": "assets/images/superman.jpeg",
    "name": "Супермен",
    "universe": "DC Comics",
    "actions": "борец за справедливость",
    "superpower": "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
    "rate": ""
},{
    "pic": "assets/images/spider-man.jpeg",
    "name": "Человек-паук",
    "universe": "Marvel Comics",
    "actions": "борец за справедливость, студент, фотограф",
    "superpower": "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины",
    "rate": ""
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
        <div class="rate"><span class="subtitle">Насколько вам нравится герой?</span><select><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div>
        </div>`;
    }
    document.querySelector('.heroesContainer').innerHTML = heroesContent;
});

