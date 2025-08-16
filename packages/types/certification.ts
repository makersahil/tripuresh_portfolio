export interface Certification {
  /**
   * Unique identifier for the certification record
   */
  id: string;
  /**
   * Name of the certification
   */
  title: string;
  /**
   * Institution or awarding body for the certification
   */
  institution: string;
  /**
   * Year the certification was obtained
   */
  year: number;
  /**
   * Additional description or notes about the certification
   */
  description: string;
}
