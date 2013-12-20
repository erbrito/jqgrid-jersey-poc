package com.ebo.rest;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.*;

import com.model.rest.*;

@Path("/hello")
public class HelloWorldService {

    @GET
    @Path("/{param}")
    public Response getMsg(@PathParam("param") String msg) {
        String output = "Jersey say with get: " + msg;
        return Response.status(200).entity(output).build();
    }
    
    @POST
    @Path("/message/one")
    //@Produces(MediaType.APPLICATION_JSON)
    public Response showMessage(@FormParam("message")String message,
            @FormParam("other_message")String otherMessage){
    //public com.model.rest.Response showMessage(@FormParam("message")String message){
        //Response r = new Response();
        
        
        String output = "Jersey say with post: " + message + " " + otherMessage;
        return Response.status(200).entity(output).build();
        
        //return Response.status(200).entity(output).build();
    }
    
   

}
