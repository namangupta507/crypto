import React from 'react';

const   Table = ({ data }) => {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          backgroundColor: 'white',
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#0d1117', color: '#ffffff' }}>
            <th style={thStyle}>Coin Name</th>
            <th style={thStyle}>Symbol</th>
            <th style={thStyle}>Current Price (USD)</th>
            <th style={thStyle}>Market Cap</th>
            <th style={thStyle}>24h % Change</th>
            <th style={thStyle}>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin) => (
            <tr key={coin.id}>
              <td style={tdStyle}>{coin.name}</td>
              <td style={tdStyle}>{coin.symbol.toUpperCase()}</td>
              <td style={tdStyle}>${coin.current_price.toLocaleString()}</td>
              <td style={tdStyle}>${coin.market_cap.toLocaleString()}</td>
              <td
                style={{
                  ...tdStyle,
                  color:
                    coin.price_change_percentage_24h >= 0 ? 'green' : 'red',
                }}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td style={tdStyle}>
                {new Date(coin.last_updated).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  padding: '12px',
  borderBottom: '1px solid #ddd',
  textAlign: 'left',
};

const tdStyle = {
  padding: '12px',
  borderBottom: '1px solid #ddd',
};

export default Table;
