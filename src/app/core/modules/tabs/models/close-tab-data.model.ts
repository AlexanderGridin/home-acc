import { Tab } from './tab.model';

export interface CloseTabData {
  closedTab: Tab;
  nextActiveTab: Tab | null;
}
