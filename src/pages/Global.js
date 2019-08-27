import React, { Component } from 'react'
import {
    Route,
    Link
  } from 'react-router-dom'
import '../assets/css/global.scss'

class Global extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            location:''
         };
        //this.props.history.push('/global/index')
    }
    componentDidMount(){
        console.info(this.props.routes)
        this.setState({
            location:this.props.location.pathname
        })
        this.props.history.listen(route => {
            this.setState({
                location:route.pathname
            })
        })
    }
    render() {
        return (
            <div>
                <div className="global_top">
                    111
                </div>
                <div className="global_left">

                    {
                        this.props.routes.map((item,key)=>{
                            return (
                                <Link to={item.path} key={key}>
                                    <div className={`global_left_item ${this.state.location == item.path? 'avtive' : ''}`} style={{color: (this.state.location == item.path)? '#2e90ff' : ''}}>
                                        <div className="global_left_item_icon">
                                            <span className="mat-icon" dangerouslySetInnerHTML={{__html:item.icon}}></span>
                                        </div>
                                        <div className="global_left_item_text">{item.name}</div>
                                    </div>
                                </Link>
                            )
                        })
                    }


                    {/* <Link to="/global/index">
                        <div className="global_left_item">
                            <div className="global_left_item_icon">
                                <span className="mat-icon">&#xe616;</span>
                            </div>
                            <div className="global_left_item_text">首页</div>
                        </div>
                    </Link>
                    <Link to="/global/finance">
                        <div className="global_left_item">
                            <div className="global_left_item_icon">
                                <span className="mat-icon">&#xe624;</span>
                            </div>
                            <div className="global_left_item_text">财务</div>
                        </div>
                    </Link> */}
                </div>
                <div className="global_content">
                    {
                        this.props.routes.map((item,key)=>{
                            return (
                                <Route key={key} path={item.path} component={item.component} />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Global;
