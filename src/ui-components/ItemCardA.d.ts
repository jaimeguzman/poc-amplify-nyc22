/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Product } from "../models";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type ItemCardAProps = React.PropsWithChildren<Partial<FlexProps> & {
    product?: Product;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function ItemCardA(props: ItemCardAProps): React.ReactElement;
