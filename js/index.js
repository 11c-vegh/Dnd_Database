import adatok from "./adatok.json" assert {'type':'json'};

let dropdown = document.getElementById("select");

function adddata()
{
    let table = document.getElementById("table");
    if(table.rows.length-1 != 0)
    {
        console.log(adatok.length);
        for (let i=1; i<=adatok.length; i++) 
        {
            /*
            row.deleteCell(0);
            row.deleteCell(1);
            row.deleteCell(2);
            row.deleteCell(3);
            row.deleteCell(4);
            */
            table.deleteRow(1);
        }
    }

    for (let i=0; i<adatok.length; i++) 
    {
        let row = table.insertRow(i+1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5= row.insertCell(4);
        cell1.innerHTML = adatok[i].name;
        cell2.innerHTML = adatok[i].price;
        cell3.innerHTML = adatok[i].damage.type + " " + adatok[i].damage.amount;
        cell4.innerHTML = adatok[i].weight;
        cell5.innerHTML = adatok[i].property;
        console.log(i);
    }
}

let ToSilver = (i) =>
{
    if(i.includes("gp"))
    {
        i.replace("gp", '');
        let tempint = parseFloat(i)*10;
        return i = tempint+"sp";
    }
    if(i.includes("bp"))
    {
        i.replace("bp", '');
        let tempint = parseFloat(i)/10;
        return i = tempint+"sp";
    }
    else
    {
        return i;
    }
}

let ToBronze = (i) =>
{
    if(i.includes("gp"))
    {
        i.replace("gp", '');
        let tempint = parseFloat(i)*100;
        return i = tempint+"bp";
    }
    if(i.includes("sp"))
    {
        i.replace("sp", '');
        let tempint = parseFloat(i)*10;
        return i = tempint+"bp";
    }
    else
    {
        return i;
    }
}

let ToGold = (i) =>
{
    if(i.includes("sp"))
    {
        i.replace("sp", '');
        let tempint = parseFloat(i)/10;
        return i = tempint+"gp";
    }
    if(i.includes("bp"))
    {
        i.replace("bp", '');
        let tempint = parseFloat(i)/100;
        return i = tempint+"gp";
    }
    else
    {
        return i;
    }
}

function convert()
{
    let value = dropdown.value;
    for (let i of adatok) 
    {
        if(value=="gold")
        {
            i.price = ToGold(i.price);
        }
        if(value=="silver")
        {
            i.price = ToSilver(i.price);
        }
        if(value=="bronze")
        {
            i.price = ToBronze(i.price);
        }
    }
    adddata();
}

document.body.onload = adddata;
document.getElementById("gomb").addEventListener("click", convert);