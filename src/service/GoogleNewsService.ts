import { injectable } from "inversify";
import { launch } from "puppeteer";
import { Headline } from "../model/Headline";
import { compareDate } from "../util/dateUtils";
import logger from "../util/logger";
import he = require("he");
import { Publication } from "../model/Publication";

@injectable()
export class GoogleNewsService {
  private NUM_OF_HEADLINES = 10;
  private PUBLICATION_ID_PLACEHOLDER = "PUBLICATION_ID_PLACEHOLDER";
  private PUBLICATION_URL =
    "https://news.google.com/publications/PUBLICATION_ID_PLACEHOLDER";

  public async getHeadlinesByPublicationId(id: string): Promise<Publication> {
    logger.info(`[Try] Retrieve headlines by publication [${id}]`);
    const browser = await launch({ args: ["--no-sandbox"] }); // Must add no-sandbox for glitch to work;
    const page = await browser.newPage();
    await page.goto(
      this.PUBLICATION_URL.replace(this.PUBLICATION_ID_PLACEHOLDER, id)
    );

    const articles = await page.evaluate((): Headline[] => {
      const newsElements = document.querySelectorAll("body main article");
      const headlines: Headline[] = [];

      newsElements.forEach((newsElement: Element): void => {
        const headlineElement = newsElement.querySelector("h3 a");
        const timestampElement = newsElement.querySelector("time");

        if (headlineElement && timestampElement) {
          const headline = headlineElement.innerHTML;
          const timestamp = timestampElement.getAttribute("datetime");
          if (timestamp) {
            const article = {
              headline: headline,
              timestamp: timestamp,
            };
            headlines.push(article);
          }
        }
      });

      return headlines;
    });

    logger.info(
      `[Success] Retrieved ${articles.length} headlines by publication [${id}]`
    );
    browser.close();
    return {
      publication: id,
      headlines: this.enrichHeadlines(articles, this.NUM_OF_HEADLINES),
    };
  }

  private enrichHeadlines(headlines: Headline[], count: number): Headline[] {
    return this.decodeHeadlines(this.filterLatestHeadlines(headlines, count));
  }

  private filterLatestHeadlines(
    headlines: Headline[],
    count: number
  ): Headline[] {
    return headlines.sort(this.compareNewsArticle).slice(0, count);
  }

  private compareNewsArticle(a: Headline, b: Headline): number {
    const aTimestamp = new Date(a.timestamp);
    const bTimestamp = new Date(b.timestamp);
    return compareDate(aTimestamp, bTimestamp);
  }

  private decodeHeadlines(headlines: Headline[]): Headline[] {
    return headlines.map(
      (headline: Headline): Headline => {
        return {
          headline: he.decode(headline.headline),
          timestamp: headline.timestamp,
        };
      }
    );
  }
}
