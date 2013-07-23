Ext.namespace('Js.Center.Business.MORouterAdd');Js.Center.Business.MORouterAdd.func=function(){var clientStore=new Ext.data.Store({proxy:new Ext.data.HttpProxy({url:Js.Center.Business.YXTClients,method:"POST"}),reader:new Ext.data.JsonReader({fields:['numclientid','vc2clientname'],root:"data",id:"numclientid"}),baseParams:{flag:'queryclient'}});var addInfoFormPanel=new Ext.form.FormPanel({frame:true,labelWidth:88,items:[{layout:'column',items:[{xtype:"hidden",name:"flag",value:"insert"},{columnWidth:.5,layout:'form',defaultType:"textfield",defaults:{anchor:"90%",msgTarget:"side"},buttonAlign:"center",bodyStyle:"padding:10px 0 10px 15px",items:[{xtype:"textfield",name:"vc2longcode",fieldLabel:"长号码",regex:/^\d{0,20}$/,regexText:'请输入长度20以内的数字！'},{xtype:"xComboBox",name:"numsvcid",fieldLabel:"<font color=red>运营商业务</font>",hiddenName:"numsvcid",allowBlank:false,blankText:"运营商业务不允许为空",mode:"local",displayField:"vc2svcname",valueField:"numsvcid",triggerAction:"all",store:Js.Center.Common.ServiceCodeStore},{xtype:"combo",name:"vc2lcmatch",fieldLabel:"<font color=red>长号码匹配标志</font>",hiddenName:"vc2lcmatch",emptyText:"请选择",readOnly:true,mode:"local",displayField:"show",valueField:"value",triggerAction:"all",value:0,allowBlank:false,blankText:"长号码匹配标志不允许为空",store:new Ext.data.SimpleStore({fields:["show","value"],data:[["模糊","0"],["精确","1"]]})},{xtype:"xComboBox",name:"numrpgmid",fieldLabel:"<font color=red>程序名称</font>",hiddenName:"numrpgmid",mode:"local",displayField:'vc2clientname',valueField:'numclientid',triggerAction:"all",allowBlank:false,blankText:"程序名称不允许为空",emptyText:'-=请选择=-',store:clientStore}]},{columnWidth:.5,layout:'form',defaultType:"textfield",defaults:{anchor:"90%",msgTarget:"side"},buttonAlign:"center",bodyStyle:"padding:10px 0 10px 15px",items:[{xtype:"textfield",name:"vc2cmd",fieldLabel:"指令",regex:WXTL.Common.regex.Illegal,regexText:WXTL.Common.regexText.IllegalText,maxLength:10,maxLengthText:'长度不能超过10！'},{xtype:"combo",name:"vc2cmdmatch",fieldLabel:"<font color=red>指令匹配标志</font>",hiddenName:"vc2cmdmatch",emptyText:"请选择",readOnly:true,mode:"local",displayField:"show",valueField:"value",triggerAction:"all",value:0,allowBlank:false,blankText:"指令匹配标志不允许为空",store:new Ext.data.SimpleStore({fields:["show","value"],data:[["模糊","0"],["精确","1"]]})},{xtype:"xComboBox",name:"vc2gatewayname",fieldLabel:"<font color=red>网关名称</font>",hiddenName:"numgwid",mode:"local",displayField:'vc2gatewayname',valueField:'numgwid',triggerAction:"all",allowBlank:false,blankText:"网关名称不允许为空",emptyText:'-=请选择=-',store:Js.Center.Common.GatewayStore},{xtype:"xComboBox",name:"vc2name",fieldLabel:"<font color=red>通道组名称</font>",hiddenName:"numprodid",mode:"local",displayField:'vc2name',valueField:'numprodid',triggerAction:"all",allowBlank:false,blankText:"通道组名称不允许为空",emptyText:'-=请选择=-',store:Js.Center.Common.ProductStore}]}]},{layout:'form',defaultType:"textfield",defaults:{anchor:"90%",msgTarget:"side"},buttonAlign:"center",bodyStyle:"padding:0px 0 0px 15px",items:[{height:100,xtype:"textarea",name:"vc2dsc",fieldLabel:"路由描述",regex:WXTL.Common.regex.Illegal,regexText:WXTL.Common.regexText.IllegalText,maxLength:100}]}]});var mainForm=addInfoFormPanel.getForm();this.window=new WXTL.Widgets.CommonWindows.Window({title:"添加路由",mainForm:mainForm,updateURL:Js.Center.Business.YXTMORouterUpdateURL,displayStore:Js.Center.Business.MORouter.Infostore,items:[addInfoFormPanel],needLoadDataStore:true,loadDataStoreFunc:function(){Js.Center.Common.GatewayStore.reload();Js.Center.Common.ServiceCodeStore.reload();clientStore.reload();Js.Center.Common.ProductStore.reload({params:{vc2servicetype:'1'}})}});};Ext.namespace('Js.Center.Business.MORouterDelete');Js.Center.Business.MORouterDelete.func=function(row){var deleteSplit="";for(var i=0;i<row.length;i++){if(row.length==1){deleteSplit=row[i].data.numrouteid}else{if(i<(row.length-1)){deleteSplit=row[i].data.numrouteid+","+deleteSplit}if(i==(row.length-1)){deleteSplit=deleteSplit+row[i].data.numrouteid}}};var params={ids:deleteSplit,flag:"delete"};doAjax(Js.Center.Business.MORouterUpdateURL,params,Js.Center.Business.MORouter.Infostore)};Ext.namespace('Js.Center.Business.MORouter');Js.Center.Business.MORouter.info=function(node){Js.Center.Common.ProgramStore.reload();Js.Center.Common.GatewayStore.reload();if(Ext.get("Js.Center.Business.MORouter.MORouterpanel")==null){var _pageSize=12;var fields=["numrouteid","vc2lcmatch","vc2cmdmatch","vc2longcode","vc2clientname","vc2cmd","numrpgmid","numsvcid","vc2svcname","vc2dsc","numrpgmname","numgwid","vc2gatewayname","numprodid","vc2name",];Js.Center.Business.MORouter.Infostore=new WXTL.Widgets.CommonData.GroupingStore({proxy:new Ext.data.HttpProxy({url:Js.Center.Business.YXTMORouterQueryURL,method:"POST"}),reader:new Ext.data.JsonReader({fields:fields,root:"data",id:"numrouteid",totalProperty:"totalCount"}),sortInfo:{field:'vc2longcode',direction:'DESC'},baseParams:{vc2longcode:'',vc2cmd:'',numrpgmid:'',flag:'selectbykey'}});Js.Center.Business.MORouter.Infostore.load({params:{start:0,limit:_pageSize}});var sm=new Ext.grid.CheckboxSelectionModel({dataIndex:"numrouteid"});var cm=new Ext.grid.ColumnModel([sm,{header:"路由编号",tooltip:"路由编号",dataIndex:"numrouteid",sortable:true},{header:"长号码",tooltip:"长号码",dataIndex:"vc2longcode",sortable:true},{header:"长号码匹配",tooltip:"长号码匹配",dataIndex:"vc2lcmatch",sortable:true,renderer:function(value){if(value==1){return"精确"}if(value==0){return"模糊"}}},{header:"运营商业务",tooltip:"运营商业务",dataIndex:"vc2svcname",sortable:true},{header:"指令",tooltip:"指令",dataIndex:"vc2cmd",sortable:true},{header:"指令匹配",tooltip:"指令匹配",dataIndex:"vc2cmdmatch",sortable:true,renderer:function(value){if(value==1){return"精确"}if(value==0){return"模糊"}}},{header:"程序编号",tooltip:"程序编号",dataIndex:"numrpgmid",sortable:true},{header:"程序名称",tooltip:"程序名称",dataIndex:"vc2clientname",sortable:true},{header:"网关名称",tooltip:"网关名称",dataIndex:"vc2gatewayname",sortable:true},{header:"通道组编号",tooltip:"通道组编号",hidden:true,dataIndex:"numprodid",sortable:true},{header:"通道组名称",tooltip:"通道组名称",dataIndex:"vc2name",sortable:true},{header:"路由描述",tooltip:"路由描述",dataIndex:"vc2dsc",sortable:true}]);var MORouterGrid=new WXTL.Widgets.CommonGrid.GridPanel({anchor:'100% 100%',pageSize:_pageSize,store:Js.Center.Business.MORouter.Infostore,afterEditURL:Js.Center.Business.MORouterUpdateURL,inertMethod:'Js.Center.Business.MORouterAdd',updateMethod:'Js.Center.Business.MORouterUpdate',deleteMethod:'Js.Center.Business.MORouterDelete.func',sm:sm,cm:cm});var selectPanel=new WXTL.Widgets.CommonPanel.QueryFormPanel({queryMethod:"Js.Center.Business.MORouter.queryGrid",items:[{layout:'column',items:[{columnWidth:.5,layout:'form',defaultType:"textfield",defaults:{anchor:"90%",msgTarget:"side"},buttonAlign:"center",bodyStyle:"padding:10px 0 10px 15px",items:[{xtype:"textfield",name:"vc2longcode",fieldLabel:"长号码",id:"Js.Center.Business.MORouter.LongCode",fieldLabel:"长号码",regex:/^\d{0,20}$/,regexText:'请输入长度20以内的数字！'},{xtype:"xComboBox",name:"numrpgmid",fieldLabel:"程序名称",hiddenName:"morouterProgramId",mode:"local",displayField:'vc2clientname',valueField:'numclientid',triggerAction:"all",emptyText:'-=请选择=-',store:Js.Center.Common.ProgramStore}]},{columnWidth:.5,layout:'form',defaultType:"textfield",defaults:{anchor:"90%",msgTarget:"side"},buttonAlign:"center",bodyStyle:"padding:10px 0 10px 15px",items:[{xtype:"textfield",name:"VC2CMD",id:"Js.Center.Business.MORouter.CMD",fieldLabel:"指令",regex:WXTL.Common.regex.Illegal,regexText:WXTL.Common.regexText.IllegalText,maxLength:20},{xtype:"xComboBox",name:"numgwid",fieldLabel:"网关名称",hiddenName:"numgwid",mode:"local",displayField:'vc2gatewayname',valueField:'numgwid',triggerAction:"all",emptyText:'-=请选择=-',store:Js.Center.Common.GatewayStore}]}]}]});Js.Center.Business.MORouter.queryGrid=function(){if(selectPanel.getForm().isValid()){var _longCode=Ext.get("Js.Center.Business.MORouter.LongCode").getValue();var _command=Ext.get("Js.Center.Business.MORouter.CMD").getValue();var _programID=Ext.get("morouterProgramId").getValue();var _numgwID=Ext.get("numgwid").getValue();var _flag='selectbykey';Js.Center.Business.MORouter.Infostore.baseParams={vc2longcode:_longCode,vc2cmd:_command,numrpgmid:_programID,numgwid:_numgwID,flag:_flag};Js.Center.Business.MORouter.Infostore.load({params:{start:0,limit:_pageSize}})}};Js.Center.Business.MORouter.MORouterPanel=new Ext.Panel({frame:true,id:"Js.Center.Business.MORouter.MORouterpanel",bodyBorder:false,border:false,autoScroll:true,layout:"anchor",defaults:{collapsible:true},items:[selectPanel,MORouterGrid]})};GridMain(node,Js.Center.Business.MORouter.MORouterPanel,"openroomiconinfo","Js.Center.Business.MORouter.Infostore")};Ext.namespace('Js.Center.Business.MORouterUpdate');Js.Center.Business.MORouterUpdate.func=function(row){var SvcCombox=new WXTL.Widgets.CommonForm.ComboBox({xtype:"xComboBox",name:"numsvcid",hiddenName:"numsvcid",fieldLabel:"<font color=red>运营商业务</font>",allowBlank:false,blankText:"运营商业务不允许为空",mode:"local",displayField:"vc2svcname",valueField:"numsvcid",triggerAction:"all",store:Js.Center.Common.ServiceCodeStore});var clientStore=new Ext.data.Store({proxy:new Ext.data.HttpProxy({url:Js.Center.Business.YXTClients,method:"POST"}),reader:new Ext.data.JsonReader({fields:['numclientid','vc2clientname'],root:"data",id:"numclientid"}),baseParams:{flag:'queryclient'}});clientStore.reload();Js.Center.Common.ServiceCodeStore.reload();var updateInfoFormPanel=new Ext.form.FormPanel({frame:true,labelWidth:88,items:[{layout:'column',items:[{xtype:"hidden",name:"flag",value:"update"},{xtype:"hidden",name:"numrouteid",fieldLabel:"路由编号"},{columnWidth:.5,layout:'form',defaultType:"textfield",defaults:{anchor:"90%",msgTarget:"side"},buttonAlign:"center",bodyStyle:"padding:10px 0 10px 15px",items:[{xtype:"textfield",name:"vc2longcode",fieldLabel:"长号码",regex:/^\d{0,20}$/,regexText:'请输入长度20以内的数字！'},SvcCombox,{xtype:"combo",name:"vc2lcmatch",fieldLabel:"<font color=red>长号码匹配标志</font>",hiddenName:"vc2lcmatch",emptyText:"请选择",readOnly:true,mode:"local",displayField:"show",valueField:"value",triggerAction:"all",value:0,allowBlank:false,blankText:"长号码匹配标志不允许为空",store:new Ext.data.SimpleStore({fields:["show","value"],data:[["模糊","0"],["精确","1"]]})},{xtype:"xComboBox",name:"numrpgmid",fieldLabel:"<font color=red>程序名称</font>",hiddenName:"numrpgmid",mode:"local",displayField:'vc2clientname',valueField:'numclientid',triggerAction:"all",allowBlank:false,blankText:"程序名称不允许为空",emptyText:'-=请选择=-',store:clientStore}]},{columnWidth:.5,layout:'form',defaultType:"textfield",defaults:{anchor:"90%",msgTarget:"side"},buttonAlign:"center",bodyStyle:"padding:10px 0 10px 15px",items:[{xtype:"textfield",name:"vc2cmd",fieldLabel:"指令",regex:WXTL.Common.regex.Illegal,regexText:WXTL.Common.regexText.IllegalText,maxLength:10,maxLengthText:'长度不能超过10！'},{xtype:"combo",name:"vc2cmdmatch",fieldLabel:"<font color=red>指令匹配标志</font>",hiddenName:"vc2cmdmatch",emptyText:"请选择",readOnly:true,mode:"local",displayField:"show",valueField:"value",triggerAction:"all",value:0,allowBlank:false,blankText:"指令匹配标志不允许为空",store:new Ext.data.SimpleStore({fields:["show","value"],data:[["模糊","0"],["精确","1"]]})},{xtype:"xComboBox",name:"numgwid",fieldLabel:"<font color=red>网关名称</font>",hiddenName:"numgwid",mode:"local",displayField:'vc2gatewayname',valueField:'numgwid',triggerAction:"all",allowBlank:false,blankText:"网关名称不允许为空",emptyText:'-=请选择=-',store:Js.Center.Common.GatewayStore},{xtype:"xComboBox",name:"vcpro2name",fieldLabel:"<font color=red>通道组名称</font>",hiddenName:"numprodid",mode:"local",displayField:'vc2name',valueField:'numprodid',triggerAction:"all",allowBlank:false,blankText:"通道组名称不允许为空",emptyText:'-=请选择=-',store:Js.Center.Common.ProductStore}]}]},{layout:'form',defaultType:"textfield",defaults:{anchor:"90%",msgTarget:"side"},buttonAlign:"center",bodyStyle:"padding:0px 0 0px 15px",items:[{height:100,xtype:"textarea",name:"vc2dsc",fieldLabel:"路由描述",regex:WXTL.Common.regex.Illegal,regexText:WXTL.Common.regexText.IllegalText,maxLength:100}]}]});var mainForm=updateInfoFormPanel.getForm();this.window=new WXTL.Widgets.CommonWindows.Window({title:"修改路由",mainForm:mainForm,updateURL:Js.Center.Business.YXTMORouterUpdateURL,displayStore:Js.Center.Business.MORouter.Infostore,updateState:true,updateRecord:row,items:[updateInfoFormPanel],needLoadDataStore:true,loadDataStoreFunc:function(){Js.Center.Common.ProductStore.reload({params:{vc2servicetype:'1'}});Js.Center.Common.GatewayStore.reload();Js.Center.Common.ServiceCodeStore.reload()}})};Ext.namespace('Js.Center.Business');Js.Center.Business.MORouterUpdateURL="URL/business/morouter/morouter.ashx";Js.Center.Business.MORouterQueryURL="URL/business/morouter/morouter.ashx";Js.Center.Business.YXTMORouterUpdateURL="URL/business/morouter/morouteryxt.ashx";Js.Center.Business.YXTClients="URL/Common/Data/IndustryQuery.ashx";Js.Center.Business.YXTMORouterQueryURL="URL/business/morouter/morouteryxt.ashx";