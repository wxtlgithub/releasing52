Ext.namespace('Js.Center.MMSStatistics.MMSmtByDepartment');Js.Center.MMSStatistics.MMSmtByDepartment.info=function(node){if(Ext.get("Js.Center.MMSStatistics.MMSmtByDepartment.MainPanel")==null){var _pageSize=-1;Js.Center.MMSStatistics.MMSmtByDepartment.Infostore=new WXTL.Widgets.CommonData.GroupingStore({proxy:new Ext.data.HttpProxy({url:Js.Center.MMSStatistics.MMSStatisticsMtURL,method:"POST"}),reader:new Ext.data.JsonReader({fields:["numrowasdf","datstat","numorder","vc2departname","vc2opname","numall","numsuccess","numfailed","numnoreport","num_rate","num_all_fee"],root:"data",id:"numrowasdf",totalProperty:"totalCount"}),sortInfo:{field:'datstat',direction:'ASC'},baseParams:{start:0,limit:_pageSize,flag:'countbydepartment'}});Js.Center.MMSStatistics.MMSmtByDepartment.Infostore.load({params:{datcreattimestart:Ext.util.Format.date(WXTL.Common.dateTime.addDay(WXTL.Common.dateTime.getNow(),-7),'Y-m-d'),datcreattimeend:Ext.util.Format.date(WXTL.Common.dateTime.getNow(),'Y-m-d'),vc2departname:'',flag:'countbydepartment'}});var sm=new Ext.grid.CheckboxSelectionModel({dataIndex:"numrowasdf"});var cm=new Ext.grid.ColumnModel([{header:"统计时间",tooltip:"统计时间",dataIndex:"datstat",sortable:true},{header:"部门顺序号",tooltip:"部门顺序号",dataIndex:"numorder",sortable:true},{header:"部门名称",tooltip:"部门名称",dataIndex:"vc2departname",sortable:true},{header:"运营商名称",tooltip:"运营商名称",dataIndex:"vc2opname",sortable:true},{header:"总数",tooltip:"总数",dataIndex:"numall",sortable:true},{header:"成功数",tooltip:"成功数",dataIndex:"numsuccess",sortable:true},{header:"失败数",tooltip:"失败数",dataIndex:"numfailed",sortable:true},{header:"未知数",tooltip:"未知数",dataIndex:"numnoreport",sortable:true},{header:"成功率",tooltip:"成功率",dataIndex:"num_rate",sortable:true},{header:"费用（元）",tooltip:"费用（元）",dataIndex:"num_all_fee",sortable:true}]);var userGroupGrid=new WXTL.Widgets.CommonGrid.GridPanel({anchor:'100% 100%',needPage:false,store:Js.Center.MMSStatistics.MMSmtByDepartment.Infostore,needMenu:false,needRightMenu:false,sm:sm,cm:cm,tbar:new Ext.Toolbar({items:[{iconCls:'exporticon',text:"数据导出（按天）",handler:function(){windowOpen(Js.Center.MMSStatistics.MMSStatisticsMtURL+"?"+"flag=loadbydepartment&start=0&limit=-1&datcreattimestart="+Ext.get("Js.Center.MMSStatistics.MMSmtByDepartment.DatStart").getValue()+"&datcreattimeend="+Ext.get("Js.Center.MMSStatistics.MMSmtByDepartment.DatEnd").getValue()+"&vc2departname="+encodeURI(Ext.get("Js.Center.MMSStatistics.MMSmtByDepartment.DepartmentName").getValue()),400,300);}}]})});var mtBydepStartdate=new Ext.form.DateField({fieldLabel:"开始时间",format:'Y-m-d',labelWidth:100,bodyStyle:'padding:5px 5px 0',readOnly:true,emptyText:Ext.util.Format.date(WXTL.Common.dateTime.addDay(WXTL.Common.dateTime.getNow(),-7),'Y-m-d'),fieldLabel:"开始时间",name:"datcreattimestart",id:"Js.Center.MMSStatistics.MMSmtByDepartment.DatStart",validateOnBlur:false,validator:function(){var strat_time=Ext.get("Js.Center.MMSStatistics.MMSmtByDepartment.DatStart").dom.value;var end_time=Ext.get("Js.Center.MMSStatistics.MMSmtByDepartment.DatEnd").dom.value;if(strat_time<=end_time){return true}else{return false}},invalidText:'结束时间不能小于开始时间！'});var mtBydepEnddate=new Ext.form.DateField({fieldLabel:"结束时间",labelWidth:100,format:'Y-m-d',bodyStyle:'padding:5px 5px 0',readOnly:true,emptyText:Ext.util.Format.date(WXTL.Common.dateTime.getNow(),'Y-m-d'),name:"datcreattimeend",id:"Js.Center.MMSStatistics.MMSmtByDepartment.DatEnd",validateOnBlur:false,validator:function(){var strat_time=Ext.get("Js.Center.MMSStatistics.MMSmtByDepartment.DatStart").dom.value;var end_time=Ext.get("Js.Center.MMSStatistics.MMSmtByDepartment.DatEnd").dom.value;if(strat_time<=end_time){return true}else{return false}},invalidText:'结束时间不能小于开始时间！'});var selectPanel=new WXTL.Widgets.CommonPanel.QueryFormPanel({bodyStyle:"padding:10px 0 10px 15px",buttonAlign:"center",queryMethod:"Js.Center.MMSStatistics.MMSmtByDepartment.queryGrid",items:[{layout:'column',items:[{columnWidth:.5,layout:'form',defaultType:"textfield",defaults:{anchor:"90%",msgTarget:"side"},items:[mtBydepStartdate,{xtype:"textfield",name:"vc2departname",id:"Js.Center.MMSStatistics.MMSmtByDepartment.DepartmentName",fieldLabel:"部门名称",regex:WXTL.Common.regex.Illegal,regexText:WXTL.Common.regexText.IllegalText,maxLength:50,maxLengthText:'长度不能超过50！'}]},{columnWidth:.5,layout:'form',defaultType:"textfield",defaults:{anchor:"90%",msgTarget:"side"},items:[mtBydepEnddate]}]}]});Js.Center.MMSStatistics.MMSmtByDepartment.queryGrid=function(){if(selectPanel.getForm().isValid()){var _datCreatTimeStart=Ext.get("Js.Center.MMSStatistics.MMSmtByDepartment.DatStart").getValue();var _datCreatTimeend=Ext.get("Js.Center.MMSStatistics.MMSmtByDepartment.DatEnd").getValue();var _vc2departname=Ext.get("Js.Center.MMSStatistics.MMSmtByDepartment.DepartmentName").getValue();var _flag='countbydepartment';Js.Center.MMSStatistics.MMSmtByDepartment.Infostore.baseParams={flag:_flag,datcreattimestart:_datCreatTimeStart,datcreattimeend:_datCreatTimeend,vc2departname:_vc2departname};Js.Center.MMSStatistics.MMSmtByDepartment.Infostore.load({params:{start:0,limit:_pageSize}})}};Js.Center.MMSStatistics.MMSmtByDepartment.MainPanel=new Ext.Panel({id:"Js.Center.MMSStatistics.MMSmtByDepartment.MainPanel",frame:true,bodyBorder:false,border:false,autoScroll:true,layout:"anchor",defaults:{collapsible:true},items:[selectPanel,userGroupGrid]})};GridMain(node,Js.Center.MMSStatistics.MMSmtByDepartment.MainPanel,"openroomiconinfo","Js.Center.MMSStatistics.MMSmtByDepartment.Infostore")};Ext.namespace('Js.Center.MMSStatistics.Mt');Js.Center.MMSStatistics.MMSStatisticsMtURL='URL/MMSStatistics/mt/MMSStatisticMTQuery.ashx';