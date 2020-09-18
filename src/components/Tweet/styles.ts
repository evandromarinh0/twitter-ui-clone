import styled, { css } from 'styled-components';

import { Chat, Retweet, Favorite } from '../../styles/Icons';


export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;
  border-bottom: 1px solid var(--outline);
  max-width: 100%;
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;
  
  font-size: 13px;
  color: var(--gray);
`;
export const RetweetIcon = styled(Retweet)`
  width: 16px;
  height: 16px;
  margin-left: 35px;
  margin-right: 9px;

  > path {
    fill: var(--gray);
  }
`;

export const Body = styled.div`
  display: flex;
  margin-top: 3px;
  position: relative;
`;

export const Avatar = styled.div`
  height: 49px;
  width: 49px;
  border-radius: 50%;
  flex-shrink: 0;
  background: url('https://avatars0.githubusercontent.com/u/28929274?s=200&v=4') no-repeat;
  background-size: cover;

  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2px;
  padding-left: 59px;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  white-space: nowrap;
  > strong {
    margin-right: 5px;
  }

  > span, time {
    color: var(--gray);
  }

  > strong, span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: var(--white);
  }
`;

export const Dot = styled.div`
  width: 2px;
  height: 2px;
  background: var(--gray);
  margin: 0 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
  color: var(--white);
  text-align: initial;
`;

export const ImageContent = styled.div`
  margin-top: 12px;
  width: 100%;
  height: min(285px, max(175px, 41vw));
  background: url('https://blog.rocketseat.com.br/content/images/2019/05/Painel.png') no-repeat;
  background-size: cover;
  border-radius: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 11px auto 0;
  width: 100%;

  @media (min-width: 330px) {
    width: 65%;
  }

  > div {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;

  > svg {
    margin-right: 5px;
  }

  &:nth-child(1) {
    &, > svg path {
      color: var(--gray);
    }
  }

  &:nth-child(2) {
    color: var(--retweet);
    > svg path {
      fill: var(--retweet);
    }
  }

  &:nth-child(3) {
    color: var(--like);
    > svg {
      fill: var(--like);
    }
  }
`;

const iconCSS = css`
  width: 19px;
  height: 19px;
  font-size: 14px;
  color: var(--gray);
`;

export const CommmentIcon = styled(Chat)`${iconCSS}`;

export const RTweet = styled(Retweet)`${iconCSS}`;

export const LikeIcon = styled(Favorite)`${iconCSS}`;