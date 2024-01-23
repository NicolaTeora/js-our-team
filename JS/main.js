const cardMember = document.getElementById('team-form')
const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

// Milestone 1
//Tramite l'utilizzo di un ciclo scorro tutto il contenuto dell'array
for (let members of team){

    //tramite <u>console.table</u> stampo in console il contenuto
    console.table(members)
}

function createCard() {
    const memberTeam = document.createElement('div');
    memberTeam.classList.add('col')
    memberTeam.innerHTML = `
        <ul>
            <li>Nome:</li>
            <li>Ruolo:</li>
            <li>foto:</li>
        </ul>`
    return memberTeam;
}

console.log(createCard())