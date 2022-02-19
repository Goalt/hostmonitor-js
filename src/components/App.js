import React from 'react';
import { GetDefault, GetStatus } from '../logic/client';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hostStatus: GetDefault() }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    var self = this;
    GetStatus(function (data) {
      self.setState({
        hostStatus: data
      });
    })
  }

  render() {
    return (
      <div className="App">
        <div className="Section">
          <p>RAM:</p>
          <div className="Attribute">
            <p>Total: {this.state.hostStatus.ram.Total}</p>
            <p>Available: {this.state.hostStatus.ram.Available}</p>
          </div>
        </div>

        <div className="Section">
          <p>Storage:</p>
          <div className="Attribute">
            <p>Total: {this.state.hostStatus.storage.Total}</p>
            <p>Available: {this.state.hostStatus.storage.Available}</p>
            <p>Free: {this.state.hostStatus.storage.Free}</p>
          </div>
        </div>

        <div className="Section">
          <p>LoadAvg:</p>
          <div className="Attribute">
            <p>load1: {this.state.hostStatus.loadavg.Load1}</p>
            <p>load5: {this.state.hostStatus.loadavg.Load5}</p>
            <p>load15: {this.state.hostStatus.loadavg.Load15}</p>
          </div>
        </div>

        <div className="Section">
          <p>Uptime:</p>
          <div className="Attribute">
            <p>Since last reboot: {this.state.hostStatus.uptime.dur}</p>
          </div>
        </div>

        <div className="Section">
          <p>UpdatedAt:</p>
          <div className="Attribute">
            <p>{this.state.hostStatus.updatedAt}</p>
          </div>
        </div>

        <div className="Section">
          <p>Docker containers:</p>
          <div className="Attribute">
            <DockerContainers data={this.state.hostStatus.DockerContainers} />
          </div>
        </div>
      </div>
    );
  }
}

class DockerContainers extends React.Component {
  render() {
    console.log(this.props.data)
    console.log(typeof(this.props.data))

    const items = []
    for (const [key, value] of Object.entries(this.props.data)) {
      console.log(`${key}: ${value}`);
      items.push(<DockerContainer containerName={key} status={value} />)
    }
  
    return (
      <div>
        {items}
      </div>
    )
  }
}

class DockerContainer extends React.Component {
  render() {
    return (
      <p>{this.props.containerName} -- {this.props.status}</p>
    )
  }
}

export default App;
