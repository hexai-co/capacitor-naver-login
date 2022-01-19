export interface NaverLoginPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
