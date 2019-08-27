import React, { Component } from 'react';
import { Button,message } from 'antd';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    buttonClick=()=>{
        message.config({
            top: 100,
            duration: 10,
            maxCount: 3,
        });
    }

    render() {
        return (
            <div>
                <div>
                    这是Index页面
                </div>
            </div>
        );
    }
}

export default Index;
