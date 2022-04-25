import _ from 'lodash';
import '../css/base.scss';
import '../css/bar.css';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack', process.env.NODE_ENV], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
