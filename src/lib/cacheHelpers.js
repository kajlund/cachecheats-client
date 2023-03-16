import cito from '../assets/cito.png'
import earth from '../assets/earth.png'
import letterbox from '../assets/letterbox.png'
import multi from '../assets/multi.png'
import mystery from '../assets/mystery.png'
import tradi from '../assets/tradi.png'
import virtual from '../assets/virtual.png'
import webcam from '../assets/webcam.png'
import wherigo from '../assets/wherigo.png'

export function getImage(name) {
  switch (name) {
    case 'TRADITIONAL': return tradi
    case 'MYSTERY': return mystery
    case 'MULTI': return multi
    case 'EARTH': return earth
    case 'LETTERBOX': return letterbox
    // case 'EVENT': return event
    case 'CITO': return cito
    // case 'MEGA': return mega
    case 'WHERIGO': return wherigo
    // case 'GIGA': return giga
    // case 'HQ': return hq
    // case 'LAB': return lab
    case 'VIRTUAL': return virtual
    case 'WEBCAM': return webcam
    default: return null
  }
}

export let cacheTypes = [
  { id: 'TRADITIONAL', text: 'Traditional' },
  { id: 'MYSTERY', text: 'Mystery' },
  { id: 'MULTI', text: 'Multi' },
  { id: 'EARTH', text: 'Earth' },
  { id: 'EVENT', text: 'Event' },
  { id: 'CITO', text: 'Cito' },
  { id: 'MEGA', text: 'Mega' },
  { id: 'GIGA', text: 'Giga' },
  { id: 'WHERIGO', text: 'Wherigo' },
  { id: 'HQ', text: 'HQ' },
  { id: 'LAB', text: 'Lab' },
  { id: 'VIRTUAL', text: 'Virtual' },
  { id: 'WEBCAM', text: 'Webcam' }
]
