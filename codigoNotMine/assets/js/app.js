const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//la selección de html esta incorrecta 
const $n = document.querySelector('#name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');
//usamos async porque no lo habia marcado await 
async function displayUser(username) {
  //$n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(response);
  //deben ser comillas dobles
  $n.textContent = "${data.name}";
  $b.textContent = "${data.blog}";
  $l.textContent = "${data.location}";
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);