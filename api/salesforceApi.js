// salesforceApi.js
import axios from 'axios';

const instanceUrl = 'https://pachnandap-dev-ed.my.salesforce.com'; // from Postman
const accessToken = '00D10000000p9sc!AR8AQMU1..oOvOSBK.kCpMaIEpCIRoL8bIwd3.ne88l6E8pGwYApFDrcwKi3MumkuoL4K13xiT8hwQLuKYRbg.dsOd2NeNrv'; // your token from Postman

const salesforceApi = axios.create({
  baseURL: `${instanceUrl}/services/data/v60.0/`,
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  },
});

export default salesforceApi;
