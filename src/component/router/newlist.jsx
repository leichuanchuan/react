import React, { Component } from 'react';

import { Link }   from   'react-router-dom'


class NewsList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {/* <li>罗永浩被限制高消费</li> */}
                    <Link  to = "/newsdate/?id=1001" >       
                    罗永浩被限制高消费
                    </Link>
                    <li>桂林机长被停飞</li>
                    <li>朝鲜痛斥美国挑衅</li>
                    {/* <li>11岁女孩斗鳄鱼</li>   */}
                    <Link  to = "/newsdate/1888" >          
                    11岁女孩斗鳄鱼
                    </Link>
                </ul>
            </div>
        );
    }
}

export default NewsList;





