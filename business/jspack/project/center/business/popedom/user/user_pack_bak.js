Ext.namespace('Js.Center.Popedom');Js.Center.Popedom.UserUpdateURL='URL/Temp_Purview/User/UserUpdate.ashx';Js.Center.Popedom.UserURL='URL/Temp_Purview/User/YXTUserQuery.ashx';Ext.namespace('Js.Center.Popedom.UserAdd');Ext.QuickTips.init();Js.Center.Popedom.UserAdd.func=function(){var departComboxTree_UserAdd=new WXTL.Widgets.CommonForm.ComboWithTree({name:'numdepartid',hiddenName:'numdepartid',id:'departComboxTree_UserAdd',fieldLabel:"<font color=red>部门名称</font>",allowBlank:false,blankText:'请选择部门',valueField:'id',listHeight:'150',baseParams:{columnlist:"numdepartid,vc2departname",flag:'selectallbycurrentuser'},dataUrl:Js.Center.Popedom.DepartmentsQueryURL});Js.Center.Common.NodeStore.load();var addInfoFormPanel=new Ext.form.FormPanel({frame:true,region:'center',labelWidth:80,items:[{layout:'column',items:[{xtype:"hidden",name:"flag",value:"insert"},{columnWidth:.5,layout:'form',defaultType:"textfield",defaults:{anchor:"90%",msgTarget:"side"},buttonAlign:"center",bodyStyle:"padding:10px 0 10px 15px",items:[departComboxTree_UserAdd,{xtype:"textfield",name:"vc2uaccount",fieldLabel:"<font color=red>用户账户</font>",allowBlank:false,blankText:"用户账户不允许为空",regex:WXTL.Common.regex.Illegal,regexText:WXTL.Common.regexText.IllegalText,maxLength:15},{xtype:"textfield",name:"vc2upassword",id:"Js.Center.Popedom.UserAdd.vc2upassword",fieldLabel:"<font color=red>用户密码</font>",allowBlank:false,blankText:"用户密码不允许为空",inputType:"password",minLength:6,minLengthText:'长度不能少于6!',maxLength:50,regex:WXTL.Common.regex.Illegal,regexText:WXTL.Common.regexText.IllegalText,maxLengthText:'长度不能超过50！',validateOnBlur:false,validator:function(){var pwd1=Ext.get("Js.Center.Popedom.UserAdd.vc2upassword").dom.value;if(pwd1.trim()!=pwd1){return false}else{return true}},invalidText:'密码中不能含有空格！'},{xtype:"textfield",name:"vc2upasswordRe",id:"Js.Center.Popedom.UserAdd.vc2upasswordRe",fieldLabel:"<font color=red>重复密码</font>",allowBlank:false,blankText:"重复密码不允许为空",inputType:"password",validateOnBlur:false,validator:function(){var pwd1=Ext.get("Js.Center.Popedom.UserAdd.vc2upassword").dom.value;var pwdre=Ext.get("Js.Center.Popedom.UserAdd.vc2upasswordRe").dom.value;if(pwd1==pwdre){return true}else{return false}},invalidText:'两次输入密码不一致',minLength:6,minLengthText:'长度不能少于6!',maxLength:50,maxLengthText:'长度不能超过50！'},{xtype:"textfield",name:"vc2phone",fieldLabel:"电话",regex:WXTL.Common.regex.Phone,regexText:"电话格式不正确"},{xtype:"combo",id:"Js.Center.Popedom.UserAdd.numnodeid",fieldLabel:"<font color=red>所属网元</font>",readOnly:true,mode:"local",store:Js.Center.Common.NodeStore,triggerAction:'all',emptyText:'-=请所属网元=-',width:130,allowBlank:false,blankText:"所属网元不允许为空",displayField:'vc2nodename',valueField:'numnodeid',listeners:{"select":function(){Ext.getCmp("UserAddNumnodeid").setValue(this.getValue())}}},{xtype:"hidden",name:"numnodeid",id:"UserAddNumnodeid"}]},{columnWidth:.5,layout:'form',defaultType:"textfield",defaults:{anchor:"90%",msgTarget:"side"},buttonAlign:"center",bodyStyle:"padding:10px 0 10px 15px",items:[{xtype:"textfield",name:"vc2username",fieldLabel:"<font color=red>用户姓名</font>",allowBlank:false,blankText:"用户姓名不允许为空",regex:WXTL.Common.regex.Illegal,regexText:WXTL.Common.regexText.IllegalText,maxLength:15},{xtype:"combo",name:"numtype",fieldLabel:"<font color=red>账户类型</font>",hiddenName:"numtype",readOnly:true,mode:"local",displayField:"show",valueField:"value",triggerAction:"all",allowBlank:false,blankText:"账户类型不允许为空",emptyText:"请选择",store:new Ext.data.SimpleStore({fields:["show","value"],data:[["管理员","1"],["普通用户","2"],["数据管理员","4"]]}),listeners:{"select":function(){if(this.getValue()==1){Js.Center.Popedom.UserAdd.window.buttons[2].disable()}else{Js.Center.Popedom.UserAdd.window.buttons[2].enable()}}}},{xtype:"textfield",name:"vc2mobile",fieldLabel:"<font color=red>手机号</font>",allowBlank:false,blankText:"手机号不允许为空",regex:WXTL.Common.regex.Mobile,regexText:"手机号格式不正确"},{xtype:"textfield",name:"vc2email",fieldLabel:"<font color=red>邮箱</font>",allowBlank:false,blankText:"邮箱不允许为空",regex:WXTL.Common.regex.Email,regexText:"邮箱格式不正确"},{xtype:"combo",name:"numchecklevle",fieldLabel:"<font color=red>审核级别</font>",hiddenName:"numchecklevle",readOnly:true,mode:"local",displayField:"show",valueField:"value",triggerAction:"all",allowBlank:false,blankText:"审核级别不允许为空",emptyText:"请选择",value:0,store:new Ext.data.SimpleStore({fields:["show","value"],data:[["不审核","0"],["一级审核","1"],["二级审核","2"]]})},{xtype:"textfield",name:"vc2signature",fieldLabel:"签名内容",regex:WXTL.Common.regex.Illegal,regexText:WXTL.Common.regexText.IllegalText,maxLength:100}]}]}]});var mainForm=addInfoFormPanel.getForm();this.window=new WXTL.Widgets.CommonWindows.Window({title:"添加账户",mainForm:mainForm,updateURL:Js.Center.Popedom.UserUpdateURL,displayStore:Js.Center.Popedom.User.Infostore,items:[addInfoFormPanel],needLoadDataStore:true,loadDataStoreFunc:function(){Js.Center.Popedom.UserAdd.window.items.items[0].items.items[0].items.items[1].items.items[0].tree=null;Js.Center.Popedom.UserAdd.window.items.items[0].items.items[0].items.items[1].items.items[0].list=null;Js.Center.Popedom.UserAdd.window.items.items[0].items.items[0].items.items[1].items.items[0].initList();var userData=Js.Center.Common.userData;if(userData.data.length>0){var elNode=Ext.getCmp("Js.Center.Popedom.UserAdd.numnodeid");if(userData.data[0].numtype!=-1){if(userData.data[0].numdepartid!=1&&userData.data[0].numtype!=1){elNode.setValue(LOCALNODEID);Ext.getCmp("UserAddNumnodeid").setValue(LOCALNODEID);elNode.disable()}}else{Ext.getCmp("UserAddNumnodeid").setValue(elNode.getValue())}}},needButtons:false,buttons:[new Ext.Button({text:'保存退出',minWidth:70,qtip:"保存退出",handler:function(){if(mainForm.isValid()){Ext.MessageBox.show({msg:'正在保存，请稍等...',progressText:'Saving...',width:300,wait:true,icon:'download',animEl:'saving'});setTimeout(function(){Ext.MessageBox.hide()},300000);Js.Center.Popedom.UserAdd.window.mainFormSubmitFunc()}}}),new Ext.Button({text:'重填',qtip:"重填",minWidth:70,handler:function(){addInfoFormPanel.getForm().reset()}}),new Ext.Button({text:'下一步',qtip:"下一步",minWidth:70,handler:function(){if(mainForm.isValid()){Js.Center.Popedom.UserAdd.window.mainFormSubmitFunc('Js.Center.Popedom.UserAdd.nextStepFunc(objJson.numuserid, objJson.vc2uaccount, objJson.vc2username, objJson.numdepartid, Ext.get("departComboxTree_UserAdd").dom.value)')}}}),new Ext.Button({text:'关闭',qtip:"关闭",minWidth:70,handler:function(){Js.Center.Popedom.UserAdd.window.hide()}})],listeners:{"show":function(){Js.Center.Popedom.UserAdd.window.buttons[2].enable()}}});Js.Center.Popedom.UserAdd.nextStepFunc=function(numuserid,vc2uaccount,vc2username,numdepartid,vc2departname){var jsonObject=new Object();jsonObject.success="true";jsonObject.numuserid=numuserid;jsonObject.vc2username=vc2username;jsonObject.numdepartid=numdepartid;jsonObject.vc2departname=vc2departname;Js.Center.Popedom.UserPermit.window.updateRecord=jsonObject;Js.Center.Popedom.UserPermit.window.show()}};Ext.namespace('Js.Center.Popedom.UserDelete');Js.Center.Popedom.UserDelete.func=function(row){var deleteSplit="";for(var i=0;i<row.length;i++){if(row.length==1){deleteSplit=row[i].data.numuserid}else{if(i<(row.length-1)){deleteSplit=row[i].data.numuserid+","+deleteSplit}if(i==(row.length-1)){deleteSplit=deleteSplit+row[i].data.numuserid}}};var params={ids:deleteSplit,flag:"delete"};doAjax(Js.Center.Popedom.UserUpdateURL,params,Js.Center.Popedom.User.Infostore)};Ext.namespace('Js.Center.Popedom.User');Js.Center.Popedom.User.info=function(node){if(Ext.get("Js.Center.Popedom.User.MainPanel")==null){userUpdate=function(rowIndex){var row=usersGrid.getSelectionModel().getSelections();if(row.length==0){Ext.Msg.alert("温馨提示","请您选择一条记录!")}else if(row.length>1){Ext.Msg.alert("温馨提示","对不起，您只能选择一条记录!")}else if(row.length==1){Js.Center.Popedom.UserUpdate.window.updateRecord=row[0];Js.Center.Popedom.UserUpdate.window.mainForm.loadRecord(row[0]);Js.Center.Popedom.UserUpdate.window.show()}};userDelete=function(rowIndex){var row=usersGrid.getSelectionModel().getSelections();if(row.length>1){Ext.Msg.alert("提示信息","您只能选择一个删除!")}else if(row.length==1){Ext.Msg.confirm("提示!","您确定要删除信息吗?",function(btn){if(btn=="yes"){Js.Center.Popedom.UserDelete.func(row)}else{}})}};userPermit_link=function(){var row=usersGrid.getSelectionModel().getSelections();if(row.length==0){Ext.Msg.alert("温馨提示","请您选择一条记录!")}else if(row.length>1){Ext.Msg.alert("温馨提示","对不起，您只能选择一条记录!")}else if(row.length==1){Js.Center.Popedom.UserPermit.window.updateRecord=row[0];Js.Center.Popedom.UserPermit.window.mainForm.loadRecord(row[0]);Js.Center.Popedom.UserPermit.window.show()}};userPermit=function(numuserid,vc2uaccount,vc2username,numdepartid,vc2departname){Js.Center.Popedom.UserPermit.window.updateRecord=null;Js.Center.Popedom.UserPermit.window.show()};var _pageSize=12;var fields=["numuserid","numdepartid","vc2postcode","numreturnlevel","vc2uaccount","vc2username","vc2departname","numtype","vc2mobile","vc2phone","vc2email","vc2creatorname","datcreatetime","numchecklevle","numnodeid","vc2signature"];Js.Center.Popedom.User.Infostore=new WXTL.Widgets.CommonData.GroupingStore({proxy:new Ext.data.HttpProxy({url:Js.Center.Popedom.UserURL,method:"POST"}),reader:new Ext.data.JsonReader({fields:fields,root:"data",id:"numuserid",totalProperty:"totalCount"}),sortInfo:{field:'datcreatetime',direction:'DESC'},baseParams:{username:'',numdepartid:'',vc2uaccount:'',flag:'selectbykey'}});Js.Center.Popedom.User.Infostore.load({params:{start:0,limit:_pageSize}});var sm=new Ext.grid.CheckboxSelectionModel({dataIndex:"numuserid"});var cm=new Ext.grid.ColumnModel([sm,{header:"账户名称",tooltip:"账户名称",dataIndex:"vc2uaccount",sortable:true},{header:"用户名",tooltip:"用户名",dataIndex:"vc2username",sortable:true},{header:"部门",tooltip:"部门",dataIndex:"vc2departname",sortable:true},{header:"账户类型",tooltip:"账户类型",dataIndex:"numtype",sortable:true,renderer:function(value){if(value==1){return"管理员"}if(value==2){return"普通用户"}if(value==4){return"数据管理员"}if(value==-1){return"系统管理员"}else{return""}}},{header:"手机号码",tooltip:"手机号码",dataIndex:"vc2mobile",sortable:true},{header:"电话",tooltip:"电话",dataIndex:"vc2phone",sortable:true},{header:"电子邮箱",tooltip:"电子邮箱",dataIndex:"vc2email",sortable:true},{header:"创建者",tooltip:"创建者",dataIndex:"vc2creatorname",sortable:true},{header:"创建日期",tooltip:"创建日期",dataIndex:"datcreatetime",sortable:true},{header:"账户权限",tooltip:"账户权限",dataIndex:"numuserid",renderer:function(value,meta,record,rowIndex,colIndex,store){if(record.data.numtype==1){return"不能授权"}else{return"<a href='#' onclick='userPermit_link()'>授权</a>　"}}},{header:"账户操作",tooltip:"账户操作",dataIndex:"numuserid",renderer:function(value,meta,record,rowIndex,colIndex,store){return"<a href='#' onclick='userUpdate(\""+rowIndex+"\")'>修改</a>　<a href='#' onclick='userDelete(\""+rowIndex+"\")'>删除</a>"}}]);var UserarrInitLoadFunc=new Array();UserarrInitLoadFunc[0]="Js.Center.Popedom.UserPermit.func";var usersGrid=new WXTL.Widgets.CommonGrid.GridPanel({pageSize:_pageSize,anchor:'100% 100%',needRightMenu:false,store:Js.Center.Popedom.User.Infostore,afterEditURL:Js.Center.Popedom.UserUpdateURL,inertMethod:'Js.Center.Popedom.UserAdd',updateMethod:'Js.Center.Popedom.UserUpdate',deleteMethod:'Js.Center.Popedom.UserDelete.func',otherInitLoadFunc:UserarrInitLoadFunc,needMenu:false,sm:sm,cm:cm,tbar:new Ext.Toolbar({items:[{iconCls:'addicon',text:"增加账户",tooltip:"增加账户",handler:function(){usersGrid.doInsert()}},"","-","",{text:"账户授权",tooltip:"账户授权",iconCls:"editicon",handler:function(){userPermit('','','','','')}},"","-","",{text:"删除",tooltip:"删除",iconCls:"deleteicon",handler:function(){usersGrid.doDelete()}}]})});var departComboxTree=new WXTL.Widgets.CommonForm.ComboWithTree({name:'numdepartid',hiddenName:'numdepartid',id:'Js.Center.Popedom.User.departComboxTree',fieldLabel:"部门名称",valueField:'id',treeRootVisible:true,listHeight:'150',baseParams:{columnlist:"numdepartid,vc2departname",flag:'selectallbycurrentuser'},dataUrl:Js.Center.Popedom.DepartmentsQueryURL});var selectPanel=new WXTL.Widgets.CommonPanel.QueryFormPanel({id:"Js.Center.Popedom.User.SelectPanel",height:100,queryMethod:"Js.Center.Popedom.User.queryGrid",items:[{layout:'column',items:[{columnWidth:.5,layout:'form',defaultType:"textfield",defaults:{anchor:'90%',msgTarget:"side"},items:[new Ext.form.TextField({fieldLabel:'账户名称',name:'vc2username',id:'Js.Center.Popedom.User.UserName',regex:WXTL.Common.regex.Illegal,regexText:WXTL.Common.regexText.IllegalText,msgTarget:"side",maxLength:15})]},{columnWidth:.5,layout:'form',defaultType:"textfield",defaults:{anchor:'90%',msgTarget:"side"},items:[departComboxTree]}]}]});Js.Center.Popedom.User.queryGrid=function(){if(selectPanel.getForm().isValid()){var userName=Ext.get("Js.Center.Popedom.User.UserName").getValue();var numDepartId=departComboxTree.getValue()==null?"":departComboxTree.getValue().replace("s","");var flag='selectbykey';Js.Center.Popedom.User.Infostore.baseParams={username:'',numdepartid:numDepartId,vc2uaccount:userName,flag:flag};Js.Center.Popedom.User.Infostore.load({params:{start:0,limit:_pageSize}})}};Js.Center.Popedom.User.MainPanel=new Ext.Panel({frame:true,id:"Js.Center.Popedom.User.MainPanel",bodyBorder:false,border:false,autoScroll:true,layout:"anchor",defaults:{collapsible:true},items:[selectPanel,usersGrid]})};GridMain(node,Js.Center.Popedom.User.MainPanel,"openroomiconinfo","Js.Center.Popedom.User.Infostore")};Ext.namespace('Js.Center.Popedom.UserPermit');Js.Center.Popedom.UserPermit.func=function(numuserid,vc2uaccount,vc2username,numdepartid,vc2departname){var userData=Js.Center.Common.userData.data[0];if(Js.Center.Popedom.UserPermit.window==null){Js.Center.Popedom.User.UserStore=new Ext.data.Store({proxy:new Ext.data.HttpProxy({url:Js.Center.Popedom.UserURL,method:"POST"}),reader:new Ext.data.JsonReader({fields:['numuserid','vc2username'],root:"data",id:"numuserid"})});var userCombo=new Ext.form.ComboBox({fieldLabel:"用户名",hiddenName:"numuserid",id:'Js.Center.Popedom.UserPermit.userCombo',readOnly:true,allowBlank:false,blankText:'请选择用户名',mode:"local",displayField:"vc2username",valueField:"numuserid",triggerAction:"all",store:Js.Center.Popedom.User.UserStore,listeners:{"select":function(a,b){southPanel.collapse(true);fromStore.load({params:{userid:a.value}});toStore.load({params:{userid:a.value}})}}});var departComboxTree=new WXTL.Widgets.CommonForm.ComboWithTree({name:'numdepartid',hiddenName:'numdepartid',id:'Js.Center.Popedom.UserPermit.DepartmentPrimit.departComboxTree',fieldLabel:"部门名称",allowBlank:false,blankText:'请选择部门',valueField:'id',listHeight:'150',baseParams:{columnlist:"numdepartid,vc2departname",flag:'selectallbycurrentuser'},dataUrl:Js.Center.Popedom.DepartmentsQueryURL,listeners:{"select":function(a,b){southPanel.collapse(true);var _numdepartid=b.id;Ext.getCmp('Js.Center.Popedom.UserPermit.userCombo').setValue('');Js.Center.Popedom.User.UserStore.load({params:{departid:this.getValue(),flag:'selectallbydepartidforrole',columnlist:"numuserid,vc2username,vc2email"}});fromStore.load({params:{departid:_numdepartid}});toStore.load({params:{departid:_numdepartid}})}}});var permissionTablePanl=new Ext.form.FormPanel({labelWidth:60,items:[{layout:'column',bodyStyle:'padding:10px,0px,0px,15px',items:[{columnWidth:.5,layout:'form',defaults:{anchor:'90%',msgTarget:"side"},items:[departComboxTree]},{columnWidth:.5,layout:'form',defaultType:"textfield",defaults:{anchor:'90%',msgTarget:"side"},items:[userCombo]}]}]});var fromStore=new Ext.data.Store({proxy:new Ext.data.HttpProxy({url:Js.Center.Popedom.UserFuncRoleURL,method:"POST"}),reader:new Ext.data.JsonReader({fields:['numroleid','vc2rolename'],root:'data',id:'numroleid'}),baseParams:{flag:'selectallbyuserid',typeid:0,columnlist:'numroleid,vc2rolename'}});var toStore=new Ext.data.Store({proxy:new Ext.data.HttpProxy({url:Js.Center.Popedom.UserFuncRoleURL,method:"POST"}),reader:new Ext.data.JsonReader({fields:['numroleid','vc2rolename'],root:'data',id:'numprodid'}),baseParams:{flag:'selectallbyuserid',typeid:1,columnlist:'numroleid,vc2rolename'}});var ecFromStore=new Ext.data.Store({proxy:new Ext.data.HttpProxy({url:Js.Center.Popedom.UserFuncRoleURL,method:"POST"}),reader:new Ext.data.JsonReader({fields:['numroleid','vc2rolename'],root:'data',id:'numroleid'}),baseParams:{flag:'selectallbyuserid',typeid:0,roletype:3,columnlist:'numroleid,vc2rolename'}});var ecToStore=new Ext.data.Store({proxy:new Ext.data.HttpProxy({url:Js.Center.Popedom.UserFuncRoleURL,method:"POST"}),reader:new Ext.data.JsonReader({fields:['numroleid','vc2rolename'],root:'data',id:'numprodid'}),baseParams:{flag:'selectallbyuserid',typeid:1,roletype:3,columnlist:'numroleid,vc2rolename'}});var PermissionTree=new Ext.form.FormPanel({frame:true,bodyStyle:'padding:10px,0px,0px,10px',autoScroll:true,labelWidth:60,items:[{anchor:',100%',xtype:"itemselector",name:"itemselector",id:"roleitemselector",fieldLabel:"配置角色",dataFields:["numroleid","vc2rolename"],toData:[""],msWidth:250,autoScroll:true,enableDD:false,msHeight:200,valueField:'numroleid',displayField:'vc2rolename',toLegend:"已选栏",fromLegend:"可选栏",fromStore:fromStore,toStore:toStore,listeners:{"change":function(){southPanel.collapse(true)}},fromTBar:[new Ext.form.TextField({width:200,id:"Js.Center.User.UserPermit.Textsearch",emptyText:'Find a Class',listeners:{render:function(f){f.el.on('keyup',function(e){Ext.getCmp("roleitemselector").fromMultiselect.view.store.filter("vc2rolename",f.getValue(),true,false)},f,{buffer:350})}}})]},userData.numdepartid==1?{anchor:',100%',xtype:"itemselector",name:"itemselector",id:"ecroleitemselector",fieldLabel:"EC角色",dataFields:["numroleid","vc2rolename"],toData:[""],msWidth:250,autoScroll:true,enableDD:false,msHeight:200,valueField:'numroleid',displayField:'vc2rolename',toLegend:"已选栏",fromLegend:"可选栏",fromStore:ecFromStore,toStore:ecToStore,listeners:{"change":function(){southPanel.collapse(true)}},fromTBar:[new Ext.form.TextField({width:200,id:"Js.Center.User.UserPermit.TextsearchECRole",emptyText:'Find a Class',listeners:{render:function(f){f.el.on('keyup',function(e){Ext.getCmp("ecroleitemselector").fromMultiselect.view.store.filter("vc2rolename",f.getValue(),true,false)},f,{buffer:350})}}})]}:{xtype:"hidden"}]});var permissionRolePanel=new Ext.Panel({frame:true,height:userData.numdepartid==1?480:240,items:[PermissionTree]});var mainForm=permissionTablePanl.getForm();var permissionPanel=new Ext.Panel({autoScroll:true,frame:true,height:240,padding:'10 10 10 10',items:[{frame:true,html:'<div id="ddritemselector" class="demo-ct"></div>'}]});var treePanel=new Ext.tree.TreePanel({border:false,applyTo:'',root:new Ext.tree.AsyncTreeNode({id:"-1",text:"功能权限",loader:new Ext.tree.TreeLoader({url:Js.Center.Popedom.UserFuncRoleURL,listeners:{"beforeload":function(treeloader,node){treeloader.baseParams={parentid:node.id,method:'POST',flag:'selectfuncpermitbyroleids',roleids:toStore.collect('numroleid')}}}})}),rootVisible:true});var ProductStore=new Ext.data.Store({proxy:new Ext.data.HttpProxy({url:Js.Center.Business.RoleProductURL,method:"POST"}),reader:new Ext.data.JsonReader({fields:["numprodid","vc2name"],root:'data',id:'numprodid'}),baseParams:{flag:"selectpermitbyroleids",columnlist:"numprodid,vc2name"}});var UserGroupStore=new Ext.data.Store({proxy:new Ext.data.HttpProxy({url:Js.Center.Popedom.UserFuncRoleURL,method:"POST"}),reader:new Ext.data.JsonReader({fields:["numusergroupid","vc2usergroupname"],root:'data',id:'numusergroupid'}),baseParams:{flag:"selectpermitbyroleids",columnlist:"numusergroupid,vc2usergroupname"}});var southPanel=new Ext.form.FormPanel({title:'账户功能汇集列表',width:'100%',id:"Js.Center.Popedom.UserPermit.southPanel",collapsible:true,collapsed:true,autoScroll:true,border:true,frame:true,items:[{layout:'column',items:[{columnWidth:.3,layout:'form',defaults:{anchor:"95%",msgTarget:"side"},buttonAlign:"center",items:[treePanel]},{columnWidth:.35,layout:'form',labelWidth:65,defaultType:"textfield",defaults:{anchor:"95%",msgTarget:"side"},buttonAlign:"center",items:[{xtype:"textarea",name:"productlist",id:'Js.Center.Popedom.UserPermit.ProductList',fieldLabel:"通道组列表",height:200,disabled:true}]},{columnWidth:.35,layout:'form',labelWidth:65,defaultType:"textfield",defaults:{anchor:"95%",msgTarget:"side"},buttonAlign:"center",items:[{xtype:"textarea",name:"usergrouplist",id:'Js.Center.Popedom.UserPermit.UserGroupList',fieldLabel:"客户组列表",height:200,disabled:true}]}]}],listeners:{"expand":function(a,b,c){var userUgoupNames="";var productNames="";Ext.getCmp("Js.Center.User.UserPermit.Textsearch").disable();if(userData.numdepartid==1){Ext.getCmp("Js.Center.User.UserPermit.TextsearchECRole").disable()}var roleids=WXTL.Common.urlDecode(PermissionTree.getForm().getValues(true)).replace('itemselector=','');treePanel.root.reload();if(roleids!=""){var jsonProductList=eval(doSynRequest(Js.Center.Business.RoleProductURL+"?flag=selectpermitbyroleids&columnlist=numprodid,vc2name&roleids="+roleids));if(jsonProductList.data.length>0){for(var i=0;i<jsonProductList.data.length;i++){if(jsonProductList.data.length==1){productNames=jsonProductList.data[i].vc2name}else{if(i<(jsonProductList.data.length-1)){productNames+=jsonProductList.data[i].vc2name+","}if(i==(jsonProductList.data.length-1)){productNames+=jsonProductList.data[i].vc2name}}}}else{productNames="没有已授权的通道组！"}var jsonUserGroupList=eval(doSynRequest(Js.Center.Business.UserGroupURL+"?flag=selectpermitbyroleids&columnlist=numusergroupid,vc2usergroupname&roleids="+roleids));if(jsonUserGroupList.data.length>0){for(var i=0;i<jsonUserGroupList.data.length;i++){if(jsonUserGroupList.data.length==1){userUgoupNames=jsonUserGroupList.data[i].vc2usergroupname}else{if(i<(jsonUserGroupList.data.length-1)){userUgoupNames+=jsonUserGroupList.data[i].vc2usergroupname+","}if(i==(jsonUserGroupList.data.length-1)){userUgoupNames+=jsonUserGroupList.data[i].vc2usergroupname}}}}else{userUgoupNames="没有已授权的客户组！"}}else{productNames="没有已授权的通道组！";userUgoupNames="没有已授权的客户组！"}a.items.items[0].items.items[1].items.items[0].setValue(productNames);a.items.items[0].items.items[2].items.items[0].setValue(userUgoupNames);Ext.getCmp("Js.Center.User.UserPermit.Textsearch").enable();if(userData.numdepartid==1){Ext.getCmp("Js.Center.User.UserPermit.TextsearchECRole").enable()}}}});this.window=new WXTL.Widgets.CommonWindows.Window({title:"配置账户权限",mainForm:mainForm,width:680,height:380,autoScroll:true,closeAction:'hide',displayStore:Js.Center.Popedom.User.Infostore,updateState:true,needButtons:false,items:[permissionTablePanl,permissionRolePanel,southPanel],needLoadDataStore:true,loadDataStoreFunc:function(){departComboxTree.tree.root.reload();Ext.getCmp("Js.Center.User.UserPermit.Textsearch").enable();Ext.getCmp("Js.Center.User.UserPermit.Textsearch").setValue(null);if(userData.numdepartid==1){Ext.getCmp("Js.Center.User.UserPermit.TextsearchECRole").enable();Ext.getCmp("Js.Center.User.UserPermit.TextsearchECRole").setValue(null)}Js.Center.Popedom.User.UserStore.load({params:{departid:'',flag:'selectallbydepartidforrole',columnlist:"numuserid,vc2username,vc2email"}});if(Js.Center.Popedom.UserPermit.window.updateRecord!=null&&Js.Center.Popedom.UserPermit.window.updateRecord!=""){var node;if(Js.Center.Popedom.UserPermit.window.updateRecord.success==null){node={'id':Js.Center.Popedom.UserPermit.window.updateRecord.get("numdepartid"),'text':Js.Center.Popedom.UserPermit.window.updateRecord.get("vc2departname")};userCombo.setValue(Js.Center.Popedom.UserPermit.window.updateRecord.get("numuserid"));Ext.get("Js.Center.Popedom.UserPermit.userCombo").dom.value=Js.Center.Popedom.UserPermit.window.updateRecord.get("vc2username")}else{node={'id':Js.Center.Popedom.UserPermit.window.updateRecord.numdepartid,'text':Js.Center.Popedom.UserPermit.window.updateRecord.vc2departname};userCombo.setValue(Js.Center.Popedom.UserPermit.window.updateRecord.numuserid);Ext.get("Js.Center.Popedom.UserPermit.userCombo").dom.value=Js.Center.Popedom.UserPermit.window.updateRecord.vc2username}departComboxTree.setValue(node);departComboxTree.disable();userCombo.disable()}else{departComboxTree.enable();userCombo.enable()}fromStore.load({params:{userid:userCombo.getValue()}});toStore.load({params:{userid:userCombo.getValue()}});ecFromStore.load({params:{userid:userCombo.getValue()}});ecToStore.load({params:{userid:userCombo.getValue()}})},buttons:[{text:'保存',handler:function(){if(mainForm.isValid()){Ext.MessageBox.show({msg:'正在保存，请稍等...',progressText:'Saving...',width:300,wait:true,waitConfig:{interval:200},icon:'download',animEl:'saving'});setTimeout(function(){Ext.MessageBox.hide()},300000);Ext.getCmp("Js.Center.User.UserPermit.Textsearch").disable();if(userData.numdepartid==1){Ext.getCmp("Js.Center.User.UserPermit.TextsearchECRole").disable()}var idlist=PermissionTree.getForm().items.items[0].getValue();var ecRoleList=PermissionTree.getForm().items.items[1].getValue();if(idlist){if(ecRoleList){idlist+=","+ecRoleList}}else{if(ecRoleList){idlist=ecRoleList}}updateDDRPermission(idlist)}}},{text:"取 消",minWidth:70,handler:function(){Js.Center.Popedom.UserPermit.window.mainForm.reset();Js.Center.Popedom.UserPermit.window.hide()}}]});function updateDDRPermission(idlist){var parms={flag:'updateuserrolebyroleids',roleids:idlist,userid:userCombo.getValue()};Js.Center.Popedom.UserPermit.window.mainFormSubmitFunc('',parms,Js.Center.Popedom.UserFuncRoleUpdateURL)}}};Ext.namespace('Js.Center.Popedom.UserUpdate');Ext.QuickTips.init();Js.Center.Popedom.UserUpdate.func=function(row){Js.Center.Common.NodeStore.load();var addInfoFormPanel=new Ext.form.FormPanel({frame:true,region:'center',labelWidth:80,items:[{layout:'column',items:[{xtype:"hidden",name:"flag",value:"updateall"},{columnWidth:.5,layout:'form',defaultType:"textfield",defaults:{anchor:"90%",msgTarget:"side"},buttonAlign:"center",bodyStyle:"padding:10px 0 10px 15px",items:[{xtype:"hidden",name:"numdepartid",id:"Js.Center.Popedom.UserUpdate.numdepartid"},{xtype:"textfield",id:"Js.Center.Popedom.UserUpdate.vc2departname",name:"vc2departname",fieldLabel:"部门",readOnly:true},{xtype:"hidden",name:"numuserid",id:"Js.Center.Popedom.UserUpdate.numuserid"},{xtype:"textfield",name:"vc2uaccount",id:"Js.Center.Popedom.UserUpdate.vc2uaccount",fieldLabel:"<font color=red>用户账户</font>",allowBlank:false,blankText:"用户账户不允许为空",regex:"",regexText:"",maxLength:15},{xtype:"textfield",name:"vc2upassword",id:"Js.Center.Popedom.UserUpdate.vc2upassword",fieldLabel:"用户密码",inputType:"password",minLength:6,minLengthText:'长度不能少于6!',maxLength:50,regex:WXTL.Common.regex.Illegal,regexText:WXTL.Common.regexText.IllegalText,maxLengthText:'长度不能超过25！',validateOnBlur:false,validator:function(){var pwd1=Ext.get("Js.Center.Popedom.UserUpdate.vc2upassword").dom.value;if(pwd1.trim()!=pwd1){return false}else{return true}},invalidText:'密码中不能含有空格！'},{xtype:"textfield",name:"vc2upasswordRe",id:"Js.Center.Popedom.UserUpdate.vc2upasswordRe",fieldLabel:"重复密码",inputType:"password",validateOnBlur:false,validator:function(){var pwd1=Ext.get("Js.Center.Popedom.UserUpdate.vc2upassword").dom.value;var pwdre=Ext.get("Js.Center.Popedom.UserUpdate.vc2upasswordRe").dom.value;if(pwd1==pwdre){return true}else{return false}},invalidText:'两次输入密码不一致',minLength:6,minLengthText:'长度不能少于6!',maxLength:50,maxLengthText:'长度不能超过25！'},{xtype:"textfield",name:"vc2phone",fieldLabel:"电话",regex:WXTL.Common.regex.Phone,regexText:"电话格式不正确"},{xtype:"combo",id:"Js.Center.Popedom.UserUpdate.numnodeid",fieldLabel:"<font color=red>所属网元</font>",readOnly:true,mode:"local",store:Js.Center.Common.NodeStore,triggerAction:'all',selectOnFocus:true,emptyText:'-=请所属网元=-',width:130,allowBlank:false,blankText:"所属网元不允许为空",displayField:'vc2nodename',valueField:'numnodeid',listeners:{"select":function(){Ext.getCmp("UserUpdateNumnodeid").setValue(this.getValue())}}},{xtype:"hidden",name:"numnodeid",id:"UserUpdateNumnodeid"}]},{columnWidth:.5,layout:'form',defaultType:"textfield",defaults:{anchor:"90%",msgTarget:"side"},buttonAlign:"center",bodyStyle:"padding:10px 0 10px 15px",items:[{xtype:"textfield",name:"vc2username",id:"Js.Center.Popedom.UserUpdate.vc2username",fieldLabel:"<font color=red>用户姓名</font>",allowBlank:false,blankText:"用户姓名不允许为空",regex:WXTL.Common.regex.Illegal,regexText:WXTL.Common.regexText.IllegalText,maxLength:15},{xtype:"combo",name:"numtype",fieldLabel:"<font color=red>账户类型</font>",hiddenName:"numtype",readOnly:true,mode:"local",displayField:"show",valueField:"value",triggerAction:"all",allowBlank:false,blankText:"账户类型不允许为空",emptyText:"请选择",store:new Ext.data.SimpleStore({fields:["show","value"],data:[["管理员","1"],["普通用户","2"],["数据管理员","4"]]}),listeners:{"select":function(){if(this.getValue()==1){Js.Center.Popedom.UserUpdate.window.buttons[2].disable()}else{Js.Center.Popedom.UserUpdate.window.buttons[2].enable()}}}},{xtype:"textfield",name:"vc2mobile",fieldLabel:"<font color=red>手机号</font>",allowBlank:false,blankText:"手机号不允许为空",regex:WXTL.Common.regex.Mobile,regexText:"手机号格式不正确"},{xtype:"textfield",name:"vc2email",fieldLabel:"<font color=red>邮箱</font>",allowBlank:false,blankText:"邮箱不允许为空",regex:WXTL.Common.regex.Email,regexText:"邮箱格式不正确"},{xtype:"combo",name:"numchecklevle",fieldLabel:"<font color=red>审核级别</font>",hiddenName:"numchecklevle",readOnly:true,mode:"local",displayField:"show",valueField:"value",triggerAction:"all",allowBlank:false,blankText:"审核级别不允许为空",emptyText:"请选择",store:new Ext.data.SimpleStore({fields:["show","value"],data:[["不审核","0"],["一级审核","1"],["二级审核","2"]]})},{xtype:"textfield",name:"vc2signature",fieldLabel:"签名内容",regex:WXTL.Common.regex.Illegal,regexText:WXTL.Common.regexText.IllegalText,maxLength:100}]}]}]});var mainForm=addInfoFormPanel.getForm();this.window=new WXTL.Widgets.CommonWindows.Window({title:"修改账户",mainForm:mainForm,updateURL:Js.Center.Popedom.UserUpdateURL,displayStore:Js.Center.Popedom.User.Infostore,updateState:true,updateRecord:row,items:[addInfoFormPanel],needLoadDataStore:true,needButtons:false,loadDataStoreFunc:function(){var userData=Js.Center.Common.userData;if(userData.data.length>0){var elNode=Ext.getCmp("Js.Center.Popedom.UserUpdate.numnodeid");elNode.setValue(Ext.getCmp("UserUpdateNumnodeid").getValue());if(userData.data[0].numtype!=-1){if(userData.data[0].numdepartid!=1&&userData.data[0].numtype!=1){elNode.disable()}}else{elNode.setValue(Ext.getCmp("UserUpdateNumnodeid").getValue())}}},buttons:[new Ext.Button({text:'保存退出',minWidth:70,qtip:"保存退出",handler:function(){if(mainForm.isValid()){Ext.MessageBox.show({msg:'正在保存，请稍等...',progressText:'Saving...',width:300,wait:true,icon:'download',animEl:'saving'});setTimeout(function(){Ext.MessageBox.hide()},300000);Js.Center.Popedom.UserUpdate.window.mainFormSubmitFunc()}}}),new Ext.Button({text:'重填',qtip:"重填",minWidth:70,handler:function(){addInfoFormPanel.getForm().reset();addInfoFormPanel.getForm().loadRecord(Js.Center.Popedom.UserUpdate.window.updateRecord)}}),new Ext.Button({text:'下一步',qtip:"下一步",minWidth:70,handler:function(){if(mainForm.isValid()){Js.Center.Popedom.UserUpdate.window.mainFormSubmitFunc('Js.Center.Popedom.UserUpdate.nextStepFunc(Ext.get("Js.Center.Popedom.UserUpdate.numuserid").getValue(),Ext.get("Js.Center.Popedom.UserUpdate.vc2username").getValue(), Ext.get("Js.Center.Popedom.UserUpdate.vc2uaccount").getValue(),  Ext.get("Js.Center.Popedom.UserUpdate.numdepartid").getValue(), Ext.get("Js.Center.Popedom.UserUpdate.vc2departname").getValue())')}}}),new Ext.Button({text:'关闭',qtip:"关闭",minWidth:70,handler:function(){Js.Center.Popedom.UserUpdate.window.hide()}})],listeners:{"show":function(){if(Js.Center.Popedom.UserUpdate.window.updateRecord.data.numtype==2||Js.Center.Popedom.UserUpdate.window.updateRecord.data.numtype==4){Js.Center.Popedom.UserUpdate.window.buttons[2].enable()}else{Js.Center.Popedom.UserUpdate.window.buttons[2].disable()}}}});Js.Center.Popedom.UserUpdate.nextStepFunc=function(numuserid,vc2username,vc2uaccount,numdepartid,vc2departname){var jsonObject=new Object();jsonObject.success="true";jsonObject.numuserid=numuserid;jsonObject.vc2username=vc2username;jsonObject.numdepartid=numdepartid;jsonObject.vc2departname=vc2departname;Js.Center.Popedom.UserPermit.window.updateRecord=jsonObject;Js.Center.Popedom.UserPermit.window.show()}};