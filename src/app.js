import React from 'react';
import ReactDOM from 'react-dom';

import MoreMenu from './moreMenu.jsx';

const items = [
  {id: '1', label: 'All'},
  {id: '2', label: 'Badminton'},
  {id: '3', label: 'Basketball'},
  {id: '4', label: 'Boxing'},
  {id: '5', label: 'Cycling'},
  {id: '6', label: 'Fencing'},
  {id: '7', label: 'Field hockey'},
  {id: '8', label: 'Football'},
  {id: '9', label: 'Judo'},
  {id: '10', label: 'Shooting'},
  {id: '11', label: 'Tennis'},
  {id: '12', label: 'Volleyball'},
  {id: '13', label: 'Weightlifting'},
  {id: '14', label: 'BMX Racing'},
  {id: '15', label: 'Trampoline'}
]

ReactDOM.render(
  <MoreMenu items={items} />,
  document.getElementById('app')
);

