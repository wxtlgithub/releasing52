/**
 * 接口短信审核
 * @author Administrator
 */
Ext.namespace('Js.Center.ClientSMS.ClientSMSCheck');

Js.Center.ClientSMS.ClientSMSCheck.clientsmscheckinfo = function(node){

	if (Ext.get("Js.Center.ClientSMS.ClientSMSCheck.clientsmscheckinfoPanel") == null) {
		
		function batchpass (row)
		{
		   var intbool = 0;
	       for (var i = 0; i < row.length; i++) {
	        	for(var j=1; j< row.length; j++){
	        		if(!(row[i].data.numnodeid == row[j].data.numnodeid))
	        		{
	        			intbool = 1;
	        		}
	        	}
	       }
	       if(intbool== 0){
	       	  if (checkPanel.getForm().isValid()) {
		       	   if(Ext.get("Js.Center.ClientSMS.ClientSMSCheck.numcheckstate").dom.value == 1)
				   { 
						var numcontentid = "";
			            for (var i = 0; i < row.length; i++) {
			            	if (row.length == 1) {
			                numcontentid = row[i].data.numcontentid;
			                }
			                else {
								if (i < (row.length - 1)) {
								numcontentid = row[i].data.numcontentid + "," + numcontentid;
								}
								if (i == (row.length - 1)) {
								numcontentid = numcontentid + row[i].data.numcontentid;
								}
			                }
			            }
		
						var params = {
		                                flag: "clientsmscheckbatch",
		                                numcontentid: numcontentid,
		                                vc2reason: Ext.get("Js.Center.ClientSMS.ClientSMSCheck.reason").dom.value,
		                                numcheckstate: 2 
		                            };
		                doAjaxAndCallBack(Js.Center.ClientSMS.ClientSMSCheckUpdateURL, params,clientSMSCallBack);
				   }
	       	    }
	       }else
	       {
	       	    Ext.Msg.alert('温馨提示：','审核短信不属于同一网元，不允许批量审核');
	       }
	    };
	    
	    function batchreject (row)
		{
		   var intbool = 0;
	       for (var i = 0; i < row.length; i++) {
	        	for(var j=1; j< row.length; j++){
	        		if(!(row[i].data.numnodeid == row[j].data.numnodeid))
	        		{
	        			intbool = 1;
	        		}
	        	}
	       }
	       if(intbool== 0){
	       	  if(Ext.get("Js.Center.ClientSMS.ClientSMSCheck.reason").dom.value.replace(/[ ]/g,"")  == "通过")
				     	{
		                    Ext.get("Js.Center.ClientSMS.ClientSMSCheck.reason").dom.value = "";
				     	}
			  if (checkPanel.getForm().isValid()) {
				   if(Ext.get("Js.Center.ClientSMS.ClientSMSCheck.numcheckstate").dom.value == 1)
				   { 
				     	
						var numcontentid = "";
			            for (var i = 0; i < row.length; i++) {
			            	if (row.length == 1) {
			                numcontentid = row[i].data.numcontentid;
			                }
			                else {
								if (i < (row.length - 1)) {
								numcontentid = row[i].data.numcontentid + "," + numcontentid;
								}
								if (i == (row.length - 1)) {
								numcontentid = numcontentid + row[i].data.numcontentid;
								}
			                }
			            }
		
						var params = {
		                                flag: "clientsmscheckreject",
		                                numcontentid: numcontentid,
		                                vc2reason: Ext.get("Js.Center.ClientSMS.ClientSMSCheck.reason").dom.value,
		                                numcheckstate: -1 
		                            };
		                doAjaxAndCallBack(Js.Center.ClientSMS.ClientSMSCheckUpdateURL, params,clientSMSCallBack);
				   }
			   }
	       }else
		   {
		        Ext.Msg.alert('温馨提示：','审核短信不属于同一网元，不允许批量驳回');
		   }
	    };

		// 定义GridPanel相关
		// ===============================================分页每页显示数量
        var _pageSize = 12;
        // ===============================================指定列参数
        
        var fields = ["numcontentid","vc2md5","vc2content", "numclientid", "vc2departname","numcheckstate", "vc2checkstate","vc2sendstate", "datchecktime", "datcreatetime","numnodeid"];
       
        Js.Center.ClientSMS.ClientSMSCheck.Infostore = new WXTL.Widgets.CommonData.GroupingStore({
            proxy: new Ext.data.HttpProxy({
                url: Js.Center.ClientSMS.ClientSMSCheckQueryURL,
                method: "POST"
            }),
            reader: new Ext.data.JsonReader({
                fields: fields,
                root: "data",
                id: "numcontentid",
                totalProperty: "totalCount"
            
            }),
            sortInfo: {
                field: 'datcreatetime',
                direction: 'DESC'
            },
            baseParams: {
                datstart: Ext.util.Format.date(WXTL.Common.dateTime.getNow(), 'Y-m-d'),
                datend: Ext.util.Format.date(WXTL.Common.dateTime.getNow(), 'Y-m-d'),
                numclientid:'',
                vc2departname: '',
                numnodeid : '',
                flag: 'selectbykey1'
            }
        });
        Js.Center.ClientSMS.ClientSMSCheck.Infostore.load({
            params: {
                start: 0,
                limit: _pageSize,
                datstart: Ext.util.Format.date(WXTL.Common.dateTime.getNow(), 'Y-m-d'),
                datend: Ext.util.Format.date(WXTL.Common.dateTime.getNow(), 'Y-m-d'),
                numclientid:'',
                vc2departname: '',
                numnode: '',
                flag: 'selectbykey1'
            }
        });
        // ==================================================== 
        var sm = new Ext.grid.CheckboxSelectionModel({
            dataIndex: "numcontentid"
        });
        // ====================================================
        var cm = new Ext.grid.ColumnModel([sm,{
            header: "md5",
            tooltip: "md5",
            dataIndex: "vc2md5",
            hidden: true,
            sortable: true
        }, {
            header: "短信内容",
            tooltip: "短信内容",
            dataIndex: "vc2content",
            sortable: true,
            width: 200,
            renderer: function(value){
                return "<font qtip='" + value + "'>" + value + "</font>";
            },
            readOnly: true,
            editor: new Ext.form.TextField({
                readOnly: true
            })
        }, {
            header: "客户端",
            tooltip: "客户端",
            dataIndex: "numclientid",
            sortable: true
        } , {
            header: "EC",
            tooltip: "EC",
            dataIndex: "vc2departname",
            sortable: true
        } , {
            header: "审核状态",
            tooltip: "审核状态",
            dataIndex: "vc2checkstate",
            sortable: true
        } , {
            header: "审核时间",
            tooltip: "审核时间",
            dataIndex: "datchecktime",
            sortable: true
        } , {
            header: "创建时间",
            tooltip: "创建时间",
            dataIndex: "datcreatetime",
            sortable: true
        } , {
            header: "网元",
            tooltip: "网元",
            dataIndex: "numnodeid",
            sortable: true
        }               
        ]);
        
 
        
        //==============================================================查询grid
        var clientsmscheckinfoGrid = new WXTL.Widgets.CommonGrid.GridPanel({
            //id: "clientsmscheckinfoQueryGridPanel",
            anchor: '100% 100%',
            pageSize: _pageSize,
            needMenu: false,
            store: Js.Center.ClientSMS.ClientSMSCheck.Infostore,
            sm: sm,
            cm: cm,
            needRightMenu: false,
                 tbar: new Ext.Toolbar({
                items: [{
                    iconCls: 'addicon',
                    text: "批量审核",
                    handler: function(){
                        var row = clientsmscheckinfoGrid.getSelectionModel().getSelections();
                        if (row.length == 0) {
                            Ext.Msg.alert("温馨提示", "请您选择记录!");
                        }
                        else {
                            Ext.Msg.confirm("温馨提示!", "你确认该次选中记录均通过吗？", function(btn){
                                if (btn == "yes") {
                                    batchpass(row);
                                }
                            }); 
                        }
                    }
                }, "", "-", "",{
                    iconCls: 'deleteicon',
                    text: "批量驳回",
                    handler: function(){
                        var row = clientsmscheckinfoGrid.getSelectionModel().getSelections();
                        if (row.length == 0) {
                            Ext.Msg.alert("温馨提示", "请您选择记录!");
                        }
                        else {
                            Ext.Msg.confirm("温馨提示!", "你确认该次选中记录均驳回吗？", function(btn){
                                if (btn == "yes") {
                                    batchreject(row);
                                }
                            }); 
                        }
                    }
                }]
            }),
            listeners: {
                "rowclick": function(grid, rowindex, e){
                    ClientSmsCheckDoView(rowindex);
                }
            }
        });
        
         //============================================================通过或驳回后回调函数
        function clientSMSCallBack(){
        	 Js.Center.ClientSMS.ClientSMSCheck.Infostore.reload({
                params: {
                    start: 0,
                    limit: _pageSize
                },
                callback: function(records, options, success){
                    checkPanel.getForm().reset();
                    ClientSmsCheckDoView(0);
                }
            });
        };
        //============================================================================ 查询formpanel
        var selectPanel = new WXTL.Widgets.CommonPanel.QueryFormPanel({
            //id: "clientsmscheckinfoSelectPanel",
            height: 170,
            //查询方法
            queryMethod: "Js.Center.ClientSMS.ClientSMSCheck.queryGrid",
            items: [{
                layout: 'column',
                items: [{
                    columnWidth: .5,
                    layout: 'form',
                    defaultType: "textfield",
                    defaults: {
                        anchor: "90%",
                        msgTarget: "side"
                    },
                    buttonAlign: "center",
                    bodyStyle: "padding:10px 0 10px 15px",
                    items: [new Ext.form.DateField({
                        fieldLabel: '开始时间',
                        name: 'datstart',
                        id: 'Js.Center.ClientSMS.ClientSMSCheck.DatStart',
                        emptyText: Ext.util.Format.date(WXTL.Common.dateTime.getNow(), 'Y-m-d'),           
                        format: 'Y-m-d',
						readOnly:true,
                        validateOnBlur: false,
                        validator: function(){
                            var strat_time = Ext.get("Js.Center.ClientSMS.ClientSMSCheck.DatStart").dom.value;
                            var end_time = Ext.get("Js.Center.ClientSMS.ClientSMSCheck.DatEnd").dom.value;
                            if (strat_time <= end_time) {
                                return true;
                            }
                            else {
                                return false;
                            }
                        },
                        invalidText: '结束时间不能小于开始时间！'
                    }), {
                        xtype: "textfield",
                        name: "numclientid",
                        id: 'Js.Center.ClientSMS.ClientSMSCheck.numclientid',
                        fieldLabel: "客户端",
                        maxLength: 4,
                        regex: WXTL.Common.regex.Illegal,
                        regexText: WXTL.Common.regexText.IllegalText
                    }, {
                        xtype: "textfield",
                        name: "numnodeid",
                        id: 'Js.Center.ClientSMS.ClientSMSCheck.numnodeid',
                        fieldLabel: "网元",
                        maxLength: 2,
                        regex: WXTL.Common.regex.Illegal,
                        regexText: WXTL.Common.regexText.IllegalText
                    }]
                }, {
                    columnWidth: .5,
                    layout: 'form',
                    defaultType: "textfield",
                    defaults: {
                        anchor: "90%",
                        msgTarget: "side"
                    },
                    buttonAlign: "center",
                    bodyStyle: "padding:10px 0 10px 15px",
                    items: [new Ext.form.DateField({
                        fieldLabel: '结束时间',
                        name: 'datend',
                        id: 'Js.Center.ClientSMS.ClientSMSCheck.DatEnd',
                        emptyText: Ext.util.Format.date(WXTL.Common.dateTime.getNow(), 'Y-m-d'),
                        format: 'Y-m-d',
						readOnly:true,
                        validateOnBlur: false,
                        validator: function(){
                            var strat_time = Ext.get("Js.Center.ClientSMS.ClientSMSCheck.DatStart").dom.value;
                            var end_time = Ext.get("Js.Center.ClientSMS.ClientSMSCheck.DatEnd").dom.value;
                            if (strat_time <= end_time) {
                                return true;
                            }
                            else {
                                return false;
                            }
                        },
                        invalidText: '结束时间不能小于开始时间！'
                    }),{
                        xtype: "textfield",
                        name: "vc2departname",
                        id: 'Js.Center.ClientSMS.ClientSMSCheck.vc2departname',
                        fieldLabel: "部门",
                        maxLength: 100,
                        regex: WXTL.Common.regex.Illegal,
                        regexText: WXTL.Common.regexText.IllegalText
                    }]
                }]
            }]
        });
        
        
        //===========================================================================审核panel
        var checkPanel = new WXTL.Widgets.CommonPanel.QueryFormPanel({
            title: "审核信息",
            labelWidth: 80,
            needButtons: false,
            height: 180,
            collapsed: false,          
//            queryMethod: "Js.Center.ClientSMS.ClientSMSCheck.queryGrid",
            items: [{
                layout: 'column',
                items: [
//                	{
//                    xtype: "hidden",
//                    name: "vc2md5",
//                    id: "Js.Center.ClientSMS.ClientSMSCheck.vc2md5"
//                },
                {
                    xtype: "hidden",
                    name: "flag",
                    id: "Js.Center.ClientSMS.ClientSMSCheck.Flag"
                }, {
                    xtype: "hidden",
                    name: "numcontentid",
                    id: "Js.Center.ClientSMS.ClientSMSCheck.numcontentid"
                }, {
                    xtype: "hidden",
                    name: "numcheckstate",
                    id: "Js.Center.ClientSMS.ClientSMSCheck.numcheckstate"
                }, {
                    xtype: "hidden",
                    name: "datchecktime",
                    id: "Js.Center.ClientSMS.ClientSMSCheck.datchecktime"
                },  {
                    columnWidth: .5,
                    layout: 'form',
                    defaultType: "textfield",
                    defaults: {
                        anchor: "90%",
                        msgTarget: "side"
                    },
                    buttonAlign: "center",
                    bodyStyle: "padding:10px 0 10px 15px",
                    items: [{
                    xtype: "textfield",
                    name: "numclientid",
                    id: "Js.Center.ClientSMS.ClientSMSCheck.numclientid1",
                    fieldLabel: '客户端',
                    readOnly : true
                }, {
                        xtype: 'textarea',
                        name: 'vc2content',
                        id: "Js.Center.ClientSMS.ClientSMSCheck.vc2content",
                        fieldLabel: '信息内容',
                        readOnly: true,
                        allowBlank: false,
                        blankText: "请选择审核内容"
                    }]
                }, {
                    columnWidth: .5,
                    layout: 'form',
                    defaultType: "textfield",
                    defaults: {
                        anchor: "90%",
                        msgTarget: "side"
                    },
                    buttonAlign: "center",
                    bodyStyle: "padding:10px 0 10px 15px",
                    items: [{
                        xtype: 'textarea',
                        name: 'vc2reason',
                        id: "Js.Center.ClientSMS.ClientSMSCheck.reason",
                        fieldLabel: '审核建议',
                        allowBlank:false,
						blankText:"请选择审核建议",
						value:"通过",
                        regex: WXTL.Common.regex.IllegalDiy,
                        regexText: WXTL.Common.regexText.IllegalText,
                        maxLength: 100,
                        maxLengthText: "长度应小于等于100",
                        validator: function(){
                        var word = Ext.get("Js.Center.ClientSMS.ClientSMSCheck.reason").dom.value;
                        if (isExistsHtmlLable(word)) {
                            return false;
                        }
                        else {
                            return true;
                            }
                        },
                        invalidText: "帧文字不能包含HTML标签"
                    }]
                }]
            }],
            buttons: [new Ext.Button({
                text: '通过',
                handler: function(){
                    if (checkPanel.getForm().isValid()) {
                        Ext.get("Js.Center.ClientSMS.ClientSMSCheck.Flag").dom.value = "clientsmscheck";                       
                        if(Ext.get("Js.Center.ClientSMS.ClientSMSCheck.numcheckstate").dom.value == 1){

                            Ext.MessageBox.show({
                                msg: '正在保存，请稍等...',
                                progressText: 'Saving...',
                                width: 300,
                                wait: true,
                                icon: 'download',
                                animEl: 'saving'
                            });
                            setTimeout(function(){
                                Ext.MessageBox.hide();
                            }, 300000);
                            
                            var params = {
                                flag: "clientsmscheck",
                                numcontentid: Ext.get("Js.Center.ClientSMS.ClientSMSCheck.numcontentid").dom.value,
//                                datchecktime:WXTL.Common.dateTime.getNow(),
                                vc2reason: Ext.get("Js.Center.ClientSMS.ClientSMSCheck.reason").dom.value,
                                numcheckstate: 2
//                                numclientid: Ext.get("Js.Center.ClientSMS.ClientSMSCheck.numclientid1").dom.value,
//                                vc2dm5: Ext.get("Js.Center.ClientSMS.ClientSMSCheck.vc2md5").dom.value,
//                                vc2content: Ext.get("Js.Center.ClientSMS.ClientSMSCheck.vc2content").dom.value   
                            };
                        	doAjaxAndCallBack(Js.Center.ClientSMS.ClientSMSCheckUpdateURL, params,clientSMSCallBack);
                        }
                        else {
                             Ext.Msg.alert('温馨提示', '只能审核通过待审核短信！');
                        }
                    }
                }
            }), new Ext.Button({
                text: '驳回',
                handler: function(){
                    if(Ext.get("Js.Center.ClientSMS.ClientSMSCheck.reason").dom.value.replace(/[ ]/g,"")  == "通过"){
                        Ext.get("Js.Center.ClientSMS.ClientSMSCheck.reason").dom.value = "";
                    }
                    if (checkPanel.getForm().isValid()) {
                    	if(Ext.get("Js.Center.ClientSMS.ClientSMSCheck.numcheckstate").dom.value == 1){
                        Ext.get("Js.Center.ClientSMS.ClientSMSCheck.Flag").dom.value = "rejectcheckbyfirst";
                          // 弹出效果
                        Ext.MessageBox.show({
                            msg: '正在保存，请稍等...',
                            progressText: 'Saving...',
                            width: 300,
                            wait: true,
                            icon: 'download',
                            animEl: 'saving'
                        });
                        setTimeout(function(){
                            Ext.MessageBox.hide();
                        }, 300000);
                        var params = {
                            flag: "clientsmsreject",
                            numcontentid: Ext.get("Js.Center.ClientSMS.ClientSMSCheck.numcontentid").dom.value,
//                            datchecktime: WXTL.Common.dateTime.getNow(),
                            vc2reason: Ext.get("Js.Center.ClientSMS.ClientSMSCheck.reason").dom.value,
                            numcheckstate: -1
                        };
                        doAjaxAndCallBack(Js.Center.ClientSMS.ClientSMSCheckUpdateURL, params,clientSMSCallBack);
                    	}else
                    	{
                    		Ext.Msg.alert('温馨提示', '只能审核驳回待审核短信！');
                    	}
                    }
                }
            })]
        });

        //============================================================== 查询方法定义
        Js.Center.ClientSMS.ClientSMSCheck.queryGrid = function(){
            if (selectPanel.getForm().isValid()) {
                var datStart = Ext.get("Js.Center.ClientSMS.ClientSMSCheck.DatStart").getValue();
                var datEnd = Ext.get("Js.Center.ClientSMS.ClientSMSCheck.DatEnd").getValue();
                var numclientid = Ext.get("Js.Center.ClientSMS.ClientSMSCheck.numclientid").getValue();
                var vc2departname = Ext.get("Js.Center.ClientSMS.ClientSMSCheck.vc2departname").getValue();
                var numnodeid = Ext.get("Js.Center.ClientSMS.ClientSMSCheck.numnodeid").getValue();
                var flag = 'selectbykey1';
                Js.Center.ClientSMS.ClientSMSCheck.Infostore.baseParams = {
                    datstart: datStart,
                    datend: datEnd,
                    numclientid: numclientid,
                    vc2departname: vc2departname,
                    numnodeid: numnodeid,
                    flag: flag
                };
                Js.Center.ClientSMS.ClientSMSCheck.Infostore.load({
                    params: {
                        start: 0,
                        limit: _pageSize
                    }
                });
            }
        }; 
        
        //============================================================================定义主panel
        Js.Center.ClientSMS.ClientSMSCheck.clientsmscheckinfoPanel = new Ext.Panel({
            frame: true, // 
            id: "Js.Center.ClientSMS.ClientSMSCheck.clientsmscheckinfoPanel",
            bodyBorder: false,
            border: false,
            autoScroll: true, 
            layout: "anchor",
            defaults: {
                collapsible: true 
            },
            items: [selectPanel,checkPanel,clientsmscheckinfoGrid]
        });
    };
    //===========================================================================绑定到center
    GridMain(node, Js.Center.ClientSMS.ClientSMSCheck.clientsmscheckinfoPanel, "openroomiconinfo", "Js.Center.ClientSMS.ClientSMSCheck.Infostore","clientDoView()");
};
function clientDoView(){
    Js.Center.ClientSMS.ClientSMSCheck.Infostore.reload({
        params: {
            start: 0,
            limit: 12
        },
        callback: function(records, options, success){
            ClientSmsCheckDoView(0);
        }
    });
};

