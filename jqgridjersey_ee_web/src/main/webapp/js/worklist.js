		var createDoubleClickForm = function(myForm, last_page, rowid, agrm_id, mode, pageMode){
			if (roleType > 1){  
                var params = "<input type=\"hidden\" id=\"pageMode\" name=\"pageMode\" value=\""+ pageMode + "\"/><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" + agrm_id + "\"/><input type=\"hidden\" id=\"mode\" name=\"mode\" value=\"" + mode + "\"/>"; 
                var act = $("<div><center><form id='"  + myForm + "' \" action=\"" + last_page + 
				  "\" method=\"POST\"><a id=\"id_"+ (rowid + 1) + 
				  "\" onClick=\"document.forms['"+ myForm  + "'].submit();blockUIS();\">" + 
				  params + "</form></center></div>");
                return act;
			}
		},
		
		 createReturnedDoubleClickForm = function(myForm, last_page, rowid, agrm_id, mode, pageMode){
			var qual_ind = jQuery("#RtndList").getCell(rowid,'qual_ind');
			if (roleType > 1){ 
				if (roleType == 3 && qual_ind == 'Y'){
                    last_page = "AgreementAttachment.jsp"; 
                  }
                var params = "<input type=\"hidden\" id=\"pageMode\" name=\"pageMode\" value=\"" + pageMode + "\"/><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" + agrm_id + "\"/><input type=\"hidden\" id=\"mode\" name=\"mode\" value=\"" + mode + "\"/>"; 
                var act = $("<div><center><form id='"  + myForm + "' \" action=\"" + last_page + 
				  "\" method=\"POST\"><a id=\"id_"+ (rowid + 1) + 
				  "\" onClick=\"document.forms['"+ myForm  + "'].submit();blockUIS();\">" + 
				  params + "</form></center></div>");
                return act;
			}
		},
		
		 createApprovedDoubleClickForm = function(myForm, last_page, rowid, agrm_id, stts_type){
			//var type = jQuery("#ApprList").getCell(rowid,'type');
            //var agrm_id = jQuery("#ApprList").getCell(rowid,'agrm_id');
            //var stts_int = jQuery("#ApprList").getCell(rowid,'stts_int');
            //var stts_type = jQuery("#ApprList").getCell(rowid,'stts_type');
            //var qual_ind = jQuery("#ApprList").getCell(rowid,'qual_ind');
            //var last_page = jQuery("#ApprList").getCell(ids[i],'last_page');
            var params = "";
            if (last_page == 'null'){
                //default                    
                //last_page = "Application.jsp";                     
            	last_page = "AgreementAttachmentView.jsp";
            }
            if (roleType == 2){                                                                        
              if (stts_type == 'Verified' || stts_type == 'Active'){
                last_page = "AgreementAttachmentView.jsp";                       
              }                  
              params = "<input type=\"hidden\" id=\"pageMode\" name=\"pageMode\" value=\"WORK\"/><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" + agrm_id + "\"/><input type=\"hidden\" id=\"mode\" name=\"mode\" value=\"VIEW\"/>";
                                                    
            }
            else if (roleType == 3){                                      
              if (stts_type == 'Approved' || stts_type == 'Active'){
                last_page = "AgreementAttachmentView.jsp";                       
              }    
              params = "<input type=\"hidden\" id=\"pageMode\" name=\"pageMode\" value=\"WORK\"/><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" + agrm_id + "\"/><input type=\"hidden\" id=\"mode\" name=\"mode\" value=\"VIEWUPD\"/>";
                    
            }
            else { 
              if (stts_type == 'Approved' || stts_type == 'Active'){
                last_page = "AgreementAttachmentView.jsp";                       
              }    
              params = "<input type=\"hidden\" id=\"pageMode\" name=\"pageMode\" value=\"WORK\"/><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" + agrm_id + "\"/>";
                    
            }
            var act = $("<div><center><form id='"  + myForm + "' \" action=\"" + last_page + 
  				  "\" method=\"POST\"><a id=\"id_"+ (rowid + 1) + 
  				  "\" onClick=\"document.forms['"+ myForm  + "'].submit();blockUIS();\">" + 
  				  params + "</form></center></div>");
            return act;
		},
		
		createGrids = function(miWid, myPager, myForm, myDatasource, myFunctionToCreateForm, myAction, title){
			jQuery("#" + miWid).jqGrid({                         
	            datatype: "jsonstring",
	            datastr: myDatasource, 
	            height: 250,
	            width: null,
	            autowidth: true,
	            shrinkToFit: true,
	            hidegrid: false,
	            colNames:['AGRM_ID','Title','Producer', 'last_page', 'Type', 'Status', 'stts_type', 'qual_ind', 'Status Date', 'Business Rep'
	                      ],   
	                      
	            colModel:[           
	              {name:'agrm_id',index:'agrm_id', width:60, sorttype:"int", hidden:true},
	              {name:'title',index:'title', width:210, editable:false},
	              {name:'producer',index:'producer', width:180, editable:false},
	              {name:'last_page',index:'last_page', width:50, hidden:true},
	              {name:'type',index:'type', width:100, align:"left", editable:false},                            
	              {name:'stts_int',index:'stts_int', width:150, align:"left", editable:false},
	              {name:'stts_type',index:'stts_type', width:80, hidden:true},
	              {name:'qual_ind',index:'qual_ind', width:80, hidden:true},              
	              {name:'statusdate',index:'statusdate', width:80, align:"center", sorttype:"date", editable:false},  
	              {name:'bizrep_name',index:'bizrep_name', width:180, editable:false}
	            ],          
	            pager: '#ApprPager',
	            toppager: true,          
	            rowNum:10,
	            rowList:[5,10,20],         
	            sortname: 'title',
	            sortorder: 'asc',
	            viewrecords: true,
	            altRows: false,
	            ignoreCase:true,
	            multiselect: false,
	            ondblClickRow : function (rowid, iRow, iCol, e) {
	                //console.debug('Double click performed');
	                var type = jQuery("#" + miWid).jqGrid('getCell', rowid, 'type');
	                var agrm_id = jQuery("#" + miWid).jqGrid('getCell', rowid,'agrm_id');
	                var stts_int = jQuery("#" + miWid).jqGrid('getCell', rowid,'stts_int');
	                var stts_type = jQuery("#" + miWid).jqGrid('getCell', rowid,'stts_type');
	                var last_page = jQuery("#" + miWid).jqGrid('getCell', rowid,'last_page');
	                //console.debug('Last page-based on the DB info- is: ' + last_page);
	                var pageMode = "";
	                if (last_page == 'null'){
	                    //default                    
	                    last_page = "Application.jsp";                     
	                }
	                //function(myForm, last_page, rowid, agrm_id, mode, pageMode)
	                //act = myFunctionToCreateForm(myForm, last_page, rowid, agrm_id, mode);
	                //console.debug('myForm:' + myForm);
	                //console.debug('last_page:' + last_page);
	                //console.debug('rowid:' + rowid);
	                //console.debug('agrm_id:' + agrm_id);
	                //console.debug('myAction:' + myAction);
	                act = myFunctionToCreateForm(myForm, last_page, rowid, agrm_id, myAction, "WORK");
	                act.appendTo("body");
	                //console.debug('the act appended to the body form is: \n' + act);
	                $("#"+ myForm).trigger("submit");
	            },
	            gridComplete: function(){
	            	//jQuery("#"+miWid).jqGrid('setGridWidth', 860, true);
	            },
	            caption: title
	            
			});          
			jQuery("#" + miWid).jqGrid('navGrid','#' + myPager, {add:false,edit:false,view:true,del:false,cloneToTop:true}); 
		  };
	

		
        
        function blockUIS(){
        	$.blockUI({timeout:   300000,  message: '<h1><br><img src="css/images/busy.gif" alt="" style="visibility:show;" /><br><br> Please wait while your request is in progress...<br></h1>' });                  
        }        
                                 
        jQuery(document).ready(function()
        {  
          jQuery( "#tabs" ).tabs({ fx: {height: 'show', slide: 'slow'}}); 
            $('#btnSave').click(function() { 
              var gsr = $("#InboxList").getGridParam('selarrrow');
              //alert(gsr.toString().trim());              
              gsr = trim(gsr.toString());
              var rids = gsr.split(",");  
              var bizTypeNotMatch = 'N';
                            
              var biz_rep = $('#sel-F1').val();  
              var biz_rep_type_code = $('#sel-F1 option:selected').text().substring($('#sel-F1 option:selected').text().indexOf(":",0)+1);              
              if ($('#sel-F1').val() != ""){
              
              if (roleType != 2)  { 
                  var biz_rep_type_lookup = trim(biz_rep_type_code.toUpperCase() + ":");
                  var inputString = jsonstringAgtp + ";";
                  var biz_rep_type = inputString.substring(inputString.indexOf(biz_rep_type_lookup)+5,inputString.indexOf(';', inputString.indexOf(biz_rep_type_lookup)+5));
              } 
                for(var i=0;i < rids.length; i++){  
              if (roleType == 2)  { 
                  var cur_agrmType = $("#"+rids[i]+"_type").attr("value");
                  //alert("biz: " + biz_rep_type_code + " type: " +cur_agrmType);                  
                  biz_rep_type_code = trim(biz_rep_type_code.toLowerCase());
                  cur_agrmType = trim(cur_agrmType.toLowerCase());
                  
                  if (cur_agrmType != biz_rep_type_code) {
                    bizTypeNotMatch = 'Y';
                  }
                  
                  if (cur_agrmType == biz_rep_type_code && bizTypeNotMatch == 'N') {                        
                    $("#InboxList").setCell(rids[i], "bizrep_name",  $("#sel-F1 option:selected").text().substring(0, $('#sel-F1 option:selected').text().indexOf(":",0)), {color:'#0000A0','text-align':'left'},{});                                                                     
                    jQuery("#InboxList").jqGrid('saveRow',rids[i], false, 'clientArray');                   
                    if (i == 0) {
                      var clval = jQuery("#InboxList").getCell(rids[i],'agrm_id');                                      
                    }
                    else {
                      clval = clval + "," + jQuery("#InboxList").getCell(rids[i],'agrm_id');                                                                                               
                    }
                  }
              } else {                
                  biz_rep_type = trim(biz_rep_type);
                  if (roleType != 2) {                        
                    $("#InboxList").setCell(rids[i], "bizrep_name",  $("#sel-F1 option:selected").text().substring(0, $('#sel-F1 option:selected').text().indexOf(":",0)), {color:'#0000A0','text-align':'left'},{});                                   
                    $("#InboxList").setCell(rids[i], "type" , biz_rep_type.toString());
                    jQuery("#InboxList").jqGrid('saveRow',rids[i], false, 'clientArray');                   
                    if (i == 0) {
                      var clval = jQuery("#InboxList").getCell(rids[i],'agrm_id')+ ":" + jQuery("#InboxList").getCell(rids[i],'type');                                       
                    }
                    else {
                      clval = clval + "," + jQuery("#InboxList").getCell(rids[i],'agrm_id') + ":" + jQuery("#InboxList").getCell(rids[i],'type');                                                                                               
                    }
                    if (dom_agrmType.indexOf(trim(biz_rep_type_code.toUpperCase()))==-1 || trim(biz_rep) != trim(bizRepName) ){
                      $("#"+rids[i]).hide();       
                    }                    
                  }                
              }
              
                }                 
              }             
              
              if (clval != ''){
                if (bizTypeNotMatch == 'N') {
                  blockUIS();
                  
                  if (roleType == 2) {
                    $.post("UpdWorkList.jsp?updateBy="+userName+"&biz_rep="+biz_rep+"&mode=3"+"&agrmIds="+clval,                                                  
                      function(data){
                        $.unblockUI();
                        jAlert('Business Rep. assigned. Please verify the application to complete the assignment.', 'OSA Dialog');                                          
                      }
                    );  
                  } else {
                   $.post("UpdWorkList.jsp?updateBy="+userName+"&biz_rep="+biz_rep+"&mode=6"+"&agrmIds="+clval,                                                  
                      function(data){
                        $.unblockUI();
                        jAlert('Business Rep. re-assigned to ' + $("#sel-F1 option:selected").text().substring(0, $('#sel-F1 option:selected').text().indexOf(":",0)), 'OSA Dialog');                                                                                  
                      }
                    );                    
                  }
                }else {
                    jAlert('Agreement Type Not Matched! Please select a correct Agreement Type.', 'OSA Dialog');                      
                }
              }
              
              $("#InboxList").jqGrid('resetSelection');   
              $('#btnSave').attr('disabled', true);
              $('#btnVerified').attr('disabled', true);
              $('#btnReturn').attr('disabled', true);  
              $('#btnAgreementType').attr('disabled', true);                               
            }); 
            
            $('#btnReturn').click(function() {
              var gsr = $("#InboxList").getGridParam('selarrrow');              
              //var rids = gsr.toString().trim().split(",");  
               gsr = trim(gsr.toString());
               var rids = gsr.split(",");              
              
              for(var i=0;i < rids.length; i++){                  
                var qual_ind = jQuery("#InboxList").getCell(rids[i],'qual_ind');
                var stts_int = "";                
                if (qual_ind == "Y"){
                  stts_int = "Pending Signature";                  
                }
                else {
                  stts_int = "Returned";
                }
                $("#InboxList").setCell(rids[i], "stts_int",  stts_int, {color:'#0000A0','text-align':'left'},{});                                 
                $("#"+rids[i]).hide();
                
                if (i == 0) {
                  var clval = jQuery("#InboxList").getCell(rids[i],'agrm_id');
                }
                else {
                  clval = clval + "," + jQuery("#InboxList").getCell(rids[i],'agrm_id');
                }
              }              
             
              $.post("UpdWorkList.jsp?updateBy="+userName+"&stts_type=Returned&mode=5"+"&agrmIds="+clval,                                                  
                function(data){
                    //debug-line
                    jAlert('Successfully Returned to Applicant!', 'OSA Dialog');                      
                }
              );              
              $('#btnSave').attr('disabled', true);
              $('#btnVerified').attr('disabled', true);
              $('#btnReturn').attr('disabled', true);  
              $('#btnAgreementType').attr('disabled', true);  
              $("#InboxList").jqGrid('resetSelection');                  
            });
          
            $('#btnVerified').click(function() {
              var gsr = $("#InboxList").getGridParam('selarrrow');              
              //var rids = gsr.toString().trim().split(",");
               gsr = trim(gsr.toString());
               var rids = gsr.split(",");              
              
              for(var i=0;i < rids.length; i++){                                  
                var stts_int = "Complete";                           
                $("#InboxList").setCell(rids[i], "stts_int",  stts_int, {color:'#0000A0','text-align':'left'},{});                 
                jQuery("#InboxList").jqGrid('saveRow',rids[i], false, 'clientArray'); 
                
                if (i == 0) {
                  var clval = jQuery("#InboxList").getCell(rids[i],'agrm_id');
                }
                else {
                  clval = clval + "," + jQuery("#InboxList").getCell(rids[i],'agrm_id');
                }
                $("#"+rids[i]).hide();                
              }              
             
              $.post("UpdWorkList.jsp?updateBy="+userName+"&stts_type=Complete&mode=5"+"&agrmIds="+clval,                                                  
                function(data){
                    //debug-line
                    jAlert('Status Set to Complete!', 'OSA Dialog');                        
                }
              );              
              $('#btnSave').attr('disabled', true);
              $('#btnVerified').attr('disabled', true);
              $('#btnReturn').attr('disabled', true);  
              $('#btnAgreementType').attr('disabled', true);
              $("#InboxList").jqGrid('resetSelection');                  
            });
            
            $('#btnAgreementType').click(function() {
               var gsr = $("#InboxList").getGridParam('selarrrow');            
               //var rids = gsr.toString().trim().split(","); 
               gsr = trim(gsr.toString());
               var rids = gsr.split(",");                    
                            
               for(var i=0;i < rids.length; i++){ 
                  var cur_agrmType = $("#"+rids[i]+"_type").attr("value");
                  jQuery("#InboxList").jqGrid('saveRow',rids[i], false, 'clientArray');                       
                  if (i == 0){
                    var clval = jQuery("#InboxList").getCell(rids[i],'agrm_id') + ":" + jQuery("#InboxList").getCell(rids[i],'type');                
                  }
                  else {
                    var clval = clval + "," + jQuery("#InboxList").getCell(rids[i],'agrm_id') + ":" + jQuery("#InboxList").getCell(rids[i],'type');                                  
                  }                 
                  if (dom_agrmType.indexOf(cur_agrmType)==-1){
                    $("#"+rids[i]).hide();       
                  }
               }
              //debug line
              //alert(clval);              
              if (clval != ''){
                blockUIS();
                $.post("UpdWorkList.jsp?updateBy="+userName+"&mode=4"+"&agrmIds="+clval,                                                  
                  function(data){
                  $.unblockUI();
                      //debug-line
                      jAlert('Agreement Type Changed! Note : Documents uploaded previously  would be invalid.', 'OSA Dialog');                         
                  }
                );
              }
                                        
              $('#btnSave').attr('disabled', true);
              $('#btnVerified').attr('disabled', true);
              $('#btnReturn').attr('disabled', true);  
              $('#btnAgreementType').attr('disabled', true);
              $("#InboxList").jqGrid('resetSelection');   
            });

            var subgrid_table_id;
            
            //Application Inbox List
            
            jQuery("#InboxList").jqGrid({                         
            datatype: "jsonstring",           
            datastr: jsonstringInbox, 
            height: 250,  
            autowidth: true,
            shrinkToFit: true,
            hidegrid: false,
            toppager: true,
            ignoreCase:true,
            mtype: 'POST',
            colNames:['AGRM_ID',' ','Title','Producer', 'last_page', 'Type', 'Status', 'stts_type', 'qual_ind', 'Status Date', 'Business Rep'
                      //, 'Action'
                      ],           
            colModel:[           
              {name:'agrm_id',index:'agrm_id', width:60, sorttype:"int", hidden:true},
              {name:'flag',index:'flag', width:10, editable:false},
              {name:'title',index:'title', width:160, editable:false},
              {name:'producer',index:'producer', width:180, editable:false},  
              {name:'last_page',index:'last_page', width:50, hidden:true},
           	  {name:'type',index:'type', width:100, align:"left", editable:false},
           	  // {name:'type',index:'type', width:100, align:"left", editable:true, edittype:"select", editoptions:{value:jsonstringAgtp}, editrules:{required:true}},
              {name:'stts_int',index:'stts_int', width:150, align:"left", editable:false},
              {name:'stts_type',index:'stts_type', width:80, hidden:true},
              {name:'qual_ind',index:'qual_ind', width:80, hidden:true},              
              {name:'statusdate',index:'statusdate', width:80, align:"center", sorttype:"date", editable:false},              
              {name:'bizrep_name',index:'bizrep_name', width:180, editable:false}
              //,{name:'act',index:'act', width:100, align:"left", sortable:false, editable:false},
            ],          
            pager: '#InboxPager',
            toppager: true,          
            rowNum:10,
            rowList:[5,10,20],         
            sortname: 'title',
            sortorder: 'asc',
            viewrecords: true,
            altRows: false,
            multiselect: true,    
            onSelectRow: function(id){ 
            	setTimeout(function(){
              if ($('#jqg_InboxList_'+id).is(':hidden')) {                
                $('#btnSave').attr('disabled', true);
                $('#btnReturn').attr('disabled', true);
                $('#btnVerified').attr('disabled', true);
                $('#btnAgreementType').attr('disabled', true);                
                $("#InboxList").jqGrid('resetSelection');   
              }
              else {
                jQuery("#InboxList").jqGrid('editRow',id);   
                $('#btnSave').attr('disabled', false);
                $('#btnReturn').attr('disabled', false);
                $('#btnVerified').attr('disabled', false);
                $('#btnAgreementType').attr('disabled', false);                
              }
            	}, 1000);
            },
            ondblClickRow : function (rowid, iRow, iCol, e) {
                //console.debug('Double click performed');
                var type = jQuery("#InboxList").jqGrid('getCell', rowid, 'type');
                var agrm_id = jQuery("#InboxList").jqGrid('getCell', rowid,'agrm_id');
                var stts_int = jQuery("#InboxList").jqGrid('getCell', rowid,'stts_int');
                var stts_type = jQuery("#InboxList").jqGrid('getCell', rowid,'stts_type');
                var last_page = jQuery("#InboxList").jqGrid('getCell', rowid,'last_page');                       
                var pageMode = "";
                if (last_page == 'null'){
                    //default                    
                    last_page = "Application.jsp";                     
                }
                
                if (roleType == 2){                     
                  if (stts_type == 'Uploaded'){
                    last_page = "AgreementAttachment.jsp"                     
                  }                  
                  if (type == 'NEW MEDIA' && stts_type == 'Submitted'){    
                    var params = "<input type=\"hidden\" id=\"pageMode\" name=\"pageMode\" value=\"WORK\"/><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" + agrm_id + "\"/>";
                    var act = $("<div><center><form id=\"InboxForm_" + "\" action=\"" + last_page + 
                    		"\" method=\"POST\"><a id=\"id_"+ (rowid + 1) + 
                    		"\" onClick=\"document.forms['InboxForm_" +  "'].submit();blockUIS();\">"+ 
                    		params + "</form></center></div>");                    
                  }
                  else {
                    var params = "<input type=\"hidden\" id=\"pageMode\" name=\"pageMode\" value=\"WORK\"/><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" + agrm_id + "\"/><input type=\"hidden\" id=\"mode\" name=\"mode\" value=\"VIEWUPD\"/>";
                    var act = $("<div><center><form id=\"InboxForm_" + "\" action=\"" + last_page + 
                    		"\" method=\"POST\"><a id=\"id_"+ (rowid + 1) + "\" onClick=\"document.forms['InboxForm_" +  
                    		"'].submit();blockUIS();\">" + 
                    		params + "</form></center></div>");                                        
                  }  
                }
                else if (roleType == 3){
                  if (stts_type == 'Uploaded' || stts_type == 'Verified'){
                    last_page = "AgreementAttachmentView.jsp"                     
                    //last_page = "AgreementAttachment.jsp"                     
                  }
                  //03/22/11 - Added value=\"VIEWUPD\
                  //03/23/11 - Removed value=\"VIEWUPD\
                  var params = "<input type=\"hidden\" id=\"pageMode\" name=\"pageMode\" value=\"WORK\"/><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" + agrm_id + "\"/>";
                  var act = $("<div><center><form id=\"InboxForm_" + "\" action=\"" + last_page + "\" method=\"POST\"><a id=\"id_"+ (rowid + 1) + 
                		  "\" onClick=\"document.forms['InboxForm_"  + "'].submit();blockUIS();\">" + 
                		  params + "</form></center></div>");                    
                }
                else if (roleType == 4){
                  if (stts_type == 'Uploaded' || stts_type == 'Verified'){
                    last_page = "AgreementAttachment.jsp"                     
                  }
                  if (stts_int == 'Initiated') {                                       
                    var params = "<input type=\"hidden\" id=\"pageMode\" name=\"pageMode\" value=\"WORK\"/><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" + agrm_id + "\"/><input type=\"hidden\" id=\"mode\" name=\"mode\" value=\"VIEW\"/>";
                    var act = $("<div><center><form id=\"InboxForm_" + "\" action=\"" + 
                    		last_page + "\" method=\"POST\"><a id=\"id_"+ (rowid + 1) + "\" onClick=\"document.forms['InboxForm_" +  
                    		"'].submit();blockUIS();\">" + 
                    		params + "</form></center></div>");                                                        
                  }
                  else {                    
                    var params = "<input type=\"hidden\" id=\"pageMode\" name=\"pageMode\" value=\"WORK\"/><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" + agrm_id + "\"/>";
                    var act = $("<div><center><form id=\"InboxForm_" + "\" action=\"" + 
                    		last_page + "\" method=\"POST\"><a id=\"id_"+ (rowid + 1) + 
                    		"\" onClick=\"document.forms['InboxForm_" +  "'].submit();blockUIS();\">" + 
                    		params + "</form></center></div>");                    
                  }
                }
                
                act.appendTo("body");
                $("#InboxForm_").trigger("submit");
                
                
                
            },
            
            gridComplete: function(){  
            	//jQuery("#InboxList").jqGrid('setGridWidth', 860, true);
              
             // make the type editable when roletype is different to 3
              if(roleType != 3) {
              	jQuery("#InboxList").setColProp('type', {
              		editable:true, 
              		edittype:"select", 
              		editoptions:{value:jsonstringAgtp}, 
              		editrules:{required:true}
                  });
              }
              var ids = jQuery("#InboxList").jqGrid('getDataIDs');
              for(var i=0;i < ids.length;i++){
            	  var cl = ids[i];
            	  var flag_type = trim(jQuery("#InboxList").getCell(cl,'flag'));
            	  if (flag_type.length == 0){
                      $("#"+cl+" td.sgcollapsed",$("#" + subgrid_table_id)[0]).unbind('click').html('');  
                }
              }
              /*
              var ids = jQuery("#InboxList").jqGrid('getDataIDs');
              for(var i=0;i < ids.length;i++){
            	    
                var cl = ids[i];               
                var type = jQuery("#InboxList").getCell(cl,'type');
                var flag_type = trim(jQuery("#InboxList").getCell(cl,'flag'));
                var agrm_id = jQuery("#InboxList").getCell(cl,'agrm_id');
                var stts_int = jQuery("#InboxList").getCell(cl,'stts_int');
                var stts_type = jQuery("#InboxList").getCell(cl,'stts_type');
                var qual_ind = jQuery("#InboxList").getCell(cl,'qual_ind');
                var last_page = jQuery("#InboxList").getCell(cl,'last_page');                       
                var pageMode = "";
                

                if (flag_type.length == 0){
                      $("#"+cl+" td.sgcollapsed",$("#" + subgrid_table_id)[0]).unbind('click').html('');  
                }
                
                
                if (last_page == 'null'){
                    //default                    
                    last_page = "Application.jsp";                     
                }
                
                if (roleType == 2){                     
                  if (stts_type == 'Uploaded'){
                    last_page = "AgreementAttachment.jsp"                     
                  }                  
                  if (type == 'NEW MEDIA' && stts_type == 'Submitted'){    
                    var params = "<input type=\"hidden\" id=\"pageMode\" name=\"pageMode\" value=\"WORK\"/><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" + agrm_id + "\"/>";
                    var act = "<center><form id=\"InboxForm_"+ (i+1) + "\" action=\"" + last_page + "\" method=\"POST\"><a id=\"id_"+ (i+1) + "\" onClick=\"document.forms['InboxForm_" + (i+1) + "'].submit();blockUIS();\"><img id=\"img1_"+ (i+1) + "\" title=\"Edit Details & Upload Attachments\" src=\"css/images/btn_edit.png\" height=\"16px\" width=\"16px\" />" + params + "</form></center>";                    
                  }
                  else {
                    var params = "<input type=\"hidden\" id=\"pageMode\" name=\"pageMode\" value=\"WORK\"/><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" + agrm_id + "\"/><input type=\"hidden\" id=\"mode\" name=\"mode\" value=\"VIEWUPD\"/>";
                    var act = "<center><form id=\"InboxForm_"+ (i+1) + "\" action=\"" + last_page + "\" method=\"POST\"><a id=\"id_"+ (i+1) + "\" onClick=\"document.forms['InboxForm_" + (i+1) + "'].submit();blockUIS();\"><img id=\"img1_"+ (i+1) + "\" title=\"View Details & Upload Attachments\" src=\"css/images/icon_view.gif\" height=\"16px\" width=\"16px\" />" + params + "</form></center>";                                        
                  }  
                }
                else if (roleType == 3){
                  if (stts_type == 'Uploaded' || stts_type == 'Verified'){
                    last_page = "AgreementAttachmentView.jsp"                     
                    //last_page = "AgreementAttachment.jsp"                     
                  }
                  //03/22/11 - Added value=\"VIEWUPD\
                  //03/23/11 - Removed value=\"VIEWUPD\
                  var params = "<input type=\"hidden\" id=\"pageMode\" name=\"pageMode\" value=\"WORK\"/><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" + agrm_id + "\"/>";
                  var act = "<center><form id=\"InboxForm_"+ (i+1) + "\" action=\"" + last_page + "\" method=\"POST\"><a id=\"id_"+ (i+1) + "\" onClick=\"document.forms['InboxForm_" + (i+1) + "'].submit();blockUIS();\"><img id=\"img1_"+ (i+1) + "\" title=\"Edit Details & Upload Attachments\" src=\"css/images/btn_edit.png\" height=\"16px\" width=\"16px\" />" + params + "</form></center>";                    
                }
                else if (roleType == 4){
                  if (stts_type == 'Uploaded' || stts_type == 'Verified'){
                    last_page = "AgreementAttachment.jsp"                     
                  }
                  if (stts_int == 'Initiated') {                                       
                    var params = "<input type=\"hidden\" id=\"pageMode\" name=\"pageMode\" value=\"WORK\"/><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" + agrm_id + "\"/><input type=\"hidden\" id=\"mode\" name=\"mode\" value=\"VIEW\"/>";
                    var act = "<center><form id=\"InboxForm_"+ (i+1) + "\" action=\"" + last_page + "\" method=\"POST\"><a id=\"id_"+ (i+1) + "\" onClick=\"document.forms['InboxForm_" + (i+1) + "'].submit();blockUIS();\"><img id=\"img1_"+ (i+1) + "\" title=\"View Details\" src=\"css/images/icon_view.gif\" height=\"16px\" width=\"16px\" />" + params + "</form></center>";                                                        
                  }
                  else {                    
                    var params = "<input type=\"hidden\" id=\"pageMode\" name=\"pageMode\" value=\"WORK\"/><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" + agrm_id + "\"/>";
                    var act = "<center><form id=\"InboxForm_"+ (i+1) + "\" action=\"" + last_page + "\" method=\"POST\"><a id=\"id_"+ (i+1) + "\" onClick=\"document.forms['InboxForm_" + (i+1) + "'].submit();blockUIS();\"><img id=\"img1_"+ (i+1) + "\" title=\"Edit, Delete Details & Upload Attachments\" src=\"css/images/btn_edit.png\" height=\"16px\" width=\"16px\" />" + params + "</form></center>";                    
                  }
                }
                jQuery("#InboxList").jqGrid('setRowData',ids[i],{act:act});
                
                
                  
              }	*/  
              $('#btnSave').attr('disabled', true);              
              $('#btnReturn').attr('disabled', true);   
              $('#btnVerified').attr('disabled', true);   
              $('#btnAgreementType').attr('disabled', true);                
            },            
            caption: "Inbox",
            editurl: './UpdWorkList.jsp',             
            subGrid: true,                
            subGridRowExpanded: function(subgrid_id, row_id){
                var pager_id;
                var agrmID = $('#InboxList').getCell(row_id, 'agrm_id');
                //var ctx = '<%=request.getContextPath()%>';                    
                subgrid_table_id = "mySubGridName" + row_id;
                pager_id = "p_" + subgrid_table_id;
                $("#" + subgrid_id).html("<table id='" + subgrid_table_id + "'></table>");
                jQuery("#" + subgrid_table_id).jqGrid({
                    url:ctx+'/subgridservlet?rowId='+ row_id +'&agrmId='+ agrmID,
                    datatype: 'json',
                    mtype: 'GET',
                    params: ['agrm_id'],
                    colNames:['No','Flag'],  
                    colModel:[ {name:'agrm_id',index:'agrm_id', width:100},
                               {name:'flag',index:'flag', width:300, editable:true}],            
                    rowNum:10,        
                    viewrecords: true,
                    altRows: true,                                  
                    caption: "Flag List" 
                });
            }
            });          
            jQuery("#InboxList").jqGrid('navGrid','#InboxPager', {add:false,edit:false,view:true,del:false,refresh:true,cloneToTop:true});
            
            //Application Approved Grid
            
            jQuery("#ApprList").jqGrid({                         
            datatype: "jsonstring",
            datastr: jsonstringApproved, 
            height: 250,  
            autowidth: true,
            shrinkToFit: true,
            hidegrid: false,
            ignoreCase:true,
            colNames:['AGRM_ID','Title','Producer', 'last_page', 'Type', 'Status', 'stts_type', 'qual_ind', 'Status Date', 'Business Rep'
                      , 'Action'
                      ],   
            colModel:[           
              {name:'agrm_id',index:'agrm_id', width:60, sorttype:"int", hidden:true},
              {name:'title',index:'title', width:210, editable:false},
              {name:'producer',index:'producer', width:180, editable:false},
              {name:'last_page',index:'last_page', width:50, hidden:true},
              {name:'type',index:'type', width:100, align:"left", editable:false},                            
              {name:'stts_int',index:'stts_int', width:150, align:"left", editable:false},
              {name:'stts_type',index:'stts_type', width:80, hidden:true},
              {name:'qual_ind',index:'qual_ind', width:80, hidden:true},              
              {name:'statusdate',index:'statusdate', width:80, align:"center", sorttype:"date", editable:false},  
              {name:'bizrep_name',index:'bizrep_name', width:180, editable:false}
              ,       
              {name:'act',index:'act', width:70, align:"left", sortable:false, editable:false, hidden:true},                                   
            ],          
            pager: '#ApprPager',
            toppager: true,          
            rowNum:10,
            rowList:[5,10,20],         
            sortname: 'title',
            sortorder: 'asc',
            viewrecords: true,
            altRows: false,
            //multiselect: true, 
            /*gridComplete: function(){
              var ids = jQuery("#ApprList").jqGrid('getDataIDs'); 
              for(var i=0;i < ids.length;i++){   
                var cl = ids[i];               
                var type = jQuery("#ApprList").getCell(cl,'type');
                var agrm_id = jQuery("#ApprList").getCell(cl,'agrm_id');
                var stts_int = jQuery("#ApprList").getCell(cl,'stts_int');
                var stts_type = jQuery("#ApprList").getCell(cl,'stts_type');
                var qual_ind = jQuery("#ApprList").getCell(cl,'qual_ind');
                var last_page = jQuery("#ApprList").getCell(ids[i],'last_page');                       
                if (last_page == 'null'){
                    //default                    
                    last_page = "Application.jsp";                     
                }
                if (roleType == 2){                                                                        
                  if (stts_type == 'Verified' || stts_type == 'Active'){
                    last_page = "AgreementAttachmentView.jsp";                       
                  }                  
                  var params = "<input type=\"hidden\" id=\"pageMode\" name=\"pageMode\" value=\"WORK\"/><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" + agrm_id + "\"/><input type=\"hidden\" id=\"mode\" name=\"mode\" value=\"VIEW\"/>";
                  var act = "<center><form id=\"ApprForm_"+ (i+1) + "\" action=\"" + last_page + "\" method=\"POST\"><a id=\"id_"+ (i+1) + "\" onClick=\"document.forms['ApprForm_" + (i+1) + "'].submit();blockUIS();\"><img id=\"img1_"+ (i+1) + "\" title=\"View Details\" src=\"css/images/icon_view.gif\" height=\"16px\" width=\"16px\" />" + params + "</form></center>";                                      
                }
                else if (roleType == 3){                                      
                  if (stts_type == 'Approved' || stts_type == 'Active'){
                    last_page = "AgreementAttachmentView.jsp";                       
                  }    
                  var params = "<input type=\"hidden\" id=\"pageMode\" name=\"pageMode\" value=\"WORK\"/><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" + agrm_id + "\"/><input type=\"hidden\" id=\"mode\" name=\"mode\" value=\"VIEWUPD\"/>";
                  var act = "<center><form id=\"ApprForm_"+ (i+1) + "\" action=\"" + last_page + "\" method=\"POST\"><a id=\"id_"+ (i+1) + "\" onClick=\"document.forms['ApprForm_" + (i+1) + "'].submit();blockUIS();\"><img id=\"img1_"+ (i+1) + "\" title=\"View Details & Upload\" src=\"css/images/icon_view.gif\" height=\"16px\" width=\"16px\" />" + params + "</form></center>";                    
                }
                else { 
                  if (stts_type == 'Approved' || stts_type == 'Active'){
                    last_page = "AgreementAttachmentView.jsp";                       
                  }    
                  var params = "<input type=\"hidden\" id=\"pageMode\" name=\"pageMode\" value=\"WORK\"/><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" + agrm_id + "\"/>";
                  var act = "<center><form id=\"ApprForm_"+ (i+1) + "\" action=\"" + last_page + "\" method=\"POST\"><a id=\"id_"+ (i+1) + "\" onClick=\"document.forms['ApprForm_" + (i+1) + "'].submit();blockUIS();\"><img id=\"img1_"+ (i+1) + "\" title=\"Edit, Delete Details & Upload Attachments\" src=\"css/images/btn_edit.png\" height=\"16px\" width=\"16px\" />" + params + "</form></center>";                    
                }
                jQuery("#ApprList").jqGrid('setRowData',ids[i],{act:act});   
              }
               
            },*/
            ondblClickRow : function (rowid, iRow, iCol, e) {
            	var last_page = jQuery("#ApprList").getCell(rowid,'last_page');
                //console.debug('Double click performed');
            	var miWid = "ApprList";
                var type = jQuery("#" + miWid).jqGrid('getCell', rowid, 'type');
                var agrm_id = jQuery("#" + miWid).jqGrid('getCell', rowid,'agrm_id');
                var stts_int = jQuery("#" + miWid).jqGrid('getCell', rowid,'stts_int');
                var stts_type = jQuery("#" + miWid).jqGrid('getCell', rowid,'stts_type');
                //var last_page = jQuery("#" + miWid).jqGrid('getCell', rowid,'last_page');
                var last_page = "AgreementAttachmentView.jsp";
                var pageMode = "";
                if (last_page == 'null'){
                    //default                    
                    last_page = "AgreementAttachmentView.jsp";                     
                }
                //function(myForm, last_page, rowid, agrm_id, mode, pageMode)
                //act = myFunctionToCreateForm(myForm, last_page, rowid, agrm_id, mode);
                act = createApprovedDoubleClickForm("ApprForm", last_page, rowid, agrm_id, "VIEW", "WORK");
                act.appendTo("body");
                $("#ApprForm").trigger("submit");
            },
            caption: "Approved"
            
          });          
          jQuery("#ApprList").jqGrid('navGrid','#ApprPager', {add:false,edit:false,view:true,del:false,cloneToTop:true});
          
           
            
            
                   
          //Application Returned Grid
          /*
            jQuery("#RtndList").jqGrid({                         
            datatype: "jsonstring",
            datastr: jsonstringReturned, 
            height: 250,  
            hidegrid: false,
            colNames:['AGRM_ID','Title','Producer', 'last_page', 'Type', 'Status', 'stts_type', 'qual_ind', 'Status Date', 'Business Rep'
                      , 'Action'
                      ],   
            colModel:[           
              {name:'agrm_id',index:'agrm_id', width:60, sorttype:"int", hidden:true},
              {name:'title',index:'title', width:210, editable:false},
              {name:'producer',index:'producer', width:180, editable:false},
              {name:'last_page',index:'last_page', width:50, hidden:true},
              {name:'type',index:'type', width:100, align:"left", editable:false},                            
              {name:'stts_int',index:'stts_int', width:150, align:"left", editable:false},
              {name:'stts_type',index:'stts_type', width:80, hidden:true},
              {name:'qual_ind',index:'qual_ind', width:80, hidden:true},              
              {name:'statusdate',index:'statusdate', width:80, align:"center", sorttype:"date", editable:false},  
              {name:'bizrep_name',index:'bizrep_name', width:100, editable:false}
              ,       
              {name:'act',index:'act', width:70, align:"left", sortable:false, editable:false},                                   
            ],          
            pager: '#RtndPager',
            toppager: true,          
            rowNum:10,
            rowList:[5,10,20],         
            sortname: 'title',
            sortorder: 'asc',
            viewrecords: true,
            altRows: false,
            multiselect: false, 
            gridComplete: function(){
              var ids = jQuery("#RtndList").jqGrid('getDataIDs'); 
              for(var i=0;i < ids.length;i++){   
                var cl = ids[i];               
                var type = jQuery("#RtndList").getCell(cl,'type');
                var agrm_id = jQuery("#RtndList").getCell(cl,'agrm_id');
                var stts_int = jQuery("#RtndList").getCell(cl,'stts_int');
                var stts_type = jQuery("#RtndList").getCell(cl,'stts_type');
                var qual_ind = jQuery("#RtndList").getCell(cl,''); 
                var last_page = jQuery("#RtndList").getCell(ids[i],'last_page');                       
                if (last_page == 'null'){
                    //default                    
                    last_page = "Application.jsp";                     
                }
                if (roleType > 1){  
                  if (roleType == 3 && qual_ind == 'Y'){
                    last_page = "AgreementAttachment.jsp"; 
                  }
                  var params = "<input type=\"hidden\" id=\"pageMode\" name=\"pageMode\" value=\"WORK\"/><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" + agrm_id + "\"/><input type=\"hidden\" id=\"mode\" name=\"mode\" value=\"VIEW\"/>"; 
                  var act = "<center><form id=\"RtndForm_"+ (i+1) + "\" action=\"" + last_page + "\" method=\"POST\"><a id=\"id_"+ (i+1) + "\" onClick=\"document.forms['RtndForm_" + (i+1) + "'].submit();blockUIS();\"><img id=\"img1_"+ (i+1) + "\" title=\"View Details\" src=\"css/images/icon_view.gif\" height=\"16px\" width=\"16px\" />" + params + "</form></center>";                                      
                }                
                jQuery("#RtndList").jqGrid('setRowData',ids[i],{act:act});   
              }               
            },
            caption: "Returned"
            
          });          
          jQuery("#RtndList").jqGrid('navGrid','#RtndPager', {add:false,edit:false,view:true,del:false,cloneToTop:true});
          */
          //createGrids("RejcList", "RejcPager", "RejcForm", jsonstringRejected, createDoubleClickForm, "VIEW");
          //TODO: createDoubleClickForm is not the righ one! change it according
          createGrids("RtndList", "RtndPager", "RtndForm_", jsonstringReturned, createReturnedDoubleClickForm, "WORK", "Returned", "WORK");
          
          
          //Application Rejected Grid
          /*
            jQuery("#RejcList").jqGrid({                         
            datatype: "jsonstring",
            datastr: jsonstringRejected, 
            height: 250,   
            hidegrid: false,
            colNames:['AGRM_ID','Title','Producer', 'last_page', 'Type', 'Status', 'stts_type', 'qual_ind', 'Status Date', 'Business Rep'
                     , 'Action'
                      ],   
            colModel:[           
              {name:'agrm_id',index:'agrm_id', width:60, sorttype:"int", hidden:true},
              {name:'title',index:'title', width:210, editable:false},
              {name:'producer',index:'producer', width:180, editable:false},
              {name:'last_page',index:'last_page', width:50, hidden:true},
              {name:'type',index:'type', width:100, align:"left", editable:false},                            
              {name:'stts_int',index:'stts_int', width:150, align:"left", editable:false},
              {name:'stts_type',index:'stts_type', width:80, hidden:true},
              {name:'qual_ind',index:'qual_ind', width:80, hidden:true},              
              {name:'statusdate',index:'statusdate', width:80, align:"center", sorttype:"date", editable:false},  
              {name:'bizrep_name',index:'bizrep_name', width:100, editable:false}
              ,       
              {name:'act',index:'act', width:70, align:"left", sortable:false, editable:false},                                   
            ],          
            pager: '#RejcPager',
            toppager: true,          
            rowNum:10,
            rowList:[5,10,20],         
            sortname: 'title',
            sortorder: 'asc',
            viewrecords: true,
            altRows: false,
            multiselect: true, 
            gridComplete: function(){
              var ids = jQuery("#RejcList").jqGrid('getDataIDs'); 
              for(var i=0;i < ids.length;i++){   
                var cl = ids[i];               
                var type = jQuery("#RejcList").getCell(cl,'type');
                var agrm_id = jQuery("#RejcList").getCell(cl,'agrm_id');
                var stts_int = jQuery("#RejcList").getCell(cl,'stts_int');
                var stts_type = jQuery("#RejcList").getCell(cl,'stts_type');
                var qual_ind = jQuery("#RejcList").getCell(cl,'qual_ind'); 
                var last_page = jQuery("#RejcList").getCell(ids[i],'last_page');                       
                if (last_page == 'null'){
                    //default                    
                    last_page = "Application.jsp";                     
                }
                if (roleType > 1){                                                      
                  var params = "<input type=\"hidden\" id=\"pageMode\" name=\"pageMode\" value=\"WORK\"/><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" + agrm_id + "\"/><input type=\"hidden\" id=\"mode\" name=\"mode\" value=\"VIEW\"/>";
                  var act = "<center><form id=\"RejcForm_"+ (i+1) + "\" action=\"" + last_page + "\" method=\"POST\"><a id=\"id_"+ (i+1) + "\" onClick=\"document.forms['RejcForm_" + (i+1) + "'].submit();blockUIS();\"><img id=\"img1_"+ (i+1) + "\" title=\"View Details\" src=\"css/images/icon_view.gif\" height=\"16px\" width=\"16px\" />" + params + "</form></center>";                                      
                }                
                jQuery("#RejcList").jqGrid('setRowData',ids[i],{act:act});   
              }               
            },
            caption: "Rejected"
            
          });          
          jQuery("#RejcList").jqGrid('navGrid','#RejcPager', {add:false,edit:false,view:true,del:false,cloneToTop:true});
          */
          //createGrids("InacList", "SrchPager", "InacForm", jsonstringInactive, createDoubleClickForm, "VIEW");
          createGrids("RejcList", "RejcPager", "RejcForm", jsonstringRejected, createDoubleClickForm, "VIEW", "Rejected", "WORK");
         
          
          //Application Inactive Grid
          /*
            jQuery("#InacList").jqGrid({                         
            datatype: "jsonstring",
            datastr: jsonstringInactive, 
            height: 250, 
            hidegrid: false,
            colNames:['AGRM_ID','Title','Producer', 'last_page', 'Type', 'Status', 'stts_type', 'qual_ind', 'Status Date', 'Business Rep', 'Action'],   
            colModel:[           
              {name:'agrm_id',index:'agrm_id', width:60, sorttype:"int", hidden:true},
              {name:'title',index:'title', width:210, editable:false},
              {name:'producer',index:'producer', width:180, editable:false},
              {name:'last_page',index:'last_page', width:50, hidden:true},
              {name:'type',index:'type', width:100, align:"left", editable:false},                            
              {name:'stts_int',index:'stts_int', width:150, align:"left", editable:false},
              {name:'stts_type',index:'stts_type', width:80, hidden:true},
              {name:'qual_ind',index:'qual_ind', width:80, hidden:true},              
              {name:'statusdate',index:'statusdate', width:80, align:"center", sorttype:"date", editable:false},  
              {name:'bizrep_name',index:'bizrep_name', width:100, editable:false},       
              {name:'act',index:'act', width:70, align:"left", sortable:false, editable:false},                                   
            ],          
            pager: '#InacPager',
            toppager: true,          
            rowNum:10,
            rowList:[5,10,20],         
            sortname: 'title',
            sortorder: 'asc',
            viewrecords: true,
            altRows: false,
            multiselect: true, 
            gridComplete: function(){
              var ids = jQuery("#InacList").jqGrid('getDataIDs'); 
              for(var i=0;i < ids.length;i++){   
                var cl = ids[i];               
                var type = jQuery("#InacList").getCell(cl,'type');
                var agrm_id = jQuery("#InacList").getCell(cl,'agrm_id');
                var stts_int = jQuery("#InacList").getCell(cl,'stts_int');
                var stts_type = jQuery("#InacList").getCell(cl,'stts_type');
                var qual_ind = jQuery("#InacList").getCell(cl,'qual_ind');
                var last_page = jQuery("#InacList").getCell(ids[i],'last_page');                       
                if (last_page == 'null'){
                    //default                    
                    last_page = "Application.jsp";                     
                }
                if (roleType > 1){                                                      
                  var params = "<input type=\"hidden\" id=\"pageMode\" name=\"pageMode\" value=\"WORK\"/><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" + agrm_id + "\"/><input type=\"hidden\" id=\"mode\" name=\"mode\" value=\"VIEW\"/>";
                  var act = "<center><form id=\"InacForm_"+ (i+1) + "\" action=\"" + last_page + "\" method=\"POST\"><a id=\"id_"+ (i+1) + "\" onClick=\"document.forms['InacForm_" + (i+1) + "'].submit();blockUIS();\"><img id=\"img1_"+ (i+1) + "\" title=\"View Details\" src=\"css/images/icon_view.gif\" height=\"16px\" width=\"16px\" />" + params + "</form></center>";                                      
                }                
                jQuery("#InacList").jqGrid('setRowData',ids[i],{act:act});   
              }               
            },
            caption: "Inactive"            
          });          
          jQuery("#InacList").jqGrid('navGrid','#InacPager', {add:false,edit:false,view:true,del:false,cloneToTop:true});
          */
          
          createGrids("InacList", "SrchPager", "InacForm", jsonstringInactive, createDoubleClickForm, "VIEW", "Inactive", "WORK");
          createGrids("SrchList", "InacPager", "SrchForm", jsonstringSearch, createDoubleClickForm, "SRCH", "Search", "WORK");
      
          //Application Search Grid
          /*
            jQuery("#SrchList").jqGrid({                         
            datatype: "jsonstring",
            datastr: jsonstringSearch, 
            height: 250,  
            hidegrid: false,
            colNames:['AGRM_ID','Title','Producer', 'last_page', 'Type', 'Status', 'stts_type', 'qual_ind', 'Status Date', 'Business Rep', 'Action'],   
            colModel:[           
              {name:'agrm_id',index:'agrm_id', width:60, sorttype:"int", hidden:true},
              {name:'title',index:'title', width:210, editable:false},
              {name:'producer',index:'producer', width:180, editable:false},
              {name:'last_page',index:'last_page', width:50, hidden:true},
              {name:'type',index:'type', width:100, align:"left", editable:false},                            
              {name:'stts_int',index:'stts_int', width:150, align:"left", editable:false},
              {name:'stts_type',index:'stts_type', width:80, hidden:true},
              {name:'qual_ind',index:'qual_ind', width:80, hidden:true},              
              {name:'statusdate',index:'statusdate', width:80, align:"center", sorttype:"date", editable:false},  
              {name:'bizrep_name',index:'bizrep_name', width:100, editable:false},       
              {name:'act',index:'act', width:70, align:"left", sortable:false, editable:false},                                   
            ],          
            pager: '#SrchPager',
            toppager: true,          
            rowNum:10,
            rowList:[5,10,20],         
            sortname: 'title',
            sortorder: 'asc',
            viewrecords: true,
            altRows: false,
            multiselect: true, 
            gridComplete: function(){
              var ids = jQuery("#SrchList").jqGrid('getDataIDs'); 
              for(var i=0;i < ids.length;i++){   
                var cl = ids[i];               
                var type = jQuery("#SrchList").getCell(cl,'type');
                var agrm_id = jQuery("#SrchList").getCell(cl,'agrm_id');
                var stts_int = jQuery("#SrchList").getCell(cl,'stts_int');
                var stts_type = jQuery("#SrchList").getCell(cl,'stts_type');
                var qual_ind = jQuery("#SrchList").getCell(cl,'qual_ind');
                var last_page = jQuery("#SrchList").getCell(ids[i],'last_page');                       
                if (last_page == 'null'){
                    //default                    
                    last_page = "Application.jsp";                     
                }
                if (roleType > 1){                                                      
                  var params = "<input type=\"hidden\" id=\"pageMode\" name=\"pageMode\" value=\"WORK\"/><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" + agrm_id + "\"/><input type=\"hidden\" id=\"mode\" name=\"mode\" value=\"SRCH\"/>";
                  var act = "<center><form id=\"SrchForm_"+ (i+1) + "\" action=\"" + last_page + "\" method=\"POST\"><a id=\"id_"+ (i+1) + "\" onClick=\"document.forms['SrchForm_" + (i+1) + "'].submit();blockUIS();\"><img id=\"img1_"+ (i+1) + "\" title=\"View Details\" src=\"css/images/icon_view.gif\" height=\"16px\" width=\"16px\" />" + params + "</form></center>";                                      
                }                
                jQuery("#SrchList").jqGrid('setRowData',ids[i],{act:act});   
              }               
            },
            caption: "Search"
            
          });          
          jQuery("#SrchList").jqGrid('navGrid','#SrchPager', {add:false,edit:false,view:true,del:false,cloneToTop:true});
          
          //$("#fragment-7).load("reasign.jsp")
         });
         */ 
        
        })