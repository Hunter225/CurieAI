import React from 'react';
import { FadeInText } from '../../components/FadeInText';
import { EmptyRow } from '../../components/EmptyRow';
import { FadeInPageLink } from '../../components/FadeInPageLink';
import './Root.css';
import { DelayRender } from '../../utils/delayRenderer';
import { Grid } from '@material-ui/core';
import { Classification } from '../Classification/Classification';
import { Clustering } from '../Clustering/Clustering';
import { Regression } from '../Regression/Regression';
import { DimenReduc } from '../DimenReduc/DimenReduc';
import { Switch, Route } from 'react-router-dom';

const _Root = () => {
  return (
    <div className='Root'>
      <Grid id='top-row' container spacing={5}>
        <Grid item xs={12}>
          <FadeInText
            i18nKey='intro.part1'
            canFadeIn={true}
            transitionTime={3000}
          ></FadeInText>
        </Grid>
      </Grid>

      <EmptyRow marginFix={0} marginReponsive={5}></EmptyRow>

      <Grid id='second-row' container spacing={5}>
        <Grid item xs={12}>
          <DelayRender
            children={
              <FadeInText
                i18nKey='intro.part2'
                canFadeIn={true}
                transitionTime={2000}
              ></FadeInText>
            }
            delayTime={2000}
          ></DelayRender>
        </Grid>
      </Grid>

      <EmptyRow marginFix={0} marginReponsive={5}></EmptyRow>

      <Grid id='third-row' container spacing={5}>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
          <DelayRender
            children={
              <FadeInPageLink
                i18nKey='mission.classification'
                canFadeIn={true}
                path='/classification'
                hook={<Classification></Classification>}
                transitionTime={3000}
              ></FadeInPageLink>
            }
            delayTime={3500}
          ></DelayRender>
        </Grid>
        <Grid item xs={3}>
          <DelayRender
            children={
              <FadeInPageLink
                i18nKey='mission.clustering'
                canFadeIn={true}
                path='/clustering'
                hook={<Clustering />}
                transitionTime={3000}
              ></FadeInPageLink>
            }
            delayTime={5000}
          ></DelayRender>
        </Grid>
      </Grid>
      <Grid item xs={3}></Grid>

      <EmptyRow marginFix={0} marginReponsive={5}></EmptyRow>

      {/* <Grid id='fourth-row' container spacing={5}>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
          <DelayRender
            children={
              <FadeInPageLink
                i18nKey='mission.regression'
                canFadeIn={true}
                path='/regression'
                hook={Regression}
                transitionTime={3000}
              ></FadeInPageLink>
            }
            delayTime={6500}
          ></DelayRender>
        </Grid>
        <Grid item xs={3}>
          <DelayRender
            children={
              <FadeInPageLink
                i18nKey='mission.dimensionality-reduciton'
                canFadeIn={true}
                path='/dimen-reduc'
                hook={DimenReduc}
                transitionTime={3000}
              ></FadeInPageLink>
            }
            delayTime={8000}
          ></DelayRender>
        </Grid>
      </Grid> */}
      <Grid item xs={3}></Grid>
    </div>
  );
};

export const Root = () => {
  return (
    <Switch>
      <Route exact path='/' component={_Root} />
      <Route path='/classification' component={Classification} />
      <Route path='/clustering' component={Clustering} />
      <Route path='/regression' component={Regression} />
      <Route path='/dimen-reduc' component={DimenReduc} />
    </Switch>
  );
};
