/**
 * Created by i.panfilenko on 25.02.2016.
 */
import 'babel-polyfill'
import React, { Component } from 'react'

class WeekEvents extends Component {
    render() {
        return (
            <div className="row-fluid">
                <div className="span1 curDay">
                    DAY_NAME
                </div>
                <div className="span11 events">
                    EVENTS
                    <div className="add">
                        <a href="#" className="add_new" onClick={_this.addNew}>...</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default WeekEvents;