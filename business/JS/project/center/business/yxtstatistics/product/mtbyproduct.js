﻿Ext.namespace('Js.Center.YXTStatistics.mtByProduct');
                limit: _pageSize,
			needPage:false,
            validator: function(){
	            var strat_time = Ext.get("Js.Center.YXTStatistics.mtByProduct.DatStart").dom.value;
	            var end_time = Ext.get("Js.Center.YXTStatistics.mtByProduct.DatEnd").dom.value;
	            if (strat_time <= end_time) {
	                return true;
	            }
	            else {
	                return false;
	            }
            },
            invalidText: '结束时间不能小于开始时间！'
            validator: function(){
	            var strat_time = Ext.get("Js.Center.YXTStatistics.mtByProduct.DatStart").dom.value;
	            var end_time = Ext.get("Js.Center.YXTStatistics.mtByProduct.DatEnd").dom.value;
	            if (strat_time <= end_time) {
	                return true;
	            }
	            else {
	                return false;
	            }
            },
            invalidText: '结束时间不能小于开始时间！'
	            var _datCreatTimeStart = Ext.get("Js.Center.YXTStatistics.mtByProduct.DatStart").getValue();