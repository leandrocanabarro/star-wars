const fs = require('fs');
const { google } = require('googleapis');
const slugify = require('slugify');

const customSearch = google.customsearch('v1');
const googleSearchCredentials = {
  apiKey: 'SUA_CHAVE_AQUI',
  searchEngineId: 'SUA_CHAVE_AQUI',
};

const people = [
  'Luke Skywalker',
  'C-3PO',
  'R2-D2',
  'Darth Vader',
  'Leia Organa',
  'Owen Lars',
  'Beru Whitesun lars',
  'R5-D4',
  'Biggs Darklighter',
  'Obi-Wan Kenobi',
  'Anakin Skywalker',
  'Wilhuff Tarkin',
  'Chewbacca',
  'Han Solo',
  'Greedo',
  'Jabba Desilijic Tiure',
  'Wedge Antilles',
  'Jek Tono Porkins',
  'Yoda',
  'Palpatine',
  'Boba Fett',
  'IG-88',
  'Bossk',
  'Lando Calrissian',
  'Lobot',
  'Ackbar',
  'Mon Mothma',
  'Arvel Crynyd',
  'Wicket Systri Warrick',
  'Nien Nunb',
  'Qui-Gon Jinn',
  'Nute Gunray',
  'Finis Valorum',
  'Jar Jar Binks',
  'Roos Tarpals',
  'Rugor Nass',
  'Ric Olié',
  'Watto',
  'Sebulba',
  'Quarsh Panaka',
  'Shmi Skywalker',
  'Darth Maul',
  'Bib Fortuna',
  'Ayla Secura',
  'Dud Bolt',
  'Gasgano',
  'Ben Quadinaros',
  'Mace Windu',
  'Ki-Adi-Mundi',
  'Kit Fisto',
  'Eeth Koth',
  'Adi Gallia',
  'Saesee Tiin',
  'Yarael Poof',
  'Plo Koon',
  'Mas Amedda',
  'Gregar Typho',
  'Cordé',
  'Cliegg Lars',
  'Poggle the Lesser',
  'Luminara Unduli',
  'Barriss Offee',
  'Dormé',
  'Dooku',
  'Bail Prestor Organa',
  'Jango Fett',
  'Zam Wesell',
  'Dexter Jettster',
  'Lama Su',
  'Taun We',
  'Jocasta Nu',
  'Ratts Tyerell',
  'R4-P17',
  'Wat Tambor',
  'San Hill',
  'Shaak Ti',
  'Grievous',
  'Tarfful',
  'Raymus Antilles',
  'Sly Moore',
  'Tion Medon',
  'Finn',
  'Rey',
  'Poe Dameron',
  'BB8',
  'Captain Phasma',
  'Padmé Amidala',
];

async function robot() {
  const data = {};

  console.log('> [image-robot] Starting');

  for (let i = 0; i < people.length; i++) {
    const person = people[i];
    const personSlug = slugify(person, { lower: true });

    const list = await fetchGoogleAndReturnImagesLinks(person);

    console.log(`> [image-robot] LIST => ${list}`);

    const url = list[Math.floor(Math.random() * list.length)];

    data[`${personSlug}`] = url;

    console.log(`> [image-robot] URL => ${url}`);
  }

  fs.writeFileSync('./src/robots/people.json', JSON.stringify(data));

  console.log(`> [image-robot] DATA => ${JSON.stringify(data)}`);

  async function fetchGoogleAndReturnImagesLinks(query) {
    let imagesUrl = '';

    const response = await customSearch.cse.list({
      auth: googleSearchCredentials.apiKey,
      cx: googleSearchCredentials.searchEngineId,
      q: query,
      searchType: 'image',
      // filetype: 'png',
      // imgSize: 'medium',
      // imgType: 'photo',
      num: 3,
    });

    if (response.data.items) {
      imagesUrl = response.data.items.map((item) => {
        return item.link;
      });
    }

    return imagesUrl;
  }
}

module.exports = robot;
