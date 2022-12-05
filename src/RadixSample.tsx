/** @jsxImportSource @emotion/react */
import * as Popover from '@radix-ui/react-popover';
import { css, Global } from '@emotion/react';

import {
  blackA,
  mauve,
  violet,
  purple,
  indigo,
} from '@radix-ui/colors';

const RadixSample: React.FC = () => {
  return (
    <div css={backgroundCss}>
      <Popover.Root>
        <Popover.Trigger css={popoverTriggerCss} >More info</Popover.Trigger>
        <Popover.Portal>
          <Popover.Content css={popoverContentCss} >
            Some more info…
            <Popover.Arrow css={popoverArrowCss} />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}

const backgroundCss = css`
  background-image: linear-gradient(330deg, ${purple.purple9} 0%, ${indigo.indigo9} 100%);
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 150px;
  padding-bottom: 150px;
`;

const popoverTriggerCss = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
  height: 35px;
  background-color: white;
  color: ${violet.violet11};
  box-shadow: 0 2px 10px ${blackA.blackA7};
  &:hover {
    background-color: ${mauve.mauve3};
  }
  &:focus {
    box-shadow: 0 0 0 2px black;
  }
`;

const popoverContentCss = css`
  border-radius: 4px;
  padding: 20px;
  width: 260px;
  font-size: 15px;
  line-height: 1;
  color: ${violet.violet11};
  background-color: white;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  &:focus {
    outline: none;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px,
      0 0 0 2px ${violet.violet7};
  }
`;

const popoverArrowCss = css`
  fill: white;
`

export default RadixSample;
