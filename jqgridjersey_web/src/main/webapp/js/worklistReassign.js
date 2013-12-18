jQuery(document).ready(function () {
    //var userId = session.getAttribute("userId");
	//console.debug(userName);
	//var jq = jQuery.noConflict();
    var mapTypes = new Array(6);
    mapTypes["New Media"] = "NMDA";
    mapTypes.Student = "STDN";
    mapTypes.Short = "SHRT";
    mapTypes.ULB = "ULBG";
    mapTypes.Undetermined = "UNDT";
    mapTypes["Corporate/Educational"] = "INDT";
    var lastsel = "",
		loadUrl = "rest/aggrementsToReassignBy/ebrito",
		blockUIS = function () {
			$.blockUI({
				timeout : 300000,
				message : '<h1><br><img src="css/images/busy.gif" alt="" style="visibility:show;" /><br><br> Please wait while your request is in progress...<br></h1>'
			});
		},
		myGrid = jQuery("#ReasignList").jqGrid({
            datatype : "json",
            url : 'rest/aggrementsToReassignBy/' + userName,
            editurl : 'ReassignAgremnts',
            mtype : 'GET',
            //mtype : 'POST',
            //refresh : true,
            height : 250,
            toppager: true,
            hidegrid : false,
            colNames : [
                'AGRM_ID',
                'Title',
                'Owner',
                'Type',
                'Type_Old',
                'Status',
                'Status Date',
                'Manager Rep',
                'Manager Rep '
            ],
            colModel : [{
                name : 'agrm_id',
                index : 'agrm_id',
                width : 60,
                sorttype : "int",
                hidden : true,
                editable : true
            }, {
				name : 'title',
				index : 'title',
				width : 160,
				editable : false,
				search: true,
				stype:'text',
				searchoptions:{sopt:['cn', 'eq', 'bw','ew']}
			}, {
				name : 'producer',
				index : 'producer',
				width : 180,
				editable : false,
				searchoptions:{sopt:['cn', 'eq', 'bw','ew']}
			}, {
				name : 'type',
				index : 'type',
				width : 100,
				align : "left",
				editable : false,
				searchoptions:{sopt:['cn', 'eq', 'bw','ew']}
			}, {
				name : 'Type_Old',
				index : 'Type_Old',
				hidden : true
			}, 
			{
				name : 'stts_int',
				index : 'stts_int',
				width : 150,
				align : "left",
				editable : false,
				searchoptions:{sopt:['cn', 'eq', 'bw','ew']}
			}, {
				name : 'statusdate',
				index : 'statusdate',
				width : 80,
				align : "center",
				sorttype : "date",
				editable : false,
				search: false
			}, {
				name : 'bizrep_name',
				index : 'bizrep_name',
				width : 215,
				editable : true,
				viewable: false,
				edittype : "select",
				searchoptions:{sopt:['cn', 'eq', 'bw','ew']},
				editoptions : {
					readonly: true
					//value : retrieveUsers('nmda'),
					//dataInit: function(element) { jq(element).attr("readonly", "readonly"); } 
				}
			}, {
				name : 'bizrep_name_hide',
				index : 'bizrep_name_hide',
				hidden : true,
				//editable : true,
				edithidden: true,
				viewhidden: true,
				viewable: true
			}
				],
            pager : '#ReasignPager',
            rowNum : 10,
            rowList : [5, 10, 20],
            sortname : 'title',
            gridview : true,
            sortorder : 'asc',
            viewrecords : true,
            multiselect : true,
            /*onRightClickRow : function (rowid, iRow, iCol, e) {
                console.debug('right click performed');
                var last_page = "ApplicationReassign.jsp",
					agrm_id = rowid,
					params = "<input type=\"hidden\" id=\"pageMode\" name=\"pageMode\" value=\"REVIEW\"/>" +
						"<input type=\"hidden\" id=\"mode\" name=\"mode\" value=\"VIEW\"/>" +
						"<input type=\"hidden\" id=\"id\" name=\"id\" value=\"" + agrm_id + "\"/>",
					act = $("<div><center><form id=\"InboxForm_" + "\" action=\"" + last_page +
                        "\" method=\"POST\"><a id=\"id_" + (iRow + 1) +
                        "\" onClick=\"document.forms['InboxForm_" + "'].submit();alert('hi budy');\">" + params + "</form></center></div>");
                console.log(rowid);
                console.log(act);
                act.appendTo("body");
                $("#InboxForm_").trigger("submit");
            },*/
            ondblClickRow : function (rowid, iRow, iCol, e) {
                //console.debug('Double click performed');
                var last_page = "Application.jsp",
					agrm_id = rowid,
					//params = "<input type=\"hidden\" id=\"pageMode\" name=\"pageMode\" value=\"WORK\"/>" +
					params = "<input type=\"hidden\" id=\"pageMode\" name=\"pageMode\" value=\"VIEW\"/>" +
						//"<input type=\"hidden\" id=\"mode\" name=\"mode\" value=\"VIEW\"/>" +
						"<input type=\"hidden\" id=\"mode\" name=\"mode\" value=\"SRCH\"/>" +
						//SRCH
						"<input type=\"hidden\" id=\"from\" name=\"mode\" value=\"REASSIGN\"/>" +
                        "<input type=\"hidden\" id=\"id\" name=\"id\" value=\"" + agrm_id + "\"/>",
					act = $("<div><center><form id=\"ReassignForm_" + "\" action=\"" + last_page +
                        "\" method=\"POST\"><a id=\"id_" + (iRow + 1) +
                        "\" onClick=\"document.forms['ReassignForm_" + "'].submit();\">" + params + "</form></center></div>");
                //console.log(rowid);
                //console.log(act);
                act.appendTo("body");
                $("#ReassignForm_").trigger("submit");
            },
            onPaging : function (pgButton) {
                var xm = jQuery("#ReasignList").jqGrid('getGridParam', 'selarrrow'),
                	r = false;
                if (xm[0] > 0) {
                	r = confirm("if you proceed, the changes wont be applied. \n Do you want to proceed?");
                    if (r !== true) {
                        return 'stop';
                    }
                    //console.debug('selected one or more!');
                }
                //console.debug("on Paging: ...");
                //console.debug(jQuery("#ReasignList").jqGrid('getGridParam', 'selarrrow'));
                //console.debug(pgButton);
            },
           
            onSelectRow : function (id, status, event) {
                //console.debug('SelectedRow');
                //console.debug('event: ' + event);
                if (status) {
                	setTimeout(function(){
	                    //console.debug(jQuery("#ReasignList").jqGrid('getGridParam', 'selarrrow'));
	                    var type = jQuery("#ReasignList").jqGrid('getCell', id, 'type');
	                    //console.debug(type);
	                    blockUIS();
	                    jQuery("#ReasignList").setColProp('bizrep_name', {
	                    	editable : true,
	                        
	                    });
	                    $.unblockUI();
	                    jQuery('#ReasignList').jqGrid('editRow', id, true);
                	}, 300);
                } else {
                    jQuery(this).restoreRow(id);
                }
                //$(this).jqGrid('viewGridRow', id, )
            },
            
            gridComplete : function () {
                //console.debug("fully loaded");
            },
            caption : "To Reassign",
            //paging: true,
            error : function (xhr, ajaxoptions, thrownError) {
                alert("my error =" + thrownError);
                alert("me erro1=" + ajaxoptions);
                alert("my eeror2 =" + xhr);
            },
            search: {
            	caption: "Search...",
            	Find: "Find",
            	Reset: "Reset"
            }
            
        });
		
    jQuery("#ReasignList").jqGrid('navGrid',
        '#ReasignPager', 
        {
			add : false,
			edit : false,
			view : true,
			del : false,
			cloneToTop : true,
			search : true
		 },
    
		{},
		{},
		{},
		{},
		{
			viewPagerButtons:true,
			beforeShowForm: function(form){
				$('#trv_bizrep_name_hide').show();
			}
			}
		
		
    );
    
    jQuery("#reassignBtn").click(function () {
        var clval = "";
        jQuery.each(jQuery("#ReasignList").jqGrid('getGridParam', 'selarrrow'), function (index, value) {
            //console.log("index: " + index);
            //console.log("value: " + value);
            var BizRep = jQuery("#ReasignList").jqGrid('getCell', value, 'bizrep_name');
            var formerType = jQuery("#ReasignList").jqGrid('getCell', value, 'Type_Old');
            //console.log(BizRep);
            //console.log($("#" + value + "_bizrep_name").val());
            if(!jQuery("#" + value + "_bizrep_name").val()){
            	alert("you need to select a new business representant to be reassigned.");
            	jQuery("#ReasignList").jqGrid().resetSelection();
            	return;
            }
            var bizRepSelectedStr = jQuery("#" + value + "_bizrep_name").val(),
				rightPart = bizRepSelectedStr.replace(/.*\s-\s/, ""),
				leftPart = bizRepSelectedStr.replace(/\s-\s.*/, ""),
				newType = "";
            for (var i in mapTypes) {
                if (mapTypes[i] === rightPart) {
                    newType = i;
                }
            }
            clval = value;
            $.post("ReassignAgremnts?updateBy=" + userName + 
            		"&biz_rep=" + leftPart + 
            		"&mode=6" + 
            		"&agrmIds=" + clval +
            		"&formerType=" + formerType +
            		"&agrmType=" + rightPart,
                function (data) {
                //console.debug(data);
            });
            jQuery("#ReasignList").jqGrid('setCell', value, 'type', newType);
            jQuery("#ReasignList").jqGrid('saveRow', value);
        });
        jQuery("#ReasignList").jqGrid().resetSelection();
        //jQuery("#ReasignList").jqGrid().trigger("reloadGrid");
    });
    
});
