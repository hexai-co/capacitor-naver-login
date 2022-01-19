import { WebPlugin } from '@capacitor/core';

import type { NaverLoginPlugin } from './definitions';

export class NaverLoginWeb extends WebPlugin implements NaverLoginPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
