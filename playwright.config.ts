import {PlaywrightTestConfig} from '@playwright/test';
import { devices as replayDevices } from "@replayio/playwright";

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: "replay-chromium",
      use: { ...replayDevices["Replay Chromium"] as any },
    },
  ],
  use: {
    launchOptions: {
      ignoreDefaultArgs: ['--hide-scrollbars'],
    },
  },
  webServer: {
    command: 'npm -w packages/dom run dev',
    port: 1234,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
};

export default config;
