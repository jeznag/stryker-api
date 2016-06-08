/**
 * Represents a TestSelector which can select one or more tests to be executed.
 */
interface TestSelector {

  /**
   * Creates a script which will be responsible for selecting tests with given ids.
   * The first test gets id 0, the second id 1, etc.
   * @param indices A list of testID's to select.
   * @returns A script which, if included in the test run, will select the correct test.
   */
  select(ids: number[]): string;
}

export default TestSelector;