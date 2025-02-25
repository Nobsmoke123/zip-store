import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";

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

const mapStateToProps = ({ home: { sections } }) => ({
  sections,
});

export default connect(mapStateToProps)(Directory);
