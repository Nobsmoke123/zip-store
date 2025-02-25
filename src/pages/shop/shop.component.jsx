import React from "react";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";
import { connect } from "react-redux";

class ShopPage extends React.Component {
  render() {
    const { collections } = this.props;
    return (
      <div>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ shop: { collections } }) => ({
  collections,
});

export default connect(mapStateToProps)(ShopPage);
