
$(function(){
    //1. 첫번째 패널만 보기 : a요소를 화면에 보여주기
    var topDiv = $('.main-content');
    var anchors = topDiv.find('ul.menu-list a');
    var panelDivs = topDiv.find('div.panel');

    var lastAnchor = anchors.filter('.on');
    var lastPanel = $(lastAnchor.attr('src'));
 
    
    anchors.show();
    panelDivs.hide();
    lastPanel.show();
  
   

    anchors.click(function(event){
        var currentAnchor = $(this);
        var currentPanel = $(currentAnchor.attr('src'));
        //console.log($(this));

        lastAnchor.removeClass('on');
        currentAnchor.addClass('on');
        lastPanel.hide();
        currentPanel.show();

        lastAnchor = currentAnchor;
        lastPanel = currentPanel;
       
    });




//$('.tabSet').tabs();
});