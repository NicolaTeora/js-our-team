# Our Team
fornito un file js in cui è definito un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare le relative informazioni: <u>Nome</u>, <u>Ruolo</u> e <u>Foto</u>.

### MILESTONE 1:
stampare su console le informazioni di <u>Nome</u>, <u>Ruolo</u> e la stringa della <u>Foto</u>

### MILESTONE 2:
stampare le stesse informazioni su **DOM** sottoforma di stringhe

#### BONUS 1:
trasformare la stringa <u>Foto</u> in una immagine effettiva

#### BONUS 2:
organizzare i singoli membri in card/schede

## Svolgimento:

#### Milestone 1:
Tramite l'utilizzo di un ciclo scorro tutto il contenuto dell'array **team** e tramite <u>console.table</u> stampo in console il contenuto:
- <u>Nome</u>, 
- <u>Ruolo</u> 
- stringa della <u>Foto</u>

#### Milestone 2:
<s>tramite funzione creo il contenuto html per stampare in **DOM** le informazioni stampate in console.</s>
- tramite template literals stampo nel **DOM** gli elementi <u>object nell'array(team)</u>

#### bonus 1
aggiungo al template literals il tag 'img' e trasformo le stringe delle foto in immagini effettive nel **DOM**  