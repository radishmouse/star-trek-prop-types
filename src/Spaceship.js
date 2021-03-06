import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CrewMember from './CrewMember';

// export default class Spaceship extends Component {
// ^^ this is also ok!
class Spaceship extends Component {
  static propTypes = {
    name: PropTypes.string,
    children: PropTypes.node.isRequired,
    commanderType: PropTypes.string.isRequired
  };

  // static defaultProps = {
  //   commanderType: CrewMember({name: '', rank: ''})
  // }

  render() {
    const {
      name,
      children,
      commanderType
    } = this.props;

    console.log(commanderType);
    const creaturesOnboard = children.map((child, idx) => {
      if (child.type.name === commanderType) {
        return child;
      } else {
        return (
          <div className="alert-alert" key={idx}>
            {child}
          </div>
        );
      }
    });

    return (
      <div>
        <h1>{name}</h1>
        {creaturesOnboard}
      </div>
    );
  }
}

export default Spaceship;