// 1a
const jedi = [];

// 1b
jedi [0] = ("Luke");
console.log(jedi);

// 1c
jedi.push("Obi-Wan Kenobi");
console.log(jedi);

// 1d
jedi.unshift("Yoda");
console.log(jedi);

// 1e
console.log(jedi[1]);

// 1f
jedi.pop();

// 1g
jedi.splice(0);
console.log(jedi);

// 2a
const sithLords = [
    "Darth Vader",
"Darth Sisious",
"Darth"
];

// 2b
const imperialOfficers = [
"Grand Moff Tarkin", 
"Orson Krennic",
];

// 2c
sithLords.concat(imperialOfficers);
console.log(sithLords);

const starWarsVillians = sithLords.concat(imperialOfficers);
console.log(starWarsVillians);

// 2d
console.log(starWarsVillians.slice(0,2));

// 3a
const droids = {
    astromech: "R2-D2",
    protocol: "C-3PO",
    assassin: "IG-88"
}

// 3b
console.log(droids["astromech"]);

// 3c
console.log(droids.protocol);

// 3d
droids[2] = "IG-11";
console.log(droids);



