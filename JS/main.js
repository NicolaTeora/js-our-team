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

/*
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
*/

// Milestone 1
for (let members of team){
    
  console.table(members)
  //Milestone 2    
  const memberTeam = document.createElement('div');
  memberTeam.classList.add('col-3')
  const formMemberTeam = `
  <div class="col-4">  
    <div class="card text-center">      
      <img src="./img/${members.image}" class="border p-1" alt="">      
      <b>Nome: </b> ${members.name}
      <b>Rolo: </b>${members.role}
    </div>
  </div>`
  cardMember.innerHTML += formMemberTeam;
    
}


