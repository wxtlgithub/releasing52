Ext.namespace("WXTL.Common");IDIOGRAPH="";IDIOGRAPHSIZE=0;USERIOGRAPH="";USERIOGRAPHSIZE=0;OpenNum=1;NUMCLIENTCONFIGID=1;NUMDBCONFIGID=2;NUMJOBCONFIGID=3;NUMSYSTEMCONFIGID=101;NUMCOMUNICATIONNODEID=93;MobileRegex=null;IsTimeOut=false;RegexInfo=eval(doSynRequest('URL/GetMobileRegSimple.ashx?flag=reg'));if(RegexInfo!=null){if(RegexInfo.info!=null){MobileRegex=new RegExp(RegexInfo.info)}};WXTL.Common.regex={Require:/.+/,Email:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,Phone:/^((\(\d{3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}$/,Mobile:MobileRegex,MobileList:/^(\d{11}){1,2}$/,Url:/^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/,IdCard:/^\d{15}(\d{2}[A-Za-z0-9])?$/,Currency:/^\d+(\.\d+)?$/,Number:/^\d+$/,Zip:/^[1-9]\d{5}$/,QQ:/^[1-9]\d{4,8}$/,IP:/^(([01]?[\d]{1,2})|(2[0-4][\d])|(25[0-5]))(\.(([01]?[\d]{1,2})|(2[0-4][\d])|(25[0-5]))){3}$/,IPPORT:/^(([01]?[\d]{1,2})|(2[0-4][\d])|(25[0-5]))(\.(([01]?[\d]{1,2})|(2[0-4][\d])|(25[0-5]))){3}(:\d{1,})?$/,Integer:/^[-\+]?\d+$/,Double:/^[-\+]?\d+(\.\d+)?$/,English:/^[A-Za-z]+$/,Chinese:/^[\u0391-\uFFE5]+$/,UnSafe:/^(([A-Z]*|[a-z]*|\d*|[-_\~!@#\$%\^&\*\.\(\)\[\]\{\}<>\?\\\/\'\"]*)|.{0,5})$|\s/,PostCode:/^\d{6}$/,LessThanRowNum:/^(\d{1,11}\n?){1,1000}$/,Illegal:/^[^ %&,'$\x22][^%&'$\x22]*$/,IllegalDiy:null};WXTL.Common.regexText={IllegalDiyText:'请不要以空格为首，请不要输入非法字符\"%&\',',IllegalText:'请不要以空格为首，请不要输入非法字符\"%&\'$,',LessThanRowNumText:'请输入1-1000行以内的内容！',MobileListText:'请按照帮助说明输入正确的手机号码列表'};Ext.namespace("WXTL.Common.help");function getHelpMsg(title,isRed,qtipHtml){if(isRed){return'<font color="red" style="font-size:12px">'+title+'<img src="jspack/product/common/Images/help.gif" align=AbsMiddle  qtitle=帮助 qtip="'+qtipHtml+'" style="cursor:handy"/></font>'}else{return'<font style="font-size:12px">'+title+'<img src="jspack/product/common/Images/help.gif" align=AbsMiddle  qtitle=帮助 qtip="'+qtipHtml+'" style="cursor:handy"/></font>'}};WXTL.Common.help.MOBILEFILE=getHelpMsg("文件",true,"1、文件格式为txt<br>2、文件大小须小于4M<br>3、内容格式:　<img src=jspack/product/common/Images/help/oldmobilefile.jpg align=top/>");WXTL.Common.help.MOBILELIST=getHelpMsg("号码列表",true,"1、输入行数不超过1000行<br>2、输入格式:　<img src=jspack/product/common/Images/help/oldmobilelist.jpg align=Baseline/>");WXTL.Common.help.NEWMOBILEFILE=getHelpMsg("文件",true,"1、文件格式为txt<br>2、文件大小须小于4M<br>3、内容格式:　<img src=jspack/product/common/Images/help/mobilefile.jpg align=top/>");WXTL.Common.help.NEWMOBILELIST=getHelpMsg("号码列表",true,"1、输入行数不超过1000行<br>2、输入格式:　<img src=jspack/product/common/Images/help/mobilelist.jpg align=Baseline/>");WXTL.Common.help.helpACCOUNTFILE=getHelpMsg("文件",true,"1、文件格式为txt<br>2、文件大小须小于4M<br>3、内容格式:　<img src=jspack/product/common/Images/help/accountfile.jpg align=top/>");WXTL.Common.help.helpACCOUNTLIST=getHelpMsg("号码列表",true,"1、输入行数不超过1000行<br>2、输入格式:　<img src=jspack/product/common/Images/help/accountlist.jpg align=Baseline/>");function loadJS(arr,i,str,obj){var _successFlag=false;var loadJsFlag=true;var _docScript=document.getElementsByTagName('script');if(loadJsFlag){var _doc=document.getElementsByTagName('head')[0];var jsc=document.createElement('script');jsc.setAttribute('type','text/javascript');jsc.setAttribute('src',arr[i]);_doc.appendChild(jsc);jsc.onload=jsc.onreadystatechange=function(){if(this.readyState&&this.readyState=="loading"){return}else{if(i==arr.length-1){if(obj!=null){eval(str+"(obj)")}}else{loadJS(arr,i+1,str,obj)}}}}else{if(obj!=null){eval(str+"(obj)")}}};WXTL.Common.JsLoader=function(str,obj){this.load=function(arr){loadJS(arr,0,str,obj)}};WXTL.Common.dateTime=function(){};WXTL.Common.dateTime.getNow=function(){return new Date()};WXTL.Common.dateTime.getNowValue=function(){return this.getNow().toLocaleString()};WXTL.Common.dateTime.addSecond=function(datevalue,numsecond){return new Date(Date.parse(datevalue)+1000*(numsecond))};WXTL.Common.dateTime.addMinute=function(datevalue,numminute){return new Date(Date.parse(datevalue)+1000*60(numminute))};WXTL.Common.dateTime.addHour=function(datevalue,numhour){return new Date(Date.parse(datevalue)+1000*60*60*(numhour))};WXTL.Common.dateTime.addDay=function(datevalue,numday){return new Date(Date.parse(datevalue)+1000*60*60*24*(numday))};WXTL.Common.dateTime.addMonth=function(datevalue,numday){return new Date(datevalue.getFullYear(),datevalue.getMonth()+numday,datevalue.getDate())};WXTL.Common.dateTime.addYear=function(datevalue,numday){return new Date(datevalue.getFullYear()+numday,datevalue.getMonth(),datevalue.getDate())};WXTL.Common.dateTime.getNowDate=function(){var mydate=new Date();return WXTL.Common.dateTime.formatDate(mydate)};WXTL.Common.dateTime.parseDate=function(str){if(typeof str=='string'){var results=str.match(/^ *(\d{4})-(\d{1,2})-(\d{1,2}) *$/);if(results&&results.length>3){return new Date(parseInt(results[1]),parseInt(results[2])-1,parseInt(results[3]))}results=str.match(/^ *(\d{4})-(\d{1,2})-(\d{1,2}) +(\d{1,2}):(\d{1,2}):(\d{1,2}) *$/);if(results&&results.length>6){return new Date(parseInt(results[1]),parseInt(results[2])-1,parseInt(results[3]),parseInt(results[4]),parseInt(results[5]),parseInt(results[6]))}results=str.match(/^ *(\d{4})-(\d{1,2})-(\d{1,2}) +(\d{1,2}):(\d{1,2}):(\d{1,2})\.(\d{1,9}) *$/);if(results&&results.length>7){return new Date(parseInt(results[1]),parseInt(results[2])-1,parseInt(results[3]),parseInt(results[4]),parseInt(results[5]),parseInt(results[6]),parseInt(results[7]))}}return null};WXTL.Common.dateTime.formatDate=function(v){if(typeof v=='string'){v=WXTL.Common.dateTime.parseDate(v)}if(v instanceof Date){var y=v.getFullYear();var m=v.getMonth()+1;var d=v.getDate();return y+'/'+m+'/'+d}return''};function checkMailList(mailList,maxLine){var _lines=new Array();if(Ext.isIE){_lines=mailList.split("\r\n");}else{_lines=mailList.split("\n")}var _valid=true;if(_lines.length>maxLine){_valid=false;return'已输入行数'+_lines.length+',请不要超过'+maxLine+'行'}else{for(var i=0;i<_lines.length;i++){if(!WXTL.Common.regex.Email.test(_lines[i])){_valid=false;return'包含不正确的邮箱格式，请检查！'}}}return _valid};function checkMobileListMMSsend(mobileList,maxLine,nummmstype){var _lines=new Array();if(Ext.isIE){_lines=mobileList.split("\r\n");}else{_lines=mobileList.split("\n")}var _valid=true;if(_lines.length>maxLine){_valid=false;return'已输入行数'+_lines.length+',请不要超过'+maxLine+'行'}else{if(nummmstype==2){var MobileString=_lines[0].substring(0,11);if(!WXTL.Common.regex.Mobile.test(MobileString)){_valid=false;return'包含不正确的手机号码，请检查！'}}else{for(var i=0;i<_lines.length;i++){if(!WXTL.Common.regex.Mobile.test(_lines[i])){_valid=false;return'包含不正确的手机号码，请检查！'}}}}return _valid};function checkMobileList(mobileList,maxLine){var _lines=new Array();if(Ext.isIE){_lines=mobileList.split("\r\n");}else{_lines=mobileList.split("\n")}var _valid=true;if(_lines.length>maxLine){_valid=false;return'已输入行数'+_lines.length+',请不要超过'+maxLine+'行'}else{for(var i=0;i<_lines.length;i++){if(!WXTL.Common.regex.Mobile.test(_lines[i])){_valid=false;return'包含不正确的手机号码，请检查！'}}}return _valid};WXTL.Common.urlDecode=function(str){var i,temp;var result="";for(i=0;i<str.length;i++){if(str.charAt(i)=="%"){if(str.charAt(++i)=="u"){temp=str.charAt(i++)+str.charAt(i++)+str.charAt(i++)+str.charAt(i++)+str.charAt(i);result+=unescape("%"+temp)}else{temp=str.charAt(i++)+str.charAt(i);if(eval("0x"+temp)<=160){result+=unescape("%"+temp)}else{temp+=str.charAt(++i)+str.charAt(++i)+str.charAt(++i);result+=Decode_unit("%"+temp)}}}else{result+=str.charAt(i)}}return result};WXTL.Common.urlEncode=function(str){var i,temp,p,q;var result="";for(i=0;i<str.length;i++){temp=str.charCodeAt(i);if(temp>=0x4e00){execScript("ascCode=hex(asc(\""+str.charAt(i)+"\"))","vbscript");result+=ascCode.replace(/(.{ 2 })/g,"%$1")}else{result+=escape(str.charAt(i))}}return result};function isInArray(obj,arr){type=typeof obj;if(type=='string'||type=='number'){for(var i in arr){if(arr[i]==obj){return true}}return false}};var fileTypeArr=new Array();fileTypeArr[0]="txt";fileTypeArr[1]="csv";var fileTypeArrDesc="txt,csv";var fileSize=4194304;var fileSizeDesc="4M";function checkFileType(filePath){var suffix=getFileType(filePath);if(!isInArray(suffix.toLowerCase(),fileTypeArr)){return false}else{return true}};function getFileType(filePath){try{return filePath.match(/^(.*)(\.)(.{1,8})$/)[3]}catch(e){return''}};function getFileSize(filePath){try{var fso=new ActiveXObject('Scripting.FileSystemObject');var file=fso.GetFile(filePath);return file.Size}catch(e){return''}};function getFileMessage(filePath,fileSize){if(fileSize!=null){return"文件路径："+filePath+"\r文件类型："+getFileType(filePath)+"\r文件大小："+getFileSizeFormat(fileSize)}else{return"文件路径："+filePath+"\r文件类型："+getFileType(filePath)+"\r文件大小："+getFileSizeFormat(getFileSize(filePath));}};function checkFile(filePath){if(!checkFileType(filePath)){return'文件类型应为'+fileTypeArrDesc}else{if(getFileSize(filePath)!=''&&getFileSize(filePath)>fileSize){return'文件大小应小于'+fileSizeDesc}else{return''}}};function Hashtable(){this._hash={};this._count=0;this.add=function(key,value){if(this._hash.hasOwnProperty(key))return false;else{this._hash[key]=value;this._count++;return true}};this.remove=function(key){delete this._hash[key];this._count--};this.count=function(){return this._count};this.items=function(key){if(this.contains(key)){return this._hash[key]}};this.contains=function(key){return this._hash.hasOwnProperty(key)};this.clear=function(){this._hash={};this._count=0}};function getFileSizeFormat(size){if(size<0){return"0B"}else{if(size<1024)return Math.round(size*Math.pow(10,2))/Math.pow(10,2)+"B";else{if(size<1024*1024){return Math.round(size/ 1024 * Math.pow(10, 2)) /Math.pow(10,2)+"KB"}else{return Math.round(size/ 1024 /1024*Math.pow(10,2))/Math.pow(10,2)+"MB"}}}};function getFileName(filePath){if(size<1024*1024){return size/1024+"KB"}else{return size/ 1024 /1024+"MB"}};function windowOpen(url,width,height){var newurl,arrurl;if(typeof(url)=="undefined"||url==""){return}else{if(url.indexOf("?")==-1){newurl=url}else{newurl=url.substring(0,url.indexOf("?")+1);arrurl=url.substring(url.indexOf("?")+1).split("&");for(var i=0;i<arrurl.length;i++){newurl+=arrurl[i].split("=")[0]+"="+escape(arrurl[i].split("=")[1])+"&"}newurl=newurl.substring(0,newurl.length-1)}}if(typeof(width)!="number"||typeof(height)!="number"){window.open(newurl)}else{window.open(newurl,"","width="+width+",height="+height)}};function doLoad(urlStr,idNum){windowOpen(urlStr+"?id="+idNum+"&flag=selectdesc",400,300)};function exportData(urlStr,parmsString){windowOpen(urlStr+"?"+WXTL.Common.urlDecode(parmsString),400,300);};function checkLogin(){Ext.Ajax.request({url:'url/IsLogInSimple.ashx?flag=islogin',method:"GET",params:{parentid:-1},success:function(form,action){var obj=Ext.util.JSON.decode(form.responseText);var falg=obj.success;if(falg==false){IsTimeOut=true;Ext.Msg.alert("温馨提示","对不起，您的信息已过期请重新登录!",function(){window.location.href="login.htm"})}},failure:function(form,action){IsTimeOut=true;Ext.Msg.alert("温馨提示","请重新登录!");window.location.href="login.htm"}})};function showResult(msg){Ext.example.msg('温馨提示',msg)};function doAjax(url,params,store){Ext.Ajax.request({url:url,method:"POST",params:params,success:function(form,action){var obj=Ext.util.JSON.decode(form.responseText);var falg=obj.success;if(falg==true){Ext.Msg.alert("温馨提示","操作已成功!");if(store!=null){store.reload()}}else{if(!obj.success&&obj.info=="对不起，您没有登录！"){Ext.Msg.alert("温馨提示","对不起，您的信息已过期请重新登录!",function(){window.location.href="login.htm"})}else{Ext.Msg.alert('温馨提示',obj.info)}}},failure:function(form,action){var objJson=Ext.util.JSON.decode(action.response.responseText);Ext.Msg.alert('温馨提示',objJson.info);}})};function doAjaxWithCallBack(url,params,callBackFunc){Ext.Ajax.request({url:url,method:"POST",params:params,success:function(form,action){var obj=Ext.util.JSON.decode(form.responseText);var falg=obj.success;if(falg==true){Ext.Msg.alert("温馨提示","操作已成功!");callBackFunc()}else{if(!obj.success&&obj.info=="对不起，您没有登录！"){Ext.Msg.alert("温馨提示","对不起，您的信息已过期请重新登录!",function(){window.location.href="login.htm"})}else{Ext.Msg.alert('温馨提示',obj.info)}}},failure:function(form,action){var objJson=Ext.util.JSON.decode(action.response.responseText);Ext.Msg.alert('温馨提示',objJson.info)}})};function doAjaxJson(url,params){Ext.Ajax.request({url:url,method:"POST",params:params,success:function(form,action){var obj=Ext.util.JSON.decode(form.responseText);var responses=reader.readRecords(Ext.decode(form.responseText));return responses},failure:function(form,action){var objJson=Ext.util.JSON.decode(action.response.responseText);return objJson;}})};function doSynRequest(url){var conn=Ext.lib.Ajax.getConnectionObject().conn;conn.open("POST",url,false);conn.send('');var response=Ext.decode(conn.responseText);if(response.success==null){return response}else{if(!response.success&&response.error!=null&&response.error=="对不起，您没有登录！"){window.location.href="login.htm";}else{return response}}};function formatString(sourceString,strList){for(var i=0;i<strList.length;i++){sourceString=sourceString.replace("{"+i+"}",strList[i])}return sourceString};var MMSFrameString='<div  style="border-style: solid; border-width: 1px; border-color: #808080 #FFFFFF #FFFFFF #808080;width:99%;height:99%"><DIV id="ZipCode" style=" BACKGROUND-COLOR:white;width:99%;height:99%"><br><div style="display:table-cell;height:100px;width:100px;vertical-align:middle;"><img style="max-width:100px;max-height:100px;_width:100px;" src={0} /></div><br><br><div style="word-wrap:break-word; word-break:break-all; padding-right: 5px; padding-left: 5px">{1}</div></DIV></div>';var MMSNoImageFrameString='<div  style="border-style: solid; border-width: 1px; border-color: #808080 #FFFFFF #FFFFFF #808080;width:99%;height:99%"><DIV id="ZipCode" style=" BACKGROUND-COLOR:white;width:99%;height:99%"><br><div style="word-wrap:break-word; word-break:break-all; padding-right: 5px; padding-left: 5px">{0}</div></DIV></div>';var currMMSPanel;function currMMSPanelRender(htmlString,title){currMMSPanel.body.update(htmlString);if(title!=null){currMMSPanel.setTitle(title)}currMMSPanel.render()};var playTime;var playCurrFrameNum=0;function previewMMS(i){if(i+1<currMMSPanel.contentJson.frame.length){i=i+1;playCurrFrameNum=i;if(currMMSPanel.contentJson.frame[i].vc2image.vc2rescurl!=""){currMMSPanelRender(formatString(MMSFrameString,new Array(currMMSPanel.contentJson.frame[i].vc2image.vc2rescurl,currMMSPanel.contentJson.frame[i].vc2word.vc2rescdesc1.replace(/\r\n/ig,"<br/>"))),formatString("播放：第{0}帧",new Array(i+1,1)))}else{currMMSPanelRender(formatString(MMSNoImageFrameString,new Array(currMMSPanel.contentJson.frame[i].vc2word.vc2rescdesc1.replace(/\r\n/ig,"<br/>"))),formatString("播放：第{0}帧",new Array(i+1,1)))}currMMSPanel.refreshBrotherPanel(i);playTime=setTimeout(formatString("previewMMS({0})",new Array(i,1)),currMMSPanel.contentJson.frame[i].numframetime.toLowerCase().replace('s','')*1000)}else{if(currMMSPanel.bottomToolbar.items.items[0].text!="播放"){currMMSPanel.bottomToolbar.items.items[0].setText("播放");currMMSPanel.bottomToolbar.items.items[4].disable();currMMSPanel.bottomToolbar.items.items[8].disable();if(currMMSPanel.brotherPanel!=null){currMMSPanel.brotherPanel.enable()}currMMSPanel.refreshBrotherPanel();if(currMMSPanel.contentJson.frame[currMMSPanel.currFrame].vc2image.vc2rescurl!=""){currMMSPanelRender(formatString(MMSFrameString,new Array(currMMSPanel.contentJson.frame[currMMSPanel.currFrame].vc2image.vc2rescurl,currMMSPanel.contentJson.frame[currMMSPanel.currFrame].vc2word.vc2rescdesc1.replace(/\r\n/ig,"<br/>"))),formatString("预览：第{0}帧{1}, 共{2}",new Array(currMMSPanel.currFrame+1,Ext.util.Format.fileSize(currMMSPanel.currFrameSpace),Ext.util.Format.fileSize(currMMSPanel.mmsSpace))))}else{currMMSPanelRender(formatString(MMSNoImageFrameString,new Array(currMMSPanel.contentJson.frame[currMMSPanel.currFrame].vc2word.vc2rescdesc1.replace(/\r\n/ig,"<br/>"))),formatString("预览：第{0}帧{1}, 共{2}",new Array(currMMSPanel.currFrame+1,Ext.util.Format.fileSize(currMMSPanel.currFrameSpace),Ext.util.Format.fileSize(currMMSPanel.mmsSpace))))}window.clearInterval(playTime)}playCurrFrameNum=0}};var MMSFrameSimpleStr="<div style='display:table-cell;height:100px;width:100px;vertical-align:middle;'><img src={0} style='max-width:100px;max-height:100px;_width:100px;' /><div>";var MMSFrameSimpleStrNoImage='<div style="text-align:center;"><table width="100" height="80" border="0" align="center" cellpadding="0" cellspacing="0" background="jspack/product/common/Images/frame.gif"><tr><td></td></tr></table></div>';function newMMS(mmsName,mmsDesc,frameCount,mmsType){if(mmsDesc!=null&&mmsDesc!=''&&mmsDesc!="undefined"){if(Ext.isIE==true){mmsDesc=mmsDesc.replace(/\r\n/ig,"\\r\\n").replace(/\'/ig,"\\'")}else{mmsDesc=mmsDesc.replace(/\n/ig,"\\n").replace(/\'/ig,"\\'")}}mmsName=mmsName.replace(/\'/ig,"\\'");var frameJsonStr="";for(var i=1;i<=frameCount;i++){if(frameCount!=1){if(i==1){frameJsonStr="frame: [{numframeid: 0,numframeorder:  "+i+",vc2framename:'',vc2framedesc:'',numframetime: 5,vc2word: {numrescid: 0,numframeid: 0,vc2rescurl: '',vc2rescname: '',numtype: 3,numrescspace: 0,vc2rescdesc1: '',vc2rescdesc2: ''},vc2image: {numrescid: 0,numframeid: 0,vc2rescurl: '',vc2rescname: '',numtype: 2,numrescspace: 0,vc2rescdesc1: 0,vc2rescdesc2: 0},vc2backmusic: {numrescid: 1,numframeid: 1,vc2rescurl: '',vc2rescname: '',numtype: 1,numrescspace: 0,vc2rescdesc1: '',vc2rescdesc2: ''}}"}else{if(i==frameCount){frameJsonStr=frameJsonStr+",{numframeid: 0,numframeorder: "+i+",vc2framename:'',vc2framedesc:'',numframetime: 5,vc2word: {numrescid: 0,numframeid: 0,vc2rescurl: '',vc2rescname: '',numtype: 3,numrescspace: 0,vc2rescdesc1: '',vc2rescdesc2: ''},vc2image: {numrescid: 0,numframeid: 0,vc2rescurl: '',vc2rescname: '',numtype: 2,numrescspace: 0,vc2rescdesc1: 0,vc2rescdesc2: 0},vc2backmusic: {numrescid: 1,numframeid: 1,vc2rescurl: '',vc2rescname: '',numtype: 1,numrescspace: 0,vc2rescdesc1: '',vc2rescdesc2: ''}}]"}else{frameJsonStr=frameJsonStr+",{numframeid: 0,numframeorder: "+i+",vc2framename:'',vc2framedesc:'',numframetime: 5,vc2word: {numrescid: 0,numframeid: 0,vc2rescurl: '',vc2rescname: '',numtype: 3,numrescspace: 0,vc2rescdesc1: '',vc2rescdesc2: ''},vc2image: {numrescid: 0,numframeid: 0,vc2rescurl: '',vc2rescname: '',numtype: 2,numrescspace: 0,vc2rescdesc1: 0,vc2rescdesc2: 0},vc2backmusic: {numrescid: 1,numframeid: 1,vc2rescurl: '',vc2rescname: '',numtype: 1,numrescspace: 0,vc2rescdesc1: '',vc2rescdesc2: '第"+i+"帧'}}"}}}else{frameJsonStr="frame: [{numframeid: 0,numframeorder:  "+i+",vc2framename:'',vc2framedesc:'',numframetime: 5,vc2word: {numrescid: 0,numframeid: 0,vc2rescurl: '',vc2rescname: '',numtype: 3,numrescspace: 0,vc2rescdesc1: '',vc2rescdesc2: ''},vc2image: {numrescid: 0,numframeid: 0,vc2rescurl: '',vc2rescname: '',numtype: 2,numrescspace: 0,vc2rescdesc1: 0,vc2rescdesc2: 0},vc2backmusic: {numrescid: 1,numframeid: 1,vc2rescurl: '',vc2rescname: '',numtype: 1,numrescspace: 0,vc2rescdesc1: '',vc2rescdesc2: ''}}]"}};var mmsJsonStr=formatString("{nummmsid: 0,vc2centerid: '',vc2name: '{0}',vc2desc: '{1}',vc2smilurl: '',nummmstype:{2},{3}}",new Array(mmsName,mmsDesc,mmsType,frameJsonStr));return eval("("+mmsJsonStr+")")};function checkMMS(jsonMMSContent){var returnResault=true;var numMMSSpace=0;for(var i=0;i<jsonMMSContent.frame.length;i++){numMMSSpace=numMMSSpace+parseInt(jsonMMSContent.frame[i].vc2word.numrescspace)+parseInt(jsonMMSContent.frame[i].vc2image.numrescspace)+parseInt(jsonMMSContent.frame[i].vc2backmusic.numrescspace);if(jsonMMSContent.frame[i].vc2word.numrescspace==0&&jsonMMSContent.frame[i].vc2image.numrescspace==0&&jsonMMSContent.frame[i].vc2backmusic.numrescspace==0){returnResault=false;Ext.Msg.alert("温馨提示","对不起，当前彩信包含未编辑的帧信息，请检查!");return returnResault}}if(numMMSSpace>50*1024){returnResault=false;Ext.Msg.alert("温馨提示","对不起，彩信大小不能超过50K!");return returnResault}return returnResault};function checkMMSFrame(isNeedImage,vc2FrameImageUrl,vc2Word,vc2ImageUrl){if(isNeedImage){if(vc2Word==""){Ext.Msg.alert("温馨提示","对不起,图片和文字请至少输入一项!");return false}else{return true}}else{if(vc2FrameImageUrl==""&&vc2Word==""&&vc2ImageUrl==""&&!isNeedImage){Ext.Msg.alert("温馨提示","对不起,图片和文字请至少输入一项!");return false}else{return true}}};var imageFileTypeArr=new Array();imageFileTypeArr[0]="jpg";imageFileTypeArr[1]="gif";imageFileTypeArr[2]="png";imageFileTypeArr[3]="bmp";imageFileTypeArr[4]="jpeg";function checkImageFileType(filePath){var suffix=getFileType(filePath);if(!in_array(suffix.toLowerCase(),imageFileTypeArr)){return false}else{return true}};function checkMMSFrameImageType(isNeedImage,vc2ImageUrl){if(!isNeedImage){if(!checkImageFileType(vc2ImageUrl)){Ext.Msg.alert("温馨提示","对不起,帧图片只能上传jpg|gif|jpeg|bmp|png文件类型");return false}}return true};var MusicFileTypeArr=new Array();MusicFileTypeArr[0]="mid";MusicFileTypeArr[1]="amr";function checkMusicFileType(filePath){var suffix=getFileType(filePath);if(!in_array(suffix.toLowerCase(),MusicFileTypeArr)){return false}else{return true}};function checkMMSFrameMusicType(isNeedMusic,vc2MusicUrl){if(!isNeedMusic){if(!checkMusicFileType(vc2MusicUrl)){Ext.Msg.alert("温馨提示","对不起,帧背景音乐只能上传mid|amr文件类型");return false}}return true};function isExistsHtmlLable(sourceHTML){var arrElement=sourceHTML.match('<[^#]*>');if(arrElement==null){return false}if(arrElement.length>0){return true}return false};function in_array(stringToSearch,arrayToSearch){for(var s=0;s<arrayToSearch.length;s++){thisEntry=arrayToSearch[s].toString();if(thisEntry==stringToSearch){return true}}return false};function createPeimitTree(treeId,roleId,dataURL){document.getElementById(treeId).innerHTML='';Ext.get(treeId).dom.innerHTML='';PermissionTree=new Ext.tree.TreePanel({applyTo:treeId,checkModel:'cascade',onlyLeafCheckable:false,style:'padding:5px 10px 10px 10px',animate:false,rootVisible:true,autoScroll:true,loader:new Ext.tree.TreeLoader({url:dataURL,listeners:{"beforeload":function(treeloader,node){treeloader.baseParams={flag:'selectbyroleid',RoleID:roleId,parentid:node.id,method:'Post'}},"load":function(loader,node,response){var childNodes=node.childNodes;if(childNodes||childNodes.length>0){Ext.MessageBox.show({msg:'正在加载数据，请稍等...',progressText:'Loading...',width:300,wait:true,waitConfig:{interval:200},icon:'download',animEl:'saving'})}for(var i=0;i<childNodes.length;i++){if(i==childNodes.length-1){setTimeout(function(){Ext.MessageBox.hide()},3000)}}}},baseAttrs:{uiProvider:Ext.ux.TreeCheckNodeUI}}),root:new Ext.tree.AsyncTreeNode({id:'-1',text:'无线天利短信发送平台'})});PermissionTree.expandAll()};function getAllChildrenNodes(node){var children=[];children.push(node);if(!node.isLeaf()){for(var i=0;i<node.childNodes.length;i++){children=children.concat(getAllChildrenNodes(node.childNodes[i]))}}return children};WXTL.Common.WaitLoadMsg=null;WXTL.Common.showWaitLoading=function(ishow){if(ishow){document.body.style.cursor="wait";WXTL.Common.WaitLoadMsg=new Ext.LoadMask(Ext.getBody(),{msg:'正在加载数据，请稍候...',removeMask:true});WXTL.Common.WaitLoadMsg.show()}else{document.body.style.cursor="default";WXTL.Common.WaitLoadMsg.hide()}};function getSessionID(){var conn=Ext.lib.Ajax.getConnectionObject().conn;conn.open("POST","/url/GetSession.ashx",false);conn.send('');var response=conn.responseText;if(response!=null){if(response.indexOf("没有登录")>0){Ext.Msg.alert("温馨提示","对不起，您的信息已过期请重新登录!",function(){window.location.href="login.htm"})}else{return response}}else{Ext.Msg.alert("温馨提示","对不起，您的信息已过期请重新登录!",function(){window.location.href="login.htm"})}};function getTimeDiff(date1,date2,isFormat){try{var len=arguments.length;var tmpdate1=new Date();var tmpdate2=new Date();if(len==1){tmpdate1=date1}else{if(len==3){tmpdate1=date1;tmpdate2=date2}}if(!(tmpdate1 instanceof Date)||!(tmpdate2 instanceof Date)){alert("请输入正确的参数！");return 0}else{var time1=tmpdate1.getTime();var time2=tmpdate2.getTime();var time=Math.max(time1,time2)-Math.min(time1,time2);if(!isNaN(time)&&time>0){if(isFormat){var date=new Date(time);var result="";result+=(date.getFullYear()-1970)>0?(date.getFullYear()-1970)+"年":"";result+=(date.getMonth()-1)>0?(date.getMonth()-1)+"月":"";result+=(date.getDate()-1)>0?(date.getDate()-1)+"日":"";result+=(date.getHours()-8)>0?(date.getHours()-1)+"小时":"";result+=date.getMinutes()>0?date.getMinutes()+"分钟":"";result+=date.getSeconds()>0?date.getSeconds()+"秒":"";return result}else{return time}}else{return'0秒'}}}catch(e){alert(e.message)}};WXTL.Common.generateConfigFormItem=function(configData,formPanel,isColumn){var item;if(!configData.success&&configData.info=="对不起，您没有登录！"){Ext.Msg.alert("温馨提示","对不起，您的信息已过期请重新登录!",function(){window.location.href="login.htm"})}else{for(var i=0;i<configData.data.length;i++){var _value=configData.data[i].itemvalue!=""?configData.data[i].itemvalue:configData.data[i].vc2value;if(configData.data[i].numtypeid==1||configData.data[i].numtypeid==5||configData.data[i].numtypeid==6||configData.data[i].numtypeid==7||configData.data[i].numtypeid==8){item=new Ext.form.TextField({fieldLabel:configData.data[i].vc2name,name:configData.data[i].vc2key,value:_value,maxLength:configData.data[i].vc2range})}if(configData.data[i].numtypeid==2){var range;if(configData.data[i].vc2range!=""){range=configData.data[i].vc2range.split(",")}item=new Ext.form.NumberField({fieldLabel:configData.data[i].vc2name,name:configData.data[i].vc2key,value:_value,minValue:range[0],maxValue:range[1]});}if(configData.data[i].numtypeid==3){item=new Ext.form.TextArea({fieldLabel:configData.data[i].vc2name,name:configData.data[i].vc2key,value:_value,maxLength:configData.data[i].vc2range,height:100});}if(configData.data[i].numtypeid==4){item=new Ext.form.DateField({fieldLabel:configData.data[i].vc2name,name:configData.data[i].vc2key,value:WXTL.Common.dateTime.parseDate(_value),readOnly:true,emptyText:Ext.util.Format.date(WXTL.Common.dateTime.addDay(WXTL.Common.dateTime.getNow()),'Y-m-d'),format:'Y-m-d',validateOnBlur:false});}if(configData.data[i].numtypeid==9){item=new Ext.form.ComboBox({fieldLabel:configData.data[i].vc2name,name:configData.data[i].vc2key,hiddenName:configData.data[i].vc2key,value:_value,readOnly:true,mode:"local",displayField:"show",valueField:"value",triggerAction:"all",emptyText:"请选择",store:new Ext.data.SimpleStore({fields:["show","value"],data:eval(configData.data[i].vc2range)})});}if(!isColumn){formPanel.add(item)}else{formPanel.items.items[0].add({columnWidth:.5,layout:'form',defaultType:"textfield",defaults:{anchor:"90%",msgTarget:"side"},buttonAlign:"center",items:[item]})}}}};