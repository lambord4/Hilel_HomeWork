import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const storedCounts = localStorage.getItem('emojiCounts');
    this.state = {
      counts: storedCounts
        ? JSON.parse(storedCounts)
        : {
            '😂': 0,
            '😭': 0,
            '😁': 0,
            '😊': 0,
            '🤔': 0,
          },
      winner: null
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counts !== this.state.counts) {
      localStorage.setItem('emojiCounts', JSON.stringify(this.state.counts));
    }
  }

  handleClick = (emoji) => {
    this.setState(prevState => ({
      counts: {
        ...prevState.counts,
        [emoji]: prevState.counts[emoji] + 1
      }
    }));
  };

  getTopEmoji = (counts) => {
    let topEmoji = null;
    let maxCount = -1;

    for (const [emoji, count] of Object.entries(counts)) {
      if (count > maxCount) {
        maxCount = count;
        topEmoji = emoji;
      }
    }

    return { emoji: topEmoji, count: maxCount };
  };

  handleShowResult = () => {
    const top = this.getTopEmoji(this.state.counts);
    this.setState({ winner: top });
  };

  handleReset = () => {
    const resetCounts = Object.keys(this.state.counts).reduce((acc, emoji) => {
      acc[emoji] = 0;
      return acc;
    }, {});

    this.setState({
      counts: resetCounts,
      winner: null
    });

    localStorage.setItem('emojiCounts', JSON.stringify(resetCounts));
  };

  render() {
    const { counts, winner } = this.state;

    return (
      <>
        <p>Выбери свой emoji</p>
        <div>
          {Object.entries(counts).map(([emoji, count]) => (
            <span
              key={emoji}
              onClick={() => this.handleClick(emoji)}
              style={{ marginRight: 10, cursor: 'pointer' }}
            >
              {emoji} {count}
            </span>
          ))}
        </div>

        <button className="button" onClick={this.handleShowResult}>
          Показать победителя
        </button>

        {winner && (
          <>
          <div style={{ marginTop: '1rem', fontSize: '30px' }}>
            Победитель: <span style={{ fontSize: '80px' }}>{winner.emoji}</span> — {winner.count} голосов!
          </div>
          <button className="reset-result button" onClick={this.handleReset}>Очистить результат</button>
          </>
        )}

        
      </>
    );
  }
}

export default App;



