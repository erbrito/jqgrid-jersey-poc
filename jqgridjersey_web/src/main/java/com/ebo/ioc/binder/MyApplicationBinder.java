package com.ebo.ioc.binder;

import org.glassfish.hk2.utilities.binding.AbstractBinder;

import com.ebo.model.filldata.mock.web.FillOtherAgrmDetViewWeb;
import com.ebo.rest.AgrmDetViewFiller;


public class MyApplicationBinder extends AbstractBinder {

    @Override
    protected void configure() {
        bind(FillOtherAgrmDetViewWeb.class).to(AgrmDetViewFiller.class);
    }

}
