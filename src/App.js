import './App.css';
import { useState } from 'react';
function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/',  {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({message}),
    })
    .then((res) => res.json())
    .then((data) => setResponse(data.message));
  };

  return (
    <div className="App">
      <div className="main">
          <div className="chat">{response}</div>
      </div>
        <div className='center'>
        <div className='type'>
        <form onSubmit={handleSubmit}>
        <input
        placeholder="Enter your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)} />       
        <button type="submit" >
        </button>
        </form>
        </div>
        </div>
      </div>
  );
}

export default App;
