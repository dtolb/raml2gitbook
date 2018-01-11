{% method %}
## /accounts/{accountId}/lidbs

Create a LIDB order to associate Calling Name Information with a TN or list of CountOfTNs
The key data elements in the submission are -
    <table style="text-align: left; width: 80%;"
     border="1" cellpadding="2" cellspacing="2">
      <tbody>
        <tr>
          <td>TelephoneNumbers</td>
          <td>A list of telephone numbers that will all assume the SubscriberInformation that is listed in the payload.  In an enterprise context it is not uncommon for all of the served telephone numbers to use the same string for the Subscriber Information.</td>
        </tr>
        <tr>
          <td>SubscriberInformation</td>
          <td>This is the field that is displayed to the user receiving the phone call from the Telephone numbers in the TelephoneNumberList</td>
        </tr>
        <tr>
          <td>UseType</td>
          <td>Can be RESIDENTIAL or BUSINESS.  The element is required.</td>
        </tr>
        <tr>
          <td>Visibility</td>
          <td>Can be PRIVATE or PUBLIC.   If it is tagged as PRIVATE then the data will be provided, but the display will not be provided on a standard phone call.  The element is required</td>
        </tr>
        <tr>
          <td>CustomerOrderId</td>
          <td>The Customer Order ID is an ID assigned by the account owner to provide a reference number for the Order.  The element is optional.</td>
        </tr>
      </tbody>
    </table>



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |





## Example Request
```xml
<LidbOrder>
    <CustomerOrderId>
        [String]
    </CustomerOrderId>
    <LidbTnGroups>
        <LidbTnGroup>
            <TelephoneNumbers>
                <TelephoneNumber>
                    8045030097
                </TelephoneNumber>
                <TelephoneNumber>
                    8045030098
                </TelephoneNumber>
            </TelephoneNumbers>
            <SubscriberInformation>
                Joes Garage
            </SubscriberInformation>
            <UseType>
                RESIDENTIAL
            </UseType>
            <Visibility>
                PUBLIC
            </Visibility>
        </LidbTnGroup>
        <LidbTnGroup>
            <TelephoneNumbers>
                <TelephoneNumber>
                    8888595935
                </TelephoneNumber>
            </TelephoneNumbers>
            <SubscriberInformation>
                Joes Storage
            </SubscriberInformation>
            <UseType>
                RESIDENTIAL
            </UseType>
            <Visibility>
                PRIVATE
            </Visibility>
        </LidbTnGroup>
    </LidbTnGroups>
</LidbOrder>
```


{% common %}


## Example : The 201 response indicates that an order has been created to monitor and manage the request to establish a LIDB CNAME record registered with the network.
The <b>location</b> header in the response contains a URL that refers to the created order, including an echo of the order as requested.
Errors in processing the request will be articulated in the ErrorList component of the response.


* Response: 201

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<LidbOrderResponse>
    <LidbOrder>
        <orderId>
            1d863522-c9bf-430c-8e79-cc63cad04a1d
        </orderId>
        <CustomerOrderId>
            [String]
        </CustomerOrderId>
        <ProcessingStatus>
            RECEIVED
        </ProcessingStatus>
        <ErrorList>
            <Error>
                <TelephoneNumber>
                    8888595935
                </TelephoneNumber>
                <Code>
                    11020
                </Code>
                <Description>
                    Cannot add LIDB to a telephone number that already has LIDB or is in process
                </Description>
            </Error>
        </ErrorList>
        <LidbTnGroups>
            <LidbTnGroup>
                <TelephoneNumbers>
                    <TelephoneNumber>
                        8045030097
                    </TelephoneNumber>
                    <TelephoneNumber>
                        8045030098
                    </TelephoneNumber>
                </TelephoneNumbers>
                <SubscriberInformation>
                    Joes Garage
                </SubscriberInformation>
                <UseType>
                    RESIDENTIAL
                </UseType>
                <Visibility>
                    PUBLIC
                </Visibility>
            </LidbTnGroup>
            <LidbTnGroup>
                <TelephoneNumbers>
                    <TelephoneNumber>
                        8888595935
                    </TelephoneNumber>
                </TelephoneNumbers>
                <SubscriberInformation>
                    Joes Storage
                </SubscriberInformation>
                <UseType>
                    RESIDENTIAL
                </UseType>
                <Visibility>
                    PRIVATE
                </Visibility>
            </LidbTnGroup>
        </LidbTnGroups>
    </LidbOrder>
</LidbOrderResponse>
```

## Example : Bad Request
A 400 Bad Request indicates that the processing of the request payload has detected a syntactic error that prevents further processing.  No order is created under these conditions, and the request must be corrected and re-submitted before an order can be created.
Error text and an error code will be provided in the ErrorList element.


* Response: 400

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<LidbOrderResponse>
    <Status>
        <Code>
            400
        </Code>
        <Description>
            Validation Failed. Please check your input parameters.
        </Description>
    </Status>
    <ErrorList>
        <Error>
            <Code>
                11007
            </Code>
            <Description>
                No visibility supplied. Visibility must be one of the following - PUBLIC, PRIVATE
            </Description>
        </Error>
    </ErrorList>
    <LidbOrder>
        <LidbTnGroups>
            <LidbTnGroup>
                <TelephoneNumbers>
                    <TelephoneNumber>
                        9199998830
                    </TelephoneNumber>
                </TelephoneNumbers>
                <SubscriberInformation>
                    Joes Garage
                </SubscriberInformation>
                <UseType>
                    RESIDENTIAL
                </UseType>
            </LidbTnGroup>
        </LidbTnGroups>
    </LidbOrder>
</LidbOrderResponse>
```


{% endmethod %}