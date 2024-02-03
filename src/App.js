import './App.css';
import { useState } from 'react';
import Navbar from './Navbar/Navbar';

const Guest = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
const Tony = "https://wellgroomedgentleman.com/wp-content/uploads/2023/10/Tony_Stark_Beard_with_Slicked_Back_Hair.width-800.jpg"

const App = () => {
  const [message, setMessage] = useState('');
  const [conversations, setConversations] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setConversations(prevConversations => [...prevConversations, { type: 'input', text: message }]);
    

    fetch('http://localhost:3001/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
    .then((res) => res.json())
    .then((data) => {

      setConversations(prevConversations => [...prevConversations, { type: 'output', text: data.message }]);
    });
    
    setMessage('');
  };

  return (<>
        <Navbar />
    <div className="App">
      <div className="main">
        <div className="chat">
          <div className="scrollbar">
          {conversations.map((item, index) => (
            <div key={index} className={item.type}>
              <div className={`${item.type}`}>
                {item.type === 'input' ? <div className='guest'><img src={Guest} alt="Guest" />Guest</div> : <div className='tony'><img src={Tony} alt="Tony" />Tony Stark</div>} 
                {item.type === 'input' || item.type === 'output' ? <p /> : null}
                {item.text}
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
      <div className='center'>
        <div className='type'>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Enter your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">
            <img src="./logo.png" alt="Iron man" style={{ width: '30px', height: '30px', marginBottom: '-5px' }}></img>
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
