package com.ebo.model;

import java.util.Date;

public class AgreementDetailsView {
    private long agrmId;
    /**
     * @return the agrmId
     */
    public long getAgrmId() {
        return agrmId;
    }
    /**
     * @param agrmId the agrmId to set
     */
    public void setAgrmId(long agrmId) {
        this.agrmId = agrmId;
    }
    /**
     * @return the title
     */
    public String getTitle() {
        return title;
    }
    /**
     * @param title the title to set
     */
    public void setTitle(String title) {
        this.title = title;
    }
    /**
     * @return the contracct
     */
    public String getContracct() {
        return Contracct;
    }
    /**
     * @param contracct the contracct to set
     */
    public void setContracct(String contracct) {
        Contracct = contracct;
    }
    /**
     * @return the agrmType
     */
    public String getAgrmType() {
        return AgrmType;
    }
    /**
     * @param agrmType the agrmType to set
     */
    public void setAgrmType(String agrmType) {
        AgrmType = agrmType;
    }
    /**
     * @return the sttsInt
     */
    public String getSttsInt() {
        return SttsInt;
    }
    /**
     * @param sttsInt the sttsInt to set
     */
    public void setSttsInt(String sttsInt) {
        SttsInt = sttsInt;
    }
    /**
     * @return the statusDate
     */
    public Date getStatusDate() {
        return StatusDate;
    }
    /**
     * @param statusDate the statusDate to set
     */
    public void setStatusDate(Date statusDate) {
        StatusDate = statusDate;
    }
    /**
     * @return the bizRepName
     */
    public String getBizRepName() {
        return BizRepName;
    }
    /**
     * @param bizRepName the bizRepName to set
     */
    public void setBizRepName(String bizRepName) {
        BizRepName = bizRepName;
    }
    private String title;
    private String Contracct;
    private String AgrmType;
    private String SttsInt;
    private Date StatusDate;
    private String BizRepName;
    
    

   /* 
    * 
    * 
    * public String getSttsInt() {
        // TODO Auto-generated method stub
        return null;
    }

    public Date getStatusDate() {
        // TODO Auto-generated method stub
        return null;
    }

    public String getBizRepName() {
        // TODO Auto-generated method stub
        return null;
    }
    public long getAgrmId() {
        // TODO Auto-generated method stub
        return 0;
    }

    public String getTitle() {
        // TODO Auto-generated method stub
        return null;
    }

    public String getContract() {
        // TODO Auto-generated method stub
        return null;
    }

    public String getAgrmType() {
        // TODO Auto-generated method stub
        return null;
    }
*/
    

}
