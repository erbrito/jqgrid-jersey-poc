package com.ebo.model.filldata.mock

import java.util.Date;
import java.util.List;

import com.ebo.rest.*;

import com.ebo.model.AgreementDetailsView;
//import javax.inject.*;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Named;
import javax.annotation.PostConstruct;
import org.jvnet.hk2.annotations.Service;

@Service
@ApplicationScoped
@Named("jaja3")
public class FillOtherAgrmDetView implements AgrmDetViewFiller{
    
    @PostConstruct
    public void init(){
        System.out.println("Created");
    }
    
    
    public void addAgrmDetView(List<AgreementDetailsView> agdeList) {
        
        def details = new XmlSlurper().parse("data/sampleData.xml");
        def abc = details.children();
        
        def records = details.records;
        def rows = details.rows;
        def cells = rows.cell;
        
        rows.each{
            def cell0 = it.cell[0]
            def id = it.id.text()
            AgreementDetailsView aggDetView = new AgreementDetailsView();
            
            aggDetView.setAgrmId(Long.parseLong(id));
            
                
                String agrmType = it.cell[3].text();
                aggDetView.setAgrmType(agrmType);
                String bizRepName = it.cell[7].text();
                aggDetView.setBizRepName(bizRepName);
                String contracct = it.cell[2].text();
                aggDetView.setContracct(contracct);
                String statusDate = it.cell[6].text();
                // 08-30-2012
                Date d2 = Date.parse("MM-dd-yyyy", statusDate)
                aggDetView.setStatusDate(d2);
                String sttsInt = it.cell[5].text();
                aggDetView.setSttsInt(sttsInt);
                String title = it.cell[1].text();
                aggDetView.setTitle(title);
                agdeList.add(aggDetView);
            
            
        }
        
        
        
        /*cells.each{
            println it
        }*/
        /*rows.each{
            println it
        }*/
        
        
        //agdeList
    }

}
