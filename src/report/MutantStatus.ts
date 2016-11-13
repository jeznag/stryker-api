enum MutantStatus {

  /**
   * The status of a survived mutant, because it was not covered by any test.
   */
  NoCoverage,

  /**
   * The status of a killed mutant.
   */
  Killed,

  /**
   * The status of a survived mutant.
   */
  Survived,

  /**
   * The status of a timed out mutant.
   */
  TimedOut
}

export default MutantStatus;