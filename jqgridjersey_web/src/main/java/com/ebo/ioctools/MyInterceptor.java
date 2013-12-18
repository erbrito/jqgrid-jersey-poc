package com.ebo.ioctools;

import java.lang.reflect.Method;

import net.sf.cglib.proxy.MethodInterceptor;
import net.sf.cglib.proxy.MethodProxy;

public class MyInterceptor implements MethodInterceptor {
    private Object realObj;
    public MyInterceptor(Object obj) {
                this.realObj = obj;
            }

    @Override
    public  Object intercept(Object o, Method method, Object[] objects, MethodProxy methodProxy) throws Throwable {
        System.out.println(method.getName());
        System.out.println(realObj.getClass().getName());
        if( method.isAccessible() && method.getName().equals("addAgrmDetView") && realObj.getClass().getName().equals("com.ebo.model.filldata.mock.FillAgrmDetView") ){
            System.out.println("addAgrmDetView ");
            com.ebo.model.filldata.mock.FillAgrmDetView dc2 = (com.ebo.model.filldata.mock.FillAgrmDetView)realObj;
            
            return method.invoke(dc2, objects);
        }
        //realObj.
        method.setAccessible(true);
        Object res = method.invoke(realObj, objects);
        return res;

    }
    
}