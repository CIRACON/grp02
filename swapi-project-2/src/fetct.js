export async function fetchAllPeople() {

  let people = [];

  let url = `https://swapi.dev/api/people/`;

  while (url) {
      try {
          const fetchPeople = await fetch(url)
              .then(res => res.json())
              .then(res => { url = res.next; return res })
              .then(res => res.results)
              .then(res => res.map(p => ({ ...p, id: + getIdFrom('people', p.url) })))

          people.push(...fetchPeople)
      } catch (ex) {
          console.error(`Error reading people.`, ex.message);
      }
 }

  return people;
}

export function getIdFrom(entityName, url) {
  const re = new RegExp(`.*${entityName}\/(\\d+).*`);
  const matches = url.match(re)
  if (!matches) throw `Bad URL. Not a ${entityName} URL.`
  return matches[1]
}