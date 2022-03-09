/// <reference types="@wix/sled-test-runner" />
import { CommonViewerDriver } from '../CommonViewerDriver';
import componentConfig from '../../../src/components/ChenOoiWidget/.component.json';

const { id: widgetId } = componentConfig;

export class ViewerE2EDriver extends CommonViewerDriver {
  name: string = 'ChenOoiWidget';
  widgetId: string = widgetId;

  async getAppTitle() {
    return this.page.$eval('h2', (e: HTMLElement) => e.innerText);
  }
}
