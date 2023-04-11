import './../styles/Home.scss'
import SideBar from '../components/Sidebar';
import MainBar from '../components/Mainbar';
import Headerbar from '../router/Headerbar';
import Widgets from '../components/Widgets';
import Feature from '../components/Feature';
import Chart from '../components/Chart';
import TableList from '../components/Tablelist';
import React from 'react';

const Home = () => {
    return (
        
        <div className="home">
            <SideBar/>

            <div className="mainContainer">
                <Headerbar />
                <div className='widgets'>
                    <Widgets type="user"/>
                    <Widgets type="product"/>
                    <Widgets type="revenue"/>
                    <Widgets type="expense"/> 
                </div>
                <div className='charts'>
                   <Feature />
                   <Chart/>
                    
                </div>
                <div className='tablelist'>
                    <div className='title'>Lastest Transactions</div>
                    <TableList/>
                </div>
            </div>
        </div>
)
};

export default Home;