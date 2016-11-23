var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = new React.createClass({

  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>

            <li><Link to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Timer</Link></li>
            <li><Link to="/countdown" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Countdown</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">by Colin Seaman</li>
          </ul>

        </div>
      </div>
    )
  }

});

module.exports = Nav;
