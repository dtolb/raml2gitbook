# Bandwidth Dashboard REST API Documentation API documentation version v1
https://dashboard.bandwidth.com/api/

---

## /accounts
The account is the root resource for many of the operations in the Bandwidth Dashboard API.  <br>
The account is represented by an account id, which is the resource that represents a Bandwidth customer, providing a root resource for all of the customer's attributes and services <br>
The API calls that are used to manage the details of a customer account, and to manage the resources that a Bandwidth customer has access to or control over, are accessed through the /accounts resource.

### /accounts/{accountId}
This API retrieves and updates an account's information as specified by the given account ID. Access to information pertaining to a specific account will require credentials that have been assigned to that account, preserving the security of a customer’s information. <br>Note that DELETE is currently unsupported.

### /accounts/{accountId}/applications
The application is internal Catapult resource that will provide Iris with possibility to send and recieve sms to/from outside world.  <br>
The application is represented by an application id. <br>
The API calls that are used to manage the details of a application and to manage the application that a Bandwidth customer has access to or control over, are accessed through the /accounts/{accountId}/channles/applications resource.

* **post** *(secured)*: Create an Application

### /accounts/{accountId}/applications/{applicationId}

* **get** *(secured)*: Retrieve an Application
* **put** *(secured)*: Update an Application
* **patch** *(secured)*: Patch update an Application
* **delete** *(secured)*: Delete an Application

### /accounts/{accountId}/applications/{applicationId}/associatedsippeers

* **get** *(secured)*: Retrieve a list of sippeers, associated with application

### /accounts/{accountId}/sites
Use this method to add or update a site to an existing account. <br>
Each site creation or update must have the following input parameters:
<table>
    <tr>
        <th>Parameter</th><th>Description</th>
    </tr>
    <tr>
        <td>accountid</td><td>The numerical Account ID that you will be adding the site to.</td>
    </tr>
    <tr>
        <td>Name</td><td>The name of the site. Max length restricted to 10 characters.</td>
    </tr>
    <tr>
        <td>Description</td><td>Customer provided description of the site.</td>
    </tr>
    <tr>
        <td>Address</td><td>Service Address for the site.</td>
    </tr>
    <tr>
        <td>CustomerProvidedID</td><td>Customer can provide an optional id (max 10 digits). Note that the customer can use the same id across multiple orders.</td>
    </tr>
    <tr>
        <td>CustomerName</td><td>Customer can provide an optional name</td>
    </tr>
    <tr>
        <td>UcTrunkingConfiguration</td><td>For UC Trunking accounts the UcTrunkingConfiguration element describes the kind of UC trunking that is provided.  The <b>Type</b> parameter is one of Seats, Premise, or Cloud, and the <b>UsageCategory</b> parameter is one of UC250, UC500 or UC1000. </td>
    </tr>
</table>

* **get** *(secured)*: retrieve a list of all the sites associated with the account
* **post** *(secured)*: Add a site to the account

### /accounts/{accountId}/sites/{siteId}
This method updates or deletes a site based on the id, as well as adds a SIP Peer to the given site.

### /accounts/{accountId}/sites/{siteId}/sippeers
The SIP Peer API is used to display and configure SIP Peers

