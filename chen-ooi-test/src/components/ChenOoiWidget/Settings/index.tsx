import React from 'react';
import { useExperiments, useTranslation } from '@wix/yoshi-flow-editor';
import { SettingsTabLayout } from '@wix/yoshi-flow-editor/tpa-settings/react';

import { MainTab } from './Tabs/MainTab';
import { DesignTab } from './Tabs/DesignTab';

const Settings = () => {
  const { experiments } = useExperiments();
  const { t } = useTranslation();

  return (
    <SettingsTabLayout dataHook="settings-tabs">
      {experiments.enabled('specs.test.HideMainTab') ? null : (
        <SettingsTabLayout.Tab
          title={t('app.settings.tabs.main')}
          dataHook="main-tab-button"
          articleId="xxx-xxx-xxx-xxx"
          Component={() => <MainTab />}
        />
      )}
      <SettingsTabLayout.Tab
        title={t('app.settings.tabs.design')}
        dataHook="design-tab-button"
        articleId="xxx-xxx-xxx-xxx"
        Component={() => <DesignTab />}
      />
    </SettingsTabLayout>
  );
};

export default Settings;
