<%
    if (session.counter == null)
        session.counter = 1
    else
        session.counter++

    session.setAttribute("id", "tmpID")
    session.setAttribute("uid", "userID")

    request.x = 123
    application.x = 500

    if (application.counter == null)
        application.counter = 1
    else
        application.counter++

%>

application.counter = ${application.counter} <br>
session.counter = ${session.counter} <br>
session.id = ${session.id} <br>
session.uid = ${session.uid} <br>
session.getAttribute('id') = ${session.getAttribute('id')} <br>
request.x = ${request.x} <br>
(application.x == null ?) = ${application.x == null} <br>
application.x = ${application.x} <br>