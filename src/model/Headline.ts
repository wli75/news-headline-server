export interface Headline {
  headline: string;
  timestamp: string; // Must be string, not Date, as puppeteer doesn't serialize Date properly (https://github.com/GoogleChrome/puppeteer/issues/376)
}
