package com.ebo.model.filldata.mock.web;

import java.util.List;

import com.ebo.model.AgreementDetailsView;
import com.ebo.model.filldata.mock.FillOtherAgrmDetView;
import com.ebo.rest.AgrmDetViewFiller;

import javax.annotation.PostConstruct;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Named;

import org.jvnet.hk2.annotations.Service;


//import javax.inject.;

//import org.jvnet.hk2.annotations.Service;

@Service
@ApplicationScoped
@Named("jaja2")
public class FillOtherAgrmDetViewWeb extends FillOtherAgrmDetView implements AgrmDetViewFiller{
    
    public void addAgrmDetView(List<AgreementDetailsView> agdeList) {
        System.out.println("ohhhh!");
        super.addAgrmDetView(agdeList);
    }
    
    @PostConstruct
    public void init(){
        System.out.println("Created");
    }

}
