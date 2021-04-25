import React from 'react';
import { useTranslation } from 'react-i18next';

interface I18nTextInterface {
  i18nKey: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const I18nText = ({ i18nKey }: I18nTextInterface) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  return <div>{t(`${i18nKey}`)}</div>;
};
