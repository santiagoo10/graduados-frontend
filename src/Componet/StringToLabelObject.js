import React from 'react';
import { cloneElement } from 'react';

const StringToLabelObject = ({
  record,
  children,
  ...rest
}) =>
  cloneElement(children, {
    record: { label: record },
    ...rest,
  });

export default StringToLabelObject;
