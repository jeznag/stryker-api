import TestResult from './TestResult';
import RunStatus from './RunStatus';
import { CoverageCollection, CoverageCollectionPerTest } from './Coverage';

/**
 * Represents the result of a testrun.
 */
interface RunResult {
  /**
   * The individual test results.
   */
  tests: TestResult[];

  /**
   * If `state` is `error`, this collection should contain the error messages
   */
  errorMessages?: string[];

  /**
   * The status of the run
   */
  status: RunStatus;

  /**
   * Optional: the code coverage result of the run.
   */
  coverage?: CoverageCollection | CoverageCollectionPerTest;
}

export default RunResult;