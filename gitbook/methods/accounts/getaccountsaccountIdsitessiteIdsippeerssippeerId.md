{% method %}
## /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}

Retrieve a the data associated with a Sip Peer



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `siteId` | string | true |
| `sippeerId` | string | true |






{% common %}


## Example : A successful result that contains the response data

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerResponse>
    <SipPeer>
        <PeerId>
            304985
        </PeerId>
        <PeerName>
            CNAM-TEST-778
        </PeerName>
        <Description>
            description
        </Description>
        <IsDefaultPeer>
            false
        </IsDefaultPeer>
        <ShortMessagingProtocol>
            SMPP
        </ShortMessagingProtocol>
        <VoiceHosts/>
        <VoiceHostGroups/>
        <SmsHosts/>
        <TerminationHosts/>
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
        <CallingName>
            <Display>
                false
            </Display>
            <Enforced>
                false
            </Enforced>
        </CallingName>
    </SipPeer>
</SipPeerResponse>
```

## Example : Bad request - Sip Peer id is wrong

* Response: 400

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerResponse>
    <ResponseStatus>
        <ErrorCode>
            13563
        </ErrorCode>
        <Description>
            Sip Peer '316167' account '9999999' and site '45' does not exist
        </Description>
    </ResponseStatus>
</SipPeerResponse>
```


{% endmethod %}