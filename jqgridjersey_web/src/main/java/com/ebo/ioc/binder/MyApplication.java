package com.ebo.ioc.binder;

import org.glassfish.jersey.server.ResourceConfig;

public class MyApplication extends ResourceConfig{
    
    public MyApplication(){
        register( new MyApplicationBinder());
        register(new org.glassfish.jersey.filter.LoggingFilter());

        packages(true, "com.ebo.rest" );
    }

}
