import { writable, get } from 'svelte/store';
import { getAllPlaces } from '../api/place';

const places = writable([], () => {
  setPlaces()
  return () => {}
})

async function setPlaces () {
  let data = []
  const result = await getAllPlaces()
  console.log('places: ', result)

  result.places.forEach(item => {
    data.push({ value: item.id, label: item.name })
  })
  places.set(data)
}

export default places
