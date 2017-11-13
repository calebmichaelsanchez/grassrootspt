// // !(function() {
// //   let productDetail = document.querySelector("#product-detail");

// //   if (productDetail) {
// //     // let items = document.querySelectorAll(".also > li");
// //     // items = [...items];
// //     // console.log(items)
// //     // $(items).pick(3);
// //   }
// // })();


// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import axios from "axios";

// class Product extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       product: null
//     }
//   }
//   componentDidMount() {
//     axios(`/products/${this.props.productHandle}.js`)
//       .then((response) => {
//         console.log(response);
//         // this.setState
//       })
//       .catch((response) => {
//         console.log(response);
//       });
//   }
//   render() {
//     return (
//       <div>Test</div>
//     )
//   }
// }

// let ProductElement = document.getElementById("product");

// if (ProductElement) {
//   let ProductHandle = ProductElement.dataset.handle;
//   ReactDOM.render(<Product productHandle={ProductHandle} />, ProductElement);
// }
