import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop.selector";
import CollectionsOverviewComponent from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";

const ShopPage = ({ match }) => {
  return (
    <div>
      <Route  
        exact
        path={`${match.path}`}
        component={CollectionsOverviewComponent}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(ShopPage);
