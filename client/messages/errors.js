import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router'

const errors = {
  'BAD_OPERATION': {
    title: 'Vláčik sa vykoľajil.',
    body: (
      <div>
        <p>Možné príčiny:
          <ul>
            <li>Vláčik vyšiel z mapy mimo stanicu kde má vyjsť.</li>
            <li>Vláčik vošiel na políčko, kde nie je koľajnica.</li>
            <li>Vláčik vošiel na koľajnicu zo strany z ktorej nie je príchod.</li>
            <li>Vláčik urobil nejakú zakázanú operáciu (napr. vydelil nulou).</li>
          </ul>
        </p>
      </div>
    ),
  },
  'FAILURE': {
    title: 'Vláčik nesplnil úlohu',
    body: (
      <div>
        <p>Možné príčiny:
          <ul>
            <li>Vláčik vošiel do koncovej stanice ale nemal splnené podmienky.</li>
            <li>Vláčik nedošiel do koncovej stanice v časovom limite.</li>
          </ul>
        </p>
      </div>
    ),
  },
  'NOT_ALLOWED': {
    title: 'Používaš stanicu ktorá je v tomto leveli zakázaná.',
    body: (
      <div>
        <p>Skontroluj si stanice, ktoré máš umiestnené.
          Niektorá z týchto staníc nie je v tomto leveli povolená a nenachádza sa ani v menu naľavo.
        </p>
      </div>
    ),
  },
  'HELP': {
    title: 'Tutoriál',
    body: (
      <div>
        <p>Tu bude video.</p>
      </div>
    ),
  },
  'GRADER_ERROR': {
    title: 'Riešenie sa neodovzdalo!',
    body: (
      <div>
        <p>Skús znova. Ak problém pretrváva, napíš na sysel@ksp.sk.</p>
      </div>
    ),
  },
}

const functions = {
  'SUCCESS': (notify, props) => {
    const onclick = () => {
      props.hideModal()
      props.sendLevel()
    }
    return {
      title: 'Vláčik splnil úlohu',
      body: (
        <div>
          <p>Body za úlohu sa ti ale ešte nezarátali, na to ti musí prejsť testami na stránke.</p>
          <p>Môžeš si skúsiť do vagónov napísať iné čísla a skúsiť ho znova.</p>
          <p>Alebo môžeš poslať vláčik na otestovanie.</p>
        </div>
      ),
      buttons: [
        (<Button onClick={onclick}>Odošli riešenie</Button>),
      ],
    }
  },
  'SERVER': (notify, props) => {
    if (notify.ok) {
      const onclick = () => {
        props.hideModal()
        props.changeRoute('/')
      }
      return {
        title: 'Super! Level odovzdaný :)',
        buttons: [
          (<Button onClick={onclick}>Späť do menu</Button>),
        ],
      }
    }
    let vlaciky = notify.failure.map((num, i) => {
      return (<p>Vo vozni {String.fromCharCode(i+65)} bolo na začiatku číslo {num}</p>)
    })
    let onclick= () => {
      props.test(notify.failure)
    }
    return {
      title: 'Level sa nepodarilo odovzdať.',
      body: (
        <div>
          <h2>{errors[notify.reason].title}</h2>
          {errors[notify.reason].body}
          {notify.failure.map((num, i) =>
            (<p>Vo vláčiku {String.fromCharCode(i+65)} bolo na začiatku číslo {num}</p>)
          )}
        </div>
      ),
      buttons: [
        (<Button onClick={onclick}>Otestuj si :)</Button>),
      ],
    }
  }
}


function getNotify(notify, func){
  if(notify.id in errors) {
    return errors[notify.id]
  }
  else if(notify.id in functions) {
    return functions[notify.id](notify, func)
  }
}

export default getNotify
