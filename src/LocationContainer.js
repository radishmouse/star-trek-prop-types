
import LocationList from './LocationList';
import {addResource} from './actions';
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  locations: state.locations
});

const mapDispatchToProps = dispatch => ({
  onAddResourcesClick: (resourceName, howMany, idToAddTo) => {
    dispatch(addResource(resourceName, howMany, idToAddTo))
  }
});

const LocationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationList);
export default LocationContainer;