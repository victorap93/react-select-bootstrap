import React from 'react';

import ReactSelect, { mergeStyles } from "react-select";
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';

export type ReactSelectBootstrapProps = StateManagerProps
  & {
    isInvalid?: boolean
  }

export const ReactSelectBootstrap = ({ isInvalid = false, ...props }: ReactSelectBootstrapProps) => {

  return <ReactSelect {...props}
    styles={
      mergeStyles(
        {
          control: (styles: any) => ({
            ...styles,
            borderRadius: "var(--bs-border-radius)",
            ...(
              !isInvalid
                ? {
                  borderColor: "#ced4da",
                  '&:hover': {
                    border: "1px solid #ced4da"
                  },
                  '&:focus-within': {
                    boxShadow: "0 0 0 0.25rem rgba(13, 110, 253, 0.25)",
                    borderColor: "#86b7fe"
                  }
                }
                : {
                  borderColor: "var(--bs-red)",
                  '&:hover': {
                    border: "1px solid var(--bs-red)"
                  },
                  '&:focus-within': {
                    boxShadow: "0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25)",
                    borderColor: "var(--bs-red)"
                  }
                }
            )
          }),
          indicatorsContainer: (styles: any) => ({
            ...styles,
            '& > div': {
              color: "#343a40",
            },
            '& > div:hover': {
              color: "#343a40"
            }
          })
        },
        props.styles
      )
    }
  />
}