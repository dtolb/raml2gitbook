{% method %}
## /accounts/{accountId}/sites/{siteId}/sippeers

Create a Sip Peer


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `siteId` | string | true |





## Example Request
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeer>
    <PeerName>
        name
    </PeerName>
    <Description>
        description
    </Description>
    <IsDefaultPeer>
        false
    </IsDefaultPeer>
    <FinalDestinationUri>
        uri
    </FinalDestinationUri>
    <ShortMessagingProtocol>
        SMPP
    </ShortMessagingProtocol>
    <VoiceHosts>
        <Host>
            <HostName>
                10.10.10.1
            </HostName>
        </Host>
        <Host>
            <HostName>
                10.10.10.2
            </HostName>
        </Host>
    </VoiceHosts>
    <SmsHosts>
        <Host>
            <HostName>
                2.1.1.9
            </HostName>
        </Host>
    </SmsHosts>
    <TerminationHosts>
        <TerminationHost>
            <HostName>
                2.1.1.9
            </HostName>
            <Port>
                0
            </Port>
            <CustomerTrafficAllowed>
                DOMESTIC
            </CustomerTrafficAllowed>
            <DataAllowed>
                true
            </DataAllowed>
        </TerminationHost>
        <TerminationHost>
            <HostName>
                2.1.1.96/30
            </HostName>
            <Port>
                0
            </Port>
            <CustomerTrafficAllowed>
                DOMESTIC
            </CustomerTrafficAllowed>
            <DataAllowed>
                true
            </DataAllowed>
        </TerminationHost>
    </TerminationHosts>
    <Address>
        <HouseNumber>
            1600
        </HouseNumber>
        <HouseSuffix/>
        <PreDirectional/>
        <StreetName>
            Pennsylvania Avenue Northwest
        </StreetName>
        <StreetSuffix/>
        <PostDirectional/>
        <AddressLine2/>
        <City>
            Washington
        </City>
        <StateCode>
            DC
        </StateCode>
        <Zip>
            20500
        </Zip>
        <PlusFour/>
        <County/>
        <Country>
            United States
        </Country>
        <AddressType>
            Service
        </AddressType>
    </Address>
    <PremiseTrunks>
        PremiseTrunks
    </PremiseTrunks>
    <CallingName>
        <Display>
            true
        </Display>
        <Enforced>
            true
        </Enforced>
    </CallingName>
</SipPeer>
```


{% common %}


## Example : Sip Peer created

* Response: 201

{% sample lang="xml" %}

```xml

```

## Example : Bad Request. Possible errors in response:
   Possible errors in response:
   <ul>
        <li>13569 "A termination host with HostName = 2.1.1.9 is already in use"</li>
        <li>13562 "Must have either no hosts or SmsHosts and TerminationHosts"</li>
        <li>13509 "'wrong.ip' is not a valid host. Provide valid IP or domain name"</li>
        <li>13553 "Duplicate host (and port) in VoiceHosts"</li>
        <li>13510 "'wrong.url' is not a valid Destination URI"</li>
        <li>13522 "IsDefaultPeer cannot be false right now. The account requires at least one Default Sip Peer"</li>
        <li>13552 "A termination host with HostName = %s and Port = %s is already in use"</li>
        <li>12024 "Region with state '%s' and country '%s' does not exist"</li>
        <li>13576 "Account 9999999 has no CNAM product feature"</li>
        <li>13581 "Display option is missing"</li>
        <li>13582 "Enforce option is missing"</li>
        <li>13590 "The supplied CustomerTrafficAllowed and DataAllowed values on host %s:%s are not allowed for this sippeer"</li>
        <li>13591 "Termination Settings at the SIP Peer level are not allowed for accounts with the 'DedicatedPrivateNetworkTopology' product."</li>
        <li>13592 "Calling name 'Display' and 'Enforced' values can't be updated for 'DedicatedPrivateNetworkTopology' account.</li>
        <li>13593 "%s has invalid mask. Valid mask values: 20-32"</li>
        <li>13594 "%s is not valid host"</li>
        <li>13595 "The IP address provided: %s contains a non zero subnet portion. An equivalent IP address such as %s with a zero subnet value must be provided."</li>
   </ul>


* Response: 400

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerResponse>
    <ResponseStatus>
        <ErrorCode>
            13582
        </ErrorCode>
        <Description>
            Enforce option is missing
        </Description>
    </ResponseStatus>
</SipPeerResponse>
```

## Example : Conflict - Sip Peer with such name already exists

* Response: 409

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerResponse>
    <ResponseStatus>
        <ErrorCode>
            13524
        </ErrorCode>
        <Description>
            SipPeer name 'testDocSipPeers1' already exists for Account '9999999' and Site '45'
        </Description>
    </ResponseStatus>
</SipPeerResponse>
```

## Example : Service unavailable

* Response: 503

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerResponse>
    <ResponseStatus>
        <ErrorCode>
            13566
        </ErrorCode>
        <Description>
            Our E911 service is unavaliable
        </Description>
    </ResponseStatus>
</SipPeerResponse>
```


{% endmethod %}