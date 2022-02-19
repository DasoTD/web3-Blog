 axios.post(ADMIN_INITIATOR, {
        userId: bid.UserId,
        admin_UserId: authUser.UserId,
        investment_ID: bid.Investment_ID
      });


      axios.post(SINGLE_USER_BY_ADMIN_NOTIFICATION, {
        userId: bid.UserId,
        title: "INVESTMENT ALERT",
        body: `Your bid to ${bid.Title}  has been rejected`
      })

      axios.post(ALL_USER_BY_ADMIN_NOTIFICATION, {
        title: "INVESTMENT ALERT",
        body: `A new investment ${investment.Title} has been created and will expire on ${investment.ExpiryDate}`,
      })

      import CryptoJS from "crypto-js";



export const _key = "9876543210abcdef";
export const _iv = "S2rgj6UC6dYt9MWx";



export const encryptionBase64 = t =>
CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(t));



export const decryptionBase64 = t =>
CryptoJS.enc.Base64.parse(t).toString(CryptoJS.enc.Utf8);




export const decryptionData = (data, key, iv) => {
const iv64 = decryptionBase64(encryptionBase64(iv));
const code = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
iv: CryptoJS.enc.Utf8.parse(iv64),
mode: CryptoJS.mode.ECB,
padding: CryptoJS.pad.Pkcs7,
});
return code.toString(CryptoJS.enc.Utf8);
};



export const encryptData = (data, key, iv) => {



const code = CryptoJS.AES.encrypt(JSON.stringify(data), CryptoJS.enc.Utf8.parse(key), {
iv: CryptoJS.enc.Utf8.parse(encryptionBase64(iv)),
mode: CryptoJS.mode.ECB,
padding: CryptoJS.pad.Pkcs7,
});



return code.ciphertext.toString(CryptoJS.enc.Base64);
}

