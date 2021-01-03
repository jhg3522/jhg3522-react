import React from 'react';
import './Info.css';
import {Route, NavLink, useParams} from 'react-router-dom';

var contents = [
    {id:1, title:'Name', description:'정현구!'},
    {id:2, title:'Age', description:'26.9살'},
    {id:3, title:'Phone', description:'010-5107-1668'},
]

function Information(){
    var params = useParams();
    var information_id = params.information_id;
    var selected_inform ={
        title:'Sorry',
        description:'Not Found'
    }
    for(var i=0; i<contents.length; i++){
        if(contents[i].id === Number(information_id)){
            selected_inform = contents[i];
            break;
        }
    }
    console.log('params',params,params.information_id);
    return(
        <div className='Infomation'>
            {selected_inform.description}
        </div>
    )
}

function Informations(){
    var lis=[];
    for(var i=0; i<contents.length;i++){
        lis.push(<li key={contents[i].id}><NavLink to={'/information/'+contents[i].id}>{contents[i].title}</NavLink></li>)
    }
    return (
        <div className='Info'>
            <div className='Info-inner'>
                <h2>Information</h2>
                <div className='content'>
                    <ul>
                        {lis}
                    </ul>
                    <Route path="/information/:information_id">
                        <Information/>
                    </Route>
                </div>
            </div>
        </div>
    )
}

export default Informations