package com.ebo.rest;

import java.util.List;

import com.ebo.model.AgreementDetailsView;
import org.jvnet.hk2.annotations.Contract;

@Contract
public interface AgrmDetViewFiller {
    public void addAgrmDetView(List<AgreementDetailsView> agdeList);

}
