export interface Patent {
  /**
   * Unique identifier for the patent record
   */
  id: string;
  /**
   * Title of the patent
   */
  title: string;
  /**
   * Current status of the patent (e.g. "pending", "granted")
   */
  status: string;
  /**
   * Year the patent was filed or granted
   */
  year: number;
  /**
   * Description of the patented work
   */
  description: string;
  /**
   * Optional list of inventors on the patent
   */
  inventors?: string[];
}
