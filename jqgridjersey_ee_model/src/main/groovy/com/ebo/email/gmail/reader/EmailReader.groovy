package com.ebo.email.gmail.reader

import javax.mail.*
import java.util.Properties
import javax.net.ssl.*

class EmailReader {
    String gmailServer = "imap.gmail.com"
    int gmailPort = 993
    
    Properties props = new Properties()
    
    def connectToServer(server, user, password ){
        def session = Session.getDefaultInstance(props, null)
        def store = session.getStore("imaps")
        store.connect(server, user, password)
        store
    }

    static main(args) {
        EmailReader er = new EmailReader()
        er.runMain()
        
    }
    
    public void runMain(){
        def factory = SSLSocketFactory.getDefault()
        def socket = factory.createSocket(gmailServer, gmailPort)
        socket.connect(null)
        def store = connectToServer('abc', 'erbrito@gmail.com', 'zzzzzzzz')
        store.defaultFolder.list().each { folder ->
            println folder.name
        }
        
    }
    
    public void setProperties(){
        props.setProperty("mail.imaps.host", gmailServer)
        props.setProperty("mail.store.protocol","impas")
        props.setProperty("mail.imaps.port", gmailPort.toString())
    }
    
    

}
