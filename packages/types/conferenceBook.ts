export interface ConferenceBook {
  /**
   * Unique identifier for the conference or book record
   */
  id: string;
  /**
   * Title of the conference presentation or book
   */
  title: string;
  /**
   * Type of record, either "conference" or "book"
   */
  type: 'conference' | 'book';
  /**
   * Short description or abstract for the item
   */
  description: string;
  /**
   * Year of the event or publication
   */
  year: number;
  /**
   * List of authors or presenters associated with the item
   */
  authors: string[];
  /**
   * Optional link to further information (e.g. proceedings, publisher page)
   */
  link?: string;
}
