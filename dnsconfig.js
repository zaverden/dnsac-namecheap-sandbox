var NONE_REG = NewRegistrar("none", "NONE");
var DIGITALOCEAN = NewDnsProvider("digitalocean", "DIGITALOCEAN");

D(
  "zaverden.com",
  NONE_REG,
  DnsProvider(DIGITALOCEAN),
  DefaultTTL("10m"),
  NAMESERVER_TTL("30m")
);
require_glob("./configs/");
