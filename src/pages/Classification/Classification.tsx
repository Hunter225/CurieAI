import React from 'react';
import { DownloadButton } from '../../components/DownloadButton';
import { UploadAndTrain } from './UploadAndTrain';
import { useTranslation } from 'react-i18next';

import styled from 'styled-components';

const ClassificationPageWrapper = styled.div`
  height: 100%;
  width: 100%;
  font-size: 20px;
  background-color: #282c34;
  color: white;
`;
const ItemsWrapper = styled.div`
  margin: 100px 50px 0 50px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  display: flex;
  font-size: 30px;
  justify-content: center;
  margin-bottom: 20px;
  text-decoration: underline;
`;
const TextWrapper = styled.div`
  display: flex;
  text-align: left;
  justify-content: center;
  margin: 0 20px 20px 20px;
  font-size: 20px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 0 0 20px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin: 20px 20px 20px 20px;
`;

export const Classification = () => {
  const { t, i18n } = useTranslation();

  return (
    <ClassificationPageWrapper>
      <ItemsWrapper>
        <Title>{t('classification.title')}</Title>
        <TextWrapper>{t('classification.intro')}</TextWrapper>
        <TextWrapper>{t('classification.hints')}</TextWrapper>

        <ButtonsWrapper>
          <ButtonWrapper>
            <DownloadButton
              i18nKey='general.download-template'
              filePath='/templates/classification/training_data_template.csv'
              fileName='training_data_template.csv'
            ></DownloadButton>
          </ButtonWrapper>
          <ButtonWrapper>
            <UploadAndTrain />
          </ButtonWrapper>
        </ButtonsWrapper>
      </ItemsWrapper>
    </ClassificationPageWrapper>
  );
};
