import "reflect-metadata";

import { GoogleNewsService } from "../../src/service/GoogleNewsService";

describe("GoogleNewsService", (): void => {
  let googleNewsService: GoogleNewsService;

  beforeEach((): void => {
    googleNewsService = new GoogleNewsService();
  });

  describe("getHeadlinesByPublicationId", (): void => {
    test("should return headlines from a valid publication", async (): Promise<
      void
    > => {
      const bloombergId = "CAAqBwgKMOLs8Aowhd27Ag";
      const publication = await googleNewsService.getHeadlinesByPublicationId(
        bloombergId
      );
      expect(publication.publication).toBe(bloombergId);
      expect(publication.headlines.length).toBeLessThanOrEqual(10);
    });

    test("should return empty headlines from an invalid publication", async (): Promise<
      void
    > => {
      const invalidId = "invalid";
      const publication = await googleNewsService.getHeadlinesByPublicationId(
        invalidId
      );
      expect(publication.publication).toBe(invalidId);
      expect(publication.headlines).toHaveLength(0);
    });
  });
});
