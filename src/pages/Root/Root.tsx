import React from 'react';
import { FadeInText } from '../../components/FadeInText';
import { FadeInPageLink } from '../../components/FadeInPageLink';
import { DelayRender } from '../../utils/delayRenderer';
import { Classification } from '../Classification/Classification';
import { Clustering } from '../Clustering/Clustering';
import { Regression } from '../Regression/Regression';
import { DimenReduc } from '../DimenReduc/DimenReduc';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const RootPageWrapper = styled.div`
  height: 100%;
  width: 100%;
  font-size: 20px;
  background-color: #282c34;
  color: white;
`;

const ItemsWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;

const FadeInTextWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 0 0 20px 0;
`;

const PageLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 0 0 20px 0;
`;

const PageLinkWrapper = styled.div`
  display: flex;
  margin: 20px 20px 20px 20px;
`;

const _Root = () => {
  return (
    <RootPageWrapper>
      <ItemsWrapper>
        <FadeInTextWrapper>
          <FadeInText
            i18nKey='intro.part1'
            canFadeIn={true}
            transitionTime={3000}
          ></FadeInText>
        </FadeInTextWrapper>
        <FadeInTextWrapper>
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
        </FadeInTextWrapper>
        <PageLinksWrapper>
          <PageLinkWrapper>
            {' '}
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
          </PageLinkWrapper>
          <PageLinkWrapper>
            {' '}
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
          </PageLinkWrapper>
        </PageLinksWrapper>
      </ItemsWrapper>

      {/*
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
      <Grid item xs={3}></Grid> */}

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
    </RootPageWrapper>
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
