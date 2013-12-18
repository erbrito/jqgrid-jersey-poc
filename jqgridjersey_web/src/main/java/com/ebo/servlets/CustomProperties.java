package com.ebo.servlets;


import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Properties;



public class CustomProperties {
    private static final String OPT_CONF_PROPERTIES = "/opt/conf/local.properties";
    static private CustomProperties _instance = null;
    private Properties props;
    
    protected CustomProperties() {
        try {
            //InputStream file = getClass().getResourceAsStream("/"+ "local.properties");//
            InputStream file = new FileInputStream(new File(OPT_CONF_PROPERTIES)) ;
            props = new Properties();
            props.load(file);
            
        }catch(Exception e){
            System.out.println("Error retrieving the properties file: " + e.getMessage());
        }
    }
    
    static public CustomProperties getInstance(){
        if(_instance == null){
            _instance = new CustomProperties();
        }
        return _instance;
    }
    
    public String getPropertie(String key){
        return props.getProperty(key, "tbd");
    }

}
