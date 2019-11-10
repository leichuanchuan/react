import React, { Component } from 'react'

import { HashRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'

import styles from './Layout.module.css'

function Caidan1() {
    return <div>
        菜单一号
    </div>
}

function Caidan2() {
    return <div>
        菜单二号
    </div>
}


export default class Index extends Component {
    render() {
        return <div className={styles.layout} >
            <Router>
                <div className={styles.left}  >
                    <br />
                    <Link to="/layout/caidanone" >菜单one</Link>
                    <br />
                    <Link to="/layout/caidantwo" >菜单two</Link>
                </div>
                <Switch>
                    <div  className={styles.right} >
                    <Route path="/layout/caidanone" component={Caidan1} />
                    <Route path="/layout/caidantwo" component={Caidan2} />
                    <Redirect from="/layout" to='/layout/caidantwo' />
                    </div>
                </Switch>
            </Router>
        </div>
    }
}