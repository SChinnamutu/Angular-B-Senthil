<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en-us">
<head>

	
	<script src="${pageContext.request.contextPath}/js/jquery.js" /></script>
    <script src="${pageContext.request.contextPath}/js/bootstrap.js" /></script>
    
	<link href="<c:url value='/bootstrap/css/bootstrap.css' />" rel="stylesheet"></link>
	<link href="<c:url value='/bootstrap/css/bootstrap.min.css' />" rel="stylesheet"></link>
	
</head>
<body class="loginpage">
	<div class="opeiningscreen">
		<div class="logodiv">
			<div class="registerbody opacityanim">
				<div class="registerbody-left  col-xs-12">
					<form name="loginForm"   method="post" action="doLogin" >
						<ul>
							<li>
								<div class="form-group">
									<label class="animatetoptobottom">Email Address:</label>
									<div class="input-divs animatetoptobottom">
										<input type="text" id="username" name="username" class="form-control" placeholder="Enter username" autofocus="true"  required>
									</div>
								</div>
							</li>
							<li>
								<div class="form-group">
								<div class="icnholder"><i class="regisr regit4"></i></div>
								<label class="animatetoptobottom">Password:</label>
								<div class="input-divs animatetoptobottom">
									<input type="password" id="password" name="password" class="form-control" placeholder="Enter password" required>
								</div>
								</div>
							</li>
							<li>
								<div class="form-group text-center">
									<input type="submit" class="btn btn-primary" value="Log In" />
								</div>
							</li>
						</ul>
					</form>
				</div>
			</div>
		</div>
	</div>

</body>
</html>