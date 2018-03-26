/**
 * Created by Administrator on 2016/8/17.
 */
!function(window){
    var win=window,
        doc=win.document,
        docEle=doc.documentElement,
        objhtml=doc.getElementsByTagName('html')[0],
        width=docEle.clientWidth > 750 ? 750 :docEle.clientWidth,
        size='fontSize',
        html=function(obj,key,value){return obj.style[key]=value+'px';};
    html(objhtml,size,width/3.75);
    win.onresize=function(){
        var objDoc=win.document,
            objDocEle=objDoc.documentElement,
            objHtml=objDoc.getElementsByTagName('html')[0],
            objWidth=objDocEle.clientWidth > 750 ? 750 :objDocEle.clientWidth;
        html(objHtml,size,objWidth/3.75);
    };
}(window);

