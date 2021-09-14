class VisibilityToogle extends React.Component {
  constructor(props){
    super(props);
    this.showDetails = this.showDetails.bind(this);
    this.state = {
      title: 'visible toogle',
      subtitle: '',
      buttonTitle: 'show details'
    }
  }

  showDetails(){
    if(this.state.subtitle.length === 0){
      this.setState(() => {
        return {
          subtitle: 'hello widzisz mnie',
          buttonTitle: 'hide details'
        }
      });
    } else {
      this.setState(() => {
        return {
          subtitle: '',
          buttonTitle: 'show details'
        }
      });
    }
  };
  
  render(){
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.showDetails}>{this.state.buttonTitle}</button>
        {this.state.subtitle && <p>{this.state.subtitle}</p>}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToogle />, document.getElementById('app'));
