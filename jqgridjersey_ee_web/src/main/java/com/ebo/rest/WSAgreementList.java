package com.ebo.rest;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;
import javax.inject.Named;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import com.ebo.ioctools.IocTool;
import com.ebo.model.AgreementDetailsView;
import com.ebo.model.filldata.mock.FillAgrmDetView;
import com.model.rest.Response;
import com.model.rest.Rows;

/**
 * @author BMOEXB0 This class has the purpose to implement a Restful Webservice. This webservice
 *         will populate the json data for the WorkList - Reassign tab * 
 */
@Path("/aggrementsToReassignBy/{userId}")
@Produces(MediaType.APPLICATION_JSON)
public class WSAgreementList {
    
    private static final String NULL_DISPLAY = null;
    private static Map<String, String> columnTable = new HashMap<String, String>();
    
    //TODO: Guice Integration - take a look at https://hk2.java.net/guice-bridge/index.html
    //TODO: weld integration - take a look at http://agorava.org/news/2012/07/10/Starting-a-CDI-webapp-from-Maven-with-Weld-servlet-and-jetty-plugin/
    @Inject
    @Named("jaja3")
    private AgrmDetViewFiller fillerByH2K;
    static {
        columnTable.put("title", "title");
        columnTable.put("producer", "contract");
        columnTable.put("type", "agrmType");
        columnTable.put("stts_int", "sttsType");
        columnTable.put("statusdate", "statusDate");
        columnTable.put("bizrep_name", "bizRepName");
        columnTable.put("bizrep_name_hide", "bizRepName");
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getPage(@PathParam("userId") String userId, @QueryParam("page") Integer page,
            @QueryParam("rows") Integer rows, @QueryParam("sidx") String orderByWho,
            @QueryParam("sord") String sortType, @QueryParam("_search") Boolean isSearching,
            @QueryParam("searchString") String searchCriteria,
            @QueryParam("searchOper") String searchCondition,
            @QueryParam("searchField") String searchField) {

        Integer pageLocal = page == null ? 1 : page;
        Integer rowsLocal = rows == null ? 10 : rows;
        List<AgreementDetailsView> agdeList = new ArrayList<AgreementDetailsView>();
        //FillAgrmDetView filler = new FillAgrmDetView();
        //IocTool ioct = new IocTool();
        ////AgrmDetViewFiller filler = ioct.createProxy(new FillAgrmDetView());
        //AgrmDetViewFiller filler = ioct.createAgrmDetViewFillerProxy();
        //filler.addAgrmDetView(agdeList);
        fillerByH2K.addAgrmDetView(agdeList);
        Response response = new Response();
        Integer size = 0;
        createResponse(pageLocal, rowsLocal, agdeList, response, size);
       
        
        return response;
    }


    private void createResponse(Integer pageLocal, Integer rowsLocal, List<AgreementDetailsView> agdeList, Response response, Integer size) {
        if (agdeList == null || agdeList.isEmpty()){
            return;
        }
        response.setTotal((long) Math.ceil((((double) size) / ((double) rowsLocal))));
        response.setRecords(size);
        response.setPage(pageLocal);
        DateFormat fmt = new SimpleDateFormat("MM-dd-yyyy");
        for (AgreementDetailsView agreement : agdeList) {
            Rows row = new Rows();
            row.setId(agreement.getAgrmId());
            String agId = Long.toString(agreement.getAgrmId());
            row.getCell().add(agId); // agrm_id
            row.getCell().add((agreement.getTitle() != null) ? agreement.getTitle() : NULL_DISPLAY); // title
            row.getCell().add(agreement.getContracct()); // producer
            row.getCell().add(agreement.getAgrmType());// type
            row.getCell().add(agreement.getAgrmType());// type_old
            row.getCell().add(agreement.getSttsInt());// stts_int
            row.getCell().add(fmt.format(agreement.getStatusDate()));// statusdate
            row.getCell().add(agreement.getBizRepName());// bizrep_name
            row.getCell().add(agreement.getBizRepName());// bizrep_name
            response.getRows().add(row);

        }
    }
    
    
}
