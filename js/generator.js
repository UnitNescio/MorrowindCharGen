// Generator.js
// Contains backend code for generation of game parameters


function charGen() {
    const factions = ["Great House Redoran", "Great House Hlaalu", "Great House Telvanni", "Vampire Clan Aundae", "Vampire Clan Berne", "Vampire Clan Quarra", "Tribunal Temple", "Imperial Cult", "Sixth House or a Daedra Cult", "Fighter's Guild", "Mage's Guild", "Thieves Guild", "Blades", "Morag Tong", "Imperial Legion", "East Empire Company"];

    const classes = ["Acrobat", "Agent", "Archer", "Assassin", "Barbarian", "Bard", "Battlemage", "Crusader", "Healer", "Knight", "Mage", "Monk", "Nightblade", "Pilgrim", "Rogue", "Scout", "Sorcerer", "Spellsword", "Thief", "Warrior", "Witchhunter"];

    const hometowns = ["Ald Velothi", "Ald'ruhn", "Balmora", "Caldera", "Dagon Fel", "Ebonheart", "Gnisis", "Hla Oad", "Khuul", "Maar Gan", "Molag Mar", "Mournhold", "Pelagiad", "Sadrith Mora", "Seyda Neen", "Skaal Village", "Suran", "Tel Aruhn", "Tel Branora", "Tel Fyr", "Tel Mora", "Vivec", "Vos"];

    const birthsigns = ["Warrior", "Mage", "Thief", "Serpent", "Lady", "Steed", "Lord", "Apprentice", "Atronach", "Ritual", "Lover", "Shadow", "Tower"];

    const races = ["Altmer", "Argonian", "Bosmer", "Breton", "Dunmer", "Imperial", "Khajiit", "Nord", "Orc", "Redguard"];

    let firstFaction = Math.floor(Math.random() * factions.length);
    document.getElementById("factionField1").innerHTML = factions[firstFaction];
    document.getElementById("factionField2").innerHTML = factions[secondFaction(firstFaction, factions)];
    document.getElementById("classField").innerHTML = classes[Math.floor(Math.random()*classes.length)];
    document.getElementById("hometownField").innerHTML = hometowns[Math.floor(Math.random()*hometowns.length)];
    document.getElementById("birthsignField").innerHTML = birthsigns[Math.floor(Math.random()*birthsigns.length)];
    document.getElementById("raceField").innerHTML = races[Math.floor(Math.random()*races.length)];
}

function secondFaction(firstFaction, factions){
    let result = firstFaction;
    if (firstFaction <= 2)
        while (result <= 2)
            result = Math.floor(Math.random()*factions.length);
    else if (firstFaction >= 3 && firstFaction <= 5)
        while (result >= 3 && result <= 5)
            result = Math.floor(Math.random()*factions.length);
    else if (firstFaction >= 6 && firstFaction <= 8)
        while (result >= 6 && result <= 8)
            result = Math.floor(Math.random()*factions.length);
    else
        while (result === firstFaction)
            result = Math.floor(Math.random()*factions.length);
    return (result);
}
