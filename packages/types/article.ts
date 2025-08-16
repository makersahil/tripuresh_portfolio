export interface Article {
  /**
   * Unique identifier for the article record
   */
  id: string;
  /**
   * Title of the journal article
   */
  title: string;
  /**
   * Name of the journal where the article was published
   */
  journal: string;
  /**
   * Publication year of the article
   */
  year: number;
  /**
   * List of authors for the article
   */
  authors: string[];
  /**
   * External link to the article or DOI
   */
  link: string;
  /**
   * Optional abstract or description for the article
   */
  description?: string;
}
