// import React, { Component } from 'react';

// class Table extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       music: [
//         { id: 1, name: 'Wasif' },
//         { id: 2, name: 'Ali' },
//         { id: 3, name: 'Saad' },
//       ],
//     };
//   }

//   renderTableHeader() {
//     let header = Object.keys(this.state.music[0]);
//     return header.map((key, index) => {
//       return <th key={index}>{key.toUpperCase()}</th>;
//     });
//   }

//   renderTableData() {
//     return this.state.music.map((list, index) => {
//       const { id, name } = list; //destructuring
//       return (
//         <tr key={id}>
//           <td>{id}</td>
//           <td>{name}</td>
//         </tr>
//       );
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1 id='title'>React Dynamic Table</h1>
//         <table id='music'>
//           <tbody>
//             <tr>{this.renderTableHeader()}</tr>
//             {this.renderTableData()}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default Table;
