{% method %}
## /accounts/{accountId}/aeuis

GET is used to retrieve all Alternate end user identifiers.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |


### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `page` | string | false | An ID of the first element in a page.  This value will indicate the first value, not the count, of the initial entry in the page being requested.<br> It can be an acid of alternate end user identifier. The initial page is tagged with the ID '1'. |
| `size` | integer | false | The number of items to include in a page. |
| `aeui` | string | false | The Alternate end user identifier associated with callback using E911 order. |
| `callback` | string | false | Callback telephone number associated with AEUI using E911 oder. |
| `pidfloenabledonly` | boolean | false | This parameter allows to retrieve PIDF-LO enabled only AEUIs. |




{% common %}


## Example : OK - the AEUIs retrieval request will return a list of all AEUIs.


* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<AlternateEndUserIdentifiersResponse>
    <TotalCount>
        2
    </TotalCount>
    <Links>
        <first>
            Link=&lt;http://localhost:8080/iris/accounts/14/aeuis?page=1&amp;size=500&gt;;rel="first";
        </first>
    </Links>
    <AlternateEndUserIdentifiers>
        <AlternateEndUserIdentifier>
            <Identifier>
                DavidAcid
            </Identifier>
            <CallbackNumber>
                8042105760
            </CallbackNumber>
        </AlternateEndUserIdentifier>
        <AlternateEndUserIdentifier>
            <Identifier>
                JohnAcid
            </Identifier>
            <CallbackNumber>
                8042105618
            </CallbackNumber>
        </AlternateEndUserIdentifier>
    </AlternateEndUserIdentifiers>
</AlternateEndUserIdentifiersResponse>
```

## Example : Not Found - if the account specified does not exist or is locked or there are no AEUIs for specified search criteria it will result in a "NOT FOUND" response.


* Response: 404

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<AlternateEndUserIdentifiersResponse>
    <ResponseStatus>
        <ErrorCode>
            12087
        </ErrorCode>
        <Description>
            Alternate End User Identifiers were not found.
        </Description>
    </ResponseStatus>
</AlternateEndUserIdentifiersResponse>
```


{% endmethod %}