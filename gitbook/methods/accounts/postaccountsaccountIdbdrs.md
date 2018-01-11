{% method %}
## /accounts/{accountId}/bdrs

Request a collection of BDRs be aggregated and ZIPped ready for distribution.  The payload for the POST declares the date range for the request.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |





## Example Request
```xml
<Bdr>
    <StartDate>
        2015-04-01
    </StartDate>
    <EndDate>
        2015-04-30
    </EndDate>
</Bdr>
```


{% common %}


## Example : A 202 Accepted means that the request has been received and will be processed.  Processing the request takes time, so this does not indicate that the information is available, it simply indicates that the request has started processing. <br>
The response also includes header information in the Location Header that can be used for retrieving the state of the request.<br>
An informative payload is also included in success and failure cases.


* Response: 202

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<BdrCreationResponse>
    <Info>
        Your BDR archive is currently being constructed
    </Info>
</BdrCreationResponse>
```

## Example : A 400 response indicates that there was an error in processing the payload, perhaps something like incorrectly formatted or chosen dates.


* Response: 404

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<BdrCreationResponse>
    <ResponseStatus>
        <ErrorCode>
            15501
        </ErrorCode>
        <Description>
            Invalid date range. Start date 2015-06-01 must be before end date 2015-04-30
        </Description>
    </ResponseStatus>
</BdrCreationResponse>
```


{% endmethod %}