//回调取得参数值
function ClientSmsCheckDoView(rowIndex){
	    if ( Js.Center.ClientSMS.ClientSMSCheck.Infostore.getCount() > 0) {
        var row =  Js.Center.ClientSMS.ClientSMSCheck.Infostore.getAt(rowIndex);
        
        Ext.get("Js.Center.ClientSMS.ClientSMSCheck.reason").dom.value = "通过";
//        Ext.get("Js.Center.ClientSMS.ClientSMSCheck.vc2md5").dom.value = row.get("vc2md5");
        Ext.get("Js.Center.ClientSMS.ClientSMSCheck.vc2content").dom.value = row.get("vc2content");
        Ext.get("Js.Center.ClientSMS.ClientSMSCheck.numcheckstate").dom.value = row.get("numcheckstate");
        Ext.get("Js.Center.ClientSMS.ClientSMSCheck.numclientid1").dom.value = row.get("numclientid");
        Ext.get("Js.Center.ClientSMS.ClientSMSCheck.numcontentid").dom.value = row.get("numcontentid");
//        Ext.get("Js.Center.ClientSMS.ClientSMSCheck.datchecktime").dom.value =row.get("datchecktime");
    }
 };
 
 function doAjaxAndCallBack(url, params, callBackFunc){
    Ext.Ajax.request({
        url: url,
        method: "POST",
        params: params,
        success: function(form, action){
            var obj = Ext.util.JSON.decode(form.responseText);
            var falg = obj.success;
            if (falg == true) {
                Ext.Msg.alert("温馨提示", obj.error);
                callBackFunc();
            }
            else {
                if (!obj.success && obj.info == "对不起，您没有登录！") {
                    Ext.Msg.alert("温馨提示", "对不起，您的信息已过期请重新登录!", function(){
                        window.location.href = "login.htm";
                    });
                }
                else {
                    Ext.Msg.alert('温馨提示', obj.info);
                }
            }        
        },
        failure: function(form, action){
            var objJson = Ext.util.JSON.decode(action.response.responseText);
            Ext.Msg.alert('温馨提示', objJson.info);
        }
    });
};
