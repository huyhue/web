import React from 'react';
import ReactDOM from 'react-dom';
// import {BodyContainer} from "./bodyContainer";
import { Nav1 } from './nav1';
import { Nav2 } from './nav2';
import { Nav3 } from './nav3';
import { Nav4 } from './nav4';
import { Nav5 } from './nav5';
import { Nav6 } from './nav6';

function Index() {
    // return (<BodyContainer/>);
    return (
    <>
        <Nav1/>
        <Nav2/>
        <Nav3/>
        <Nav4/>
        <Nav5/>
        <Nav6/>
        </>
        );
}
ReactDOM.render(<Index />, document.getElementById('body'));
















// function alertRender(content){
//     alert("Khong sao dau " + content);
// }
// function FirstRct() {
//     return (
//         <div id="huy" className="huy" style={{width:"200px", backgroundColor:"aqua"}} onClick={alertRender("ok1")}>
//             Hello React
//         </div>
//     );
// }
// const firstRct2 = () => {
//     return (
//         <div>
//             Hello React2
//         </div>
//     );
// }
// //chu dau tien phai viet hoa
// class FirstRct3 extends React.Component{
//     render(){
//         return (
//             <div>
//                 Hello React3
//             </div>
//         )
//     }
// }
// ReactDOM.render(<FirstRct />, document.getElementById('body'));