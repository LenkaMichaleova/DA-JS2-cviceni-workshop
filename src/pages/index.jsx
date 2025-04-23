import { render } from '@czechitas/render';
import { WorkshopIntro } from '../components/WorkshopIntro/WorkshopIntro';
import { Venue } from '../components/Venue/Venue';
import { Instructor } from '../components/Instructor/Instructor';
import '../global.css';
import './index.css';

const response = await fetch("http://localhost:4000/api/workshops/0")
const json = await response.json()
console.log(json)

document.querySelector('#root').innerHTML = render(
  <>
    <WorkshopIntro title={json.data.title} description={json.data.description}/>
    <Venue street={json.data.venue.street} city={json.data.venue.city}/>
    <Instructor lector={json.data.instructor.name}/>
  </>
);