const { Component } = require("react");


export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {show:true}

  }
/*   static getDerivedStateFromProps(props){
    return {color:props.name}
  } */

  /* componentDidMount(){
    setTimeout(()=>{
        this.setState({ color:"blue"})
    },2000);
  } */


 /*  shouldComponentUpdate(){
      return true;
  } */

  /* componentDidMount() {
    setTimeout(() => {
      this.setState({color: "yellow"})
    }, 1000)
  }

  getSnapshotBeforeUpdate(pprops,pstate){
    document.getElementById("mydiv").innerHTML =
    "The updated favorite was " + pstate.color;
  }

  componentDidUpdate() {
    document.getElementById("mydiv2").innerHTML =
    "The updated favorite is " + this.state.color;
  }


  changeColor = ()=> {
    this.setState({color: "blue"});
  } */

  delHeader = () => {
    this.setState({show: false});
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    }
    else{
     // alert('helo');
     console.log('ok')
    }

    return (
      <div>
      {myheader}
      <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}
