const rootElement = document.getElementById('root');

/* 
const element = React.createElement(
    type = 'div',
    props = {
        className: 'container',
    },
    children = ['Hello World', 'Goodbye To A World']
);

console.log(element); */

/* const person = {first: 'Joe', last: 'Doe'};
const element =  <div className="container">
    Hello {person.first} {person.last}
     </div>; */


const test = (
  <ul>
    <li>
      <a href="">a</a>
    </li>
    <li>
      <a href="">b</a>
    </li>
    <li>
      <a href="">c</a>
    </li>
  </ul>
);

const logo = {
  name: 'React Logo',
  title: 'React Logo',
  path: './react-logo.png',
};

const element = <img src={logo.path} alt={logo.name} title={logo.title} />;

ReactDOM.createRoot(rootElement).render(element);

/* 
The method signature for createElement is as follows:

React.createElement(type, [props], [...children])



const element = document.createElement('div');

element.textContent = 'Hello World';
element.className = 'container';

rootElement.appendChild(element); */