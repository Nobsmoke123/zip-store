import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
class Directory extends React.Component {
  render() {
    const { sections } = this.props;
    return (
      <div className="directory-menu">
        {sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
