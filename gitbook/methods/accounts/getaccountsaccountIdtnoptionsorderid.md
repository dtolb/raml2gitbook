{% method %}
## /accounts/{accountId}/tnoptions/{orderid}

Retrieve information about a TN Option Order with specified ID.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `orderid` | string | true |






{% common %}


## Example : The descriptive payload for the TN Option Orders query provides a broad range of information about the TN Option Order identified in the URL.  Included amongst the information is:
<ul>
<li>ErrorList - the errors discovered with codes and explanations</li>
<li>ProcessingStatus(RECEIVED, PROCESSING, COMPLETE, PARTIAL, FAILED) - the overall status of the order</li>
</ul>


* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<TnOptionOrder>
    <OrderCreateDate>
        2016-01-15T11:22:58.789Z
    </OrderCreateDate>
    <AccountId>
        14
    </AccountId>
    <CreatedByUser>
        jbm
    </CreatedByUser>
    <OrderId>
        409033ee-88ec-43e3-85f3-538f30733963
    </OrderId>
    <LastModifiedDate>
        2016-01-15T11:22:58.969Z
    </LastModifiedDate>
    <ProcessingStatus>
        COMPLETE
    </ProcessingStatus>
    <TnOptionGroups>
        <TnOptionGroup>
            <CallingNameDisplay>
                on
            </CallingNameDisplay>
            <TelephoneNumbers>
                <TelephoneNumber>
                    2174101601
                </TelephoneNumber>
            </TelephoneNumbers>
        </TnOptionGroup>
        <TnOptionGroup>
            <CallingNameDisplay>
                off
            </CallingNameDisplay>
            <TelephoneNumbers>
                <TelephoneNumber>
                    2174101602
                </TelephoneNumber>
            </TelephoneNumbers>
        </TnOptionGroup>
        <TnOptionGroup>
            <CallingNameDisplay>
                systemdefault
            </CallingNameDisplay>
            <FinalDestinationURI>
                sip:+12345678901@1.2.3.4:5060
            </FinalDestinationURI>
            <TelephoneNumbers>
                <TelephoneNumber>
                    2174101603
                </TelephoneNumber>
            </TelephoneNumbers>
        </TnOptionGroup>
    </TnOptionGroups>
    <ErrorList/>
</TnOptionOrder>
```

## Example : NOT FOUND - the order id does not exist in the system

* Response: 404

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<TnOptionOrderReportResponse>
    <ResponseStatus>
        <Description>
            The resource does not exist
        </Description>
    </ResponseStatus>
</TnOptionOrderReportResponse>
```


{% endmethod %}