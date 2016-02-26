/**
 * Created by i.panfilenko on 25.02.2016.
 */

DoingEvents.OneEvent = React.createClass({
    deleteClick:function(e){
        var curElem = e.target;
        $(curElem).parent().parent().hide();    //удаление события
    },
    render: function () {
        var daysName = this.props.curDay;
        var eventsInDay;
        var _this = this;
        for (var  i = 0, len = daysName.length;i < len; i++) {
            eventsInDay = this.props.data.map(function (event) {
                if (event.dayofweek == daysName[i]) {
                    return (
                        <div className="one_event">
                            <span contentEditable="true">{event.textEvent}</span>

                            <div className="cancel">
                                <a href="#" onClick={_this.deleteClick}>X</a>
                            </div>
                        </div>
                    )
                }
            });
        }

        return (
            <div>
            {eventsInDay}
            </div>
        );
    }
});
