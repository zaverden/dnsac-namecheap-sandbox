declare type Dict = { [key: string]: unknown };

declare type Modifier = any | Modifier[];

//#region Top Level Functions
declare type ProviderIdentifier =
  | "NONE"
  | "ACTIVEDIRECTORY_PS"
  | "AXFRDDNS"
  | "AZURE_DNS"
  | "BIND"
  | "CLOUDFLAREAPI"
  | "CLOUDNS"
  | "CSCGLOBAL"
  | "DESEC"
  | "DIGITALOCEAN"
  | "DNSIMPLE"
  | "DNSOVERHTTPS"
  | "GANDI_V5"
  | "GCLOUD"
  | "HEDNS"
  | "HEXONET"
  | "INTERNETBS"
  | "INWX"
  | "LINODE"
  | "NAMEDOTCOM"
  | "NAMECHEAP"
  | "NETCUP"
  | "NS1"
  | "OVH"
  | "POWERDNS"
  | "ROUTE53"
  | "SOFTLAYER"
  | "VULTR";

/** https://stackexchange.github.io/dnscontrol/js#require_glob */
declare function require_glob(path: string, recursive?: boolean): void;

/** https://stackexchange.github.io/dnscontrol/js#require */
declare function require(path: string): void | Dict;

/** https://stackexchange.github.io/dnscontrol/js#NewRegistrar */
declare function NewRegistrar(
  name: string,
  type: ProviderIdentifier,
  meta?: Dict
): string;

/** https://stackexchange.github.io/dnscontrol/js#NewDnsProvider */
declare function NewDnsProvider(
  name: string,
  type: ProviderIdentifier,
  meta?: Dict
): string;

/** https://stackexchange.github.io/dnscontrol/js#IP */
declare function IP(address: string): number;

/** https://stackexchange.github.io/dnscontrol/js#D */
declare function D(
  name: string,
  registrar: string,
  ...modifiers: Modifier[]
): void;

/** https://stackexchange.github.io/dnscontrol/js#D_EXTEND */
declare function D_EXTEND(name: string, ...modifiers: Modifier[]): void;

//#endregion Top Level Functions

//#region Domain Modifiers

/** https://stackexchange.github.io/dnscontrol/js#DnsProvider */
declare function DnsProvider(name: string, nsCount?: number): Modifier;

/** https://stackexchange.github.io/dnscontrol/js#DefaultTTL */
declare function DefaultTTL(ttl: number | string): Modifier;

/** https://stackexchange.github.io/dnscontrol/js#A */
declare function A(
  name: string,
  address: string | number,
  ...modifiers: Modifier[]
): Modifier;

/** https://stackexchange.github.io/dnscontrol/js#CNAME */
declare function CNAME(
  name: string,
  target: string,
  ...modifiers: Modifier[]
): Modifier;

/** https://stackexchange.github.io/dnscontrol/js#IGNORE_NAME  */
declare function IGNORE_NAME(name: string): Modifier;

/** https://stackexchange.github.io/dnscontrol/js#MX  */
declare function MX(
  name: string,
  priority: number,
  target: string,
  ...modifiers: Modifier[]
): Modifier;

/** https://stackexchange.github.io/dnscontrol/js#NAMESERVER_TTL */
declare function NAMESERVER_TTL(ttl: number | string): Modifier;

/** https://stackexchange.github.io/dnscontrol/js#NS  */
declare function NS(
  name: string,
  target: string,
  ...modifiers: Modifier[]
): Modifier;

/** https://stackexchange.github.io/dnscontrol/js#TXT */
declare function TXT(
  name: string,
  contents: string | string[],
  ...modifiers: Modifier[]
): Modifier;

//#endregion Domain Modifiers

//#region Record Modifiers

/** https://stackexchange.github.io/dnscontrol/js#TTL */
declare function TTL(ttl: number | string): Modifier;

//#endregion Record Modifiers
