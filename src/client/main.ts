/**
 * 你好，世界 (hello world)
 */

import {
  establishConnection,
  establishPayer,
  checkProgram,
  sayNiHao,
  reportGreetings,
} from './hello_world';

async function main() {
  console.log("Let's say 你好 to a Safecoin account...");

  // Establish connection to the cluster
  await establishConnection();

  // Determine who pays for the fees
  await establishPayer();

  // Check if the program has been deployed
  await checkProgram();

  // Say hello to an account
  await sayNiHao();

  // Find out how many times that account has been greeted
  await reportGreetings();

  console.log('Success');
}

main().then(
  () => process.exit(),
  err => {
    console.error(err);
    process.exit(-1);
  },
);
