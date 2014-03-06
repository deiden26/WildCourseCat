/*
function legend(parent, data) {
    parent.className = 'legend';
    var datas = data.hasOwnProperty('datasets') ? data.datasets : data;

    datas.forEach(function(d) {
        var title = document.createElement('span');
        title.className = 'title';
        title.style.borderColor = d.hasOwnProperty('strokeColor') ? d.strokeColor : d.color;
        title.style.borderStyle = 'solid';
        parent.appendChild(title);

        var text = document.createTextNode(d.title);
        title.appendChild(text);
    });
}
*/
var called = false;
function legend(parent, data) {
    if(!called)
    {
        var datas = data.hasOwnProperty('datasets') ? data.datasets : data;
        datas.forEach(function(d) {
            var element = document.createElement('div')
            element.className = 'legendElement';
            var color = document.createElement('div');
            color.className = 'colorBox';
            color.style.backgroundColor = d.hasOwnProperty('fillColor') ? d.fillColor : d.color;
            color.style.borderColor = d.hasOwnProperty('strokeColor') ? d.strokeColor : d.color;
            element.appendChild(color);

            var text = document.createTextNode(" " + d.title);
            element.appendChild(text);
            parent.appendChild(element);
        });
        called = true;
    }
}
