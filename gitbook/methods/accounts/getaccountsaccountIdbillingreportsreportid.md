{% method %}
## /accounts/{accountId}/billingreports/{reportid}




### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `reportid` | string | true |






{% common %}


## Example : A 200 indicates that the request is valid. The payload indicates the report status: <br>
<ul>
    <li><b>PROCESSING</b> - The requested report archive is still being constructed, please check back later.</li>
    <li><b>COMPLETED</b> - The report archive is constructed.</li>
</ul>
For <b>COMPLETED</b> report, fetching the file can be done by issuing a GET request to the resource path in the Location Header.


* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<BillingReportRetrievalResponse>
    <ReportStatus>
        COMPLETED
    </ReportStatus>
    <Description>
        The report archive is constructed.
    </Description>
</BillingReportRetrievalResponse>
```

## Example : A 400 indicates that the report ID is malformed.


* Response: 400

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<BillingReportRetrievalResponse>
    <ResponseStatus>
        <ErrorCode>
            1008
        </ErrorCode>
        <Description>
            '9b428b4c-159b-465f-9667-' is not a valid UUID
        </Description>
    </ResponseStatus>
</BillingReportRetrievalResponse>
```

## Example : A 404 indicates that the requested report cannot be found.


* Response: 404

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<BillingReportRetrievalResponse>
    <ResponseStatus>
        <ErrorCode>
            15603
        </ErrorCode>
        <Description>
            The requested report was not found.
        </Description>
    </ResponseStatus>
</BillingReportRetrievalResponse>
```


{% endmethod %}