{
  "status": "success",
  "data": {
      "message": "logs fetched successfully",
      "logs": {
          "count": 15,
          "rows": [
              {
                  "id": "265D389E-33A7-4730-8C96-0266651AE628",
                  "Initiator": "David Daso",
                  "UserId": "5CE99E1F-85C1-4D04-B2EE-E931BC6E4648",
                  "Module": "Investment Management",
                  "Target": " undefined",
                  "Action": "updated",
                  "Description": "investment",
                  "CreatedAt": "2022-02-18T13:55:51.681Z",
                  "UpdatedAt": "2022-02-18T13:55:51.681Z"
              },
              {
                  "id": "8D8F9C16-D088-4B26-A0A8-19A28F81C284",
                  "Initiator": "Cleave Owhiroro",
                  "UserId": "6064B57A-A6AD-4DEB-AD3F-20EA799C7EE9",
                  "Module": "Investment Management",
                  "Target": " undefined",
                  "Action": "updated",
                  "Description": "investment",
                  "CreatedAt": "2022-02-18T13:37:35.813Z",
                  "UpdatedAt": "2022-02-18T13:37:35.813Z"
              },
              {
                  "id": "1B5AB884-DD78-47D5-94DD-1CB7FABD940E",
                  "Initiator": "David Daso",
                  "UserId": "5CE99E1F-85C1-4D04-B2EE-E931BC6E4648",
                  "Module": "Investment Management",
                  "Target": " Flexz t",
                  "Action": "added  ",
                  "Description": "investment",
                  "CreatedAt": "2022-02-18T12:43:59.271Z",
                  "UpdatedAt": "2022-02-18T12:43:59.271Z"
              },
              {
                  "id": "A91148DE-AA8B-43D2-8A9D-41E2EBEC63AC",
                  "Initiator": "David Daso",
                  "UserId": "5CE99E1F-85C1-4D04-B2EE-E931BC6E4648",
                  "Module": "Investment Management",
                  "Target": " A new test",
                  "Action": "updated",
                  "Description": "investment",
                  "CreatedAt": "2022-02-18T14:20:12.831Z",
                  "UpdatedAt": "2022-02-18T14:20:12.831Z"
              },
              {
                  "id": "1FF63154-37AA-4E36-9518-648C01272365",
                  "Initiator": "Cleave Owhiroro",
                  "UserId": "6064B57A-A6AD-4DEB-AD3F-20EA799C7EE9",
                  "Module": "Investment Management",
                  "Target": " undefined",
                  "Action": "updated",
                  "Description": "investment",
                  "CreatedAt": "2022-02-18T12:57:12.018Z",
                  "UpdatedAt": "2022-02-18T12:57:12.018Z"
              },
              {
                  "id": "E688D01A-372B-4E7C-877F-6A5B53BB2BC5",
                  "Initiator": "David Daso",
                  "UserId": "5CE99E1F-85C1-4D04-B2EE-E931BC6E4648",
                  "Module": "Investment Management",
                  "Target": " undefined",
                  "Action": "updated",
                  "Description": "investment",
                  "CreatedAt": "2022-02-18T14:06:52.667Z",
                  "UpdatedAt": "2022-02-18T14:06:52.667Z"
              },
              {
                  "id": "A9ABC075-68A7-430B-9287-6B4286CB775E",
                  "Initiator": "David Daso",
                  "UserId": "5CE99E1F-85C1-4D04-B2EE-E931BC6E4648",
                  "Module": "Investment Management",
                  "Target": " undefined",
                  "Action": "updated",
                  "Description": "investment",
                  "CreatedAt": "2022-02-18T13:50:50.546Z",
                  "UpdatedAt": "2022-02-18T13:50:50.546Z"
              },
              {
                  "id": "DC9DDE1D-4ED7-4EA6-9E8E-7D9204BDA199",
                  "Initiator": "Cleave Owhiroro",
                  "UserId": "6064B57A-A6AD-4DEB-AD3F-20EA799C7EE9",
                  "Module": "Investment Management",
                  "Target": " undefined",
                  "Action": "updated",
                  "Description": "investment",
                  "CreatedAt": "2022-02-18T12:56:21.999Z",
                  "UpdatedAt": "2022-02-18T12:56:21.999Z"
              },
              {
                  "id": "C3E07E84-2BFA-4A70-BD16-9087BB8268A5",
                  "Initiator": " ",
                  "UserId": "5CE99E1F-85C1-4D04-B2EE-E931BC6E4648",
                  "Module": "Investment Management",
                  "Target": " Flexxx t",
                  "Action": "added  ",
                  "Description": "investment",
                  "CreatedAt": "2022-02-18T11:25:01.220Z",
                  "UpdatedAt": "2022-02-18T11:25:01.220Z"
              },
              {
                  "id": "B4ECD914-8AE0-4F64-83D3-98D6BF3268BF",
                  "Initiator": "David Daso",
                  "UserId": "5CE99E1F-85C1-4D04-B2EE-E931BC6E4648",
                  "Module": "Investment Management",
                  "Target": " undefined",
                  "Action": "updated",
                  "Description": "investment",
                  "CreatedAt": "2022-02-18T14:09:30.901Z",
                  "UpdatedAt": "2022-02-18T14:09:30.901Z"
              },
              {
                  "id": "CC05072B-4DD6-4114-A2F1-9F923D6D2784",
                  "Initiator": "David Daso",
                  "UserId": "5CE99E1F-85C1-4D04-B2EE-E931BC6E4648",
                  "Module": "Investment Management",
                  "Target": " undefined",
                  "Action": "updated",
                  "Description": "investment",
                  "CreatedAt": "2022-02-18T13:51:42.641Z",
                  "UpdatedAt": "2022-02-18T13:51:42.641Z"
              },
              {
                  "id": "B1CC6270-9251-46AC-836B-AE43C2FE6C7B",
                  "Initiator": "David Daso",
                  "UserId": "5CE99E1F-85C1-4D04-B2EE-E931BC6E4648",
                  "Module": "Investment Management",
                  "Target": " undefined",
                  "Action": "updated",
                  "Description": "investment",
                  "CreatedAt": "2022-02-18T14:08:28.537Z",
                  "UpdatedAt": "2022-02-18T14:08:28.538Z"
              },
              {
                  "id": "410A93FB-61B7-4E9F-935C-BEB853DFBCD7",
                  "Initiator": "Cleave Owhiroro",
                  "UserId": "6064B57A-A6AD-4DEB-AD3F-20EA799C7EE9",
                  "Module": "Investment Management",
                  "Target": " undefined",
                  "Action": "updated",
                  "Description": "investment",
                  "CreatedAt": "2022-02-18T12:53:08.800Z",
                  "UpdatedAt": "2022-02-18T12:53:08.800Z"
              },
              {
                  "id": "045DFB98-5BA4-4D92-9581-C0CB9808AF59",
                  "Initiator": "David Daso",
                  "UserId": "5CE99E1F-85C1-4D04-B2EE-E931BC6E4648",
                  "Module": "Investment Management",
                  "Target": " undefined",
                  "Action": "updated",
                  "Description": "investment",
                  "CreatedAt": "2022-02-18T15:01:34.115Z",
                  "UpdatedAt": "2022-02-18T15:01:34.115Z"
              },
              {
                  "id": "E07C5C86-1270-450D-AC9D-C910CFBF1B0B",
                  "Initiator": "Adebayo Daramola",
                  "UserId": "D7E19BE9-4C6B-4138-9D93-A82845F987A1",
                  "Module": "Investment Management",
                  "Target": " Treasury Bills 4",
                  "Action": "updated",
                  "Description": "investment",
                  "CreatedAt": "2022-02-18T15:30:24.914Z",
                  "UpdatedAt": "2022-02-18T15:30:24.914Z"
              }
          ]
      }
  }
}