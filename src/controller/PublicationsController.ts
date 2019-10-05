import { inject } from "inversify";
import {
  BaseHttpController,
  controller,
  httpGet,
  requestParam,
} from "inversify-express-utils";
import { Publication } from "../model/Publication";
import { GoogleNewsService } from "../service/GoogleNewsService";
import TYPES from "../types";

@controller("/publications")
export class PublicationsController extends BaseHttpController {
  private googleNewsService: GoogleNewsService;

  public constructor(
    @inject(TYPES.GoogleNewsService) googleNewsService: GoogleNewsService
  ) {
    super();
    this.googleNewsService = googleNewsService;
  }

  @httpGet("/:id/headlines")
  public async getHeadlines(
    @requestParam("id") id: string
  ): Promise<Publication> {
    return await this.googleNewsService.getHeadlinesByPublicationId(id);
  }
}
