const app = {
  title: 'visible toggle',
  subtitle: [],
  buttonTitle: 'show details'
}

const showDetails = () => {
  if(app.subtitle.length === 0) {
    app.subtitle.push('hello widzisz mnie');
    app.buttonTitle = 'hide details';
  } else {
    app.subtitle = [];
    app.buttonTitle = 'show details';
  }
  render();
}

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={showDetails}>{app.buttonTitle}</button>
      {app.subtitle && <p>{app.subtitle}</p>}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();