package com.ebo.ioctools;

import com.ebo.model.filldata.mock.FillOtherAgrmDetView;
import com.ebo.rest.AgrmDetViewFiller;

import net.sf.cglib.proxy.Enhancer;

public class IocTool {

    public  <T> T createProxy(T obj) {
        Enhancer e = new Enhancer();
        e.setSuperclass(obj.getClass());
        //Object a = new com.ebo.ioctools.MyInterceptor(obj);
        e.setCallback(new com.ebo.ioctools.MyInterceptor(obj));
        T proxifiedObj = (T) e.create();
        return proxifiedObj;
    }
    
    public AgrmDetViewFiller createAgrmDetViewFillerProxy(){
        //return createAgrmDetViewFillerProxy(new FillOtherAgrmDetView());
        return createProxy(new FillOtherAgrmDetView());
    }
    
    private  AgrmDetViewFiller createAgrmDetViewFillerProxy(AgrmDetViewFiller obj) {
        Enhancer e = new Enhancer();
        e.setSuperclass(obj.getClass());
        //Object a = new com.ebo.ioctools.MyInterceptor(obj);
        e.setCallback(new com.ebo.ioctools.MyInterceptor(obj));
        AgrmDetViewFiller proxifiedObj = (AgrmDetViewFiller) e.create();
        return proxifiedObj;
    }

}
