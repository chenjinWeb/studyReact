import React, { Component } from 'react';
import { login_ } from "../../request/login.js"
import md5 from 'md5'
import '../../assets/css/login.scss'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account:'',
            password:'',
            code:'',
            imgSrc:''
        };
    }

    componentDidMount(){
        this.initCode();
    }

    initCode=()=>{
        let src = `/api/verify/code?v=${new Date().getTime()}` 
        this.setState({
            imgSrc:src
        })
    }

    login=()=>{
        let data = {
            account: this.state.account,
            password: md5(this.state.password),
            code: this.state.code
        }
        login_(data).then(res=>{
            if(res.success == 200){
                alert('登录成功!')
            }else{
                this.setState({
                    code:''
                })
                this.initCode();
            }
        })
    }

    inputChange=(e)=>{
        this.setState({
            account:e.target.value
        })
    }

    passChange=(e)=>{
        this.setState({
            password:e.target.value
        })
    }

    codeChange=(e)=>{
        this.setState({
            code:e.target.value
        })
    }

    render() {
        return (
            <div className="login">

                <div className="login_logo">

                    <img src={require('../../assets/img/logo.png')} alt="logo" />

                </div>

                <div className="login_content">

                    <div className="login_head">
                        <span>欢迎登陆</span> 智橙移动优化后台。
                    </div>

                    <div>

                        <div className="login_input">

                            <input type="text" placeholder="请输入账号名称" value={this.state.account} onChange={this.inputChange} />

                            <i className="mat-icon">&#xe62d;</i>

                        </div>

                        <div className="login_input">

                            <input type="password" placeholder="请输入密码" value={this.state.password} onChange={this.passChange} />
    
                        <i className="mat-icon">&#xe644;</i>

                        </div>

                        <div className="login_input login_code">

                            <input type="text" placeholder="请输入验证码" value={this.state.code} onChange={this.codeChange} />
    
                        <i className="mat-icon">&#xe656;</i>

                            <div style={{position: 'absolute', width: '30%', right: 0, height: '42px', top: '0px'}}>
                                <img src={this.state.imgSrc} style={{width: '100%', height: '100%', cursor: 'pointer'}} alt="code" />
                            </div>

                        </div>

                    </div>

                    <div className='login_btn' onClick={this.login}>登录</div>

                </div>

                <div style={{textAlign: 'center', height: '30px', width: '100%', lineHeight: '30px', position: 'absolute', bottom: '120px', color: '#999999', fontSize: '14px'}}>
                    Copyright (C) 2019 zcdsp.com All Rights Reserved. 沪ICP备09044414号
                </div>

            </div>

        );
    }
}

export default Login;
