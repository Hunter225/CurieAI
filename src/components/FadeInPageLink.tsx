import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from '@material-ui/core';
import { useTranslation, withTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';

interface FadeInPageLinkInterface {
  canFadeIn: boolean;
  i18nKey: string;
  path: string;
  hook: any;
  transitionTime: number;
}

const useStyles = makeStyles({
  card: {
    backgroundColor: '#34383f',
    color: 'white',
    padding: '10px, 10px, 10px, 10px'
  },
  cardContent: {
    backgroundColor: '#34383f',
    color: 'white',
    textAlign: 'center'
  },
  link: {
    backgroundColor: '#34383f',
    color: 'white',
    textTransform: 'none',
    textDecoration: 'none',
    fontSize: '16px'
  }
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _FadeInPageLink = ({
  canFadeIn,
  i18nKey,
  path,
  hook,
  transitionTime
}: FadeInPageLinkInterface) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  return (
    <Fade in={canFadeIn} timeout={transitionTime}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Link className={classes.link} to={path}>
            {t(`${i18nKey}`)}
          </Link>
        </CardContent>
      </Card>
    </Fade>
  );
};

export const FadeInPageLink = withTranslation()(_FadeInPageLink);
