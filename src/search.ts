import ResyService from "./controllers/ResyService";
import 'dotenv/config'

const run = async () => {
  const service = new ResyService({
    email: process.env.RESY_EMAIL!,
    password: process.env.RESY_PASSWORD!,
  });
  const loginResp = await service.generateHeadersAndLogin();
  const data = loginResp.data;
  console.log(loginResp);
  const searchResults = await service.searchByName({
    query: 'Eavesdrop'
    , geo: {
      latitude: 40.7128,
      longitude: -74.0060
    }
  });
  console.log(searchResults.data.search.hits);
};

run();
