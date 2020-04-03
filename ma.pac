//*************************************
// VPN Proxy Settings				
// 03/04/2020					
//*************************************

function FindProxyForURL(url, host) {

    if (    
        shExpMatch(url,"*sds-pp.setefi.it*")
       )
    {
        return "DIRECT";
    }

	return "PROXY 192.168.1.62:8866";
}
