/**
 * Created by i.panfilenko on 25.02.2016.
 */

DoingEvents.OneEvent = React.createClass({
    deleteClick:function(e){
        var curElem = e.target;
        $(curElem).parent().parent().hide();    //удаление события
    },
    render: function () {
        return (
            <div className="one_event">
                <span contentEditable="true">SomeEvents</span>

                <div className="cancel">
                    <a href="#" onClick={this.deleteClick}>X</a>
                </div>
            </div>
        );
    }
});
