// ===================================================
// Site Card
// ----
// Displays site icon, title, and URL
// ===================================================

// ---- External Dependencies ----
import React from 'react';
import Radium from 'radium';

// ---- Styles ----
const styles = {
  base: {
    display: 'flex',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff'
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 12
  },
  text: {
    flex: '1 0 auto'
  },
  title: {
    fontSize: 14,
    color: '#2e4453',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  url: {
    fontSize: 11,
    fontStyle: 'italic',
    color: 'rgb(135, 166, 188)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
};

// ---- React Class ----
class SiteCard extends React.Component {

  render() {
    return (
      <div style={ [
        styles.base,
        this.props.style
      ] }>
        <img src="https://cldup.com/nOspbsQlYa.png" style={ styles.icon } />
        <div style={ styles.text }>
          <div style={ styles.title }>{ this.props.title }</div>
          <div style={ styles.url }>{ this.props.url }</div>
        </div>
      </div>
    )
  }

  // Header
  // ------------

}

// ==== Module Export ====
export default Radium(SiteCard);
