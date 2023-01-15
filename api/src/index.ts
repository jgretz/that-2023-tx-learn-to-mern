// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import getActivities from './services/getActivities';

async function main() {
  const activites = await getActivities();
  console.log(activites);
}

main();
