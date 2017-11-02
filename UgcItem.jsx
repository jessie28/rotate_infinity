"use strict"
import React from 'react';
import Rotates from './rotate_infinity'
require('./index.css')
export default class UgcItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            constructor : null,
            Rotates : null,
            containerClass : "ugcItemContainer"
        }
    }

    componentDidMount(){
        this.setState({
            constructor : <div className={this.state.containerClass}> {this.props.children} </div>,
        },function () {
            this.setState({
                Rotates : new Rotates(this.state.containerClass,{})
            })
        })

    }

    componentWillReceiveProps(nextProps){
        if(JSON.stringify(nextProps.imglist) !== JSON.stringify(this.props.imglist)){
            this.setState({
                Rotates: null,
                constructor:''
            },function () {
                this.setState({
                    Rotates: null,
                    constructor:<div className={this.state.containerClass}>{nextProps.children}</div>
                }, function(){
                    this.setState({
                        Rotates:  new Rotates(this.state.containerClass,{})
                    });
                })
            });
        }
    }

    render(){


        return (
            <div className="ugcItems">
                {this.state.constructor }
            </div>

        )
    }
}