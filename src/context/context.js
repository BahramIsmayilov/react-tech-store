import React, { Component } from "react";
import { linkData } from "./linkData";
import { socialData } from "./socialData";
// import { items } from "./productData";
import { client } from "./contentful";

const ProductContext = React.createContext();
//Provider
//Consumer
class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    links: linkData,
    socialIcons: socialData,
    cart: [],
    cartItems: 0,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: true,
    search: "",
    company: "all",
    min: 0,
    max: 0,
    price: 0,
    shipping: false
  };

  componentDidMount() {
    // from contentful items
    client
      .getEntries({
        content_type: "techStoreProducts"
      })
      .then(response => this.setProducts(response.items))
      .catch(console.error);
    //from json items
    // this.setProducts(items);
  }

  //set products
  setProducts = products => {
    let storeProducts = products.map(item => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image };
      return product;
    });
    // featured producte
    let featuredProducts = storeProducts.filter(item => item.featured === true);
    //get max product
    let maxPrice = Math.max(...storeProducts.map(item => item.price));

    this.setState(
      {
        storeProducts,
        filteredProducts: storeProducts,
        featuredProducts,
        cart: this.getStorageCart(),
        singleProduct: this.getStorageProduct(),
        loading: false,
        price: maxPrice,
        max: maxPrice
      },
      () => {
        this.addTotals();
      }
    );
  };
  // get cart form local storage
  getStorageCart = () => {
    let cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    } else {
      cart = [];
    }
    return cart;
  };
  // get product form local storage
  getStorageProduct = () => {
    return localStorage.getItem("singleProduct")
      ? JSON.parse(localStorage.getItem("singleProduct"))
      : {};
  };
  // get totals
  getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;
    this.state.cart.forEach(item => {
      subTotal += item.total;
      cartItems += item.count;
    });
    subTotal = parseFloat(subTotal.toFixed(2));
    let tax = subTotal * 0.2;
    tax = parseFloat(tax.toFixed(2));
    let total = subTotal + tax;
    total = parseFloat(total.toFixed(2));
    return {
      cartItems,
      subTotal,
      tax,
      total
    };
  };
  // add totlas
  addTotals = () => {
    const totals = this.getTotals();
    this.setState({
      cartItems: totals.cartItems,
      cartSubTotal: totals.subTotal,
      cartTax: totals.tax,
      cartTotal: totals.total
    });
  };
  //sync storage
  syncStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  };
  //add to cart
  addToCart = id => {
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.storeProducts];
    let tempItem = tempCart.find(item => item.id === id);
    if (!tempItem) {
      tempItem = tempProducts.find(item => item.id === id);
      let total = tempItem.price;
      let cartItem = { ...tempItem, count: 1, total };
      tempCart = [...tempCart, cartItem];
    } else {
      tempItem.count++;
      tempItem.total = tempItem.price * tempItem.count;
      tempItem.total = parseFloat(tempItem.total.toFixed(2));
    }
    this.setState(
      () => {
        return { cart: tempCart };
      },
      () => {
        this.addTotals();
        this.syncStorage();
        this.openCart();
      }
    );
  };
  // set single product
  setSingleProduct = id => {
    let product = this.state.storeProducts.find(item => item.id === id);
    localStorage.setItem("singleProduct", JSON.stringify(product));
    this.setState({
      singleProduct: { ...product },
      loading: false
    });
  };
  //handle sidebar
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };
  //handle cart
  handleCart = () => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };
  //close cart
  closeCart = () => {
    this.setState({ cartOpen: false });
  };
  //open cart
  openCart = () => {
    this.setState({ cartOpen: true });
  };
  //crt functionality
  //increment
  increment = id => {
    let tempCart = [...this.state.cart];
    let cartItem = tempCart.find(item => item.id === id);
    cartItem.count++;
    cartItem.total = cartItem.price * cartItem.count;
    cartItem.total = parseFloat(cartItem.total.toFixed(2));

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };
  //decrement
  decrement = id => {
    let tempCart = [...this.state.cart];
    let itemCart = tempCart.find(item => item.id === id);
    itemCart.count--;

    if (itemCart.count === 0) {
      this.removeItem(id);
    } else {
      itemCart.total = itemCart.price * itemCart.count;
      itemCart.total = parseFloat(itemCart.total.toFixed(2));
      this.setState(
        () => {
          return {
            cart: [...tempCart]
          };
        },
        () => {
          this.addTotals();
          this.syncStorage();
        }
      );
    }
  };
  //removeItem
  removeItem = id => {
    let tempItem = [...this.state.cart];
    tempItem = tempItem.filter(item => item.id !== id);
    this.setState(
      () => {
        return {
          cart: [...tempItem]
        };
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };
  //clear cart
  clearCart = () => {
    this.setState(
      {
        cart: []
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };
  //handle filtering
  handleChange = event => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value
      },
      this.storeData
    );
  };
  storeData = () => {
    const { storeProducts, company, search, price, shipping } = this.state;
    let tempPrice = parseInt(price);
    let tempProducts = [...storeProducts];
    // filterinf based on search
    if (search.length > 0) {
      tempProducts = tempProducts.filter(item => {
        let tempSearch = search.toLowerCase();
        let tempTitle = item.title.toLowerCase().slice(0, tempSearch.length);
        return tempSearch === tempTitle;
      });
    }
    // filtering based on company
    if (company !== "all") {
      tempProducts = tempProducts.filter(item => item.company === company);
    }
    // filtering based on price
    tempProducts = tempProducts.filter(item => item.price <= tempPrice);
    // filtering based on shipping
    if (shipping) {
      tempProducts = tempProducts.filter(item => item.freeShipping === true);
    }
    this.setState({
      filteredProducts: tempProducts
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
