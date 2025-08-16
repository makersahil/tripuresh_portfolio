export interface Grant {
  /**
   * Unique identifier for the grant record
   */
  id: string;
  /**
   * Title of the grant
   */
  title: string;
  /**
   * Detailed description of the grant
   */
  description: string;
  /**
   * Monetary amount awarded for the grant
   */
  amount: number;
  /**
   * Year the grant was awarded
   */
  year: number;
  /**
   * Current status of the grant (e.g. "active", "completed")
   */
  status: string;
  /**
   * ISO timestamp when the record was created
   */
  createdAt?: string;
  /**
   * ISO timestamp when the record was last updated
   */
  updatedAt?: string;
}
