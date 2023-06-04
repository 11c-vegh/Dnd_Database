import spells from "./spells.json" assert {'type' : 'json'}
let cards = [];


function cardDelete()
{
    if(cards.length > 0)
    {
        for(let card of cards)
        {
            document.getElementById("spells").removeChild(card);
        }
    }
    
    cards = [];

}

function shearchTypeDecider()
{

    let type = document.getElementById("spellselect").value;
    let value = document.getElementById("shearchtext").value;

    console.log(type, value);

    switch(type)
    {
        
        case "1":
            for(let spell of spells)
            {
                if(spell.name == value)
                {
                    cardBuilder(spell);
                }
            }
            break;
        
        case "2":
            for(let spell of spells)
            {
                if(spell.level == value)
                {
                    cardBuilder(spell);
                }
            }
            break;

        case "3":
            for(let spell of spells)
            {
                if(spell.dmg == value)
                {
                    cardBuilder(spell);
                }
            }
            break;

        case "4":
            for(let spell of spells)
            {
                if(spell.range == value)
                {
                    cardBuilder(spell);
                }
            }
            break;
    }
}

let cardBuilder = (spell) =>
{

    let c = document.getElementById("spells");

    let main = document.createElement('div');
    main.classList.add("card");

    let cbody = document.createElement('div');
    cbody.classList.add("card-body");

    let name = document.createElement('h4');
    name.classList.add("card-title");
    name.innerHTML = spell.name;

    let p = document.createElement('p');
    p.classList.add("card-text");
    p.innerHTML = spell.dmg;
    
    console.log(main);

    cbody.appendChild(name);
    cbody.appendChild(p);
    main.appendChild(cbody);
    c.appendChild(main);

    cards.push(main);
}

let button = document.getElementById("button-addon1");
button.onclick = shearchTypeDecider;

document.getElementById("spellselect").onchange = cardDelete;
document.getElementById("shearchtext").addEventListener("change", cardDelete);