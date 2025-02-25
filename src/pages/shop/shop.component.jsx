import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop.selector";
import CollectionsOverviewComponent from "../../components/collections-overview/collections-overview.component";

const ShopPage = ({ collections }) => {
  return (
    <div>
      <CollectionsOverviewComponent />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(ShopPage);
