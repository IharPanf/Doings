/**
 * Created by i.panfilenko on 25.02.2016.
 */
DoingEvents.DayEvents = React.createClass({
    addNew:function(e) {
        $('#modal').modal();
        $('.modal-backdrop').bind('click', function () {
            $('.close').click();
        })
    },
    render: function () {
        return (
            <div className="row-fluid">
                <div className="span1 curDay">
                    Понедельник
                </div>

                <div className="span11 events">
                    <DoingEvents.OneEvent />
                    <DoingEvents.OneEvent />
                    <DoingEvents.OneEvent />
                    <div className="add">
                        <a href="#" className="add_new" onClick={this.addNew}>...</a>
                    </div>
                </div>
            </div>
        );
    }
});