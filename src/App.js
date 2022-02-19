import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Section">
        <p>RAM:</p>
        <div className="Attribute">
          <p>Total: 3GB</p>
          <p>Available: 100MB</p>
        </div>
      </div>

      <div className="Section">
        <p>Storage:</p>
        <div className="Attribute">
          <p>Total: 100MB</p>
          <p>Available: 3GB</p>
          <p>Free: 3GB</p>
        </div>
      </div>

      <div className="Section">
        <p>LoadAvg:</p>
        <div className="Attribute">
          <p>load1: 100MB</p>
          <p>load5: 3GB</p>
          <p>load15: 3GB</p>
        </div>
      </div>

      <div className="Section">
        <p>Uptime:</p>
        <div className="Attribute">
          <p>Since last reboot: 100MB</p>
        </div>
      </div>

      <div className="Section">
        <p>UpdatedAt:</p>
        <div className="Attribute">
          <p>10.01.2021</p>
        </div>
      </div>

      {/* <div className="Section">Docker containers</div> */}
    </div>
  );
}

export default App;
