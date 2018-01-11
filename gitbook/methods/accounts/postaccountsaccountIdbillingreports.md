{% method %}
## /accounts/{accountId}/billingreports

The payload for the POST declares the date range and type for the desired reports. The valid Types are... <ul> <li>BDR - Billing Detail Records - per call information</li> <li>MDR - Message Detail Records - per messagin information</li> <li>INVOICE - A copy of the invoice file or files for the specified date range</li> <li>STATEMENT&#95;BDR - BDR records that are aligned with the invoice</li> <li>DID&#95;SNAPSHOT - a list of telephone numbers aligned as closely as we can with the billing window</li> </ul>


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |





## Example Request
```xml
<BillingReport>
    <Type>
        BDR
    </Type>
    <DateRange>
        <StartDate>
            2013-05-21
        </StartDate>
        <EndDate>
            2013-05-29
        </EndDate>
    </DateRange>
</BillingReport>
```


{% common %}


## Example : A 201 response means that the response file is currently being constructed. Constructing the file takes time, so this does not indicate that the information is available.<br>
The response also includes header information in the Location Header that can be used for retrieving the state of the report.<br>
An informative payload is also included in success and failure cases.


* Response: 201

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<BillingReportCreationResponse>
    <ReportStatus>
        RECEIVED
    </ReportStatus>
    <Description>
        The report archive is currently being constructed.
    </Description>
</BillingReportCreationResponse>
```

## Example : A 400 response indicates that there was an error in processing the payload, perhaps something like incorrectly formatted or chosen dates.


* Response: 404

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<BillingReportCreationResponse>
    <ResponseStatus>
        <ErrorCode>
            15501
        </ErrorCode>
        <Description>
            Invalid date range. Start date 2014-05-21 must be before end date 2013-05-29
        </Description>
    </ResponseStatus>
</BillingReportCreationResponse>
```


{% endmethod %}