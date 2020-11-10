import _ from 'lodash';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hellooooo', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());
