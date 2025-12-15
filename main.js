
/* function HelloWorld () {
    return <div className="container">Hello Function Component</div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HelloWorld/>);
 */

function HelloWorld () {
  return <div className="=container">Hello Worlds Function Component</div>;
}

function App() {
  return (
    <div>
      <HelloWorld/>
      <HelloWorld/>
      <HelloWorld/>
      <HelloWorld/>
    </div>
  );
}

const rootElement = document.getElementById('root')

const root = ReactDOM.createRoot(rootElement)

root.render(<App/>);

/* const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

function renderElement () {
  const element = (
    <div className="post">
      <h1>My First Blog Post</h1>
      <div>Author: Mark Twain</div>
      <div>Published: {new Date().toLocaleTimeString()}</div>
      <p>
        I am new to blogging and this is my first post. You should expect a
        lot of great things from me.
      </p>
    </div>
  );

  root.render(element);
}

setInterval(renderElement, 1000); */