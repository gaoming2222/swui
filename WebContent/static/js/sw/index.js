var dataSet = [
    [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
    [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
    [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
    [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
    [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
    [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
    [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
    [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
    [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
    [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
    [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
    [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
    [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600" ],
    [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500" ],
    [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750" ],
    [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500" ],
    [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000" ],
    [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500" ],
    [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000" ],
    [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500" ],
    [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000" ],
    [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000" ],
    [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450" ],
    [ "Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600" ],
    [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000" ],
    [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575" ],
    [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650" ],
    [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850" ],
    [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000" ],
    [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000" ],
    [ "Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400" ],
    [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500" ],
    [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000" ],
    [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500" ],
    [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050" ],
    [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]
];
var reg31 = /^\d{1,2}$|^\d{1,2}[.]\d{1}$/;
var reg62 = /^\d{1,4}$|^\d{1,4}[.]\d{1,2}$/;
var reg182 = /^\d{1,16}$|^\d{1,16}[.]\d{1,2}$/;
var dataSet1 = 
	[
	 {
		 "RDataTime":"2018-07-28 06:01:40.0", "data":"0.15", "Sourcetype":"1", "Trantype":"06", "WTMP":"22.30", "Datatime":"2018-07-28 06:00:00.0", "StationID":"5009"
	 }
	 ]; 
function add(){
		 var info = {};
		 info.StationID = $("#StationID").val().trim();
		 if(info.StationID == null || info.StationID == "" || info.StationID == "undefined"){
			 alert("stationId 不能为空！");
			 return;
		 }
		 info.Datatime = $("#Datatime").val().trim();
		 if(info.Datatime== null || info.Datatime == "" || info.Datatime == "undefined" || info.Datatime == "1900-01-01 00:00:00"){
			 alert("Datatime 不能为空！");
			 return;
		 }
		 info.ATMP = $("#ATMP").val().trim();
		 if(info.ATMP != null && info.ATMP != "" && info.ATMP != "undefined"){
			 if(!reg31.test(info.ATMP)){
				 alert("气温不符合格式！ 气温为整数或者小数，且整数部分不超过2位，小数部分不超过1位！");
				 return;
			 }
		 }
		 info.WTMP = $("#WTMP").val().trim();
		 if(info.WTMP != null && info.WTMP != "" && info.WTMP != "undefined"){
			 if(!reg62.test(info.WTMP)){
				 alert("水温不符合格式！ 水温为整数或者小数，且整数部分不超过4位，小数部分不超过2位！");
				 return;
			 }
		 }
		 info.data = $("#data").val().trim();
		 if(info.data != null && info.data != "" && info.data != "undefined"){
			 if(!reg182.test(info.data)){
				 alert("水位不符合格式！ 水位为整数或者小数，且整数部分不超过16位，小数部分不超过2位！");
				 return;
			 }
		 }
		 info.dataplus = $("#dataplus").val().trim();
		 if(info.dataplus != null && info.dataplus != "" && info.dataplus != "undefined"){
			 if(!reg182.test(info.dataplus)){
				 alert("流量不符合格式！ 流量为整数或者小数，且整数部分不超过16位，小数部分不超过2位！");
				 return;
			 }
		 }
		 $.ajax({
             url:'http://127.0.0.1:8088/insertswdata',
             contentType: 'application/json;charset=utf-8',
             data: JSON.stringify(info),
             type:"post",
             timeout:"12000",
             cache:"false",
             success:function(resData){
            	 if(resData.MSG == ""){
                     window.location.reload();// 重新刷新页面，还有一种方式：tables.draw(false);(这是不刷新，重新初始化插件，但是做删除时候，老有问题)
                 }else{
                 	alert("新增数据失败" + resData.MSG);
                 }
             },
             error:function(err){
                 alert("新增数据失败");
             }
         });
		 
	 };
function edt(){
	var info = {};
	 info.StationID = $("#StationIDEdt").val();
	 info.Datatime = $("#DatatimeEdt").val();
	 
	 
	 info.ATMP = $("#ATMPEdt").val();
	 if(info.ATMP != null && info.ATMP != "" && info.ATMP != "undefined"){
		 if(!reg31.test(info.ATMP)){
			 alert("水温不符合格式！ 水温为整数或者小数，且整数部分不超过2位，小数部分不超过1位！");
			 return;
		 }
	 }
	 info.WTMP = $("#WTMPEdt").val();
	 if(info.WTMP != null && info.WTMP != "" && info.WTMP != "undefined"){
		 if(!reg62.test(info.WTMP)){
			 alert("气温不符合格式！ 气温为整数或者小数，且整数部分不超过4位，小数部分不超过2位！");
			 return;
		 }
	 }
	 
	 info.data = $("#dataEdt").val();
	 if(info.data != null && info.data != "" && info.data != "undefined"){
		 if(!reg182.test(info.data)){
			 alert("水位不符合格式！ 水位为整数或者小数，且整数部分不超过16位，小数部分不超过2位！");
			 return;
		 }
	 }
	 
	 info.dataplus = $("#dataplusEdt").val();
	 if(info.dataplus != null && info.dataplus != "" && info.dataplus != "undefined"){
		 if(!reg182.test(info.dataplus)){
			 alert("流量不符合格式！ 流量为整数或者小数，且整数部分不超过16位，小数部分不超过2位！");
			 return;
		 }
	 }
	 $.ajax({
        url:'http://127.0.0.1:8088/updateswdata',
        contentType: 'application/json;charset=utf-8',
        data: JSON.stringify(info),
        type:"post",
        timeout:"12000",
        cache:"false",
        success:function(resData){
            if(resData.MSG == ""){
                window.location.reload();// 重新刷新页面，还有一种方式：tables.draw(false);(这是不刷新，重新初始化插件，但是做删除时候，老有问题)
            }else{
            	alert("修改数据失败");
            }
        },
        error:function(err){
            alert("修改数据失败");
        }
    });
};

$(document).ready( function () {
		$.ajax(
		    {
		        url:"http://127.0.0.1:8088/getswdata",
		        type:"get",
		        dataType:"json",
		        async:false,
		        success:function(data)
		        {
		        	dataSet1 = data;
		        },
		        error: function() {
		            alert("error");
		          }
		    });
        var tables=$('#table_id').DataTable({
            "oLanguage": { // 表格的语言设置
                "sProcessing": "正在获取数据，请稍后...",
                "sLengthMenu": "显示 _MENU_ 条",
                "sZeroRecords": "没有您要搜索的内容",
                "sInfo": " 总记录数为 _TOTAL_ 条",
                "sInfoEmpty": "记录数为0",
                "sInfoFiltered": "(全部记录数 _MAX_ 条)",
                "sInfoPostFix": "",
                "sSearch": "搜索",
                "sUrl": "",
                "oPaginate": {
                    "sFirst": "第一页",
                    "sPrevious": "上一页",
                    "sNext": "下一页",
                    "sLast": "最后一页"
                }
            },
            "select": true,
            "bProcessing" : true, // DataTables载入数据时，是否显示‘进度’提示
            //"serverSide": true,
            "autoWidth":false,
            // "sScrollY" : 350, //DataTables的高
            "sPaginationType" : "full_numbers", // 详细分页组，可以支持直接跳转到某页
            "iDisplayStart": 0,// 刷新插件后显示的第几页（如果一页为10条数据，填10就显示第二页）
//            "ajax":{
//                "url":"http://127.0.0.1:8088/getswdata"// 输入url地址
//            },
			data: dataSet1,
//            columns: [
//           				 { title: "站号"},
//            			 { title: "测量时间" },
//            			 { title: "水温" },
//            		     { title: "气温" },
//                         { title: "报送类型" },
//                         { title: "传输信道" },
//                         { title: "录入时间" }
//        		],
			columns: [
           				 {
							"data": "StationID",
							"sTitle": "站点ID",
							"sClass": "left"
						 },
						 {
								"data": "Datatime",
								"sTitle": "时间",
								"sClass": "left"
						 },
						 {
								"data": "ATMP",
								"sTitle": "水温",
								"sClass": "left"
						 },
						 {
								"data": "WTMP",
								"sTitle": "气温",
								"sClass": "left"
						 },
						 {
								"data": "data",
								"sTitle": "水位",
								"sClass": "left"
						 },
						 {
								"data": "dataplus",
								"sTitle": "流量",
								"sClass": "left"
						 },
						 {
								"data": "Trantype",
								"sTitle": "传输类型",
								"sClass": "left"
						 },
						 {
								"data": "Sourcetype",
								"sTitle": "报送类型",
								"sClass": "left"
						 },
						 {
								"data": "RDataTime",
								"sTitle": "录入时间",
								"sClass": "left"
						 },{
							 "sTitle": "操作",
						 }
        		],
            'bStateSave': true,// 配置好这个,刷新页面会让页面停留在之前的页码
            "columnDefs": [{
                "targets": 9,// 编辑
                "data": null,// 下面这行，添加了编辑按钮和，删除按钮
                "defaultContent": "<button id='editrow' class='btn btn-primary btn-lg' data-toggle='modal' data-target='#myEdtModal' type='button' style='margin-right:10px;'>编辑</button><button id='delrow' class='btn btn-primary' type='button'>删除</button>"
            }],
            "createdRow": function( row, data, index ) {
                // 每加载完一行的回调函数
            	$('td', row).eq(5).css('font-weight',"bold").css("color","red");// 获取到具体行具体格的元素

            }
        });
      //设置行可以选择
//        $('#table_id').on('click', 'tr', function () {
//            if ($(this).hasClass('selected') ) {
//               $(this).removeClass('selected');
//            } else {
//            	tables.$('tr.selected').removeClass('selected');
//               $(this).addClass('selected');
//            }
//        });
        
        tables.$("tr:even").css("background-color", "#BAFFF8");
        tables.$("tr:odd").css("background-color", "#FAF9F8");
        
//        $("tr:even ").css("background-color", "#BAFFF8");
//        $("tr:odd ").css("background-color", "#FAF9F8");
        
//        //设置可以多行选中
//        $('#table_id').on('click', 'tr', function () {
//            $(this).toggleClass('selected');
//        });
        //点击删除按钮
        $('#table_id tbody').on( 'click', 'button#delrow', function () {
            var data = tables.row( $(this).parents('tr') ).data();
            // tables.ajax.reload();重新获取数据
            // tables.draw(false);重新刷新页面
            if(confirm("是否确认删除这条信息")){
                $.ajax({
                    url:'http://127.0.0.1:8088/deleteswdata',
                    contentType: 'application/json;charset=utf-8',
                    data: JSON.stringify(data),
                    type:"post",
                    timeout:"3000",
                    cache:"false",
                    success:function(resData){
                    	if(resData.MSG == ""){
                            window.location.reload();// 重新刷新页面，还有一种方式：tables.draw(false);(这是不刷新，重新初始化插件，但是做删除时候，老有问题)
                        }else{
                        	alert("刪除数据失败");
                        }
                    },
                    error:function(err){
                        alert("获取数据失败");
                    }
                });
            }

        });
        $('#table_id tbody i').css({"fontStyle":"normal"});
        
        //点击编辑按钮
        $('#table_id tbody').on( 'click', 'button#editrow', function () {
            // 获取数据
            var data = tables.row( $(this).parents('tr') ).data();
            
            $("#StationIDEdt").attr("value",data.StationID);
            $("#DatatimeEdt").attr("value",data.Datatime);
            if(data.ATMP != "--"){
            	$("#ATMPEdt").attr("value",data.ATMP);
            }
            
            if(data.WTMP != "--"){
            	$("#WTMPEdt").attr("value",data.WTMP);
            }
            
            if(data.data != "--"){
            	$("#dataEdt").attr("value",data.data);
            }
            
            if(data.dataplus != "--"){
            	$("#dataplusEdt").attr("value",data.dataplus);
            }
            
            // 清空内容
            
        });
    } );



