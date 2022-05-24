$(document).ready(function()
{
var ap = [3,5,6,7,8,12,13,15,18,21,23,28,30,33,38,40,41,42,43,44,47,53,56,63,65,73,75,76,77,78];
var p = new Array(80);
for(var i = 0; i < 80; i++)
{
    p[i] = $('<div class="pixel"></div>');
    $('#number').append(p[i]);
}

for(i = 0; i < ap.length; i++)
{
     p[ap[i]].addClass('on');
}
});