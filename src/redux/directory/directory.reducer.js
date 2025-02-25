const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      size: "medium",
      url: "hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      size: "medium",
      url: "#",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      size: "medium",
      url: "#",
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      id: 4,
      size: "large",
      url: "#",
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/mens.png",
      id: 5,
      size: "large",
      url: "#",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default directoryReducer;
