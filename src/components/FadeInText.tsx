import React from 'react';
import { Fade } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { withTranslation } from 'react-i18next';

interface FadeInTextInterface {
  canFadeIn: boolean;
  i18nKey: string;
  transitionTime: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _FadeInText = ({
  canFadeIn,
  i18nKey,
  transitionTime
}: FadeInTextInterface) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  return (
    <Fade in={canFadeIn} timeout={transitionTime}>
      <div>{t(`${i18nKey}`)}</div>
    </Fade>
  );
};

export const FadeInText = withTranslation()(_FadeInText);
