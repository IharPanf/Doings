/**
 * Created by i.panfilenko on 25.02.2016.
 */

DoingEvents.WeekEvents = React.createClass({
    addNew: function (e) {
        DoingEvents.curPosition = e.target;
        $('#modal').modal();
        $('.modal-backdrop').bind('click', function () {
            $('.close').click();
        })
    },
    render: function () {
        var _this = this;
        var dayEvents = this.props.data.map(function (day) {
            return (
                <div className="row-fluid">
                    <div className="span1 curDay">
                        {day.name}
                    </div>
                    <div className="span11 events">
                        <DoingEvents.OneEvent data={objEvents} curDay={day.id}/>

                        <div className="add">
                            <a href="#" className="add_new" onClick={_this.addNew}>...</a>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div className="row-fluid title">
                <h3 className="text-info">Week Events</h3>
                {dayEvents}
            </div>
        );
    }
});
