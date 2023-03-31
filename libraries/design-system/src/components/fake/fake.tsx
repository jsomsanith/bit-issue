import React, { ReactNode } from 'react';

export type FakeProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Fake({ children }: FakeProps) {
  return (
    <div>
      {children}
    </div>
  );
}
