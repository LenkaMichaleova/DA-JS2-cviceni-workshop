import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

const response = await fetch("http://localhost:4000/api/workshops/0")
const json = await response.json()
console.log(json)

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <h1>{json.data.title}</h1>
      <h2>Lektor: {json.data.instructor.name}</h2>
    </header>
    <main>
      <h3>O čem to je:</h3>
      <p>{json.data.description}</p>
      <h3>Místo konání:</h3>
      <p> {json.data.venue.street}
        <br />{json.data.venue.city}
        </p>
    </main>
    <footer>
      <p></p>
    </footer>
  </div>
);
