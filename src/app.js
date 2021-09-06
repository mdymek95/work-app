class IndecisionApp extends React.Component {

  

  render() {

    const title = 'Indecision App';
    const subtitle = 'Put your life in the hands of computer';
    const options = ['one', 'two', 'three'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOptions />
      </div>
    )
  }
}

class Header extends React.Component {
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props){
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }


  handleRemoveAll() {
    console.log(this.props.options);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }
        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOptions extends React.Component {

  handleAddOption(event){
    event.preventDefault();
    const option = event.target.elements.option.value.trim();
    if(option){
      alert('handleAddOption')
    }
  }

  render() {
    return (
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option"/>
        <button>Add option</button>
      </form>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));