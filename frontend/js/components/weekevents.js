/**
 * Created by i.panfilenko on 25.02.2016.
 */

DoingEvents.WeekEvents = React.createClass({
    render: function () {
        console.log(this.props);
        return (
            <div className="row-fluid title">
                <h3 className="text-info">Week Events</h3>
                <DoingEvents.DayEvents />
                <DoingEvents.DayEvents />
                <DoingEvents.DayEvents />
                <DoingEvents.DayEvents />
                <DoingEvents.DayEvents />
                <DoingEvents.DayEvents />
            </div>
        );
    }
});
