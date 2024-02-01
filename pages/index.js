// pages/index.js
import React from 'react';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showVoucher: false };
    this.toggleVoucher = this.toggleVoucher.bind(this);
  }

  toggleVoucher() {
    this.setState({ showVoucher: !this.state.showVoucher });
  }

  render() {
    return (
      <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', paddingTop: '50px' }}>
        <button 
          style={{ fontSize: '16px', padding: '10px 20px', cursor: 'pointer' }}
          onClick={this.toggleVoucher}>
          {this.state.showVoucher ? 'Hide Your Gift' : 'Reveal Your Gift'}
        </button>

        {this.state.showVoucher && (
          <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            marginTop: '20px',
          }}>
            <img 
              src="/Voucher.jpg" 
              alt="Gift Voucher" 
              style={{ maxWidth: '100%', height: 'auto' }} />
            <p>Enjoy your gift!</p>
          </div>
        )}
      </div>
    );
  }
}

export default HomePage;
