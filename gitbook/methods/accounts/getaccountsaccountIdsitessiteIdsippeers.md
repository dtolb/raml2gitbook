{% method %}
## /accounts/{accountId}/sites/{siteId}/sippeers

Retrieve information about a Sip Peer or set of Sip Peers


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `siteId` | string | true |






{% common %}


## Example : A successful result that contains the response data

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<TNSipPeersResponse>
    <SipPeers>
        <SipPeer xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="SipPeer">
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
    </SipPeers>
</TNSipPeersResponse>
```


{% endmethod %}