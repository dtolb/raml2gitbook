{% method %}
## /accounts/{accountId}/applications/{applicationId}/associatedsippeers

Retrieve a list of sippeers, associated with application


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `applicationId` | string | true |






{% common %}


## Example : 

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<AssociatedSipPeersResponse>
    <AssociatedSipPeers>
        <AssociatedSipPeer>
            <siteId>
                482
            </siteId>
            <siteName>
                site_e867f
            </siteName>
            <peerId>
                500018
            </peerId>
            <peerName>
                sippeer-e867f
            </peerName>
        </AssociatedSipPeer>
        <AssociatedSipPeer>
            <siteId>
                483
            </siteId>
            <siteName>
                site_e867d
            </siteName>
            <peerId>
                500019
            </peerId>
            <peerName>
                sippeer-e867d
            </peerName>
        </AssociatedSipPeer>
    </AssociatedSipPeers>
</AssociatedSipPeersResponse>
```

## Example : 

* Response: 400

{% sample lang="xml" %}

```xml
<AssociatedSipPeersResponse>
    <ResponseStatus>
        <ErrorCode>
            12103
        </ErrorCode>
        <Description>
             Current 1 Account have no Catapult association 
        </Description>
    </ResponseStatus>
</AssociatedSipPeersResponse>
```

## Example : 

* Response: 404

{% sample lang="xml" %}

```xml
<AssociatedSipPeersResponse>
    <ResponseStatus>
        <ErrorCode>
            13629
        </ErrorCode>
        <Description>
             Application with id 'non_existing' not found 
        </Description>
    </ResponseStatus>
</AssociatedSipPeersResponse>
```


{% endmethod %}