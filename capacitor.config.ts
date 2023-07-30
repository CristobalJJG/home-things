import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'home.thing',
  appName: 'home-thing',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