The values for this payload are as follows:
<table border="1">
<tbody>
    <tr>
        <th>Element</th>
        <th>Description</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>SiteId</td>
        <td>The internally allocated SIP Peer ID</td>
        <td>12345</td>
    </tr>
    <tr>
        <td>PeerName</td>
        <td>Mandatory name for the SIP Peer (Max 10 chars)</td>
        <td>Downtown Branch</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>Optional description for the SIP Peer</td>
        <td></td>
    </tr>
    <tr>
        <td>IsDefaultPeer</td>
        <td>Value is True or False. The Default SIP Peer is the default "destination" for any Telephone Numbers that are ordered for the Site in which the SIP Peer resides.&nbsp; Each site can have only 1 default SIP Peer. You can configure multiple SIP Peers on a Site</td>
        <td></td>
    </tr>
    <tr>
        <td>ShortMessagingProtocol</td>
        <td>Used to specify the protocol used by the endpoints for exchanging SMS messages: allowed values are SIP and SMPP.&nbsp; The element is optional, with a default of SMPP.&nbsp; This element can be updated if SMS is enabled on the Account and SIP Peer.</td>
        <td></td>
    </tr>
    <tr>
        <td>HostName</td>
        <td>The IP Address or Host Name of the address to be used for the SmsHosts, VoiceHosts or VoiceHostGroups addresses.</td>
        <td></td>
    </tr>
    <tr>
        <td>Port</td>
        <td>Optional Port Number for Voice and Termination hosts. This is an optional parameter that has default values that are dependent on the Application.&nbsp; It is not valid for SMS.</td>
        <td></td>
    </tr>
    <tr>
        <td>VoiceHosts</td>
        <td>These addresses, comprised of HostName and optional Port, are used by the Bandwidth network to send calls to for Origination services. The VoiceHosts list of IP addresses used for an active/standby address selection mechanism, where the first address is attempted, followed by the second address and so on.  Except under failure situations the first address in the list is preferred. Maximum of 10 hosts - can be IP address or Fully Qualified Domain Name</td>
        <td></td>
    </tr>
    <tr>
        <td>VoiceHostGroups</td>
        <td>The VoiceHostGroups element is comprised of a list of up to five VoiceHostGroup elements, each of which is used to randomly distribute traffic amongst up to 10 IP addresses.  One of the VoiceHostGroups elements in the group is chosen at random to receive traffic, and then the calls are placed at random amongst the addresses in the group.  Once a group is chose, failover behavior is retained within the group.</td>
        <td></td>
    </tr>
    <tr>
        <td>VoiceHostGroup</td>
        <td>A VoiceHostGroup is a list of IP Addresses (the Host element).  This traffic distribution model distributes traffic in a Random manner amongst the addresses in the group.</td>
        <td></td>
    </tr>
    <tr>
        <td>SmsHosts</td>
        <td>Used for SMS traffic only – can be IP address of Fully Qualified Domain Name</td>
        <td></td>
    </tr>
    <tr>
        <td>TerminationHosts</td>
        <td>These addresses, comprised of IP or Subnet(CIDR format) and optional Port, are used by the Bandwidth network to send calls to for Termination services. Maximum of 10 hosts - can be IP address or subnets. In case of subnet you should specify NetworkAddress of subnet as IP.</td>
        <td>135.23.78.145 or
        <br>
        12.45.67.48/29
        </td>
    </tr>
    <tr>
        <td>CustomerTrafficAllowed</td>
        <td>A TerminationHost can be configured to allow different customer traffic types.&nbsp; Allowed values are LITE, DOMESTIC and ALL. This is an optional parameter.</td>
        <td></td>
    </tr>
    <tr>
        <td>DataAllowed</td>
        <td>True or False (Enables or Disables SMS messaging for a TerminationHost). Optional parameter.</td>
        <td></td>
    </tr>
    <tr>
        <td>Address</td>
        <td>Billing or Service Address for the SIP Peer.&nbsp;
            This element is optional for accounts except for accounts with the UC
            Trunking Product.&nbsp; If the address element is provided the
            following fields can be provided, some of which are Mandatory:<br>
            &nbsp;&nbsp;&nbsp; HouseNumber - MANDATORY<br>
            &nbsp;&nbsp;&nbsp; HouseSuffix - OPTIONAL<br>
            &nbsp;&nbsp;&nbsp; PreDirectional - OPTIONAL<br>
            &nbsp;&nbsp;&nbsp; StreetName - MANDATORY<br>
            &nbsp;&nbsp;&nbsp; StreetSuffix - OPTIONAL<br>
            &nbsp;&nbsp;&nbsp; PostDirectional- OPTIONAL<br>
            &nbsp;&nbsp;&nbsp; AddressLine2- OPTIONAL<br>
            &nbsp;&nbsp;&nbsp; City - MANDATORY<br>
            &nbsp;&nbsp;&nbsp; StateCode - MANDATORY<br>
            &nbsp;&nbsp;&nbsp; Zip - MANDATORY<br>
            &nbsp;&nbsp;&nbsp; PlusFour - OPTIONAL<br>
            &nbsp;&nbsp;&nbsp; County - OPTIONAL<br>
            &nbsp;&nbsp;&nbsp; Country - OPTIONAL (Defaults to 'US')<br>
            &nbsp;&nbsp;&nbsp; AddressType - MANDATORY (Billing or
            Service)</td>
        <td></td>
    </tr>
    <tr>
      <td>CallingName</td>
      <td>Determines whether the Calling Name Displayl service is applied to the Telephone Numbers associates with the SIP Peer</td>
      <td></td>
    </tr>
    <tr>
      <td>Display</td>
      <td>Controls the Display of Calling Name information. If &lt;true> then the calling name information is displayed by default for all calls,</td>
      <td></td>
    </tr>
    <tr>
      <td>Enforced</td>
      <td>Determines whether the Default Display behavior (Display) is enforced for all TNs associated with the SIP Peer.  If &lt;true> then no TN-level overrde is possible</td>
      <td></td>
    </tr>
    <tr>
      <td>FinalDestinationURI</td>
      <td>Last attempt for routing of calls </td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    </tbody>
</table>

* **post** *(secured)*: Create a Sip Peer

### /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}
The SIPpeerID Resource deals with retrieving or updating a specific identified SIP Peer, identified by the SIP Peer ID.
The elements of the payload are described in the /sippeers resource.

### /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/products
This API will expose products that are associated directly with the SIP Peer.
At this time all of these products are limited to Admin access, and not exposed to the normal user base

The current products that can be associated with a SIP Peer are: <br>
* Termination <br>
* EdgeManagement <br>
* Messaging <br>
* Origination <br>

* **get** *(secured)*: list the products associated with a SIP Peer

### /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/products/messaging/features/sms

* **get** *(secured)*: Retrieve sms feature settings for sippeer

* **post** *(secured)*: Set sms feature settings

* **put** *(secured)*: update sms feature settings
* **delete** *(secured)*: delete sms settings

### /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/products/messaging/features/mms

* **get** *(secured)*: Retrieve mms feature settings for sippeer

* **post** *(secured)*: Set mms feature settings

* **put** *(secured)*: update mms feature settings
* **delete** *(secured)*: delete mms settings

### /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/products/messaging/features/mms/settings

* **get** *(secured)*: Retrieve mms feature settings for sippeer

### /accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}/products/messaging/applicationSettings

* **get** *(secured)*: Retrieve sipper application settings

* **put** *(secured)*: create/update/delete application settings for sippeer (use value 'REMOVE' to unassing application)

