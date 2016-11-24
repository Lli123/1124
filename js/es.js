window.onload=function(){
		$('#win').window('close');
		$('#win').window('center');
		var panp=document.getElementById("win");
		var panInput=panp.querySelectorAll("input");
		
		$("#tg").treegrid(
			{
				onClickRow:
					function(){
							$("#editA").click(function(){
									$('#win').window('open');
									var ss=$('#tg').treegrid("getSelected");
									var ssN=['name','persons','begin','center','end'];
									for (var i=0;i<5;i++) {
									panInput[i].value=(ss[ssN[i]]==null?" ":ss[ssN[i]])
									}
								}
							);
							$("#addA").click(function(){
								$('#win').window('open');
								for (var i=0;i<5;i++) {
									panInput[i].value=""
								}
								panInput[0].focus();
							})
							
						
					}
		
			}
		)


		win_exit.onclick=function(){
			$('#win').window('close');
		}
		
//		$('#p').panel({
//		    width:300,
//		    height:600,
//		    title:'编辑内容',
//		    left:300,
//		    top:300,
//		    style:{borderWidth:2},
//		    closable:true,
//		    collapsible:false,
//		    closed:true
////		    tools:[{
////		    iconCls: 'icon-ok',
////		    handler:function(){alert('new')}
////		    },{
////		    iconCls:'icon-save',
////		    handler:function(){alert('save')}
////		    }]
//		}); 
//		function formatProgress(value){
//	    	if (value){
//		    	var s = '<div style="width:100%;border:1px solid #ccc">' +
//		    			'<div style="width:' + value + '%;background:#cc0000;color:#fff">' + value + '%' + '</div>'
//		    			'</div>';
//		    	return s;
//	    	} else {
//		    	return '';
//	    	}
//		}
		
//		console.log(
//		$("#tg").treegrid("getEditors")
//		)
//		var editingId;
//		function edit(){
//			if (editingId != undefined){
//				$('#tg').treegrid('select', editingId);
//				return;
//			}
//			var row = $('#tg').treegrid('getSelected');
//			if (row){
//				editingId = row.id
//				$('#tg').treegrid('beginEdit', editingId);
//			}
//		}
//
//		function save(){
//			if (editingId != undefined){
//				var t = $('#tg');
//				t.treegrid('endEdit', editingId);
//				editingId = undefined;
//				var persons = 0;
//				var rows = t.treegrid('getChildren');
//				for(var i=0; i<rows.length; i++){
//					var p = parseInt(rows[i].persons);
//					if (!isNaN(p)){
//						persons += p;
//					}
//				}
//				var frow = t.treegrid('getFooterRows')[0];
//				frow.persons = persons;
//				t.treegrid('reloadFooter');
//			}
//		}

}