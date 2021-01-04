---------------------------
Author Name:IanGSalmon
**MYOB Advanced Element**  
This element allows the creation of an element instance for the MYOB Advanced REST API.
#  
**Vendor Documentation**  
[{MYOB_Advanced_Instance_URL}/(W(3))/Help?ScreenId=ShowWiki&pageid=a9584be3-f2bd-4d67-80d4-8041d809df56]({MYOB_Advanced_Instance_URL/(W(3))/Help?ScreenId=ShowWiki&pageid=a9584be3-f2bd-4d67-80d4-8041d809df56)  
- *MYOB_Advanced_Instance_URL*, refers to the URL of the MYOB Advanced instance to which your client application connects.
  - For example, *https://mycompany-demo.myobadvanced.com*  
#  
**Resources**  
This element contains full CRUD capability *(GET, POST, PATCH, DELETE)* for the following resources *(element resource name followed by MYOB Advanced vendor name)*:  
- ap-payments
  - Check
- ar-payments
  - Payment
- bills
  - Bill
- currencies
  - Currency
- customers
  - Customer
- invoices
  - Invoice
- item-categories
  - ItemClass
- purchase-orders
  - PurchaseOrder
- purchase-receipts
  - PurchaseReceipt
- sales-orders
  - SalesOrder
- stock-items
  - StockItem
- taxes
  - Tax
- vendors
  - Vendor

This element contains POST functionality for the following resource:  
- release-appayments
  - Check/ReleaseCheck
- release-arpayments
  - Payment/ReleasePayment
- release-purchase-receipts
  - PurchaseReceipt/ReleasePurchaseReceipt
- release-purchaseinvoices
  - Bill/ReleaseBill
- release-salesinvoices
  - Invoice/ReleaseInvoice
- reverse-purchaseinvoices
  - Bill/ReverseBill
- reverse-salesinvoices
  - Invoice/ReverseInvoice
#  
**Authentication Parameters**  
- *API Version* 
  - Version of the MYOB Advanced REST API. Please note: v. 17.200.001 was used for development and testing of this MYOB Advanced Element.  

- *MYOB Instance URL* 
  - The URL of the MYOB Advanced instance to which your client application connects. For example, *https://mycompany-demo.myobadvanced.com*.  

- *OAuth API Key* 
  - Client Id provided when a Cloud Elements connected application is created. 
    - You can create a new connected application by navigating to Integration, and then Connected Applications from your MYOB Advanced dashboard.
      - Please note that when creating a new Connected Application the redirect URI must be set as *https://auth.cloudelements.io/oauth*   

- *OAuth API Secret* 
  - Client Secret provided when a Cloud Elements connected application is created.   
  #  
  **Bulk**  
  This MYOB Advanced element has Cloud Elements (pagination-based) bulk supported for all of the aforementioned resources.  
  #  
  **Polling**  
  This MYOB Advanced element can create events in the Cloud Elements platform via polling on individual objects. The following objects have polling enabled:
    - customers
    - taxes
    - vendors
    - currencies
    - invoices
    - salesOrders
    - itemCategories