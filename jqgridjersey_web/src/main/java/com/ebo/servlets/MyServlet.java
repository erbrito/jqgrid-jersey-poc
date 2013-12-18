package com.ebo.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.enterprise.inject.Any;
import javax.inject.*;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;

import javax.servlet.annotation.WebInitParam;

import com.ebo.model.AgreementDetailsView;
import com.ebo.rest.AgrmDetViewFiller;



@WebServlet(name = "MyServlet", urlPatterns={"/MyApp"},
initParams = {@WebInitParam(name="webInitParam1", value="Hello"), @WebInitParam(name="webInitParam2", value="World")})

public class MyServlet extends HttpServlet{

    /**
     * 
     */
    private static final long serialVersionUID = 7547796770923172483L;
    @Inject
    @Named("jaja2")
    public AgrmDetViewFiller fillerByH2K;
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        try {
            out.println("<html><head><title>MyServlet</title></head><body>");
            out.write(getServletConfig().getInitParameter("webInitParam1") + " ");
            out.write(getServletConfig().getInitParameter("webInitParam2"));
            out.write(" _abc");
            List<AgreementDetailsView> agdeList = new ArrayList<AgreementDetailsView>();
            fillerByH2K.addAgrmDetView(agdeList );
            for(AgreementDetailsView item: agdeList){
                out.println(item.getBizRepName());
            }
                
            out.println("</body>");
            out.println("</html>");
        } finally {
            out.close();
        }
    }
 
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }
 
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }
 
    @Override
    public String getServletInfo() {
        return "Short description";
    }
}
