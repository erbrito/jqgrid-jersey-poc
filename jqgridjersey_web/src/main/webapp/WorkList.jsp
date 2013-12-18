<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"    %>
    
   
    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" media="screen" href="css/jquery-ui-1.8.7.custom.css" />
      <link rel="stylesheet" type="text/css" media="screen" href="css/ui.jqgrid.css" />
      <!-- css imports for the downloadr-->
      	
            
      
      
      <link type="text/css" rel="stylesheet" media="print" href="css/css_db3.css"/>
      <!-- css imports for the jAlert-->
      <link href="css/jquery.alerts.css" rel="stylesheet" type="text/css" media="screen" />    
      <!--js import for general functions -->
      
      <!--js import for grids -->
      <script src="js/jquery-1.4.4.js" type="text/javascript"></script>
      <script src="js/grid.locale-en.js" type="text/javascript"></script>
      
      <script src="js/jquery.jqGrid.min.js" type="text/javascript"></script>
      <script src="js/grid.custom.js" type="text/javascript"></script>              
      <!--js import for tabs -->
      <script src="js/jquery-ui.min.js" type="text/javascript"></script>
      <!--js import for the downloadr -->
      
      <script src="js/jqbrowser.js" type="text/javascript"></script>

      <!--js import for jAlert functionalities -->
      <script src="js/jquery.alerts.js" type="text/javascript"></script>
      <script src="js/jquery.blockUI.js" type="text/javascript"></script>
      <script type="text/javascript">
      var options = decodeURIComponent(window.location.search.slice(1))
      .split('&')
      .reduce(function _reduce (/*Object*/ a, /*String*/ b) {
        b = b.split('=');
        a[b[0]] = b[1];
        return a;
      }, {});
      console.debug(options);
	var userName = options.userName;
	console.debug(userName);
</script>
<script src="js/worklistReassign.js" type="text/javascript"></script>



</head>
<body>

  <div id="fragment-7">
           <table id="ReasignList" class="scroll" width="100%"></table>
            <!--<div id="ReasignPager" class="scroll" style="text-align:center;"></div>
            
			 input type="BUTTON" id="ed1" value="Edit row 13" /> -->
			<input type="BUTTON" id="reassignBtn" value="Reassign" />
        	
        </div>

</body>
</html>