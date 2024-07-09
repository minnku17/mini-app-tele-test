/* eslint-disable @typescript-eslint/promise-function-async */
import dynamic from 'next/dynamic';
import React, { type FC, type ReactNode } from 'react';

interface NoSsrProps {
  children: ReactNode;
}

const NoSsr: FC<NoSsrProps> = (props) => <React.Fragment>{props.children}</React.Fragment>;

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
});
