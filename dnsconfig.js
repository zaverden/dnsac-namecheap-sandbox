var NONE_REG = NewRegistrar("none", "NONE");
var NAMECHEAP = NewDnsProvider("namecheap", "NAMECHEAP");

D("dzaspirity.com", NONE_REG, DnsProvider(NAMECHEAP), DefaultTTL("30m"));
require_glob("./configs/");
