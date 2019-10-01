import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App(props) {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//       <h1>{props.className}</h1>
//     </div>
//   );
// }

// ReactDOM.render(
//   <App className="ok" />,
//   document.getElementById('root')
// );	
ReactDOM.render(<App />, document.getElementById('root'));
// class Test extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//       </div>
//     );
//   }
// }
//  ReactDOM.render(
//  	<Test />,
//  	document.getElementById('try')
//  );

//<button className="btn btn-lg btn-primary" onClick={()=>testa(1,2)}>	{/* replace this button by modal */}
// 	Test
//</button>
// function testa(a,b){
// 	ReactDOM.render(
//  		<h1>{a+b+" hello"}</h1>,
//  		document.getElementById('test')
//  	);
//  }
//const t2=<h1> {test(1,2)}</h1>;	
//ReactDOM.render(
//	test(1,2),
//	document.getElementById('test')
//);